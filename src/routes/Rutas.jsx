import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../frontend/pages/home/Home.jsx';
import Mision from '../frontend/pages/detri/Mision.jsx';
import Autoridades from '../frontend/pages/detri/Autoridades.jsx';
import PersonalDocente from '../frontend/pages/detri/PersonalDocente.jsx';
import PlanEstrategico from '../frontend/pages/detri/PlanEstrategico.jsx';
import Directorio from '../frontend/pages/detri/Directorio.jsx';
import Ubicacion from '../frontend/pages/detri/Ubicacion.jsx';
import Grado from '../frontend/pages/ofertaAcademica/Grado.jsx';
import Ti from '../frontend/pages/ofertaAcademica/grado/Ti.jsx';
import Tele from '../frontend/pages/ofertaAcademica/grado/Tele.jsx';
import Postgrados from '../frontend/pages/ofertaAcademica/Postgrados.jsx';
import CursosySeminarios from '../frontend/pages/ofertaAcademica/CursosySeminarios.jsx';
import CentrosLaboratorios from '../frontend/pages/investigacion/CentrosLaboratorios.jsx';
import AreasSubareasInvestigacion from '../frontend//pages/investigacion/AreasSubareasInvestigacion.jsx';
import Proyectos from '../frontend/pages/investigacion/Proyectos.jsx';
import Publicaciones from '../frontend/pages/investigacion/Publicaciones.jsx';
import Ayudantias from '../frontend/pages/vidaEstudiantil/Ayudantias.jsx';
import VidaDetri from '../frontend/pages/vidaEstudiantil/VidaDetri.jsx';
import BolsaTrabajo from '../frontend/pages/vidaEstudiantil/BolsaTrabajo.jsx';
import Pasantias from '../frontend/pages/vidaEstudiantil/Pasantias.jsx';
import Contacto from '../frontend/pages/Contactos.jsx'

function Rutas() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Mision' element={<Mision />} />
      <Route path='/Autoridades' element={<Autoridades />} />
      <Route path='/PersonalDocente' element={<PersonalDocente />} />
      <Route path='/PlanEstrategico' element={<PlanEstrategico />} />
      <Route path='/Directorio' element={<Directorio />} />
      <Route path='/Ubicacion' element={<Ubicacion />} />
      <Route path='/Grado' element={<Grado />} />
      <Route path='/Grado/TI' element={<Ti/>} />
      <Route path='/Grado/Tele' element={<Tele />} />
      <Route path='/Postgrados' element={<Postgrados />} />
      <Route path='/CursosySeminarios' element={<CursosySeminarios />} />
      <Route path='/CentrosLaboratorios' element={<CentrosLaboratorios />} />
      <Route path='/AreasSubareasInvestigacion' element={<AreasSubareasInvestigacion />} />
      <Route path='/Proyectos' element={<Proyectos />} />
      <Route path='/Publicaciones' element={<Publicaciones />} />
      <Route path='/Ayudantias' element={<Ayudantias />} />
      <Route path='/VidaDetri' element={<VidaDetri />} />
      <Route path='/BolsaTrabajo' element={<BolsaTrabajo />} />
      <Route path='/Pasantias' element={<Pasantias />} />
      <Route path='/Contacto' element={<Contacto/>}/>
      
    </Routes>
  );
}

export default Rutas;
