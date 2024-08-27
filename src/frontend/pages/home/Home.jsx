import React from 'react'
import Layout from '../../layout/Layout'
import SeccionInicio from './containers/SeccionInicio'
import OfertaAcademica from './containers/OfertaAcademica'
import DetriEnCifras from './containers/DetriEnCifras'
import Proyectos from './containers/Proyectos'

function Home() {
  return (
    <Layout>
      <SeccionInicio/>
      <OfertaAcademica/>
      <DetriEnCifras/>
      <Proyectos/>
    </Layout>
  )
}

export default Home