import { parse as parseFeed } from 'rss-to-json'
import { array, number, object, parse, string, union } from 'valibot'

export interface Episode {
  title: string
  published: Date
  description: string
  content: string
  audio: {
    src: string
    type: string
  }
}

export async function getAllEpisodes() {
  let FeedSchema = object({
    items: array(
      object({
        title: string(),
        published: number(),
        description: string(),
        enclosures: array(
          object({
            url: string(),
            type: string(),
          }),
        ),
      }),
    ),
  })

  let feed = (await parseFeed(
    'https://anchor.fm/s/102898a0c/podcast/rss',
  )) as unknown
  let items = parse(FeedSchema, feed).items

  let episodes: Array<Episode> = items.map(
    ({ title, description, content, enclosures, published }) => ({
      title: `${title}`,
      published: new Date(published),
      description,
      content,
      audio: enclosures.map((enclosure) => ({
        src: enclosure.url,
        type: enclosure.type,
      }))[0],
    }),
  )

  return episodes
}
