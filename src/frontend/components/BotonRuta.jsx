import React from 'react'
import './css/BotonRuta.css'

function BotonRuta({Nombre}) {
  return (
    <div className="contenedor__BotonRuta">
      <div className="texto__BotonRuta">
      {Nombre}
      </div>
    </div>
  )
}

export default BotonRuta