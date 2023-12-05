import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PerfilesInicio from './components/general/PerfilesInicio';
//import historial from './components/general/historial';

import InicioSesionAdmin from './components/admin/InicioSesionAdmin';
import HomeAdministrador from './components/admin/HomeAdministrador';
import AdministrarUsuarios from './components/admin/AdministrarUsuarios';
import CrearUsuario from './components/admin/CrearUsuario';
import PrevModAdmin from './components/admin/PrevModAdmin';
import ModUsuarioAdmin from './components/admin/ModUsuarioAdmin';
import ModUsuarioAsistenteAdmin from './components/admin/ModUsuarioAsistenteAdmin';
import ModUsuarioPacienteAdmin from './components/admin/ModUsuarioPacienteAdmin';

import InicioSesionAsist from './components/asistente/InicioSesionAsist';
import HomeAsistente from './components/asistente/HomeAsistente';
import ModUsuarioAsistente from './components/asistente/ModUsuarioAsistente';

import InicioSesionPaci from './components/paciente/InicioSesionPaci';
import HomePaciente from './components/paciente/HomePaciente';
import ModUsuarioPaciente from './components/paciente/ModUsuarioPaciente';
import FormularioSolicitudPaciente from './components/paciente/FormularioSolicitudPaciente';
import Formulario_1 from './components/paciente/Formulario_1';
import Formulario_2 from './components/paciente/Formulario_2';
import Formulario_3 from './components/paciente/Formulario_3';
import Formulario_4 from './components/paciente/Formulario_4';
import Formulario_5 from './components/paciente/Formulario_5';
import Formulario_6 from './components/paciente/Formulario_6';

import VinculacionPaciente from './components/paciente/VinculacionPaciente.js';

import FondoAnimado from './components/general/fondoanimado.js';
import VinculacionAsistente from './components/asistente/VinculacionAsistente.js';

//import Calendar_P from './components/general/calendar.jsx';
//import Calendar_A from './components/general/calendar.jsx';
//import Calendar_Pro from './components/general/calendar.jsx';

//Route path="/Calendar_P" element={isLoggedInPaci === "true" ? <Calendar_P/> : <PerfilesInicio/>}/>
//Route path="/Calendar_A" element={isLoggedInAsist === "true" ? <Calendar_A/> : <PerfilesInicio/>}/>
//Route path="/Calendar_Pro" element={isLoggedInProf === "true" ? <Calendar_Pro/> : <PerfilesInicio/>}/>

import RevisarMatch from './components/admin/RevisarMatch.js';

import FormularioAsistente_1 from './components/asistente/FormularioAsistente_1';
import FormularioAsistente_2 from './components/asistente/FormularioAsistente_2';
import FormularioAsistente_3 from './components/asistente/FormularioAsistente_3';
import FormularioAsistente_4 from './components/asistente/FormularioAsistente_4';
import FormularioAsistente_6 from './components/asistente/FormularioAsistente_6';
import FormularioSolicitudAsistente from './components/asistente/FormularioSolicitudAsistente';

