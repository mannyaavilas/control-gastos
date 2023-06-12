import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import { generarId } from './helpers'
import Modal from './components/Modal';

function App() {
  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ isValidPresupuesto, setIsValidPresupuesto ] = useState(false);

  const [ modal, setModal ] = useState(false);
  const [ animarModal, setAnimarModal ] = useState(false);

  const [ gastos, setGastos ] = useState([]);


  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true)
    }, 150);
  }

  const guardarGastos = gasto => {
    gasto.id = generarId();
    setGastos([...gastos, gasto])

    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 150);
  }

  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
       />

       {isValidPresupuesto && (
          <div className="nuevo-gasto">
            <img 
              src={IconoNuevoGasto}
              alt="icono nuevo gasto" 
              onClick={handleNuevoGasto}
            />
          </div>
       )}

       {modal && <Modal
                    setModal={setModal}
                    animarModal={animarModal}
                    setAnimarModal={setAnimarModal}
                    guardarGastos={guardarGastos}
                  />}
    </>
  )
}

export default App
