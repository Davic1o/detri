import React from 'react'
import Layout from '../../layout/Layout'
import Carrera from './components/Carrera'
import Ti from '../../images/TI.png'
import Tele from '../../images/Tele.png'
import './css/Grado.css'
import { Link } from 'react-router-dom'

function Grado() {
  return (
    <Layout>
      <div className="contendor__Grado">
        <div className="carreras__Grado">
          <Link to={'/Grado/TI'}>
      <Carrera Texto={'Los objetivos se alcanzan gracias al liderazgo de equipos, de un trabajo responsables, de una actitud innovadora, de iniciativas creativas y un espíritu autónomo. Equipos, bases de datos, redes de comunicaciones, sistemas web, gestión de información y seguridades, elementos que se integran, se evalúan y se convierten en soluciones gracias a las Tecnologías de la Información desarrolladas en el contexto de las organizaciones.'} 
      Nombre={'TECNOLOGÍAS DE LA INFORMACIÓN'} 
      Imagen={Ti}/>
      </Link>
      <Link to={'/Grado/Tele'}>
      <Carrera Texto={'Comprender, diseñar, implementar y operar las telecomunicaciones, un desafío para quienes están dispuestos a ser profesionales eficientes, seguros, apegados a la ética, responsables, críticos y comprometidos con el futuro del país. Es un reto de dimensiones.'} 
      Nombre={'TELECOMUNICACIONES'} Imagen={Tele}/>
      </Link>
      </div> 
      </div>
    </Layout>
  )
}

export default Grado