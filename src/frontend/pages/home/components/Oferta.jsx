import React from 'react';
import { FaPlus } from "react-icons/fa";
import './css/Oferta.css';

function Oferta({ Texto, Nombre, Imagen }) {
  return (
    <div className="contenedor__Oferta">
      <div className="textoH__Oferta">
        <div className="textoinfor__Oferta">
        {Texto}

        </div>
      </div>
      <div className="imagen__Oferta">
        <img src={Imagen} alt='imagen' />
        <div className="datos__Oferta">
        </div>
        <div className="textoT__Oferta">
          <div>{Nombre}</div>
          <div className="iconomas__Oferta">
          <FaPlus />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Oferta;
