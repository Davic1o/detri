import React, { useState } from 'react';
import { RiFacebookCircleFill, RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import DetriLogo from '../images/Logo_Detri.png';
import AccesosNavbar from '../data/AccesosNavbar';
import InputBuscar from '../components/InputBuscar';
import BotonRuta from '../components/BotonRuta';
import {Link} from 'react-router-dom'
import './css/Navbar.css';

function Navbar() {
    const [openAccess, setOpenAccess] = useState(null); // Estado para controlar el acceso abierto

    const handleAccessClick = (id) => {
        // Si el mismo acceso está siendo clicado, ciérralo; si es otro, ábrelo
        setOpenAccess(openAccess === id ? null : id);
    };

    return (
        <nav className="contenedor__Navbar">
            <div className="links__Navbar">
                <div>
                <a href="https://www.epn.edu.ec/" target="_blank" rel="noopener noreferrer">
                    <div>ir a EPN</div>
                </a>
                <a href="https://www.facebook.com/VinculacionDETRI" target="_blank" rel="noopener noreferrer">
                    <div><RiFacebookCircleFill /></div>
                </a>
                <a href="https://www.instagram.com/detri.fiee/" target="_blank" rel="noopener noreferrer">
                    <div><RiInstagramFill /></div>
                </a>
                <a href="https://x.com/detri_epn" target="_blank" rel="noopener noreferrer">
                    <div><RiTwitterXFill /></div>
                </a>
                </div>
            </div>
            <div className="logos__Navbar">
                <Link to={`/`}>
                <div className="logo__Navbar">
                    <img src={DetriLogo} alt="" />
                    DETRI - Escuela Politécnica Nacional
                </div>
                </Link>
                <div className="opciones__Navbar">
                    <div className="buscador__Navbar">
                        <InputBuscar />
                    </div>
                    <Link to={'/Contacto'}>
                    <div className="contactenos__Navbar">
                        <BotonRuta Nombre={'Contáctanos'} />
                    </div>
                    </Link>
                </div>
            </div>
            <div className="accesos__Navbar"> 
                {AccesosNavbar.map((item) => (
                    <div 
                        className="acceso__Navbar" 
                        key={item.id}
                        onClick={() => handleAccessClick(item.id)} // Añadir manejador de clics
                    >
                        {item.Nombre}
                        {openAccess === item.id && ( // Mostrar subaccesos si el acceso está abierto
                            <div className="subaccesos__Navbar">
                                {item.Accesos.map((subitem) => (
                                    <Link to={`/${subitem.Link}`}>  
                                    <div className="subacceso__Navbar" key={subitem.id}>
                                        {subitem.Nombre}
                                    </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
