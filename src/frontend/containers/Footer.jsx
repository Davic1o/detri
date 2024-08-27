import React from 'react'
import LogoEPN from '../images/logoEPN.png'
import './css/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="contenedor__Footer">
      <div className="superior__Footer">
        <div className="izquierda__Footer">
        <div className="logo__Footer">
          <img src={LogoEPN} alt="" />
        </div>
        <div className="infoEpn__Footer">
          <h4>Escuela Politecnica Nacional</h4>
          <h4>Campus J Orellana</h4>
          <h4>Quito - Ecuador</h4>
          <h4>Telefonos: 2231074</h4>
        </div>
        </div>

        <div className="accesos__Footer">
          <Link to={'/Contacto'}>
          <h4>Contactenos</h4>
          </Link>
          <a href="mailto:info@epn.edu.ec?subject=Informacion%20Sobre%20El%20departamenteo&body=Deseo%20mas%20Informacion%20de%20las%20Carreras">
          <h4>Correo FIEE</h4>
          </a>
          <a href="https://bibdigital.epn.edu.ec/handle/15000/13" target="_blank" rel="noopener noreferrer">
          <h4>Repositorio FIEE</h4>
          </a>
        </div>

      </div>
      <div className="inferior__Footer">
Copyright Epn- Detri 2024
      </div>

    </div>
  )
}

export default Footer