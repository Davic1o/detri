import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../layout/Layout';
import './css/CentrosLaboratorios.css';

const laboratorios = [
  {
    Nombre: "Laboratorio de Circuitos",
    Descripcion: "En este laboratorio se realizan prácticas de análisis y diseño de circuitos eléctricos.",
    Ubicacion: "Edificio 16, Piso 2, Laboratorio 3",
    Docente: "Ing. Juan Pérez",
    Telefono: "+593 2 123 4567"
  },
  {
    Nombre: "Laboratorio de Dispositivos",
    Descripcion: "Se investigan y prueban diferentes tipos de dispositivos electrónicos.",
    Ubicacion: "Edificio 16, Piso 1, Laboratorio 2",
    Docente: "Ing. Ana Gómez",
    Telefono: "+593 2 234 5678"
  },
  {
    Nombre: "Laboratorio de Sistemas Embebidos",
    Descripcion: "Desarrollo y prueba de sistemas embebidos y microcontroladores.",
    Ubicacion: "Edificio 17, Piso 3, Laboratorio 1",
    Docente: "Ing. Carlos Ruiz",
    Telefono: "+593 2 345 6789"
  },
  {
    Nombre: "Laboratorio de Comunicaciones",
    Descripcion: "Estudio y experimentación en sistemas de comunicación.",
    Ubicacion: "Edificio 17, Piso 2, Laboratorio 4",
    Docente: "Ing. Marta Sánchez",
    Telefono: "+593 2 456 7890"
  },
  {
    Nombre: "Laboratorio de Redes",
    Descripcion: "Prácticas y configuración de redes informáticas.",
    Ubicacion: "Edificio 16, Piso 2, Laboratorio 5",
    Docente: "Ing. Roberto Díaz",
    Telefono: "+593 2 567 8901"
  },
  {
    Nombre: "Laboratorio de Interconectividad",
    Descripcion: "Implementación y pruebas de soluciones de interconectividad.",
    Ubicacion: "Edificio 17, Piso 1, Laboratorio 6",
    Docente: "Ing. Laura Flores",
    Telefono: "+593 2 678 9012"
  },
  {
    Nombre: "Laboratorio de Ópticas",
    Descripcion: "Investigación y experimentación con sistemas ópticos.",
    Ubicacion: "Edificio 17, Piso 3, Laboratorio 7",
    Docente: "Ing. Pablo Herrera",
    Telefono: "+593 2 789 0123"
  }
];

function CentrosLaboratorios() {
  return (
    <Layout>
      <div className="contenedor__CentrosLaboratorios">
        <h1 className="titulo__CentrosLaboratorios">Centros y Laboratorios</h1>
        {laboratorios.map((lab, index) => (
          <motion.div
            className="laboratorio__CentrosLaboratorios"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2>{lab.Nombre}</h2>
            <p><strong>Descripción:</strong> {lab.Descripcion}</p>
            <p><strong>Ubicación:</strong> {lab.Ubicacion}</p>
            <p><strong>Docente:</strong> {lab.Docente}</p>
            <p><strong>Teléfono:</strong> {lab.Telefono}</p>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}

export default CentrosLaboratorios;
