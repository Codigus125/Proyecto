import React, { useState } from 'react';
import historial from '../general/historial';
import Form from 'react-bootstrap/Form';
import { useMutation, gql } from '@apollo/client';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import logo from '../../images/Logo_Fundacion.png';


function CrearUsuario() {
		
		const Rut = sessionStorage.getItem('rut');	
		const [rut, setRut] = useState('');
		const [clave, setClave] = useState('');
		const [rol, setRol] = useState('1');
		
		const handleClose = () => setShow(false);
  		const handleShow = () => setShow(true);
  		
  		const [show, setShow] = useState(false);
  		
  		const [error, setError] = useState(null);
		
		const ADD_USUARIO = gql`
			mutation AddUsuario($rut: Int!, $clave: String!, $rol: Int!) {
      				addUsuario(rut: $rut, clave: $clave, rol: $rol) {
        				rut
        				clave
        				rol
      				}
    			}
  		`;
		
		const [addUsuario, { data, loading, errorr }] = useMutation(ADD_USUARIO);
		
		const handleAddUsuario = async (e) => {
			e.preventDefault();
	 	
			try {
				addUsuario({ variables: { rut: parseInt(rut), clave, rol: parseInt(rol) } });
				handleShow()
				setRut('');
        			setClave('');
				
	    		} catch (error) {
	      			console.error('Error de autenticación:', error.message);
	      			setError('Error de autenticación. Por favor, inténtalo nuevamente.'); 
	    		}
		};
		
		const limpiarCampos = () => {
		    	setRut('');
		    	setClave('');
		};
		
		return(
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
								Rut: {Rut}
							</p>
						</div>
					</div>
				</nav>
				<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
					<div class="container pt-3 pb-2 mt-2 text-bg border border-2 border-dark rounded col-12" >
						<Modal show={show} 
							onHide={handleClose}>
				       			<Modal.Header closeButton>
					  			<Modal.Title>
					  				Exito!
					  			</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<Alert key={'success'} 
									variant={'success'}>
				  						Se ha creado un nuevo usuario.
								</Alert>
							</Modal.Body>
				       			<Modal.Footer>
					 			<Button variant="secondary" 
					 				onClick={handleClose}>
					    					Cerrar
					 			 </Button>
							</Modal.Footer>
				      		</Modal>
						<h1 class="text-center">
							Crear Usuario Nuevo
						</h1>
						<Form onSubmit={handleAddUsuario}>
							<div class="row d-flex align-items-start">
		    						<div class="input-group mb-2 w-25 ps-2 ms-1">
									<span class="input-group-text mb-2 ">Rut</span>
									<input class="form-control mb-2" 
										type="number" 
										id="barra" 
										placeholder='Ingresar Rut'
										value={rut}
			    							onChange={(e) => setRut(e.target.value)}/>
								</div>

					
					
								<div class="input-group d-flex mb-2 w-50">
									<span class="input-group-text mb-2 ">Clave</span>
									<input class="form-control mb-2" 
										type="password" 
										placeholder='Ingresar Clave'
										value={clave}
										onChange={(e) => setClave(e.target.value)}/>
								</div>
							</div>
							<div class="input-group mb-0 w-50">
		       				 		<span class="input-group-text mb-2">
		       				 			Privilegios:<br></br> 1 = Persona con discapacidad  2 = Asistente  3 = Administrador
		       				 		</span>
		       				 		<select class="form-select mb-2" 
										value={rol} 
										onChange={(e) => setRol(e.target.value)}>
			  								<option value="1">1</option>
			  								<option value="2">2</option>
			  								<option value="3">3</option>
								</select>
		    					</div>
						
							<div class ="btn-group-wide d-grip mb-2 text-center">
								<button type='button' 
									className='btn btn-secondary btn-outline-dark text-white col-3 m-1' 
									onClick={() => historial.back()}>
										Volver
								</button>
								<button type='button' 
									className='btn btn-danger btn-outline-dark text-white col-3 m-1' 
									onClick={limpiarCampos}>
										Limpiar
								</button>
								<button type='submit' 
									className='btn btn-success btn-outline-dark text-white col-3 m-1'>
										Guardar
								</button>
							</div>
						</Form>
					</div>
				</div>
			</div>
		);
	
}

export default CrearUsuario;
