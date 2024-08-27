import React from 'react';
import LayoutDetri from './layout/LayoutDetri'
import './css/Ubicacion.css'
import Mapa from './containers/Mapa';



function Ubicacion() {



  return (
    <LayoutDetri>
      <div className="contendor__Ubicacion">
        <Mapa/>
    </div>

    </LayoutDetri>
  )
}

export default Ubicacion