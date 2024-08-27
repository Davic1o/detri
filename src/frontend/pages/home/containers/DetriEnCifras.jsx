import React from 'react'
import DatosDetri from '../../../data/DatosDetri'
import './css/DetriEnCifras.css'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function DetriEnCifras() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Solo activar una vez cuando el elemento se hace visible
    threshold: 0.1, // Umbral de visibilidad, ajusta según sea necesario
  });
  return (
    <div className="contenedor__DetriEnCifras">
      <div className="tituloOverlay__DetriEnCifras">
        Detri en Cifras
      </div>
      <div className="accesos__DetriEnCifras">
        {DatosDetri.map((item)=>(
        <div className="acceso__DetriEnCifras" key={item.id}>
          <div className="icono__DetriEnCifras">
          {item.Icono}
          </div>
          <div className="cantidad__DetriEnCifras"  ref={ref} >
          {inView && <CountUp end={item.Cantidad} duration={2} />}
          </div>
          <div className="nombre__DetriEnCifras">
          {item.Nombre}
          </div>
        </div>

        ))}
      </div>
    </div>
  )
}

export default DetriEnCifras