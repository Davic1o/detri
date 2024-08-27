import React, { useState } from 'react';
import { MdOutlineExpandMore } from "react-icons/md";
import './css/InforDocentes.css';

const defaultImages = {
  "Martha Cecilia Paredes": "url_de_la_imagen_para_Martha",
  "Ana Zambrano": "url_de_la_imagen_para_Ana",
  "Fabio Gonzalez": "url_de_la_imagen_para_Fabio"
};

function InforDocentes({ Nombre, Tipo, Correo, Telefono, Asignaturas }) {
  const [verProfesor, setVerProfesor] = useState(false);
  const [verAsignatura, setVerAsignatura] = useState(false);

  const abrirMenu = () => {
    setVerProfesor(!verProfesor);
  };

  const abrirAsignaturas = () => {
    setVerAsignatura(!verAsignatura);
  };

  const imagenPredeterminada = defaultImages[Nombre];

  return (
    <div className="contenedor__InforDocentes">
      <div className="nombre__InforDocentes" onClick={abrirMenu}>
        <div>
          {Nombre}
        </div>
        <div className={`icono__InforDocentes ${verProfesor ? 'rotate' : ''}`}>
          <MdOutlineExpandMore />
        </div>
      </div>

      <div className={`contenido__InforDocentes ${verProfesor ? 'expand' : ''}`}>
        <div className="imagen__InforDocentes">
          <img className="foto__InforDocentes" src={imagenPredeterminada} alt={`Foto de ${Nombre}`} />
        </div>
        <p className="detalle__InforDocentes"><strong>Tipo:</strong> {Tipo}</p>
        <p className="detalle__InforDocentes"><strong>Correo:</strong> <a href={`mailto:${Correo}`}>{Correo}</a></p>
        <p className="detalle__InforDocentes"><strong>Teléfono:</strong> {Telefono}</p>
        <div className="nombre__Asignaturas" onClick={abrirAsignaturas}>
          <div>
            Asignaturas
          </div>
          <div className={`iconoA__InforDocentes ${verAsignatura ? 'rotate' : ''}`}>
            <MdOutlineExpandMore />
          </div>
        </div>
        <ul className={`contenidoA__InforDocentes ${verAsignatura ? 'expanded' : ''}`} >
          {Asignaturas.map((asignatura) => (
            <li key={asignatura.Id}>{asignatura.Nombre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InforDocentes;
