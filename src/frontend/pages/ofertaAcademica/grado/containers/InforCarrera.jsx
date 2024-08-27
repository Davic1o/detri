import React, { useState } from 'react';
import './css/InforCarrera.css';
import { FaPlus, FaMinus } from "react-icons/fa";

function InforCarrera({ Imagen, Titulo, DatosGenerales, DatosInformativos }) {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prevExpandedSections) => ({
      ...prevExpandedSections,
      [section]: !prevExpandedSections[section],
    }));
  };

  const renderTextWithSplit = (text) => {
    return text.split('.').map((sentence, index) => (
      <p key={index}>{sentence.trim()}.</p>
    ));
  };

  return (
    <div className="contenedora__InforCarrera">
      <div className="informacion__InforCarrera">
        <img src={Imagen} alt={Titulo} />
        {DatosGenerales.map((item, index) => (
          <div className="accesos__InforCarrera" key={index}>
            <div className='acceso__InforCarrera acceso1__InforCarrera'>
              <span>Título a Obtener:</span>
              <div>{item.Obtener}</div>
            </div>
            <div className='acceso__InforCarrera acceso2__InforCarrera'>
              <span>Duración:</span>
              <div>{item.Duracion}</div>
            </div>
            <div className='acceso__InforCarrera acceso3__InforCarrera'>
              <span>Modalidad:</span>
              <div>{item.Modalidad}</div>
            </div>
            <div className='acceso__InforCarrera acceso4__InforCarrera'>
              <span>Coordinador:</span>
              <div>{item.Coordinador}</div>
            </div>
          </div>
        ))}
        <div className="titulo1__InforCarrera">
          <h2>{Titulo}</h2>
        </div>
      </div>
      <div className="datos__InforCarrera">
        {DatosInformativos.map((item, index) => (
          <div className="datoInfo__Carrera" key={index}>
            <div className="contenedor__InforCarrera">
              <div className="titulo__InforCarrera" onClick={() => toggleSection(`Objetivo_${index}`)}>
                <div>Objetivo</div>
                <div>{expandedSections[`Objetivo_${index}`] ? <FaMinus /> : <FaPlus />}</div>
              </div>
              {expandedSections[`Objetivo_${index}`] && (
                <div className='vercontenido__InforCarrera'>
                  {renderTextWithSplit(item.Objetivo)}
                </div>
              )}
            </div>
            <div className="contenedor__InforCarrera">
              <div className="titulo__InforCarrera" onClick={() => toggleSection(`Perfil_${index}`)}>
                <div>Perfil</div>
                <div>{expandedSections[`Perfil_${index}`] ? <FaMinus /> : <FaPlus />}</div>
              </div>
              {expandedSections[`Perfil_${index}`] && (
                <div className='vercontenido__InforCarrera'>
                  {renderTextWithSplit(item.Perfil)}
                </div>
              )}
            </div>
            <div className="contenedor__InforCarrera">
              <div className="titulo__InforCarrera" onClick={() => toggleSection(`Unidad_${index}`)}>
                <div>Unidad</div>
                <div>{expandedSections[`Unidad_${index}`] ? <FaMinus /> : <FaPlus />}</div>
              </div>
              {expandedSections[`Unidad_${index}`] && (
                <div className='vercontenido__InforCarrera'>{item.Unidad}</div>
              )}
            </div>
            <div className="contenedor__InforCarrera">
              <div className="titulo__InforCarrera" onClick={() => toggleSection(`Ubicacion_${index}`)}>
                <div>Ubicación</div>
                <div>{expandedSections[`Ubicacion_${index}`] ? <FaMinus /> : <FaPlus />}</div>
              </div>
              {expandedSections[`Ubicacion_${index}`] && (
                <div className='vercontenido__InforCarrera'>{item.Ubicacion}</div>
              )}
            </div>
            <div className="contenedor__InforCarrera">
              <div className="titulo__InforCarrera" onClick={() => toggleSection(`NumeroContacto_${index}`)}>
                <div>Número de Contacto</div>
                <div>{expandedSections[`NumeroContacto_${index}`] ? <FaMinus /> : <FaPlus />}</div>
              </div>
              {expandedSections[`NumeroContacto_${index}`] && (
                <div className='vercontenido__InforCarrera'>{item.NumeroContacto}</div>
              )}
            </div>
            <div className="contenedor__InforCarrera">
              <div className="titulo__InforCarrera" onClick={() => toggleSection(`Correo_${index}`)}>
                <div>Correo</div>
                <div>{expandedSections[`Correo_${index}`] ? <FaMinus /> : <FaPlus />}</div>
              </div>
              {expandedSections[`Correo_${index}`] && (
                <div className='vercontenido__InforCarrera'>{item.Correo}</div>
              )}
            </div>
            <div className="contenedor__InforCarrera">
              <div className="titulo__InforCarrera" onClick={() => toggleSection(`Horario_${index}`)}>
                <div>Horario</div>
                <div>{expandedSections[`Horario_${index}`] ? <FaMinus /> : <FaPlus />}</div>
              </div>
              {expandedSections[`Horario_${index}`] && (
                <div className='vercontenido__InforCarrera'>{item.Horario}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InforCarrera;

