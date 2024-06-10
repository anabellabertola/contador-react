import './App.css';
import ImagenLogo from "./imagenes/contadorlogo.png";
import Boton from "./componentes/boton";
import Contador from './componentes/contador';
import { useState } from 'react';



function App() {

  const [numClicks, setnumCliks] = useState(0);

  const manejarClick = () => {
    setnumCliks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setnumCliks(0);
  };



  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img className='imagen-logo' src={ImagenLogo} alt="Imagen Logo" />
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks}/>
        <Boton
        texto="Click"
        esBotonClick={true}
        manejarClick={manejarClick}/>
        <Boton 
        texto="Reiniciar"
        esBotonClick={false}
        manejarClick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
