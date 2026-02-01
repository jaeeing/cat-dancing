import DancingCat from './DancingCat';
import AnimationControls from './AnimationControls';

export default function Layout({ isPlaying, currentMode, togglePlay, changeMode, DANCE_MODES }) {
  return (
    <div className="layout">
      <h1 className="title">🐱 고양이 댄스</h1>
      <DancingCat isPlaying={isPlaying} currentMode={currentMode} />
      <AnimationControls
        isPlaying={isPlaying}
        currentMode={currentMode}
        togglePlay={togglePlay}
        changeMode={changeMode}
        DANCE_MODES={DANCE_MODES}
      />
    </div>
  );
}
