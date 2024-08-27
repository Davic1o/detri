import React from 'react';
import LayoutDetri from './layout/LayoutDetri';
import InforDocentes from './components/InforDocentes';
import Docentes from '../../data/InformacionDocentes';
import './css/PersonalDocente.css'
import InputBuscar from './components/InputBuscar';

function PersonalDocente() {
  return (
    <LayoutDetri>
      <div className="contenedor__PersonalDocente">
        <div className="titulo__PersonalDocente">
          Personal Docente
        </div>
        <div className="buscador__PersonalDocente">
          <InputBuscar/>
        </div>
        <div className="datosDocentes__PersonalDocente">
        
          {Docentes.map((item) => (
            <div className="datosDocente__PersonalDocente" key={item.id}>
              <InforDocentes
                Nombre={item.Nombre}
                Tipo={item.Tipo}
                Correo={item.Correo}
                Telefono={item.Telefono}
                Asignaturas={item.Asignaturas}
              />
            </div>
          ))}
        </div>
      </div>
    </LayoutDetri>
  );
}

export default PersonalDocente;
