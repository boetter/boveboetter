import { parse as parseFeed } from 'rss-to-json'

export interface Episode {
  id: string
  title: string
  published: Date
  description: string
  content?: string
  audio: {
    src: string
    type: string
  }
  episodeNumber?: number
  seasonNumber?: number
  episodeType?: string
  duration?: string
}

export async function getAllEpisodes() {
  // Hent feed data 
  const feed = await parseFeed('https://anchor.fm/s/102898a0c/podcast/rss');
  
  // Konverter feed til episodes
  let episodes: Array<Episode> = feed.items.map((item: any) => ({
    id: item.guid || `episode-${Math.random()}`,
    title: item.title || '',
    published: new Date(item.published || Date.now()),
    description: item.description || '',
    content: item.content || '',
    audio: {
      src: item.enclosures?.[0]?.url || '',
      type: item.enclosures?.[0]?.type || '',
    },
    // Episodedata fra iTunes-felter
    episodeNumber: item.itunes_episode,
    seasonNumber: item.itunes_season,
    episodeType: item.itunes_episodeType,
    duration: item.itunes_duration
  }));
  
  return episodes;
}