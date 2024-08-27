import React from 'react';
import LayoutDetri from './layout/LayoutDetri';
import './css/PlanEstrategico.css';

function PlanEstrategico() {
  return (
    <LayoutDetri>
      <div className="contenedor__PlanEstrategico">
        <h1 className="titulo__PlanEstrategico">Plan Estratégico</h1>
        <p className="descripcion__PlanEstrategico">
          Aquí puede descargar el plan estratégico de la FIEE. Haga clic en el botón a continuación para descargar el documento.
        </p>
        <a 
          href="/ruta/al/archivo/PlanEstrategico.pdf" 
          className="boton__PlanEstrategico" 
          download
        >
          Descargar Plan Estratégico
        </a>
      </div>
    </LayoutDetri>
  );
}

export default PlanEstrategico;
