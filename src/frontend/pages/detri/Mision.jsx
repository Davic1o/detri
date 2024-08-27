import React from 'react';
import LayoutDetri from './layout/LayoutDetri';
import './css/Mision.css';
import { useInView } from 'react-intersection-observer';

function Mision() {
  const { ref, inView } = useInView({ 
    triggerOnce: false, // Permitir que se active más de una vez si es necesario
    threshold: 0.1, // Umbral de visibilidad
  });

  return (
    <LayoutDetri>
      <div className={`contenedor__Mision`} ref={ref}>
        <div className="informacion__Mision">
          <div className={`titulo__Mision ${inView ? 'visibletitulo__Mision' : ''}`}>
            <div>MISIÓN</div>
          </div>
          <div className={`texto__Mision  ${inView ? 'visibletexto__Mision' : ''}`}>
            Cooperamos con la sociedad para mejorar la calidad de vida y promover el desarrollo sostenible y equitativo, a través de formación profesional íntegra y competente, investigación e innovación; en los campos de Ingeniería Eléctrica y Ciencias de la Computación.
          </div>
        </div>
      </div>
    </LayoutDetri>
  );
}

export default Mision;
