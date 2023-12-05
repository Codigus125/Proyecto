import historial from '../general/historial.js';
import React, { useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import Form from 'react-bootstrap/Form';
import logo from '../../images/Logo_Fundacion.png';

function ModUsuarioAsistenteAdmin(){

	const Rut= sessionStorage.getItem('rut');

	const [rut, setRut] = useState();
	const [nombre, setNombre] = useState('');
	const [comuna, setComuna] = useState('');
	const [direccion, setDireccion] = useState('');
	const [edad, setEdad] = useState();
	const [fecha_nac, setFecha_nac] = useState();
	const [nacionalidad, setNacionalidad] = useState('');
	const [region, setRegion] = useState('');
	const [telefono, setTelefono] = useState();
	const [sexo, setSexo] = useState('');
	const [correo, setCorreo] = useState('');

	
	const [show, setShow] = useState(false);
	
	const [error, setError] = useState(null);

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
		  correo
		  
		  sexo
		}
	  }
		`;

	const UPDATE_ASISTENTE = gql`
	mutation Mutation($rut: String!, $nuevosDatos: Asistente_I) {
		updateAsistente(rut: $rut, NuevosDatos: $nuevosDatos) {
		  nombre
		  fecha_nac
		  edad
		  direccion
		  comuna
		  region
		  nacionalidad
		  telefono
		  correo
		  sexo
		}
	  }
	  `;

	const NuevosDatos={
		nombre,
		fecha_nac,
		edad,
		direccion,
		comuna,
		region,
		nacionalidad,
		telefono,
		correo,
		sexo,
	}

		
	
	const [handleUpdate] = useMutation(UPDATE_ASISTENTE,{variables:{rut:rut ,nuevosDatos:NuevosDatos }});
	
	const handleUpdateAsistente = async (e) => {
		e.preventDefault();
		try {
			console.log(typeof(rut))
			const { data } = await handleUpdate({
				variables: {
				rut: rut,
				nuevosDatos: NuevosDatos ,
				},
			});
	  
		  // Manejar la respuesta de la mutación aquí, como mostrar un mensaje de éxito o redirigir a otra página
		  console.log('Mutación exitosa:', data);
		} catch (error) {
		  // Manejar cualquier error que ocurra durante la mutación aquí
		  console.error('Error en la mutación:', error);
		}
	  };

	const { loading, errorr, data } = useQuery(GET_ASISTENTE, {
			variables: { rut: parseInt(rut) },
		});

	const handlegetAsistenteRut = async (e) => {
		e.preventDefault();
		  if (data.getAsistentesRut) {
			const asistente = data.getAsistentesRut;
			setNombre(asistente.nombre);
			setComuna(asistente.comuna);
			setCorreo(data.getAsistentesRut.correo);
			setDireccion(data.getAsistentesRut.direccion);
			setEdad(data.getAsistentesRut.edad);
			setFecha_nac(data.getAsistentesRut.fecha_nac);
			setNacionalidad(data.getAsistentesRut.nacionalidad);
			setRegion(data.getAsistentesRut.region);
			setTelefono(data.getAsistentesRut.telefono);
			setSexo(data.getAsistentesRut.sexo);
			setRut(rut)
		  }else{
			console.log("error")
		  }
	  };
	  
		const limpiarCampos = () => {
			setComuna('');
			setDireccion('');
			setEdad('');
			setFecha_nac('');
			setNacionalidad('');
			setNombre('');
			setRegion('');
			setSexo('');
			setTelefono('');
			setRut('');
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
				<div class="container pt-3 pb-2 mt-2 text-bg border border-2 border-dark rounded col-12">
					<h1 class="text-center">
						Actualizar Usuario Asistente
					</h1>
					<Form onSubmit={handlegetAsistenteRut}>
						<div class="input-group mb-5">
						<input class="form-control mb-2" 
										type="number" 
										id="barra" 
										placeholder='Ingresar Rut'
										value={rut}
										onChange={(e) => setRut(e.target.value)}/>
							<button class="btn btn-outline-secondary" 
								type="submit"
								id="button-addon2"
								onClick={handlegetAsistenteRut}>
									Buscar.
							</button>

						</div>
						</Form>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<div className="input-group d-flex mb-2 w-40">
								<span className="input-group-text mb-2">
									Nombre
								</span>
								<input type="text" 
									className="form-control mb-2 w-20"
									id='casilla-nombre' 
									placeholder="Nombres y apellidos"
									value={nombre}
										onChange={(e) => setNombre(e.target.value)}/>
							</div>
							<div class="input-group mb-3 w-50">
								<span class="input-group-text">
									Sexo
								</span>
								<select class="form-select" value={sexo} onChange={(e) => setSexo(e.target.value)}>
									<option value="Hombre">	Hombre</option>
									<option value="Mujer">	Mujer </option>
									<option value="Otro">	Otro</option>
								</select>
								
							</div>
							<div className="input-group d-flex mb-2 w-50">    
								<span className="input-group-text mb-2">
									Fecha de nacimiento
								</span>
								<input type="text" 
									className="form-control mb-2" 
									placeholder="DD/MM/AAAA" 
									value={fecha_nac}
										onChange={(e) => setFecha_nac(e.target.value)}/>

							</div>
						</div>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<div className="input-group d-flex mb-2 w-50">
								<span className="input-group-text mb-2">
									Edad
								</span>
								<input type="text" 
									className="form-control mb-2 w-35" 
									placeholder="Edad" 
									value={edad}
										onChange={(e) => setEdad(e.target.value)}/>
							</div>
							<div className="input-group d-flex mb-2 w-50">
								<span className="input-group-text mb-2">
									Direccion
								</span>
								<input type="text" 
								className="form-control mb-2 w-35" 
								placeholder="Direccion" 
								value={direccion}
										onChange={(e) => setDireccion(e.target.value)}/>
							</div>
							<div className="input-group d-flex mb-2 w-50">    
								<span className="input-group-text mb-2">
									Comuna
								</span>
								<input type="text" 
									className="form-control mb-2" 
									placeholder="Comuna" 
									value={comuna}
										onChange={(e) => setComuna(e.target.value)}/>
							</div>
						</div>
						<div class="row">
							<div class="input-group mb-3 w-50">
								<span class="input-group-text">
									Región
								</span>
								<select class="form-select"value={region} onChange={(e) => setRegion(e.target.value)}>
									<option value="Arica y Parinacota y Tarapacá">	Arica y Parinacota y Tarapacá</option>
									<option value="Antofagasta">	Antofagasta </option>
									<option value="Atacama y Coquimbo">	Atacama y Coquimbo</option>
									<option value="Valparaíso">	Valparaíso</option>
									<option value="O'Higgins">	O'Higgins</option>
									<option value="Ñuble, Biobío y La Araucanía">	Ñuble, Biobío y La Araucanía </option>
									<option value="La Araucanía">	La Araucanía</option>
									<option value="Los Ríos y Los Lagos">	Los Ríos y Los Lagos </option>
									<option value="Los Lagos y Aysén">	Los Lagos y Aysén</option>
									<option value="Magallanes">	Magallanes</option>
									<option value="Metropolitana de Santiago">	Metropolitana de Santiago</option>
								</select>
							</div>
							<div class="input-group d-flex mb-2 w-50">
								<span class="input-group-text mb-2 ">
									Nacionalidad
								</span>
								<input type="text" 
									class="form-control mb-2" 
									placeholder="Nacionalidad"
									value={nacionalidad}
										onChange={(e) => setNacionalidad(e.target.value)}>
								</input>
							</div>
						</div>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<div className="input-group d-flex mb-2 w-50">
								<span className="input-group-text mb-2">
									Telefono
								</span>
								<input type="text" 
									className="form-control mb-2 w-35" 
									placeholder="Telefono" 
									value={telefono}
										onChange={(e) => setTelefono(e.target.value)}/>
							</div>
							<div className="input-group d-flex mb-2 w-50">    
								<span className="input-group-text mb-2">
									Correo
								</span>
								<input type="text" 
									className="form-control mb-2" 
									placeholder="Correo"
									value={correo}
										onChange={(e) => setCorreo(e.target.value)} />
							</div>
						</div>
						
						<div class ="btn-group-wide d-grip mb-2 text-center">
							<button type='button' 
								className='btn btn-secondary btn-outline-dark text-white col-3 m-1' 
								onClick={() => historial.back()}>
									Volver
							</button>
							<button type='button' 
								className='btn btn-success btn-outline-dark text-white col-3 m-1'
								onClick={handleUpdateAsistente}>
									Actualizar
							</button>
							<button type='button' 
								className='btn btn-danger btn-outline-dark text-white col-3 m-1'
								onClick={limpiarCampos}>
								Borrar
							</button>	
						</div>
				</div>
			</div>
		);
}
export default ModUsuarioAsistenteAdmin;
