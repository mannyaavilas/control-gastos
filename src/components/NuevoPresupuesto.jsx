import { children, useState } from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {

  const [ mensaje, setMesaje ] = useState('');

  const handlePresupuesto = (e) => {
      e.preventDefault();

      if(!Number(presupuesto) || Number(presupuesto) < 0){
        setMesaje('No es un número válido');
      }else{
        console.log('si es');
      }
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label>Definir Presupuesto</label>

                <input
                    className='nuevo-presupuesto'
                    type='text'
                    placeholder='Añade tu Presupuesto'
                    value={presupuesto}
                    onChange={ e => setPresupuesto(e.target.value) }
                 />
            </div>

            <input type="submit" value="Añadir" />

            {mensaje && <Mensaje tipo="error">{children}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto
