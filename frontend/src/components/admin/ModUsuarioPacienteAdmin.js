import historial from '../general/historial.js';
import React, { useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import Form from 'react-bootstrap/Form';
import logo from '../../images/Logo_Fundacion.png';

function ModUsuarioPacienteAdmin(){

	const Rut= sessionStorage.getItem('rut');

	const [rut, setRut] = useState();
	const [nombre, setNombre] = useState('');
	const [comuna, setComuna] = useState('');
	const [direccion, setDireccion] = useState('');
	const [edad, setEdad] = useState();
	const [fecha_nac, setFecha_nac] = useState();
	const [nacionalidad, setNacionalidad] = useState('');
	const [pers_contc, setPers_contc] = useState('');
	const [region, setRegion] = useState('');
	const [telef_contc, setTelef_contc] = useState();
	const [telefono, setTelefono] = useState();
	const [sexo, setSexo] = useState('');
	const [correo, setCorreo] = useState('');

	
	const [show, setShow] = useState(false);
	
	const [error, setError] = useState(null);

	const GET_PACIENTE = gql`
	query GetPacientesRut($rut: Int!) {
		getPacientesRut(rut: $rut) {
		  nombre
		  fecha_nac
		  edad
		  direccion
		  comuna
		  region
		  nacionalidad
		  telefono
		  correo
		  pers_contc
		  telef_contc
		  sexo
		  lunes {
			Lu_primero
			Lu_segundo
			Lu_tercero
			Lu_cuarto
			Lu_quinto
			Lu_sexto
			Lu_septimo
			Lu_octavo
			Lu_noveno
			Lu_decimo
			Lu_undecimo
			Lu_duodecimo
		  }
		}
	  }
		`;

	const UPDATE_PACIENTE = gql`
	mutation Mutation($rut: String!, $nuevosDatos: Paciente_I) {
		updatePaciente(rut: $rut, NuevosDatos: $nuevosDatos) {
		  nombre
		  fecha_nac
		  edad
		  direccion
		  comuna
		  region
		  nacionalidad
		  telefono
		  correo
		  pers_contc
		  telef_contc
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
		pers_contc,
		telef_contc,
		sexo,
	}
		
	
	const [handleUpdate] = useMutation(UPDATE_PACIENTE,{variables:{rut:rut ,nuevosDatos:NuevosDatos }});
	
	const handleUpdatePaciente = async (e) => {
		e.preventDefault();
		try {
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

	const { loading, errorr, data } = useQuery(GET_PACIENTE, {
			variables: { rut: parseInt(rut) },
		});

	const handlegetPacienteRut = async (e) => {
		e.preventDefault();
		  if (data.getPacientesRut) {
			const paciente = data.getPacientesRut;
			setNombre(paciente.nombre);
			setComuna(paciente.comuna);
			setCorreo(data.getPacientesRut.correo);
			setDireccion(data.getPacientesRut.direccion);
			setEdad(data.getPacientesRut.edad);
			setFecha_nac(data.getPacientesRut.fecha_nac);
			setNacionalidad(data.getPacientesRut.nacionalidad);
			setRegion(data.getPacientesRut.region);
			setTelefono(data.getPacientesRut.telefono);
			setSexo(data.getPacientesRut.sexo);
			setPers_contc(data.getPacientesRut.pers_contc);
			setRut(rut);
			setTelef_contc(data.getPacientesRut.telef_contc);
			console.log(data.getPacientesRut.lunes)
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
			setPers_contc('');
			setRegion('');
			setSexo('');
			setTelef_contc('');
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
						Actualizar Usuario Persona con Discapacidad
					</h1>
					<Form onSubmit={handlegetPacienteRut}>
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
								onClick={handlegetPacienteRut}>

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
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<div className="input-group d-flex mb-2 w-50">
								<span className="input-group-text mb-2">
									Persona contacto
								</span>
								<input type="text" 
								className="form-control mb-2 w-35" 
								placeholder="Nombre y apellido"
								value={pers_contc}
										onChange={(e) => setPers_contc(e.target.value)} />
							</div>
							<div className="input-group d-flex mb-2 w-50">    
								<span className="input-group-text mb-2">
									Telefono persona contacto
								</span>
								<input type="text" 
								className="form-control mb-2" 
								placeholder="Telefono"
								value={telef_contc}
										onChange={(e) => setTelef_contc(e.target.value)} />
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
								onClick={handleUpdatePaciente}>
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
export default ModUsuarioPacienteAdmin;
