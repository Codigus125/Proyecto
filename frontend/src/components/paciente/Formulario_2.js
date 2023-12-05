import React, { useState , useRef} from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import historial from '../general/historial';
import logo from '../../images/Logo_Fundacion.png';

function Formulario_2() {

    const Rut= sessionStorage.getItem('rut');
    const formRef = useRef();
    
    const handleSubmit = (e) => {
		e.preventDefault();
	};
    const ver = () => {
		  console.log(prevision);
        console.log(prevision_salud);
	};

    const [interdiccion,setInterdiccion] = useState("");
    const [tutor,setTutor] = useState("");

    const [prevision,setPrevision] = useState({
		  fonasa: false,
      banmedica: false,
      colmena:false,
      cruzblanca:false,
      nuevamasvida:false,
      capredena: false,
      dipreca: false,
      Otro:false,
		  Cual: String,
	});
    const [prevision_cual,setPrevision_cual] = useState("");
  
    const [afp,setAfp] = useState("");
    const [afp_nombre,setAfp_nombre] = useState("");
    const [pension,setPension] = useState("");
    const [prevision_salud,setPrevision_salud] = useState({
		  basica: false,
      invalidez_AFP: false,
      Otra:false,
		  Cual: String,
	});
  const [prevision_salud_cual,setPrevision_salud_cual] = useState("");

    const handleRadioChange = (name, value) => {
		if (name === 'interdiccion') {
		  setInterdiccion(value);
		}else if (name === "afp"){
            setAfp(value);
        }else if (name === 'pension'){
            setPension(value);
        }
	  };

    const NuevosDatos  ={
      interdiccion,
      tutor,
      prevision:{
        fonasa: prevision.fonasa,
        banmedica: prevision.banmedica,
        colmena: prevision.colmena,
        cruzblanca:prevision.cruzblanca,
        nuevamasvida:prevision.nuevamasvida,
        capredena: prevision.capredena,
        dipreca: prevision.dipreca,
        Otro: prevision.Otro,
        Cual: prevision_cual,
      },
      afp,
      afp_nombre,
      pension,
      prevision_salud:{
        basica: prevision_salud.basica,
        invalidez_AFP: prevision_salud.invalidez_AFP,
        Otra: prevision_salud.Otra,
        Cual: prevision_salud_cual,
      },
    }

    const UPDATE_PACIENTE_F2 = gql`
	  mutation Mutation($rut: String!, $nuevosDatos: Formulario2!) {
      updatePaciente_F2(rut: $rut, NuevosDatos: $nuevosDatos) {
        interdiccion
        tutor
        prevision {
          fonasa
          banmedica
          colmena
          cruzblanca
          nuevamasvida
          capredena
          dipreca
          Cual
        }
        afp
        afp_nombre
        pension
        prevision_salud {
          basica
          invalidez_AFP
          Otra
          Cual
        }
      }
    }
    `

    const [handleUpdate] = useMutation(UPDATE_PACIENTE_F2,{variables:{rut:Rut ,nuevosDatos:NuevosDatos }});

    const handleUpdatePacienteF2 = async (e) => {
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

    
    const handleFonasaCheckboxChange = (event) => {
		const { checked } = event.target;
		setPrevision({
		  ...prevision,
		  fonasa: checked,
		});
	  };
    const handleBanmedicaCheckboxChange = (event) => {
		const { checked } = event.target;
		setPrevision({
		  ...prevision,
		  banmedica: checked,
		});
	  };
    const handleColmenaCheckboxChange = (event) => {
		const { checked } = event.target;
		setPrevision({
		  ...prevision,
		  colmena: checked,
		});
	  };
    const handleCruzblancaCheckboxChange = (event) => {
		const { checked } = event.target;
		setPrevision({
		  ...prevision,
		  cruzblanca: checked,
		});
	  };
      const handleNuevamasvidaCheckboxChange = (event) => {
		const { checked } = event.target;
		setPrevision({
		  ...prevision,
		  nuevamasvida: checked,
		});
	  };
    const handleCapredenaCheckboxChange = (event) => {
		const { checked } = event.target;
		setPrevision({
		  ...prevision,
		  capredena: checked,
		});
	  };
    const handleDiprecaCheckboxChange = (event) => {
      const { checked } = event.target;
      setPrevision({
        ...prevision,
        dipreca: checked,
      });
    };
    const handleOtroSeguroCheckboxChange = (event) => {
      const { checked } = event.target;
      setPrevision({
        ...prevision,
        Otro: checked,
      });
    };

    const handleInvalidezCheckboxChange = (event) => {
		const { checked } = event.target;
		setPrevision_salud({
		  ...prevision_salud,
		  invalidez_AFP: checked,
		});
	  };
    const handleBasicaCheckboxChange = (event) => {
		const { checked } = event.target;
		setPrevision_salud({
		  ...prevision_salud,
		  basica: checked,
		});
    };
    const handleOtraCheckboxChange = (event) => {
      const { checked } = event.target;
      setPrevision_salud({
        ...prevision_salud,
        Otra: checked,
      });
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
            <h1 className="text-center">Antecedentes Sociales</h1>
            

			<div>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Interdicción</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio"
                        id='Sí'
                        value={interdiccion}
                        checked={interdiccion === "Sí"}
                        onChange={() => handleRadioChange('interdiccion',"Sí")}/>
                        <label className="form-check-label">Sí</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio"
                        id='No'
                        value={interdiccion}
                        checked={interdiccion === "No"}
                        onChange={() => handleRadioChange('interdiccion',"No")}/>
                        <label className="form-check-label">No</label>
                    </div>
                </div>

                <div className="mb-3">
                    <label>Si la respuesta anterior es Sí, nombre tutor legal</label>
                    <input type="text" className="form-control" placeholder="Nombre" 
                    value={tutor}
                    onChange={(e)=> setTutor(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label>Previsión de salud</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                        id='fonasa'
                        value= {prevision.fonasa}
                        checked={prevision.fonasa === true}
                        onChange={handleFonasaCheckboxChange}/>
                        <label className="form-check-label">FONASA</label>
                    </div>
                    
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                        id='banmedica'
                        value= {prevision.banmedica}
                        checked={prevision.banmedica === true}
                        onChange={handleBanmedicaCheckboxChange}/>
                        <label className="form-check-label">BANMEDICA</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                        id='colmena'
                        value= {prevision.colmena}
                        checked={prevision.colmena === true}
                        onChange={handleColmenaCheckboxChange}/>
                        <label className="form-check-label">COLMENA</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                        id='cruzblanca'
                        value= {prevision.cruzblanca}
                        checked={prevision.cruzblanca === true}
                        onChange={handleCruzblancaCheckboxChange}/>
                        <label className="form-check-label">CRUZBLANCA</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                        id='nuevamasvida'
                        value= {prevision.nuevamasvida}
                        checked={prevision.nuevamasvida === true}
                        onChange={handleNuevamasvidaCheckboxChange}/>
                        <label className="form-check-label">NUEVA MAS VIDA</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                        id='capredena'
                        value= {prevision.capredena}
                        checked={prevision.capredena === true}
                        onChange={handleCapredenaCheckboxChange}/>
                        <label className="form-check-label">CAPREDENA</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                        id='dipreca'
                        value= {prevision.dipreca}
                        checked={prevision.dipreca === true}
                        onChange={handleDiprecaCheckboxChange}/>
                        <label className="form-check-label">DIPRECA</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                        id='Otro'
                        value= {prevision.Otro}
                        checked={prevision.Otro === true}
                        onChange={handleOtroSeguroCheckboxChange}/>
                        <label className="form-check-label">Otro seguro</label>
                        <div className="mb-3">
                            <label>Cuál:</label>
                            <textarea className="form-control" rows="1"
                            value={prevision_cual}
                            onChange={(e) => setPrevision_cual(e.target.value)}></textarea>
                        </div>
                    </div>
                    
                </div>

                <div className="mb-3">
                    <label>Previsión social ¿Tiene AFP?</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio"
                        id='Sí'
                        value={afp}
                        checked={afp === "Sí"}
                        onChange={() => handleRadioChange('afp',"Sí")}/>
                        <label className="form-check-label">Sí</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio"
                        id='No'
                        value={afp}
                        checked={afp === "No"}
                        onChange={() => handleRadioChange('afp',"No")}/>
                        <label className="form-check-label">No</label>
                        <div className="mb-3">
                            <label>Cuál:</label>
                            <textarea className="form-control" rows="1"
                            value={afp_nombre}
                            onChange={(e) => setAfp_nombre(e.target.value)}></textarea>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label>Pensión</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio"
                        id='Sí'
                        value={pension}
                        checked={pension === "Sí"}
                        onChange={() => handleRadioChange('pension',"Sí")}/>
                        <label className="form-check-label">Sí</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio"
                        id='No'
                        value={pension}
                        checked={pension === "No"}
                        onChange={() => handleRadioChange('pension',"No")}/>
                        <label className="form-check-label">No</label>
                    </div>
                </div>

                <div className="mb-3">
                    <label>Previsión de salud</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                        id='basica'
                        value= {prevision_salud.basica}
                        checked={prevision_salud.basica === true}
                        onChange={handleBasicaCheckboxChange}/>
                        <label className="form-check-label">Básica solidaria</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                        id='invalidez_AFP'
                        value= {prevision_salud.invalidez_AFP}
                        checked={prevision_salud.invalidez_AFP === true}
                        onChange={handleInvalidezCheckboxChange}/>
                        <label className="form-check-label">Invalidez AFP</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                        id='Otro'
                        value= {prevision_salud.Otra}
                        checked={prevision_salud.Otra === true}
                        onChange={handleOtraCheckboxChange}/>
                        <label className="form-check-label">Otra</label>
                        <div className="mb-3">
                            <label>Cuál:</label>
                            <textarea className="form-control" rows="1"
                            value={prevision_salud_cual}
                            onChange={(e) => setPrevision_salud_cual(e.target.value)}></textarea>
                        </div>
                    </div>
                </div>

                <button className="btn btn-danger" onClick={ver}>Ver</button>

                <div className="btn-group-wide d-grip mb-2 text-center">
                    <button type='button' className='btn btn-secondary btn-outline-dark text-white col-3 m-1' 
                    onClick={() => historial.back()}>Volver</button>
                    <button type='button' className='btn btn-success btn-outline-dark text-white col-3 m-1'
                    onClick={handleUpdatePacienteF2}>Guardar</button>
                </div>
            </form>
        </div>
        </div>
        </div>
    );
}
}
    

export default Formulario_2;
