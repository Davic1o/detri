import React from 'react';
import Layout from '../../layout/Layout';
import { motion } from 'framer-motion';
import './css/Ayudantias.css';

const becas = [
  {
    titulo: "Beca de Investigación en Tecnologías Emergentes",
    descripcion: "Esta beca está dirigida a estudiantes de la Facultad de Ingeniería Eléctrica y Electrónica interesados en investigar y desarrollar tecnologías emergentes como inteligencia artificial y redes neuronales.",
    requisitos: "Estudiantes avanzados de la carrera, conocimientos básicos en investigación, disponibilidad de al menos 20 horas semanales.",
    detalles: "Más detalles sobre la beca...",
  },
  {
    titulo: "Beca de Desarrollo de Software",
    descripcion: "Beca para estudiantes con habilidades en desarrollo de software, especialmente en tecnologías web y móviles. Se requiere experiencia previa en proyectos de desarrollo y disponibilidad para trabajar en equipo.",
    requisitos: "Estudiantes de cualquier ciclo académico, conocimientos en programación orientada a objetos, manejo de bases de datos.",
    detalles: "Más detalles sobre la beca...",
  },
  {
    titulo: "Beca de Innovación Tecnológica",
    descripcion: "Beca dirigida a estudiantes con ideas innovadoras en el campo de la tecnología. Se busca fomentar la creatividad y la capacidad de llevar ideas desde la concepción hasta la implementación.",
    requisitos: "Estudiantes de la FIEE con proyectos innovadores, capacidad de presentación y comunicación efectiva.",
    detalles: "Más detalles sobre la beca...",
  }
];

function Ayudantias() {
  return (
    <Layout>
      <div className="contenedor__Ayudantias">
        <h1 className="titulo__Ayudantias">Ayudantías y Becas</h1>
        {becas.map((beca, index) => (
          <motion.div
            key={index}
            className="beca__Ayudantias"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <h2>{beca.titulo}</h2>
            <p>{beca.descripcion}</p>
            <p><strong>Requisitos:</strong> {beca.requisitos}</p>
            <motion.button
              className="boton__Ayudantias"
              whileHover={{ scale: 1.1 }}
            >
              {beca.detalles}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}

export default Ayudantias;

