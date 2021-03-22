import { Fragment, useState } from 'react';
import './App.css';
import Formulario from './componentes/Formulario';
import Header from './componentes/Header'
import Mensaje from './componentes/Mensaje'
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner'

function App() {
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('')
  const [total,guardarTotal] = useState(0)
  const [spinner, estadoSpinner] = useState(false);
  return (
    <Fragment>
      <Header
        titulo = 'Cotizador de prestamos'
      />
      <div className="container">
        <Formulario
          cantidad = {cantidad}
          guardarCantidad = {guardarCantidad}
          plazo = {plazo}
          guardarPlazo = {guardarPlazo}
          total = {total}
          guardarTotal = {guardarTotal}
          estadoSpinner = {estadoSpinner}
        />

        <div className='mensajes'>
          {(spinner)? <Spinner/> : (total === 0) ? <Mensaje/> : <Resultado total = {total} cantidad = {cantidad} plazo = {plazo} />}  
        </div>            
      </div>
    </Fragment>
  );
}

export default App;