function App() {
	const isLoggedInProf = window.sessionStorage.getItem("loggedInProf");
	const isLoggedInAsist = window.sessionStorage.getItem("loggedInAsist");
	const isLoggedInPaci = window.sessionStorage.getItem("loggedInPaci");
 
	return (
    		<div>
    			<Router>
    				<Routes>
    					<Route path="/" exact element={<PerfilesInicio/>}/>
    					
    					<Route path="/InicioSesionAdmin" element={<InicioSesionAdmin/>}/>
    					<Route path="/HomeAdministrador" element={isLoggedInProf === "true" ? <HomeAdministrador/> : <PerfilesInicio/>}/>
    					<Route path="/AdministrarUsuarios" element={isLoggedInProf === "true" ? <AdministrarUsuarios/> : <PerfilesInicio/>}/>
    					<Route path="/CrearUsuario" element={isLoggedInProf === "true" ? <CrearUsuario/> : <PerfilesInicio/>}/>
    					<Route path="/PrevModAdmin" element={isLoggedInProf === "true" ? <PrevModAdmin/> : <PerfilesInicio/>}/>
    					<Route path="/ModUsuarioAdmin" element={isLoggedInProf === "true" ? <ModUsuarioAdmin/> : <PerfilesInicio/>}/>
    					<Route path="/ModUsuarioAsistenteAdmin" element={isLoggedInProf === "true" ? <ModUsuarioAsistenteAdmin/> : <PerfilesInicio/>}/>
    					<Route path="/ModUsuarioPacienteAdmin" element={isLoggedInProf === "true" ? <ModUsuarioPacienteAdmin/> : <PerfilesInicio/>}/>
    					
    					<Route path="/InicioSesionAsist" element={<InicioSesionAsist/>}/>
    					<Route path="/HomeAsistente" element={isLoggedInAsist === "true" ? <HomeAsistente/> : <PerfilesInicio/>}/>
    					<Route path="/ModUsuarioAsistente" element={isLoggedInAsist === "true" ? <ModUsuarioAsistente/> : <PerfilesInicio/>}/>

						<Route path="/FormularioAsistente_1" element={isLoggedInAsist === "true" ? <FormularioAsistente_1/> : <PerfilesInicio/>}/>
						<Route path="/FormularioAsistente_2" element={isLoggedInAsist === "true" ? <FormularioAsistente_2/> : <PerfilesInicio/>}/>
						<Route path="/FormularioAsistente_3" element={isLoggedInAsist === "true" ? <FormularioAsistente_3/> : <PerfilesInicio/>}/>
						<Route path="/FormularioAsistente_4" element={isLoggedInAsist === "true" ? <FormularioAsistente_4/> : <PerfilesInicio/>}/>
						<Route path="/FormularioAsistente_6" element={isLoggedInAsist === "true" ? <FormularioAsistente_6/> : <PerfilesInicio/>}/>
						
						<Route path="/RevisarMatch" element={isLoggedInProf === "true" ? <RevisarMatch/> : <PerfilesInicio/>}/>
						
						<Route path="/VinculacionPaciente" element={isLoggedInPaci == "true" ? <VinculacionPaciente/> : <PerfilesInicio/>}/>
                        <Route path="/FondoAnimado" element={isLoggedInPaci == "true" ? <FondoAnimado/> : <PerfilesInicio/>}/>
						<Route path="/VinculacionAsistente" element={isLoggedInAsist == "true" ? <VinculacionAsistente/> : <PerfilesInicio/>}/>	
					

						<Route path="/FormularioSolicitudAsistente" element={isLoggedInAsist === "true" ? <FormularioSolicitudAsistente/> : <PerfilesInicio/>}/>
    					
    					<Route path="/InicioSesionPaci" element={<InicioSesionPaci/>}/>
    					<Route path="/HomePaciente" element={isLoggedInPaci === "true" ? <HomePaciente/> : <PerfilesInicio/>}/>
    					<Route path="/ModUsuarioPaciente" element={isLoggedInPaci === "true" ? <ModUsuarioPaciente/> : <PerfilesInicio/>}/>
    					<Route path="/FormularioSolicitudPaciente" element={isLoggedInPaci === "true" ? <FormularioSolicitudPaciente/> : <PerfilesInicio/>}/>
    					<Route path="/Formulario_1" element={isLoggedInPaci === "true" ? <Formulario_1/> : <PerfilesInicio/>}/>
    					<Route path="/Formulario_2" element={isLoggedInPaci === "true" ? <Formulario_2/> : <PerfilesInicio/>}/>
    					<Route path="/Formulario_3" element={isLoggedInPaci === "true" ? <Formulario_3/> : <PerfilesInicio/>}/>
    					<Route path="/Formulario_4" element={isLoggedInPaci === "true" ? <Formulario_4/> : <PerfilesInicio/>}/>
    					<Route path="/Formulario_5" element={isLoggedInPaci === "true" ? <Formulario_5/> : <PerfilesInicio/>}/>
    					<Route path="/Formulario_6" element={isLoggedInPaci === "true" ? <Formulario_6/> : <PerfilesInicio/>}/>
    				</Routes>
    			</Router>
    		</div>
  	);
}

export default App;
