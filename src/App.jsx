import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  const [ gastos, setGastos ] = useState([]);

  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ isValidPresupuesto, setIsValidPresupuesto ] = useState(false);

  const [ modal, setModal ] = useState(false);
  const [ animarModal, setAnimarModal ] = useState(false);

  const [ gastoEditar, setGastoEditar ] = useState({});

  useEffect(() => {
    if ( Object.keys(gastoEditar).length > 0 ) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true)
      }, 150);
    }
  }, [ gastoEditar ])

  const handleNuevoGasto = () => {
    setModal(true);

    setGastoEditar({})

    setTimeout(() => {
      setAnimarModal(true)
    }, 150);
  }

  const guardarGasto = gasto => {
    if (gasto.id) {
      const gastosActuaizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActuaizados);
    }else{
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])
    }


    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 150);
  }

  const eliminarGasto = id => {
    const gastosActuaizados = gastos.filter( gasto => gasto.id !== id )

    setGastos(gastosActuaizados);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
       />

       {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos
                gastos={gastos}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
             />
          </main>
          <div className="nuevo-gasto">
            <img 
              src={IconoNuevoGasto}
              alt="icono nuevo gasto" 
              onClick={handleNuevoGasto}
            />
          </div>
          </>
       )}

       {modal && <Modal
                    setModal={setModal}
                    animarModal={animarModal}
                    setAnimarModal={setAnimarModal}
                    guardarGasto={guardarGasto}
                    gastoEditar={gastoEditar}
                  />}
    </div>
  )
}

export default App
