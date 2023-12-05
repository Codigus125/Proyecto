import React, { useState , useRef} from 'react';
import {gql, useMutation } from '@apollo/client';
import historial from '../general/historial';
import logo from '../../images/Logo_Fundacion.png';

function FormularioAsistente_1() {
	const Rut= sessionStorage.getItem('rut');


	

	
	const formRef = useRef();
	
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const [inscripcion, setInscripcion] = useState("");
	const [alergias,setAlergias] = useState("");
	const [contextura,setContextura]=useState("");
	const [diagnostico, setDiagnostico] = useState("");
	
	const NuevosDatos  = {
		alergias,
		contextura,
		inscripcion,
		diagnostico,
	};

	const handleRadioChange = (name,value) => {
		setInscripcion(value);
	  };

	  const UPDATE_ASISTENTE_F1_A = gql`
	  mutation UpdateAsistente_F1($rut: String!, $nuevosDatos: FormularioA1!) {
		updateAsistente_F1(rut: $rut, NuevosDatos: $nuevosDatos) {
		  nombre
		}
	  }`
	 
  
	const [handleUpdate] = useMutation(UPDATE_ASISTENTE_F1_A,{variables:{rut:Rut ,nuevosDatos:NuevosDatos }});

	const handleUpdateAsistenteF1_A = async (e) => {
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
										historial.push("/HomeAsistente"); 
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
                <h1 className="text-center">Antecedentes de salud</h1>				
                <form ref={formRef} onSubmit={handleSubmit}>

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
                    
					
                    <div className="mb-3">
                        <label>Diagnóstico</label>
                        <textarea className="form-control" rows="3"
						value={diagnostico}
						onChange={(e) => setDiagnostico(e.target.value)}></textarea>
                    </div>

					<div className="mb-3">
                        <label>Alergias</label>
                        <textarea className="form-control" rows="3"
						value={alergias}
						onChange={(e) => setAlergias(e.target.value)}></textarea>
                    </div>

					<div className="mb-3">
                        <label>Contextura física</label>
                        <textarea className="form-control" rows="3"
						value={contextura}
						onChange={(e) => setContextura(e.target.value)}></textarea>
                    </div>

                    <div className="btn-group-wide d-grip mb-2 text-center">
                        <button type='button' className='btn btn-secondary btn-outline-dark text-white col-3 m-1' 
						onClick={() => historial.back()}>Volver</button>
                        <button type='button' className='btn btn-success btn-outline-dark text-white col-3 m-1' 
						onClick={handleUpdateAsistenteF1_A}>Guardar</button>
                    </div>
                </form>
            </div>
        </div>
        );
    }

export default FormularioAsistente_1;

