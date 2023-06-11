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

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>

          <input 
            id='nombre'
            type="text"
            placeholder='Añade el nombre del gasto'
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>

          <input 
            id='cantidad'
            type="number"
            placeholder='Añade la cantidad del gasto: ej. 100'
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>

          <select id="categoria">
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <input 
          type="submit" 
          value="Añadir Gasto"
        />
      </form>
    </div>
  )
}

export default Modal
