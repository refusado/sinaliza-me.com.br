'use client';

import { Term } from '@/lib/terms';
import {
  MediaPlayer,
  MediaPlayerInstance,
  MediaProvider,
  Poster,
} from '@vidstack/react';
import { useRef } from 'react';
import { VideoPlayerControls } from './video-player-controls';

export function VideoPlayer({ term }: { term: Term }) {
  const playerRef = useRef<MediaPlayerInstance>(null);

  const { content, video_id, starts_at, ends_at } = term;

  return (
    <>
      <MediaPlayer
        className="aspect-video max-w-2xl"
        ref={playerRef}
        title={content}
        src={`youtube/${video_id}`}
        clipStartTime={starts_at}
        clipEndTime={ends_at}
        playsInline
        muted
        loop
      >
        <MediaProvider>
          <Poster
            className="absolute inset-0 block size-full object-cover opacity-0 data-[visible]:opacity-100"
            src={`https://img.youtube.com/vi/${video_id}/sddefault.jpg`}
            alt={`Poster do vídeo fonte sinalizando "${content}"`}
          />
          <VideoPlayerControls />
        </MediaProvider>
      </MediaPlayer>
    </>
  );
}
