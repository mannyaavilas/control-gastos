import BtnCerrar from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal}) => {

  const ocultarModal = () => {
    
    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 150);
  }

  return (
    <div className='modal'>
      <div className="cerrar-modal">
        <img 
            src={BtnCerrar} 
            alt="cerrar modal"
            onClick={ocultarModal}
        />
      </div>

      <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend>Nuevo Gasto</legend>
      </form>
    </div>
  )
}

export default Modal
