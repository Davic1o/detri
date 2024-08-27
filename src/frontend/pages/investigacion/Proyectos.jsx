import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../layout/Layout';
import './css/Proyectos.css';

const proyectos = [
  {
    titulo: "Proyecto de Energía Renovable",
    profesor: "Ing. Ana Torres",
    contenido: "Desarrollo de paneles solares eficientes para comunidades rurales.",
    fechaInicio: "01/03/2023"
  },
  {
    titulo: "Educación STEM en Escuelas",
    profesor: "Ing. Roberto Martínez",
    contenido: "Implementación de programas educativos en ciencias, tecnología, ingeniería y matemáticas.",
    fechaInicio: "15/05/2023"
  },
  {
    titulo: "Reducción de la Huella de Carbono",
    profesor: "Ing. Laura Suárez",
    contenido: "Estudio y aplicación de técnicas para reducir la huella de carbono en la industria local.",
    fechaInicio: "10/01/2024"
  },
  {
    titulo: "Telemedicina para Zonas Rurales",
    profesor: "Ing. Carlos Fernández",
    contenido: "Desarrollo de soluciones de telemedicina para mejorar el acceso a la salud en áreas remotas.",
    fechaInicio: "20/06/2024"
  }
];

function Proyectos() {
  return (
    <Layout>
      <div className="contenedor__Proyectos">
        <h1 className="titulo__Proyectos">Proyectos de Vinculación con la Sociedad</h1>
        {proyectos.map((proyecto, index) => (
          <motion.div
            className="proyecto__Proyectos"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2>{proyecto.titulo}</h2>
            <p><strong>Profesor a cargo:</strong> {proyecto.profesor}</p>
            <p><strong>Contenido:</strong> {proyecto.contenido}</p>
            <p><strong>Fecha de inicio:</strong> {proyecto.fechaInicio}</p>
            <div className="btn__Proyectos">Ver más</div>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}

export default Proyectos;

