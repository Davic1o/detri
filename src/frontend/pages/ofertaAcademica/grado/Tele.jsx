import React from 'react';
import Layout from '../../../layout/Layout';
import InforCarrera from './containers/InforCarrera'; // Asegúrate de importar la imagen correctamente
import CarreraData from '../../../data/CarreraTele'; // Asumiendo que aquí tienes el arreglo Carrera con los datos

function Tele() {
  const carreraTi = CarreraData.find(carrera => carrera.Titulo === 'TELECOMUNICACIONES');

  if (!carreraTi) {
    console.error('No se encontraron datos para la carrera de Tecnologías de la Información');
    return null; // Opcional: Renderiza algo o maneja el caso de datos no encontrados
  }

  return (
    <Layout>
      <InforCarrera
        Imagen={carreraTi.Imagen}
        Titulo={carreraTi.Titulo}
        DatosGenerales={carreraTi.DatosGenerales}
        DatosInformativos={carreraTi.DatosInformativos}
      />
    </Layout>
  );
}

export default Tele;
