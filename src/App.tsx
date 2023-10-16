import ContadorRed from "./Components/ContadorRed";
import Counter from "./Components/Counter";
import TimerPadre from "./Components/TimerPadre";
import Usuario from "./Components/Usuario";

function App() {
  return (
   <>
    <h1>React + TypeScript</h1>
    <hr/>

    <h2>useState</h2>
    <Counter />
    <Usuario />
    
    <h2>useEffect + useRef</h2>
    <hr/>

    <TimerPadre />

    <h2>useReducer</h2>
    <hr/>
    <ContadorRed />

   </>
  
  );
}

export default App;
