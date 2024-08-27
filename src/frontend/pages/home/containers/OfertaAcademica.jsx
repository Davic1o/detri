import React, { useState, useEffect } from 'react';
import './css/OfertaAcademica.css';
import Oferta from '../components/Oferta';
import Pregrado from '../../../data/OfertaAcademica';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const OfertaItem = ({ item, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Permitir que se active más de una vez
    threshold: 0.5, // Umbral de visibilidad
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setVisible(true);
      }, index * 300); // Delay de 300ms entre cada item
    } else {
      setVisible(false);
    }
  }, [inView, index]);

  return (
    <Link to={`/${item.Link}`}>
      <div ref={ref} className={`oferta__OfertaAcademica ${visible ? 'verOfertas__OfertaAcademica' : ''}`}>
        <Oferta Texto={item.Texto} Nombre={item.Nombre} Imagen={item.Imagen} />
      </div>
    </Link>
  );
};

function OfertaAcademica() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Permitir que se active más de una vez
    threshold: 0.5, // Umbral de visibilidad
  });
  return (
    <div className={`contenedor__OfertaAcademica ${inView ? 'verContenedor__OfertaAcademica': ''}`} ref={ref}>
      <h3>Departamento de Electrónica y Redes de Información</h3>
      <div className="ofertas__OfertaAcademica">
        {Pregrado.map((item, index) => (
          <OfertaItem item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}

export default OfertaAcademica;
