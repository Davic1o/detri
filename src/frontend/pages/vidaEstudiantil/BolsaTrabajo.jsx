import React from 'react';
import Layout from '../../layout/Layout';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import './css/BolsaTrabajo.css';

const ofertas = [
  {
    id: 1,
    titulo: "Desarrollador Frontend Senior",
    descripcion: "Buscamos un desarrollador frontend con experiencia en React.js y diseño responsive. Trabajarás en proyectos innovadores y colaborativos.",
    requisitos: "Experiencia mínima de 3 años en desarrollo frontend, dominio de HTML, CSS, JavaScript. Conocimientos en UX/UI.",
    comoAplicar: "Enviar CV y portfolio a hr@empresa.com",
  },
  {
    id: 2,
    titulo: "Ingeniero de Software Full Stack",
    descripcion: "Oportunidad para un ingeniero de software con experiencia en desarrollo full stack. Trabajarás en el diseño y desarrollo de nuevas funcionalidades.",
    requisitos: "Experiencia en frameworks como Laravel o Django, conocimientos en bases de datos relacionales y no relacionales. Habilidades en resolución de problemas.",
    comoAplicar: "Enviar CV detallando experiencia y proyectos a recruiting@empresa.com",
  },
  {
    id: 3,
    titulo: "Diseñador UX/UI",
    descripcion: "Buscamos un diseñador con pasión por la experiencia de usuario y diseño de interfaces atractivas. Trabajarás en el diseño de productos digitales innovadores.",
    requisitos: "Experiencia en diseño de interfaces, dominio de herramientas como Sketch o Figma. Habilidades de comunicación y trabajo en equipo.",
    comoAplicar: "Enviar portafolio y carta de presentación a design@empresa.com",
  },
  // Agrega más ofertas aquí según sea necesario
];

function BolsaTrabajo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Mostrar dos ofertas por slide
    slidesToScroll: 1, // Desplazar dos ofertas por vez
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Layout>
      <div className="contenedor__BolsaTrabajo">
        <h1 className="titulo__BolsaTrabajo">Bolsa de Trabajo</h1>
        <Slider {...settings}>
          {ofertas.map((oferta) => (
            <div key={oferta.id} className="slider__item">
              <motion.div
                className="oferta__BolsaTrabajo"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <h2>{oferta.titulo}</h2>
                <p>{oferta.descripcion}</p>
                <p><strong>Requisitos:</strong> {oferta.requisitos}</p>
                <p><strong>Cómo aplicar:</strong> {oferta.comoAplicar}</p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </Layout>
  );
}

export default BolsaTrabajo;
