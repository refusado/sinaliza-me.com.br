'use client';

import {
  Play,
  Pause,
  CornersIn,
  CornersOut,
} from '@phosphor-icons/react/dist/ssr';
import {
  Controls,
  FullscreenButton,
  Gesture,
  PlayButton,
  TimeSlider,
  useMediaState,
} from '@vidstack/react';

export function VideoPlayerControls() {
  return (
    <Controls.Root className="media-controls:opacity-100 absolute inset-0 z-10 flex flex-col opacity-0">
      <GestureControls />
      <ButtonControls />
    </Controls.Root>
  );
}

function GestureControls() {
  return (
    <div className="relative w-full flex-1">
      <Gesture
        className="absolute inset-0 z-0 block size-full"
        event="pointerup"
        action="toggle:paused"
      />
      <Gesture
        className="absolute inset-0 z-0 block size-full"
        event="dblpointerup"
        action="toggle:fullscreen"
      />
    </div>
  );
}

function ButtonControls() {
  return (
    <Controls.Group className="flex items-center gap-3 bg-gradient-to-t from-black/50 to-transparent px-2 py-2">
      <PlayPause />
      <Timer />
      <Fullscreen />
    </Controls.Group>
  );
}

function PlayPause() {
  const isPaused = useMediaState('paused');

  return (
    <PlayButton className="relative cursor-pointer *:size-7">
      {isPaused ? <Play weight="fill" /> : <Pause weight="fill" />}
    </PlayButton>
  );
}

function Timer() {
  return (
    <TimeSlider.Root className="relative h-1.5 w-full outline-none ring-inset">
      <TimeSlider.Track className="size-full cursor-pointer bg-white">
        <TimeSlider.TrackFill className="h-full w-[var(--slider-fill)] bg-blue-600 duration-75" />
      </TimeSlider.Track>
    </TimeSlider.Root>
  );
}

function Fullscreen() {
  const isFn = useMediaState('fullscreen');

  return (
    <FullscreenButton className="relative cursor-pointer *:size-7">
      {isFn ? <CornersIn weight="fill" /> : <CornersOut weight="fill" />}
    </FullscreenButton>
  );
}
