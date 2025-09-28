import './App.css';
import Tema from './Tema'; // Componente usando useContext
import ContadorERef from './Focar'; // Componente usando useRef
import Memoriza from './Memoriza'; // Componente usando useMemo

function App() {
  return (
    <>
      {/* Componente que demonstra useContext */}
      <Tema />
      <p>------------------------------------------------</p>
      {/* Componente que demonstra useRef */}
      <ContadorERef />
      <p>------------------------------------------------</p>
      {/* Componente que demonstra useMemo */}
      <Memoriza />
      <p>------------------------------------------------</p>
    </>
  );
}

export default App;
