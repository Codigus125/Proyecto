import React, { useState,useEffect  } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import camera from '../../images/camara.png';
import historial from '../general/historial';
import logo from '../../images/Logo_Fundacion.png';

function ModUsuarioAdmin() {

	const Rut = sessionStorage.getItem('rut');
	const [correo, setCorreo] = useState("");
	const [rut, setRut] = useState("");
	const [nombre, setNombre] = useState("");
	const [telefono, setTelefono] = useState("");

	const NuevosDatos = {
		nombre,
		correo,
		telefono
	};

	


	const [show, setShow] = useState(false);

	const [error, setError] = useState(null);

	const UPDATE_PROFESIONAL = gql`
	mutation Mutation($rut: String!, $nuevosDatos: Profesional_I) {
		updateProfesional(rut: $rut, NuevosDatos: $nuevosDatos) {
		  nombre
		  telefono
		  correo
		}
	  }
		`;

	const GET_PROFESIONAL = gql`
	query Query($rut: Int!) {
		getProfesionalRut(rut: $rut) {
		  nombre
		  telefono
		  correo
		}
	  }
	  `;

	const [handleUpdate] = useMutation(UPDATE_PROFESIONAL, { variables: { rut: Rut, nuevosDatos: NuevosDatos } });

	const handleUpdateProfesional = async (e) => {
		e.preventDefault();
		try {
			const { data } = await handleUpdate({
				variables: {
					rut: Rut,
					nuevosDatos: NuevosDatos,
				},
			});

			// Manejar la respuesta de la mutación aquí, como mostrar un mensaje de éxito o redirigir a otra página
			console.log('Mutación exitosa:', data);
		} catch (error) {
			// Manejar cualquier error que ocurra durante la mutación aquí
			console.error('Error en la mutación:', error);
		}
	};

	const { loading, errorr, data } = useQuery(GET_PROFESIONAL, {
		variables: { rut: parseInt(Rut) },
	});

	const getProfesionalRut = async () => {
		if (data.getProfesionalRut) {
			const profesional = data.getProfesionalRut;
			setNombre(data.getProfesionalRut.nombre);
			setTelefono(data.getProfesionalRut.telefono);
			setCorreo(data.getProfesionalRut.correo);
		} else {
			console.log("error");
		}
	};
	

	return (
		<div>
			<nav className="navbar navbar-fixed-top navbar-expand pt-0 pb-0"
				style={{ backgroundImage: "#ff5733" }}>
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
								style={{ cursor: 'pointer' }} />
							<p className='h1'
								style={{ color: '#fb4d72', marginTop: '10px', marginLeft: '30px' }}>
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
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
				<div class="container pt-3 pb-2 mt-2 text-bg border border-2 border-dark rounded col-12">
					<h1 class="text-center">
						Actualizar Datos
					</h1>

					<form onSubmit={getProfesionalRut}>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<div className="input-group d-flex mb-2 w-50">
								<span className="input-group-text mb-2">
									Nombre
								</span>
								<input type="text"
									className="form-control mb-2 w-35"
									placeholder="Nombres y apellidos" />
							</div>

						</div>

						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<div className="input-group d-flex mb-2 w-50">
								<span className="input-group-text mb-2">
									Telefono
								</span>
								<input type="text"
									className="form-control mb-2 w-35"
									placeholder="Telefono" />
							</div>
							<div className="input-group d-flex mb-2 w-50">
								<span className="input-group-text mb-2">
									Correo
								</span>
								<input type="text"
									className="form-control mb-2"
									placeholder="Correo" />
							</div>
						</div>


						<div class="btn-group-wide d-grip mb-2 text-center">
							<button type='button'
								className='btn btn-secondary btn-outline-dark text-white col-3 m-1'
								onClick={() => historial.back()}>
								Volver
							</button>
							<button type='button'
								className='btn btn-success btn-outline-dark text-white col-3 m-1'
								onClick={handleUpdateProfesional}>
								Actualizar
							</button>
							<button type='button'
								className='btn btn-danger btn-outline-dark text-white col-3 m-1'>
								Borrar
							</button>

						</div>
					</form>
				</div>
			</div>
		</div>
	);
}


export default ModUsuarioAdmin;
