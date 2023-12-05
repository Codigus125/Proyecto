import React, { useState , useRef} from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import historial from '../general/historial';
import logo from '../../images/Logo_Fundacion.png';

function FormularioAsistente_2() {

    const Rut= sessionStorage.getItem('rut');
    const formRef = useRef();
    
    const handleSubmit = (e) => {
		e.preventDefault();
	};
    

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

    const [ano_escolaridad,setAnoEscolaridad] = useState("");
    const [nvl_escolar,setNvlEscolar] = useState("");
    const [ano_ulti_nvl,setAno_Ulti_Nvl] = useState("");
    const [profesion,setProfesion] = useState("");

    const handleRadioChange = (name,value) => {
        setAfp(value);
        };

    const NuevosDatos  ={
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
      ano_escolaridad,
      nvl_escolar,
      ano_ulti_nvl,
      profesion,
    }

    const UPDATE_ASISTENTE_F2 = gql`
	  mutation Mutation($rut: String!, $nuevosDatos: FormularioA2!) {
      updateAsistente_F2(rut: $rut, NuevosDatos: $nuevosDatos) {
        prevision {
          fonasa
          banmedica
          colmena
          cruzblanca
          nuevamasvida
          capredena
          dipreca
          Otro
          Cual
        }
        afp
        afp_nombre
        ano_escolaridad
        nvl_escolar
        ano_ulti_nvl
        profesion
      }
    }
    `;

    const [handleUpdate] = useMutation(UPDATE_ASISTENTE_F2,{variables:{rut:Rut ,nuevosDatos:NuevosDatos }});

    const handleUpdateAsistenteF2 = async (e) => {
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
            <h1 className="text-center">Antecedentes Sociales</h1>
            

			<div>
            <form ref={formRef} onSubmit={handleSubmit}>
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
                        <label>Profesión u oficio</label>
                        <input type="text" className="form-control"
                         value={profesion}
                         onChange={(e) => setProfesion(e.target.value)}/>
                   </div>

                    <div className="mb-3">
                        <label>Años de escolaridad</label>
                        <input type="text" className="form-control"
                        value={ano_escolaridad}
                        onChange={(e) => setAnoEscolaridad(e.target.value)}
                        />
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


                <div className="btn-group-wide d-grip mb-2 text-center">
                    <button type='button' className='btn btn-secondary btn-outline-dark text-white col-3 m-1' 
                    onClick={() => historial.back()}>Volver</button>
                    <button type='button' className='btn btn-success btn-outline-dark text-white col-3 m-1'
                    onClick={handleUpdateAsistenteF2}>Guardar</button>
                </div>
            </form>
        </div>
        </div>
        </div>
    );
}
}
    

export default FormularioAsistente_2;
