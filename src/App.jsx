import Layout from './components/Layout';
import { useAnimation } from './hooks/useAnimation';
import './styles/global.css';
import './styles/animations.css';
import './App.css';

function App() {
  const { isPlaying, currentMode, togglePlay, changeMode, DANCE_MODES } = useAnimation();

  return (
    <Layout
      isPlaying={isPlaying}
      currentMode={currentMode}
      togglePlay={togglePlay}
      changeMode={changeMode}
      DANCE_MODES={DANCE_MODES}
    />
  );
}

export default App;
