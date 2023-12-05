import React, { useState , useRef} from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import historial from '../general/historial';
import logo from '../../images/Logo_Fundacion.png';

function Formulario_1() {
	const Rut= sessionStorage.getItem('rut');
	
	const formRef = useRef();
	const limpiar = () => {
		formRef.current.reset(); // Use ref.current to access the form and reset it
	  }
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const [inscripcion, setInscripcion] = useState("");
	
	const [discapacidad, setDiscapacidad] = useState({
		fisica: false,
		intelectual: false,
		psiquica: false,
		visual: false,
		auditiva: false,
	});
	const [grado,setGrado] = useState(0);
	const [temporalidad, setTemporalidad] = useState("");
	const [diagnostico, setDiagnostico] = useState("");
	const [comorbilidad, setComorbilidad] = useState("");
	const [medico, setMedico] = useState("");
	const [contMed, setContMed] = useState("");
	const [ayudasTec, setAyudasTec] = useState("");
	const [ayudasTecdesc, setAyudasTecdesc] = useState("");
	const [alergias,setAlergias] = useState("");
	const [dolor, setDolor]= useState("");
	const [contextura,setContextura]=useState("");
	const [usoFarm, setUsoFarm] = useState("");
	const [descFarm, setDescFarm] = useState("");
	
	const NuevosDatos  = {
		alergias,
		dolor,
		contextura,
		descFarm,
		usoFarm,
		ayudasTecdesc,
		ayudasTec,
		contMed,
		medico,
		comorbilidad,
		diagnostico,
		inscripcion,
		grado,
		discapacidad:{
			auditiva: discapacidad.auditiva,
			visual: discapacidad.visual,
			psiquica:discapacidad.psiquica,
			intelectual:discapacidad.intelectual,
			fisica:discapacidad.fisica,
		}
	};

	const handleFisicaCheckboxChange = (event) => {
		const { checked } = event.target;
		setDiscapacidad({
		  ...discapacidad,
		  fisica: checked,
		});
	  };

	const handleIntelectualCheckboxChange = (event) => {
		const { checked } = event.target;
		setDiscapacidad({
		  ...discapacidad,
		  intelectual: checked,
		});
	  };

	  const handlePsiquicaCheckboxChange = (event) => {
		const { checked } = event.target;
		setDiscapacidad({
		  ...discapacidad,
		  psiquica: checked,
		});
	  };
	  const handleVisualCheckboxChange = (event) => {
		const { checked } = event.target;
		setDiscapacidad({
		  ...discapacidad,
		  visual: checked,
		});
	  };
	  const handleAuditivaCheckboxChange = (event) => {
		const { checked } = event.target;
		setDiscapacidad({
		  ...discapacidad,
		  auditiva: checked,
		});
	  };
	

	const handleRadioChange = (name, value) => {
		if (name === 'temporalidad') {
		  setTemporalidad(value);
		}else if (name === 'inscripcion') {
		  setInscripcion(value);
		}else if (name === 'ayudasTec') {
			setAyudasTec(value);
		}else if (name === 'usoFarm') {
			setUsoFarm(value);
		}
	  };

	  const UPDATE_PACIENTE_F1 = gql`
	  mutation Mutation($rut: String!, $nuevosDatos: Formulario1!) {
		updatePaciente_F1(rut: $rut, NuevosDatos: $nuevosDatos) {
		  discapacidad {
			fisica
			intelectual
			psiquica
			visual
			auditiva
		  }
		  inscripcion
		  grado
		  diagnostico
		  comorbilidad
		  medico
		  contMed
		  ayudasTec
		  ayudasTecdesc
		  alergias
		  dolor
		  contextura
		  usoFarm
		  descFarm
		}
	  }
	  `
  
	const [handleUpdate] = useMutation(UPDATE_PACIENTE_F1,{variables:{rut:Rut ,nuevosDatos:NuevosDatos }});

	const handleUpdatePacienteF1 = async (e) => {
			e.preventDefault();
			try {
				const { data } = await handleUpdate({
					variables: {
					rut: Rut,
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
		  

	{
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
								Rut: {Rut}
							</p>
						</div>
					</div>
				</nav>
			
            <div className="container pt-3 pb-2 mt-2 text-bg border border-2 border-dark rounded col-12">
                <h1 className="text-center">Antecedentes de discapacidad y salud</h1>				
                <form ref={formRef} onSubmit={handleSubmit}> {/*-------------------------------------------> Botón Primera opción: Sí o No*/}
                    <div className="mb-3">
                        <label>¿Está inscrito en el Registro Nacional de la Discapacidad?</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio"
							id='si'
							value={inscripcion}
							checked={inscripcion === "si"}
							onChange={() => handleRadioChange('inscripcion',"si")}/>
                            <label className="form-check-label">Sí</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio"
							id='no'
							value={inscripcion}
							checked={inscripcion === "no"}
							onChange={() => handleRadioChange('inscripcion',"no")}/>
                            <label className="form-check-label">No</label>
                        </div>
                    </div>
					<div>
						
					</div>
					{/* Casilla con los tipos de discapacidades que posee el paciente. */}
                    <div className="mb-3">
                        <label>Tipo de discapacidad</label>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"
							id='fisica'
							value= {discapacidad.fisica}
							checked={discapacidad.fisica === true}
							onChange={handleFisicaCheckboxChange}/>
                            <label className="form-check-label">Física</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"
							id='intelectual'
							checked={discapacidad.intelectual === true}
							onChange={handleIntelectualCheckboxChange}/>
                            <label className="form-check-label">Intelectual</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"
							id='psiquica'
							checked={discapacidad.psiquica === true}
							onChange={handlePsiquicaCheckboxChange}/>
                            <label className="form-check-label">Psíquica</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"
							id='visual'
							checked={discapacidad.visual === true}
							onChange={handleVisualCheckboxChange}/>
                            <label className="form-check-label">Visual</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"
							id='auditiva'
							checked={discapacidad.auditiva === true}
							onChange={handleAuditivaCheckboxChange}/>
                            <label className="form-check-label">Auditiva</label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label>Grado</label>
                        <input type="number" className="form-control" placeholder="%"
						value={grado}
						onChange={(e) => setGrado(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label>Temporalidad</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio"
							id='Permanente'
							value={temporalidad}
							checked={temporalidad === "Permanente"}
							onChange={() => handleRadioChange('temporalidad',"Permanente")}/>
                            <label className="form-check-label">Permanente</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio"
							id='Transitoria'
							value={temporalidad}
							checked={temporalidad === "Transitoria"}
							onChange={() => handleRadioChange('temporalidad',"Transitoria")}/>
                            <label className="form-check-label">Transitoria</label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label>Diagnóstico</label>
                        <textarea className="form-control" rows="3"
						value={diagnostico}
						onChange={(e) => setDiagnostico(e.target.value)}></textarea>
                    </div>

                    <div className="mb-3">
                        <label>Comorbilidad</label>
                        <input type="text" className="form-control"
						value={comorbilidad}
						onChange={(e) => setComorbilidad(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label>Médico tratante</label>
                        <input type="text" className="form-control" placeholder="Nombre y Cargo"
						value={medico}
						onChange={(e) => setMedico(e.target.value)} />
                    </div>

					<div className="mb-3">
                        <label>Contacto médico tratante</label>
                        <input type="text" className="form-control" placeholder="Mail y Fono"
						value={contMed}
						onChange={(e) => setContMed(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label>¿Utiliza ayudas técnicas?</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio"
							id='Sí'
							value={ayudasTec}
							checked={ayudasTec === "Sí"}
							onChange={() => handleRadioChange('ayudasTec',"Sí")}/>
                            <label className="form-check-label">Sí</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio"
							id='No'
							value={ayudasTec}
							checked={ayudasTec === "No"}
							onChange={() => handleRadioChange('ayudasTec',"No")}/>
                            <label className="form-check-label">No</label>
                        </div>
                    </div>

					<div className="mb-3">
                        <label>¿Cuáles?</label>
                        <input type="text" className="form-control"
						value={ayudasTecdesc}
						onChange={(e) => setAyudasTecdesc(e.target.value)}/>
                    </div>

					<div className="mb-3">
                        <label>Alergias</label>
                        <textarea className="form-control" rows="3"
						value={alergias}
						onChange={(e) => setAlergias(e.target.value)}></textarea>
                    </div>

					<div className="mb-3">
                        <label>Presencia de dolor</label>
                        <textarea className="form-control" placeholder="Indicar características del mismo, aparición, con que tratamiento disminuye o aumenta" rows="3"
						value={dolor}
						onChange={(e) => setDolor(e.target.value)}></textarea>
                    </div>

					<div className="mb-3">
                        <label>Contextura física</label>
                        <textarea className="form-control" rows="3"
						value={contextura}
						onChange={(e) => setContextura(e.target.value)}></textarea>
                    </div>

					<div className="mb-3">
                        <label>Uso de fármacos</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio"
							id='Sí'
							value={usoFarm}
							checked={usoFarm === "Sí"}
							onChange={() => handleRadioChange('usoFarm',"Sí")}/>
                            <label className="form-check-label">Sí</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio"
							id='No'
							value={usoFarm}
							checked={usoFarm === "No"}
							onChange={() => handleRadioChange('usoFarm',"No")}/>
                            <label className="form-check-label">No</label>
                        </div>
                    </div>

					<div className="mb-3">
                        <label>Medicamentos</label>
                        <textarea className="form-control" rows="3"
						value={descFarm}
						onChange={(e) => setDescFarm(e.target.value)}></textarea>
                    </div>


                    <div className="btn-group-wide d-grip mb-2 text-center">
                        <button type='button' className='btn btn-secondary btn-outline-dark text-white col-3 m-1' 
						onClick={() => historial.back()}>Volver</button>
                        <button type='button' className='btn btn-success btn-outline-dark text-white col-3 m-1' 
						onClick={handleUpdatePacienteF1}>Guardar</button>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}
export default Formulario_1;

