import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo_Fundacion.png';
import historial from '../general/historial';

class PrevModAdmin extends React.Component{
	constructor() {
    		super();
    		this.state = {
      			rut: sessionStorage.getItem('rut'),
    		};
  	}
	render(){
    		return (
    			<div>
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
										historial.push("/HomeAdministrador"); 
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
	      			<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
			  		<div className="container p-4 mt-4 rounded-4" style={{border: '2px solid black', maxWidth: '500px', margin: '0 auto'}}>
			      			<h2 className="text-center">
			      				Seleccione usuario a modificar
			      			</h2>
			      			<form action="/action_page.php" 
			      				style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
				  			<Link to={"/ModUsuarioAsistenteAdmin"} 
				  				state={{sesionIniciada: true, perfil: "bibliotecario"}} style={{width: '100%', marginBottom: '10px'}}>
				      				<button type="submit" 
				      					className="btn custom-button" 
				      					style={{border: "1px solid black", width: '100%'}}>
				      						Asistente
				      				</button>
				  			</Link>
				  			<Link to={"/ModUsuarioPacienteAdmin"} 
				  				state={{sesionIniciada: true, perfil: "bibliotecario"}} 
				  				style={{width: '100%', marginBottom: '10px'}}>
				      				<button type="submit" 
				      					className="btn custom-button" 
				      					style={{border: "1px solid black", width: '100%'}}>
				      						Persona con discapacidad
				      				</button>
				  			</Link>
				  			<Link to={"/AdministrarUsuarios"} 
				  				style={{width: '100%', marginBottom: '2px'}}>
				   				<button className="btn btn-secondary col-4 mt-3 mb-2 mx-auto d-block">
				   					Volver
				   				</button>
				   			</Link>
			      			</form>
			  		</div>
	      			</div>
			</div>

		);
	}
}
export default PrevModAdmin;
