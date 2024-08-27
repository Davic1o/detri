import React from 'react';
import Layout from '../../layout/Layout';
import { motion } from 'framer-motion';
import './css/Pasantias.css';

const pasantias = [
  {
    id: 1,
    titulo: "Desarrollo de Aplicaciones Web",
    descripcion: "Pasantía enfocada en el desarrollo de aplicaciones web modernas utilizando tecnologías como React.js y Node.js.",
    fechas: "10/08/2024",
    ubicacion: "Remoto",
    requisitos: "Estudiantes de Ingeniería de Sistemas o carreras afines. Conocimientos básicos de HTML, CSS y JavaScript.",
    comoAplicar: "Enviar CV y carta de motivación a pasantias@empresa.com",
  },
  {
    id: 2,
    titulo: "Ingeniería de Software",
    descripcion: "Pasantía orientada al desarrollo de software escalable y robusto, utilizando metodologías ágiles y buenas prácticas de programación.",
    fechas: "15/09/2024",
    ubicacion: "Presencial",
    requisitos: "Estudiantes avanzados de Ingeniería en Sistemas, con conocimientos en Java, C#, o Python. Disponibilidad de 20 horas semanales.",
    comoAplicar: "Completar el formulario en línea en pasantias.empresa.com",
  },
  // Agrega más pasantías según sea necesario
];

function Pasantias() {
  return (
    <Layout>
      <div className="contenedor__Pasantias">
        <h1 className="titulo__Pasantias">Pasantías</h1>
        <div className="grid__Pasantias">
          {pasantias.map((pasantia) => (
            <motion.div
              key={pasantia.id}
              className="tarjeta__Pasantia"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <h2>{pasantia.titulo}</h2>
              <p>{pasantia.descripcion}</p>
              <div className="informacion__Pasantia">
                <p><strong>Fechas:</strong> {pasantia.fechas}</p>
                <p><strong>Ubicación:</strong> {pasantia.ubicacion}</p>
                <p><strong>Requisitos:</strong> {pasantia.requisitos}</p>
                <p><strong>Cómo aplicar:</strong> {pasantia.comoAplicar}</p>
              </div>
              <div className="verMas__Pasantia">
                <button>Ver más</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Pasantias;
