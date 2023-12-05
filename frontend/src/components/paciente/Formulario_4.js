import React, { useState , useRef} from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import historial from '../general/historial';
import logo from '../../images/Logo_Fundacion.png';

function Formulario_4() {
	const Rut= sessionStorage.getItem('rut');
    
    const formRef = useRef();
	const limpiar = () => {
		formRef.current.reset(); // Use ref.current to access the form and reset it
	  }
	const handleSubmit = (e) => {
		e.preventDefault();
        
	};

	const[a_estudia,setA_Estudia]= useState("");
	const[a_trabaja,setA_trabaja]= useState("");
	const[a_act_comuni,setA_Act_Comuni]= useState("");
	const[a_act_hogar,setA_Act_Hogar]= useState("");
	const[a_otro,setA_Otro]= useState("");
	const[r_cual,setR_Cual]=useState("");
	const[a_cual,setA_Cual]=useState("");
	const[pref_asis,setPrefAsis]= useState("");




	const [r_estudia,setR_Estudia] = useState({

        e_nadie: false,
        e_familia: false,
        e_amistades: false,
        e_profesional_remunerado: false,
	});
	const [r_trabaja,setR_Trabaja] = useState({

        t_nadie: false,
        t_familia: false,
        t_amistades: false,
        t_profesional_remunerado: false,
	});
	const [r_actividadesC,setR_ActividadesC] = useState({

        ac_nadie: false,
		ac_familia: false,
        ac_amistades: false,
        ac_profesional_remunerado: false,
	});
	const [r_actividadesH,setR_ActividadesH] = useState({

        ah_nadie: false,
		ah_familia: false,
        ah_amistades: false,
        ah_profesional_remunerado: false,
	});
	const [r_otra,setR_Otra] = useState({

        o_nadie: false,
		o_familia: false,
        o_amistades: false,
        o_profesional_remunerado: false,
	});

	const NuevosDatos ={
		a_estudia,
		a_trabaja,
		a_act_comuni,
		a_act_hogar,
		a_otro,
		r_cual,
		a_cual,
		pref_asis,
		r_estudia:{
			e_nadie: r_estudia.e_nadie,
			e_familia: r_estudia.e_familia,
			e_amistades: r_estudia.e_amistades,
			e_profesional_remunerado: r_estudia.e_profesional_remunerado,
		},
		r_trabaja:{
			t_nadie: r_trabaja.t_nadie,
			t_familia: r_trabaja.t_familia,
			t_amistades: r_trabaja.t_amistades,
			t_profesional_remunerado: r_trabaja.t_profesional_remunerado,
		},
		r_actividadesC:{
			ac_nadie: r_actividadesC.ac_nadie,
			ac_familia: r_actividadesC.ac_familia,
			ac_amistades: r_actividadesC.ac_amistades,
			ac_profesional_remunerado: r_actividadesC.ac_profesional_remunerado,
		},
		r_actividadesH:{
			ah_nadie: r_actividadesH.ah_nadie,
			ah_familia: r_actividadesH.ah_familia,
			ah_amistades: r_actividadesH.ah_amistades,
			ah_profesional_remunerado: r_actividadesH.ah_profesional_remunerado,
		},
		r_otra:{
			o_nadie: r_otra.o_nadie,
			o_familia: r_otra.o_familia,
			o_amistades: r_otra.o_amistades,
			o_profesional_remunerado: r_otra.o_profesional_remunerado,
		}
	}

	const handleO_NadieCheckboxChange = (event) => {
		const { checked } = event.target;
		setR_Otra({
		  ...r_otra,
		  o_nadie: checked,
		});
	  };
      const handleO_familiaCheckboxChange = (event) => {
		const { checked } = event.target;
		setR_Otra({
		  ...r_otra,
		  o_familia: checked,
		});
	  };

      const handleO_amistadesCheckboxChange = (event) => {
		const { checked } = event.target;
		setR_Otra({
		  ...r_otra,
		  o_amistades: checked,
		});
	  };

      const handleO_profesional_remuneradoCheckboxChange = (event) => {
		const { checked } = event.target;
		setR_Otra({
		  ...r_otra,
		  o_profesional_remunerado: checked,
		});
	  };
	  ////////////////////////////////////////////
	  const handleE_NadieCheckboxChange = (event) => {
		const { checked } = event.target;
		setR_Estudia({
		  ...r_estudia,
		  e_nadie: checked,
		});
	  };
      const handleE_familiaCheckboxChange = (event) => {
		const { checked } = event.target;
		setR_Estudia({
		  ...r_estudia,
		  e_familia: checked,
		});
	  };

      const handleE_amistadesCheckboxChange = (event) => {
		const { checked } = event.target;
		setR_Estudia({
		  ...r_estudia,
		  e_amistades: checked,
		});
	  };


      const handleE_profesional_remuneradoCheckboxChange = (event) => {
		const { checked } = event.target;
		setR_Estudia({
		  ...r_estudia,
		  e_profesional_remunerado: checked,
		});
	  };
      ///////////////

      const handleT_NadieCheckboxChange = (event) => {
		const { checked } = event.target;
		setR_Trabaja({
		  ...r_trabaja,
          t_nadie: checked,
		});
	  };
      const handleT_familiaCheckboxChange = (event) => {
		const { checked } = event.target;
		setR_Trabaja({
		  ...r_trabaja,
          t_familia: checked,
		});
	  };


      const handleT_amistadesCheckboxChange = (event) => {
		const { checked } = event.target;
		setR_Trabaja({
		  ...r_trabaja,
          t_amistades: checked,
		});
	  };


      const handleT_profesional_remuneradoCheckboxChange = (event) => {
		const { checked } = event.target;
		setR_Trabaja({
		  ...r_trabaja,
          t_profesional_remunerado: checked,
		});
	  };
      /////////////////////////////////
      const handleA_NadieCheckboxChange = (event) => {
		const { checked } = event.target;
		setR_ActividadesH({
		  ...r_actividadesH,
		  ah_nadie: checked,
		});
	  };
      const handleA_FamiliaCheckboxChange = (event) => {
		const { checked } = event.target;
		setR_ActividadesH({
		  ...r_actividadesH,
		  ah_familia: checked,
		});
	  };
      const handleA_AmistadesCheckboxChange = (event) => {
		const { checked } = event.target;
		setR_ActividadesH({
		  ...r_actividadesH,
		  ah_amistades: checked,
		});
	  };
      const handleA_profesional_remuneradoCheckboxChange = (event) => {
		const { checked } = event.target;
		setR_ActividadesH({
		  ...r_actividadesH,
		  ah_profesional_remunerado: checked,
		});
	  };
       //////////////////////////////////////////////////////////////
	  const handleAH_NadieCheckboxChange = (event) => {
		const { checked } = event.target;
		setR_ActividadesC({
		  ...r_actividadesC,
		  ac_nadie: checked,
		});
	  };
      const handleAH_FamiliaCheckboxChange = (event) => {
		const { checked } = event.target;
		setR_ActividadesC({
		  ...r_actividadesC,
		  ac_familia: checked,
		});
	  };
      const handleAH_AmistadesCheckboxChange = (event) => {
		const { checked } = event.target;
		setR_ActividadesC({
		  ...r_actividadesC,
		  ac_amistades: checked,
		});
	  };
      const handleAH_profesional_remuneradoCheckboxChange = (event) => {
		const { checked } = event.target;
		setR_ActividadesC({
		  ...r_actividadesC,
		  ac_profesional_remunerado: checked,
		});
	  };
	  
	  const handleRadioChange = (name, value) => {
		if (name === 'a_estudia') {
            setA_Estudia(value);
		}else if (name === 'a_trabaja') {
            setA_trabaja(value);
		}else if (name === 'a_act_comuni') {
			setA_Act_Comuni(value);
		}else if (name === 'a_act_hogar') {
			setA_Act_Hogar(value);
        }else if (name === 'a_otro') {
			setA_Otro(value);       
		}else if (name === 'pref_asis') {
			setPrefAsis(value); 
		}
	  };

	  const UPDATE_PACIENTE_F4 = gql`
	  mutation Mutation($rut: String!, $nuevosDatos: Formulario4!) {
		updatePaciente_F4(rut: $rut, NuevosDatos: $nuevosDatos) {
		  r_otra {
			o_nadie
			o_familia
			o_amistades
			o_profesional_remunerado
		  }
		  pref_asis
		  a_cual
		  r_cual
		  a_otro
		  a_act_hogar
		  a_act_comuni
		  a_trabaja
		  a_estudia
		  r_trabaja {
			t_nadie
			t_familia
			t_amistades
			t_profesional_remunerado
		  }
		  r_actividadesH {
			ah_nadie
			ah_familia
			ah_amistades
			ah_profesional_remunerado
		  }
		  r_actividadesC {
			ac_nadie
			ac_familia
			ac_amistades
			ac_profesional_remunerado
		  }
		  r_estudia {
			e_nadie
			e_familia
			e_amistades
			e_profesional_remunerado
		  }
		}
	  }`

    const [handleUpdate] = useMutation(UPDATE_PACIENTE_F4,{variables:{rut:Rut ,nuevosDatos:NuevosDatos }});

    const handleUpdatePacienteF4 = async (e) => {
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
                <h1 className="text-center">Actividades de participación</h1>

                <form ref={formRef} onSubmit={handleSubmit}>
					<h2 className="text-center">Si trabaja o estudia, indique sus horarios y tipos de actividades que realiza</h2>
                    <h2>Nivel de apoyo requerido</h2>
					<div className="mb-3">
						<label>Estudia</label>
						<div className="form-check">
							<input className="form-check-input" type="radio" 
							id='Nunca'
							value={a_estudia}
							checked={a_estudia === "Nunca"}
							onChange={() => handleRadioChange('a_estudia',"Nunca")}/>
							<label className="form-check-label">Nunca</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio" 
							id='Sólo para algunas actividades'
							value={a_estudia}
							checked={a_estudia === "Sólo para algunas actividades"}
							onChange={() => handleRadioChange('a_estudia',"Sólo para algunas actividades")}/>
							<label className="form-check-label">Sólo para algunas actividades</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio"
							id='Para la mayoría de las actividades'
							value={a_estudia}
							checked={a_estudia === "Para la mayoría de las actividades"}
							onChange={() => handleRadioChange('a_estudia',"Para la mayoría de las actividades")}/>
							<label className="form-check-label">Para la mayoría de las actividades</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio"
							id='Para todas las actividades'
							value={a_estudia}
							checked={a_estudia === "Para todas las actividades"}
							onChange={() => handleRadioChange('a_estudia',"Para todas las actividades")}/>
							<label className="form-check-label">Para todas las actividades</label>
						</div>
					</div>

					<div className="mb-3">
						<label>Trabaja</label>
						<div className="form-check">
							<input className="form-check-input" type="radio"
							id='Nunca'
							value={a_trabaja}
							checked={a_trabaja === "Nunca"}
							onChange={() => handleRadioChange('a_trabaja',"Nunca")}/>
							<label className="form-check-label">Nunca</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio"
							id='Sólo para algunas actividades'
							value={a_trabaja}
							checked={a_trabaja === "Sólo para algunas actividades"}
							onChange={() => handleRadioChange('a_trabaja',"Sólo para algunas actividades")} />
							<label className="form-check-label">Sólo para algunas actividades</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio"
							id='Para la mayoría de las actividades'
							value={a_trabaja}
							checked={a_trabaja === "Para la mayoría de las actividades"}
							onChange={() => handleRadioChange('a_trabaja',"Para la mayoría de las actividades")} />
							<label className="form-check-label">Para la mayoría de las actividades</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio"
							id='Para todas las actividades'
							value={a_trabaja}
							checked={a_trabaja === "Para todas las actividades"}
							onChange={() => handleRadioChange('a_trabaja',"Para todas las actividades")} />
							<label className="form-check-label">Para todas las actividades</label>
						</div>
					</div>

					<div className="mb-3">
						<label>Actividades comunitarias</label>
						<div className="form-check">
							<input className="form-check-input" type="radio"
							id='Nunca'
							value={a_act_comuni}
							checked={a_act_comuni === "Nunca"}
							onChange={() => handleRadioChange('a_act_comuni',"Nunca")} />
							<label className="form-check-label">Nunca</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio"
							id='Sólo para algunas actividades'
							value={a_act_comuni}
							checked={a_act_comuni === "Sólo para algunas actividades"}
							onChange={() => handleRadioChange('a_act_comuni',"Sólo para algunas actividades")} />
							<label className="form-check-label">Sólo para algunas actividades</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio"
							id='Para la mayoría de las actividades'
							value={a_act_comuni}
							checked={a_act_comuni === "Para la mayoría de las actividades"}
							onChange={() => handleRadioChange('a_act_comuni',"Para la mayoría de las actividades")} />
							<label className="form-check-label">Para la mayoría de las actividades</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio"
							id='Para todas las actividades'
							value={a_act_comuni}
							checked={a_act_comuni === "Para todas las actividades"}
							onChange={() => handleRadioChange('a_act_comuni',"Para todas las actividades")} />
							<label className="form-check-label">Para todas las actividades</label>
						</div>
					</div>

					<div className="mb-3">
						<label>Actividades del hogar</label>
						<div className="form-check">
							<input className="form-check-input" type="radio"
							id='Nunca'
							value={a_act_hogar}
							checked={a_act_hogar === "Nunca"}
							onChange={() => handleRadioChange('a_act_hogar',"Nunca")} />
							<label className="form-check-label">Nunca</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio"
							id='Sólo para algunas actividades'
							value={a_act_hogar}
							checked={a_act_hogar === "Sólo para algunas actividades"}
							onChange={() => handleRadioChange('a_act_hogar',"Sólo para algunas actividades")} />
							<label className="form-check-label">Sólo para algunas actividades</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio"
							id='Para la mayoría de las actividades'
							value={a_act_hogar}
							checked={a_act_hogar === "Para la mayoría de las actividades"}
							onChange={() => handleRadioChange('a_act_hogar',"Para la mayoría de las actividades")} />
							<label className="form-check-label">Para la mayoría de las actividades</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio"
							id='Para todas las actividades'
							value={a_act_hogar}
							checked={a_act_hogar === "Para todas las actividades"}
							onChange={() => handleRadioChange('a_act_hogar',"Para todas las actividades")} />
							<label className="form-check-label">Para todas las actividades</label>
						</div>
					</div>

					<div className="mb-3">
						<label>Otro</label>
						<div className="form-check">
							<div className="mb-3">
								<label>Cuál:</label>
								<textarea className="form-control" rows="1"
								value={a_cual}
								onChange={(e) => setA_Cual(e.target.value)}
								></textarea>
							</div>
                        </div>
						<div className="form-check">
							<input className="form-check-input" type="radio"
							id='Nunca'
							value={a_otro}
							checked={a_otro === "Nunca"}
							onChange={() => handleRadioChange('a_otro',"Nunca")} />
							<label className="form-check-label">Nunca</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio"
							id='Sólo para algunas actividades'
							value={a_otro}
							checked={a_otro === "Sólo para algunas actividades"}
							onChange={() => handleRadioChange('a_otro',"Sólo para algunas actividades")} />
							<label className="form-check-label">Sólo para algunas actividades</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio"
							id='Para la mayoría de las actividades'
							value={a_otro}
							checked={a_otro === "Para la mayoría de las actividades"}
							onChange={() => handleRadioChange('a_otro',"Para la mayoría de las actividades")} />
							<label className="form-check-label">Para la mayoría de las actividades</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio"
							id='Para todas las actividades'
							value={a_otro}
							checked={a_otro === "Para todas las actividades"}
							onChange={() => handleRadioChange('a_otro',"Para todas las actividades")} />
							<label className="form-check-label">Para todas las actividades</label>
						</div>
					</div>


					<h2>Roles de apoyo</h2>
					<div className="mb-3">
						<label>Estudia</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='e_nadie'
                             value= {r_estudia.e_nadie}
                             checked={r_estudia.e_nadie === true}
                             onChange={handleE_NadieCheckboxChange} />
							<label className="form-check-label">Nadie</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='e_familia'
                             value= {r_estudia.e_familia}
                             checked={r_estudia.e_familia === true}
                             onChange={handleE_familiaCheckboxChange} />
							<label className="form-check-label">Familia</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='e_amistades'
                             value= {r_estudia.e_amistades}
                             checked={r_estudia.e_amistades === true}
                             onChange={handleE_amistadesCheckboxChange} />
							<label className="form-check-label">Amistades</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='e_profesional_remunerado'
                             value= {r_estudia.e_profesional_remunerado}
                             checked={r_estudia.e_profesional_remunerado === true}
                             onChange={handleE_profesional_remuneradoCheckboxChange} />
							<label className="form-check-label">Profesional remunerado</label>
						</div>
					</div>

					<div className="mb-3">
						<label>Trabaja</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='t_nadie'
                             value= {r_trabaja.t_nadie}
                             checked={r_trabaja.t_nadie === true}
                             onChange={handleT_NadieCheckboxChange} />
							<label className="form-check-label">Nadie</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='t_familia'
                             value= {r_trabaja.t_familia}
                             checked={r_trabaja.t_familia === true}
                             onChange={handleT_familiaCheckboxChange} />
							<label className="form-check-label">Familia</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='t_amistades'
                             value= {r_trabaja.t_amistades}
                             checked={r_trabaja.t_amistades === true}
                             onChange={handleT_amistadesCheckboxChange} />
							<label className="form-check-label">Amistades</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='t_profesional_remunerado'
                             value= {r_trabaja.t_profesional_remunerado}
                             checked={r_trabaja.t_profesional_remunerado === true}
                             onChange={handleT_profesional_remuneradoCheckboxChange} />
							<label className="form-check-label">Profesional remunerado</label>
						</div>
					</div>

					<div className="mb-3">
						<label>Actividades comunitarias</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='ac_nadie'
                             value= {r_actividadesC.ac_nadie}
                             checked={r_actividadesC.ac_nadie === true}
                             onChange={handleAH_NadieCheckboxChange} />
							<label className="form-check-label">Nadie</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" 
							id='ac_familia'
                             value= {r_actividadesC.ac_familia}
                             checked={r_actividadesC.ac_familia === true}
                             onChange={handleAH_FamiliaCheckboxChange} />
							<label className="form-check-label">Familia</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" 
							id='ac_amistades'
                             value= {r_actividadesC.ac_amistades}
                             checked={r_actividadesC.ac_amistades === true}
                             onChange={handleAH_AmistadesCheckboxChange} />
							<label className="form-check-label">Amistades</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='ac_profesional_remunerado'
                             value= {r_actividadesC.ac_profesional_remunerado}
                             checked={r_actividadesC.ac_profesional_remunerado === true}
                             onChange={handleAH_profesional_remuneradoCheckboxChange} />
							<label className="form-check-label">Profesional remunerado</label>
						</div>
					</div>

					<div className="mb-3">
						<label>Actividades del hogar</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='ah_nadie'
                             value= {r_actividadesH.ah_nadie}
                             checked={r_actividadesH.ah_nadie === true}
                             onChange={handleA_NadieCheckboxChange} />
							<label className="form-check-label">Nadie</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='ah_familia'
                             value= {r_actividadesH.ah_familia}
                             checked={r_actividadesH.ah_familia === true}
                             onChange={handleA_FamiliaCheckboxChange} />
							<label className="form-check-label">Familia</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='ah_amistades'
                             value= {r_actividadesH.ah_amistades}
                             checked={r_actividadesH.ah_amistades === true}
                             onChange={handleA_AmistadesCheckboxChange} />
							<label className="form-check-label">Amistades</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='ah_profesional_remunerado'
                             value= {r_actividadesH.ah_profesional_remunerado}
                             checked={r_actividadesH.ah_profesional_remunerado === true}
                             onChange={handleA_profesional_remuneradoCheckboxChange} />
							<label className="form-check-label">Profesional remunerado</label>
						</div>
					</div>

					<div className="mb-3">
						<label>Otro</label>
						<div className="form-check">
							<div className="mb-3">
								<label>Cuál:</label>
								<textarea className="form-control" rows="1"
								 value={r_cual}
								 onChange={(e) => setR_Cual(e.target.value)}
								></textarea>
							</div>
                        </div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='o_nadie'
                             value= {r_otra.o_nadie}
                             checked={r_otra.o_nadie === true}
                             onChange={handleO_NadieCheckboxChange} />
							<label className="form-check-label">Nadie</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='o_familia'
                             value= {r_otra.o_familia}
                             checked={r_otra.o_familia === true}
                             onChange={handleO_familiaCheckboxChange} />
							<label className="form-check-label">Familia</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='o_amistades'
                             value= {r_otra.o_amistades}
                             checked={r_otra.o_amistades === true}
                             onChange={handleO_amistadesCheckboxChange} />
							<label className="form-check-label">Amistades</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='o_profesional_remunerado'
                             value= {r_otra.o_profesional_remunerado}
                             checked={r_otra.o_profesional_remunerado === true}
                             onChange={handleO_profesional_remuneradoCheckboxChange} />
							<label className="form-check-label">Profesional remunerado</label>
						</div>
					</div>

					<h2>Preferencia de asistente personal</h2>

					<div className="mb-3">
						<div className="form-check">
							<input className="form-check-input" type="radio"
							id='Hombre'
							value={pref_asis}
							checked={pref_asis === "Hombre"}
							onChange={() => handleRadioChange('pref_asis',"Hombre")} />
							<label className="form-check-label">Hombre</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio"
							id='Mujer'
							value={pref_asis}
							checked={pref_asis === "Mujer"}
							onChange={() => handleRadioChange('pref_asis',"Mujer")} />
							<label className="form-check-label">Mujer</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio"
							id='Me es indiferente'
							value={pref_asis}
							checked={pref_asis === "Me es indiferente"}
							onChange={() => handleRadioChange('pref_asis',"Me es indiferente")} />
							<label className="form-check-label">Me es indiferente</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="radio"
							id='No lo sé'
							value={pref_asis}
							checked={pref_asis === "No lo sé"}
							onChange={() => handleRadioChange('pref_asis',"No lo sé")} />
							<label className="form-check-label">No lo sé</label>
						</div>
					</div>

                    <div className="btn-group-wide d-grip mb-2 text-center">
                        <button type='button' className='btn btn-secondary btn-outline-dark text-white col-3 m-1' onClick={() => historial.back()}>Volver</button>
                        <button type='button' className='btn btn-success btn-outline-dark text-white col-3 m-1'
                    onClick={handleUpdatePacienteF4}>Guardar</button></div>
                </form>
            </div>
            </div>
        );
    }
}

export default Formulario_4;
