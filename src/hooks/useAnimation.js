import { useState, useCallback } from 'react';

const DANCE_MODES = ['dancing', 'spinning', 'bouncing', 'shaking', 'pulsing'];

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentMode, setCurrentMode] = useState('dancing');

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const changeMode = useCallback((mode) => {
    setCurrentMode(mode);
  }, []);

  const cycleMode = useCallback(() => {
    setCurrentMode((prev) => {
      const idx = DANCE_MODES.indexOf(prev);
      return DANCE_MODES[(idx + 1) % DANCE_MODES.length];
    });
  }, []);

  return { isPlaying, currentMode, togglePlay, changeMode, cycleMode, DANCE_MODES };
}
