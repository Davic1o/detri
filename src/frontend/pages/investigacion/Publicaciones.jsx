import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../layout/Layout';
import './css/Publicaciones.css';

const publicaciones = [
  {
    titulo: "Estudio sobre Energía Solar",
    profesor: "Ing. Ana Torres",
    fechaPublicacion: "01/03/2023",
    fotoProfesor: "https://via.placeholder.com/150",
  },
  {
    titulo: "Avances en Inteligencia Artificial",
    profesor: "Ing. Roberto Martínez",
    fechaPublicacion: "15/05/2023",
    fotoProfesor: "https://via.placeholder.com/150",
  },
  {
    titulo: "Reducción de la Huella de Carbono",
    profesor: "Ing. Laura Suárez",
    fechaPublicacion: "10/01/2024",
    fotoProfesor: "https://via.placeholder.com/150",
  },
  {
    titulo: "Nuevas Tecnologías en Telecomunicaciones",
    profesor: "Ing. Carlos Fernández",
    fechaPublicacion: "20/06/2024",
    fotoProfesor: "https://via.placeholder.com/150",
  }
];

function Publicaciones() {
  return (
    <Layout>
      <div className="contenedor__Publicaciones">
        <h1 className="titulo__Publicaciones">Publicaciones</h1>
        {publicaciones.map((publicacion, index) => (
          <motion.div
            className="publicacion__Publicaciones"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={publicacion.fotoProfesor} alt={`Foto de ${publicacion.profesor}`} className="foto__Publicaciones"/>
            <div className="contenido__Publicaciones">
              <h2>{publicacion.titulo}</h2>
              <p><strong>Profesor:</strong> {publicacion.profesor}</p>
              <p><strong>Fecha de publicación:</strong> {publicacion.fechaPublicacion}</p>
              <button className="boton__Publicaciones">Ver Publicación</button>
            </div>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}

export default Publicaciones;
