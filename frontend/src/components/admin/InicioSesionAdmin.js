import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';

import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import logo from '../../images/Logo_Fundacion.png';
import historial from '../general/historial';
import BarraNavLogOut from '../general/BarraNavLogOut';

function InicioSesionAdmin() {	
	const [rut, setRut] = useState('');
 	const [clave, setClave] = useState('');
 	const [error, setError] = useState(null);
 	const [show, setShow] = useState(false);
 	
 	const navigate = useNavigate();
 	
 	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);
 	
 	const LOGIN_MUTATION = gql`
		mutation LoginProfesional($rut: Int!, $clave: String!) {
      			loginProfesional(rut: $rut, clave: $clave) {
        			token
        			success
        			message
      			}
    		}
    	`;
 	
 	const [loginProfesional] = useMutation(LOGIN_MUTATION);
 	
	const handleLogin = async (e) => {
		e.preventDefault();
    		try {
      			const { data } = await loginProfesional({ variables: { rut: parseInt(rut), clave } });
      			sessionStorage.clear();
      			if (data.loginProfesional.success) {
        			console.log('Token recibido de la mutación:', data.loginProfesional.token);
        			sessionStorage.token = data.loginProfesional.token;
        			sessionStorage.loggedInProf = true;
        			sessionStorage.rut = rut;
        			navigate('/HomeAdministrador')
        			window.location.reload();
      			} else {
				console.error('Error de autenticación:', data.loginProfesional.message);
				setError(data.loginProfesional.message);
				handleShow();
				setRut('');
				setClave('');
      			}
    		} catch (error) {
			console.error('Error de autenticación:', error.message);
		        setError('Error de autenticación. Por favor, inténtalo nuevamente.');
		        handleShow();
    		}
  	};
    	return (
    		<div>
    			<BarraNavLogOut />
			<div>
				<Modal show={show} 
				  	onHide={handleClose}>
			       		<Modal.Header closeButton>
				  		<Modal.Title>
				  			Error
				  		</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Alert key={'danger'} 
							variant={'danger'}>
				  				Rut o contraseña incorrectos
						</Alert>
					</Modal.Body>
			       		<Modal.Footer>
				 		<Button variant="secondary" 
				 			onClick={handleClose}>
				    				Cerrar
				 		</Button>
					</Modal.Footer>
			      	</Modal>
				<div className="container p-4 mt-3 rounded-4" style={{border: '2px solid black'}}>
					<h2>
				    		Inicio de Sesion
				    	</h2>
				    	<Form onSubmit={handleLogin}>
					    	<div className="mb-3 mt-2">
							<label htmlFor="email">
								Rut:
							</label>
							<input type="text" 
								className="form-control" 
								id="rut" 
								placeholder="Ingresa tu RUT"
								value={rut}
				    				onChange={(e) => setRut(e.target.value)}
								name="rut"/>
					      	</div>
					      	<div className="mb-3">
							<label htmlFor="pwd">
								Contraseña:
							</label>
							<input type="password" 
								className="form-control" 
								id="pwd" 
								placeholder="********"
								value={clave}
								onChange={(e) => setClave(e.target.value)}
								name="pswd"/>
					      	</div>
					      	<div className="form-check mb-3">
							<label className="form-check-label">
						  		<input className="form-check-input" 
						  			type="checkbox" 
						  			name="remember"></input>
										Recordar Datos
							</label>
					      	</div>
					      	<button type="submit" 
							className="btn custom-button" 
							style={{border: "1px solid black"}}>
								Autenticar
						</button>
					</Form>
				</div>
			</div>
    		</div>
    	);
}

export default InicioSesionAdmin;

