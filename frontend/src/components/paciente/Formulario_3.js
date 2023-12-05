import React, { useState , useRef} from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import historial from '../general/historial';
import logo from '../../images/Logo_Fundacion.png';




function Formulario_3() {
	const Rut= sessionStorage.getItem('rut');
    
    const formRef = useRef();
	const limpiar = () => {
		formRef.current.reset(); // Use ref.current to access the form and reset it
	  }
	const handleSubmit = (e) => {
		e.preventDefault();
        
	};
    
    const [acompanante,setAcompañante] = useState({
        padre: false,
        madre: false,
        hermanos: false,
        abuelos: false,
        pareja : false,
        hijos: false,
        amigos: false,
        solo: false,
        otrosA: false,
        cual: String
    });
    const [acompañante_cual,setAcompañante_cual] = useState("")

     
    const [relacionfamiliar,setRelacionfamiliar] = useState("");
    const [desc_vivienda,setDescvivienda] = useState("");
    const [ano_escolaridad,setAnoEscolaridad] = useState("");
    const [nvl_escolar,setNvlEscolar] = useState("");
    const [ano_ulti_nvl,setAno_Ulti_Nvl] = useState("");
    const [profesion,setProfesion] = useState("");


    const [redes,setRedes] = useState({

        religion: false,
        salud: false,
        amistades: false,
        recreacion : false,
        familia: false,
        trabajo: false,
        comunitario: false,
        politico: false,
        otrosR: false,
        cual:String
    });
    const [redes_cual,setRedes_cual] = useState("");

    const NuevosDatos  ={
      acompanante:{
        padre: acompanante.padre,
        madre: acompanante.madre,
        hermanos: acompanante.hermanos,
        abuelos: acompanante.abuelos,
        pareja : acompanante.pareja,
        hijos: acompanante.hijos,
        amigos: acompanante.amigos,
        solo: acompanante.solo,
        otrosA: acompanante.otrosA,
        cual: acompañante_cual
      },
      relacionfamiliar,
      desc_vivienda,
      ano_escolaridad,
      nvl_escolar,
      ano_ulti_nvl,
      profesion,
      redes:{
        religion: redes.religion,
        salud: redes.salud,
        amistades: redes.amistades,
        recreacion : redes.recreacion,
        familia: redes.familia,
        trabajo: redes.trabajo,
        comunitario: redes.comunitario,
        politico: redes.politico,
        otrosR: redes.otrosR,
        cual: redes_cual
      }
    };

    const UPDATE_PACIENTE_F3 = gql`
	  mutation Mutation($rut: String!, $nuevosDatos: Formulario3!) {
      updatePaciente_F3(rut: $rut, NuevosDatos: $nuevosDatos) {
        redes {
          religion
          salud
          amistades
          recreacion
          familia
          trabajo
          comunitario
          politico
          otrosR
          cual
        }
        profesion
        ano_ulti_nvl
        nvl_escolar
        ano_escolaridad
        desc_vivienda
        acompanante {
          padre
          madre
          hermanos
          abuelos
          pareja
          hijos
          amigos
          solo
          otrosA
          cual
        }
        relacionfamiliar
      }
    }
    `
    
    
    const handleReligionCheckboxChange = (event) => {
		const { checked } = event.target;
		setRedes({
		  ...redes,
		  religion: checked,
		});
	  };
      const handleSaludCheckboxChange = (event) => {
		const { checked } = event.target;
		setRedes({
		  ...redes,
		  salud: checked,
		});
	  };
      const handleAmistadesCheckboxChange = (event) => {
		const { checked } = event.target;
		setRedes({
		  ...redes,
		  amistades: checked,
		});
	  };
      const handleRecreacionCheckboxChange = (event) => {
		const { checked } = event.target;
		setRedes({
		  ...redes,
		  recreacion: checked,
		});
	  };
      const handleFamiliaCheckboxChange = (event) => {
		const { checked } = event.target;
		setRedes({
		  ...redes,
		  familia: checked,
		});
	  };
      const handleTrabajoCheckboxChange = (event) => {
		const { checked } = event.target;
		setRedes({
		  ...redes,
		  trabajo: checked,
		});
	  };
      const handleComunitarioCheckboxChange = (event) => {
		const { checked } = event.target;
		setRedes({
		  ...redes,
		  comunitario: checked,
		});
	  };
      const handlePoliticoCheckboxChange = (event) => {
		const { checked } = event.target;
		setRedes({
		  ...redes,
		  politico: checked,
		});
	  };
      const handleOtrosRCheckboxChange = (event) => {
		const { checked } = event.target;
		setRedes({
		  ...redes,
		  otrosR: checked,
		});
	  };
      ///////////
      const handlePadreCheckboxChange = (event) => {
		const { checked } = event.target;
		setAcompañante({
		  ...acompanante,
		  padre: checked,
		});
	  };
      const handleMadreCheckboxChange = (event) => {
		const { checked } = event.target;
		setAcompañante({
		  ...acompanante,
		  madre: checked,
		});
	  };
      const handleHermanosCheckboxChange = (event) => {
		const { checked } = event.target;
		setAcompañante({
		  ...acompanante,
		  hermanos: checked,
		});
	  };
      const handleAbuelosCheckboxChange = (event) => {
		const { checked } = event.target;
		setAcompañante({
		  ...acompanante,
		  abuelos: checked,
		});
	  };
      const handleParejaCheckboxChange = (event) => {
		const { checked } = event.target;
		setAcompañante({
		  ...acompanante,
		  pareja: checked,
		});
	  };
      const handleHijosCheckboxChange = (event) => {
		const { checked } = event.target;
		setAcompañante({
		  ...acompanante,
		  hijos: checked,
		});
	  };
      const handleAmigosCheckboxChange = (event) => {
		const { checked } = event.target;
		setAcompañante({
		  ...acompanante,
		  amigos: checked,
		});
	  };
      const handleSoloCheckboxChange = (event) => {
		const { checked } = event.target;
		setAcompañante({
		  ...acompanante,
		  solo: checked,
		});
	  };
      const handleOtrosACheckboxChange = (event) => {
		const { checked } = event.target;
		setAcompañante({
		  ...acompanante,
		  otrosA: checked,
		});
	  };

    const [handleUpdate] = useMutation(UPDATE_PACIENTE_F3,{variables:{rut:Rut ,nuevosDatos:NuevosDatos }});

    const handleUpdatePacienteF3 = async (e) => {
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
                <h1 className="text-center">Antecedentes Contextuales</h1>

                <form ref={formRef} onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label>¿Con quién vives?</label>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"
                            id='padre'
							              value= {acompanante.padre}
                            checked={acompanante.padre === true}
                            onChange={handlePadreCheckboxChange}/>
                            <label className="form-check-label">padre</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"
                             id='hermanos'
                             value= {acompanante.hermanos}
                             checked={acompanante.hermanos === true}
                             onChange={handleHermanosCheckboxChange}/>
                                          
                            <label className="form-check-label">Hermanos/as</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"
                            id='abuelos'
                            value= {acompanante.abuelos}
                            checked={acompanante.abuelos === true}
                            onChange={handleAbuelosCheckboxChange}
                            />
                            <label className="form-check-label">Abuelos/as</label>
                        </div>
						<div className="form-check">
                            <input className="form-check-input" type="checkbox"
                            id='pareja'
                            value= {acompanante.pareja}
                            checked={acompanante.pareja === true}
                            onChange={handleParejaCheckboxChange}
                            />
                            <label className="form-check-label">Pareja</label>
                        </div>
						<div className="form-check">
                            <input className="form-check-input" type="checkbox"
                             id='hijos'
                             value= {acompanante.hijos}
                             checked={acompanante.hijos === true}
                             onChange={handleHijosCheckboxChange}
                            />
                            <label className="form-check-label">Hijos/as</label>
                        </div>
						<div className="form-check">
                            <input className="form-check-input" type="checkbox"
                             id='amigos'
                             value= {acompanante.amigos}
                             checked={acompanante.amigos === true}
                             onChange={handleAmigosCheckboxChange}/>
                            <label className="form-check-label">Amigos/as</label>
                        </div>
						<div className="form-check">
                            <input className="form-check-input" type="checkbox"
                             id='solo'
                             value= {acompanante.solo}
                             checked={acompanante.solo === true}
                             onChange={handleSoloCheckboxChange}/>
                            <label className="form-check-label">Solo/a</label>
                        </div>
						<div className="form-check">
                            <input className="form-check-input" type="checkbox"
                             id='otros'
                             value= {acompanante.otrosA}
                             checked={acompanante.otrosA === true}
                             onChange={handleOtrosACheckboxChange}/>
                            <label className="form-check-label">Otra</label>
							<div className="mb-3">
								<label>Cuál:</label>
								<textarea className="form-control" rows="1"
                value={acompañante_cual}
                onChange={(e) => setAcompañante_cual(e.target.value)}></textarea>
							</div>
                        </div>
                    </div>

					<div className="mb-3">
                        <label>¿Cómo es su relación con sus familiares?</label>
                        <textarea className="form-control" rows="3"
                        value={relacionfamiliar}
                        onChange={(e) => setRelacionfamiliar(e.target.value)}></textarea>
                    </div>
                    <div className="mb-3">
                        <label>Redes de apoyo</label>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"
                             id='religion'
                             value= {redes.religion}
                             checked={redes.religion === true}
                             onChange={handleReligionCheckboxChange}/>
                            <label className="form-check-label">Religión</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"
                             id='salud'
                             value= {redes.salud}
                             checked={redes.salud === true}
                             onChange={handleSaludCheckboxChange}/>
                            <label className="form-check-label">Salud</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"
                             id='amistades'
                             value= {redes.amistades}
                             checked={redes.amistades === true}
                             onChange={handleAmistadesCheckboxChange}/>
                            <label className="form-check-label">Amistades</label>
                        </div>
						<div className="form-check">
                            <input className="form-check-input" type="checkbox"
                             id='recreacion'
                             value= {redes.recreacion}
                             checked={redes.recreacion === true}
                             onChange={handleRecreacionCheckboxChange}/>
                            <label className="form-check-label">Recreación</label>
                        </div>
						<div className="form-check">
                            <input className="form-check-input" type="checkbox"
                             id='familia'
                             value= {redes.familia}
                             checked={redes.familia === true}
                             onChange={handleFamiliaCheckboxChange}/>
                            <label className="form-check-label">Familia</label>
                        </div>
						<div className="form-check">
                            <input className="form-check-input" type="checkbox"
                             id='trabajo'
                             value= {redes.trabajo}
                             checked={redes.trabajo === true}
                             onChange={handleTrabajoCheckboxChange}/>
                            <label className="form-check-label">Trabajo</label>
                        </div>
						<div className="form-check">
                            <input className="form-check-input" type="checkbox"
                             id='comunitario'
                             value= {redes.comunitario}
                             checked={redes.comunitario === true}
                             onChange={handleComunitarioCheckboxChange}/>
                            <label className="form-check-label">Comunitario</label>
                        </div>
						<div className="form-check">
                            <input className="form-check-input" type="checkbox"
                             id='politico'
                             value= {redes.politico}
                             checked={redes.politico === true}
                             onChange={handlePoliticoCheckboxChange}/>
                            <label className="form-check-label">Político</label>
                        </div>
						<div className="form-check">
                            <input className="form-check-input" type="checkbox"
                             id='otros'
                             value= {redes.otrosR}
                             checked={redes.otrosR === true}
                             onChange={handleOtrosRCheckboxChange}/>
                            <label className="form-check-label">Otros</label>
							<div className="mb-3">
								<label>Cuál:</label>
								<textarea className="form-control" rows="1"
                                value={redes_cual}
                                onChange={(e) => setRedes_cual(e.target.value)}></textarea>
							</div>
                        </div>
                    </div>

					<div className="mb-3">
                        <label>Indique cómo es su vivienda: incluir características generales como tipo, baño, accesibilidad, dormitorio independiente, teletrabajo, etc.)</label>
                        <textarea className="form-control" rows="3"
                        value={desc_vivienda}
                        onChange={(e) => setDescvivienda(e.target.value)}
                        ></textarea>
                    </div>

                    
					<div className="mb-3">
                        <label>Último nivel de estudios</label>
                        <input type="text" className="form-control"
                         value={ano_ulti_nvl}
                         onChange={(e) => setAno_Ulti_Nvl(e.target.value)}
                        />
                    </div>

					<div className="mb-3">
                        <label>Año último nivel de estudios</label>
                        <input type="text" className="form-control"
                         value={nvl_escolar}
                         onChange={(e) => setNvlEscolar(e.target.value)}/>
                    </div>

					<div className="mb-3">
                        <label>Profesión u oficio</label>
                        <input type="text" className="form-control"
                         value={profesion}
                         onChange={(e) => setProfesion(e.target.value)}/>
                    </div>
	
                    <div className="btn-group-wide d-grip mb-2 text-center">
                        <button type='button' className='btn btn-secondary btn-outline-dark text-white col-3 m-1' 
                        onClick={() => historial.back()}>Volver</button>
                        <button type='button' className='btn btn-success btn-outline-dark text-white col-3 m-1'
                        onClick={handleUpdatePacienteF3}>Guardar</button>
                    </div>
                </form>
            </div>
            </div>
        );
    }


export default Formulario_3;
