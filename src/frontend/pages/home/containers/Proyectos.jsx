import React from 'react';
import './css/ProyectosImg.css';
import ProyectosImg from '../../../images/Proyectos.png';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

function Proyectos() {
  const { ref, inView } = useInView({ 
    triggerOnce: false, // Permitir que se active más de una vez si es necesario
    threshold: 0.1, // Umbral de visibilidad
  });
  return (
    <div className="contenedr__Proyectos">
      <div className="img__Proyectos">
        <img src={ProyectosImg} alt="" />
      </div>
      <div className="accesos__Proyectos">
      
      </div>
      <div className="informacion__Proyectos" >
          <div className={`parte1__Proyectos ${ inView ? 'verparte1__Proyectos' : ''}`}>
            <div className="texto__Proyectos">
            Proyectos
            </div>
          </div>
          <div className={`parte2__Proyectos ${ inView ? 'verparte2__Proyectos' : ''}`}>
          <div className="texto__Proyectos"  >
            de Graduacion
          </div>
          </div>
          <div className="boton__Proyectos">
            <div className="textob__Proyectos">
            <Link to={'/Proyectos'} ref={ref}>
          Nuevos proyectos
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
