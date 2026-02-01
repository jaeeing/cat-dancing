function handleKeyDown(e, callback) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    callback();
  }
}

export default function AnimationControls({ isPlaying, currentMode, togglePlay, changeMode, DANCE_MODES }) {
  const modeLabels = {
    dancing: '💃 댄스',
    spinning: '🔄 회전',
    bouncing: '🏀 바운스',
    shaking: '🎵 진동',
    pulsing: '💫 맥박',
  };

  return (
    <div className="controls">
      <button
        className={`btn-play ${isPlaying ? 'playing' : 'paused'}`}
        onClick={togglePlay}
        aria-label={isPlaying ? '정지' : '재생'}
      >
        {isPlaying ? '⏸ 정지' : '▶ 재생'}
      </button>

      <div className="mode-buttons">
        {DANCE_MODES.map((mode) => (
          <button
            key={mode}
            className={`btn-mode ${currentMode === mode ? 'active' : ''}`}
            onClick={() => changeMode(mode)}
          >
            {modeLabels[mode]}
          </button>
        ))}
      </div>
    </div>
  );
}
