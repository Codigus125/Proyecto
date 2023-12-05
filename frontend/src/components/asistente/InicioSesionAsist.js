import React, { useState } from 'react';
import { useMutation, useQuery, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import logo from '../../images/Logo_Fundacion.png';
import historial from '../general/historial';
import BarraNavLogOut from '../general/BarraNavLogOut';


function InicioSesionAsist() {
	const [rut, setRut] = useState('');
	const [correo, setCorreo] = useState ('');
 	const [clave, setClave] = useState('');
 	const [error, setError] = useState(null);
 	const [show, setShow] = useState(false);
	const [usuario, setUsuario] = useState('')
	
 	const navigate = useNavigate();
 	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);

	

	const GET_ASISTENTE = gql`
    query GetAsistentesRut($rut: Int!) {
      getAsistentesRut(rut: $rut) {
        nombre
        fecha_nac
        edad
        direccion
        comuna
        region
        nacionalidad
        telefono
        rut
        correo
        sexo
        diagnostico
		asignado
      }
    }
  `;
  const { data } = useQuery(GET_ASISTENTE, {
	variables: { rut: parseInt(rut) },
});

 	const LOGIN_MUTATION = gql`
		mutation LoginAsistente($rut: Int!, $clave: String!) {
      			loginAsistente(rut: $rut, clave: $clave) {
        			token
        			success
        			message
      			}
    		}
    	`;

const getUsuarios = async () => {		//obtiene los datos de los usuarios como Correo y Rut, si los obtiene los almacena.
		try {
		if (data && data.getAsistentesRut) {
		setUsuario(data.getAsistentesRut);
		sessionStorage.correo = usuario.correo;
		sessionStorage.asignado = usuario.asignado;
		} else {
		console.log('Rut o contraseñas mal ingresadas.');
		}
	} catch (error) {
		console.error('Error al obtener datos:', error.message);
	}
};

	const [loginAsistente] = useMutation(LOGIN_MUTATION);
	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const { data } = await loginAsistente({ variables: { rut: parseInt(rut), clave } });
			sessionStorage.clear();
			if (data.loginAsistente.success) {
				sessionStorage.token = data.loginAsistente.token;
				sessionStorage.loggedInAsist = true;
				sessionStorage.rut = rut;
				correoUsuario();
				getUsuarios();
				sessionStorage.correo = usuario.correo; {/* Esto almacena el correo*/}  
				navigate('/HomeAsistente');
				window.location.reload();
				
			  } else {
        			console.error('Error de autenticación:', data.loginAsistente.message);
					getUsuarios();
        			setError(data.loginAsistente.message);
        			handleShow()
        			setRut('');
        			setClave('');
        			
      			}
    		} catch (error) {
      			console.error('Error de autenticación:', error.message);
      			setError('Error de autenticación. Por favor, inténtalo nuevamente.'); 
      			handleShow()
    		}
	};
	const correoUsuario = () => {
		getUsuarios();
	}
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
							onClick={correoUsuario} 
							style={{border: "1px solid black"}}>
								Autenticar
						</button>
						
					</Form>
				</div>
			</div>
    		</div>
    	);
}

export default InicioSesionAsist;