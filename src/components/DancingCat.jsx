import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

export default function DancingCat({ isPlaying, currentMode }) {
  const modeClassMap = {
    dancing: 'cat-dancing',
    spinning: 'cat-spinning',
    bouncing: 'cat-bouncing',
    shaking: 'cat-shaking',
    pulsing: 'cat-pulsing',
  };

  const animClass = modeClassMap[currentMode] || 'cat-dancing';
  const pauseClass = isPlaying ? '' : ' cat-paused';

  return (
    <div className="dancing-cat-wrapper">
      <img
        src={catSvg}
        alt="Dancing Cat"
        className={`dancing-cat ${animClass}${pauseClass}`}
      />
    </div>
  );
}
