import React from 'react';
import BotonCuadro from '../general/boton-cuadro';
import { Link } from 'react-router-dom';


import userIcon from '../../images/addUserIcon.png'
import user2Icon from '../../images/modUserIcon.png'
import logo from '../../images/Logo_Fundacion.png';

import historial from '../general/historial';

class FormularioSolicitudPaciente extends React.Component{
	constructor() {
    		super();
    		this.state = {
      			rut: sessionStorage.getItem('rut'),
    		};
	}
  	render(){
    		return(
      			<div style={{backgroundImage:`url(https://www.linkpicture.com/q/fondoBiblio.png)`, backgroundSize:'100%', height:'100vh'}}>
        			<nav className="navbar navbar-fixed-top navbar-expand pt-0 pb-0" 
					style={{backgroundImage:"#ff5733"}}> 
					<div className="container-fluid">
						
						<div className="row">
							<div className="d-inline-flex navbar-brand justify" href="#">
								<img src={logo} 
									className="ms-4 rounded-3 border border-2" 
									alt="Logo" 
									width='70' 
									onClick={() => {
										historial.push("/HomePaciente"); 
										historial.go(0); 
										}
									}
									style={{cursor:'pointer'}}/>
									<p className='h1' 
										style={{color:'#fb4d72', marginTop: '10px', marginLeft: '30px'}}>
											Fundacion Vida Independiente
									</p>
							</div>
						</div>
						<div>
							<button className="btn btn-danger" onClick={() => {
											sessionStorage.clear();
											historial.push("/"); 
											historial.go(0); 
											}}>
								Cerrar Sesión
								
	      						</button>
							<p>
								Rut: {this.state.rut}
							</p>
						</div>
					</div>
				</nav>
        			<div className='container bg border border-dark border-2 mt-5'>
		  			<div className='h4 text-black text-center'>
		  				FORMULARIO SOLICITUD PERSONA CON DISCAPACIDAD
		  			</div>
          				<div className='row'>
						<BotonCuadro titulo="Antecedentes de discapacidad y salud" 
							imagen={userIcon} 
							direccion={"Formulario_1"}/>
					    	<BotonCuadro titulo="Antecedentes Sociales" 
					    		imagen={user2Icon} 
					    		direccion={"Formulario_2"}/>
					    	<BotonCuadro titulo="Antecedentes Contextuales" 
					    		imagen={user2Icon} 
					    		direccion={"Formulario_3"}/>
          				</div>
          				<div className='row'>
						<BotonCuadro titulo="Actividades de participacion" 
							imagen={userIcon} 
							direccion={"Formulario_4"}/>
						<BotonCuadro titulo="Necesidades de asistencia personal" 
							imagen={user2Icon} 
							direccion={"Formulario_5"}/>
						<BotonCuadro titulo="Horarios" 
							imagen={user2Icon} 
							direccion={"Formulario_6"}/>
          				</div>
          				<Link to={"/HomePaciente"} style={{width: '100%', marginBottom: '2px'}}>
            					<button className="btn btn-secondary col-4 mt-3 mb-2 mx-auto d-block">
            						Volver
            					</button>
          				</Link>
        			</div>
      			</div>
    		);
  	}
}

export default FormularioSolicitudPaciente;
