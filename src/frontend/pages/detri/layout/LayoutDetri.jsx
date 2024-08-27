import React from 'react'
import Layout from '../../../layout/Layout'
import AccesosDetri from '../components/AccesosDetri'

function LayoutDetri({children}) {
  return (
    <Layout>
        <AccesosDetri/>
        {children}
    </Layout>
  )
}

export default LayoutDetri