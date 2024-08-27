import React from 'react'
import { FaSearch } from "react-icons/fa";
import './css/InputBuscar.css'

function InputBuscar() {
  return (
    <div className="contenedor__InputBuscar">
      <div className="input__InputBuscar">
      <input type="text" />
      </div>
      <div className="icono__InputBuscar">
      <FaSearch />
      </div>
    </div>
  )
}

export default InputBuscar