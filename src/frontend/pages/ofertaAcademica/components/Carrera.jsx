import React from 'react';
import './css/Carrera.css';
import { useInView } from 'react-intersection-observer';

function Carrera({ Texto, Imagen }) {
  const { ref, inView } = useInView({
    triggerOnce: false, // Permitir que se active más de una vez si es necesario
    threshold: 0.1, // Umbral de visibilidad
  });
  return (
    <div className={`contenedor__Carrera ${inView ? 'visibleContendor__Mision' : ''}`} ref={ref} >
      <div className="textoH__Carrera">
        <div className="textoinfor__Carrera">
        {Texto}

        </div>
      </div>
      <div className="imagen__Carrera">
        <img src={Imagen} alt='imagen' />
        <div className="datos__Carrera">
        </div>

      </div>
    </div>
  );
}

export default Carrera;
