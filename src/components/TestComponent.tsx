import React from 'react';
import { type Episode } from '@/lib/episodes';

export function TestComponent({ episode }: { episode: Episode }) {
  return (
    <div className="p-4 bg-slate-100 my-2 rounded">
      <h3 className="font-bold">TEST OUTPUT:</h3>
      <ul className="list-disc pl-5 mt-2">
        <li>Episode ID: {episode.id}</li>
        <li>Episode Title: {episode.title}</li>
        <li>Episode Number (Raw): {JSON.stringify(episode.episodeNumber)}</li>
        <li>Season Number (Raw): {JSON.stringify(episode.seasonNumber)}</li>
        <li>Episode Type (Raw): {JSON.stringify(episode.episodeType)}</li>
        <li>Duration (Raw): {JSON.stringify(episode.duration)}</li>
      </ul>
    </div>
  );
}