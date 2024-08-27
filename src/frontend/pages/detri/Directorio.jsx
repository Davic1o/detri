import React from 'react';
import LayoutDetri from './layout/LayoutDetri';
import './css/Directorio.css';

const oficinas = [
  {
    Nombre: "Decanato",
    Responsable: "Dra. Martha Cecilia Paredes",
    Correo: "decanato.fiee@epn.edu.ec",
    Telefono: "+593 2 123 4567",
    Ubicacion: "Edificio Principal, Piso 1"
  },
  {
    Nombre: "Sala de Eventos",
    Responsable: "Lic. Juan Pérez",
    Correo: "eventos.fiee@epn.edu.ec",
    Telefono: "+593 2 234 5678",
    Ubicacion: "Edificio Principal, Piso 2"
  },
  {
    Nombre: "Biblioteca",
    Responsable: "Ing. Ana Zambrano",
    Correo: "biblioteca.fiee@epn.edu.ec",
    Telefono: "+593 2 345 6789",
    Ubicacion: "Edificio Anexo, Piso 3"
  },
  {
    Nombre: "Laboratorio de Electrónica",
    Responsable: "Ing. Fabio Gonzalez",
    Correo: "lab.electronica@epn.edu.ec",
    Telefono: "+593 2 456 7890",
    Ubicacion: "Edificio de Laboratorios, Piso 1"
  }
  // Agrega más oficinas según sea necesario
];

function Directorio() {
  return (
    <LayoutDetri>
      <div className="contenedor__Directorio">
        <h1 className="titulo__Directorio">Directorio de Servicios de la FIEE</h1>
        <table className="tabla__Directorio">
          <thead>
            <tr>
              <th>Oficina</th>
              <th>Responsable</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Ubicación</th>
            </tr>
          </thead>
          <tbody>
            {oficinas.map((oficina, index) => (
              <tr key={index}>
                <td>{oficina.Nombre}</td>
                <td>{oficina.Responsable}</td>
                <td><a href={`mailto:${oficina.Correo}`}>{oficina.Correo}</a></td>
                <td>{oficina.Telefono}</td>
                <td>{oficina.Ubicacion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LayoutDetri>
  );
}

export default Directorio;
