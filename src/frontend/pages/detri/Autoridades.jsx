import React from 'react';
import LayoutDetri from './layout/LayoutDetri';
import './css/Autoridades.css'; // Importa el archivo CSS

function Autoridades() {
  const placeholderImage = "https://via.placeholder.com/100";

  return (
    <LayoutDetri>
      <div className="contenedor__Autoridades">
        <div className="titulo__Autoridades">
          AUTORIDADES
        </div>
        <div className="autoridad">
          <img src={placeholderImage} alt="Dra. Martha Cecilia Paredes" className="imagen__autoridad"/>
          <div className="info__autoridad">
            <span>Dra. Martha Cecilia Paredes</span>
            <span>Decana de la Facultad de Ingeniería Eléctrica y Electrónica</span>
          </div>
        </div>
        <div className="autoridad">
          <img src={placeholderImage} alt="Dra. Ana Zambrano" className="imagen__autoridad"/>
          <div className="info__autoridad">
            <span>Dra. Ana Zambrano</span>
            <span>Coordinadora del área de Electrónica y Redes</span>
          </div>
        </div>
        <div className="autoridad">
          <img src={placeholderImage} alt="Dr. Fabio Gonzalez" className="imagen__autoridad"/>
          <div className="info__autoridad">
            <span>Dr. Fabio Gonzalez</span>
            <span>Coordinador del área de Telecomunicaciones</span>
          </div>
        </div>
      </div>
    </LayoutDetri>
  );
}

export default Autoridades;
