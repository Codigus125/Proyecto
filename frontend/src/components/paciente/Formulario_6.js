import React, { useState , useRef} from 'react';
import { gql, useMutation } from '@apollo/client';
import historial from '../general/historial';
import logo from '../../images/Logo_Fundacion.png';

function Formulario_6() {
	const Rut= sessionStorage.getItem('rut');

		
	const [activadoA1, setActivadoA1] = useState(false);
	const [activadoA2, setActivadoA2] = useState(false);
	const [activadoA3, setActivadoA3] = useState(false);
	const [activadoA4, setActivadoA4] = useState(false);
	const [activadoA5, setActivadoA5] = useState(false);
	const [activadoA6, setActivadoA6] = useState(false);
	const [activadoA7, setActivadoA7] = useState(false);
	const [activadoA8, setActivadoA8] = useState(false);
	const [activadoA9, setActivadoA9] = useState(false);
	const [activadoA10, setActivadoA10] = useState(false);
	const [activadoA11, setActivadoA11] = useState(false);
	const [activadoA12, setActivadoA12] = useState(false);

	const [activadoB1, setActivadoB1] = useState(false);
	const [activadoB2, setActivadoB2] = useState(false);
	const [activadoB3, setActivadoB3] = useState(false);
	const [activadoB4, setActivadoB4] = useState(false);
	const [activadoB5, setActivadoB5] = useState(false);
	const [activadoB6, setActivadoB6] = useState(false);
	const [activadoB7, setActivadoB7] = useState(false);
	const [activadoB8, setActivadoB8] = useState(false);
	const [activadoB9, setActivadoB9] = useState(false);
	const [activadoB10, setActivadoB10] = useState(false);
	const [activadoB11, setActivadoB11] = useState(false);
	const [activadoB12, setActivadoB12] = useState(false);

	const [activadoC1, setActivadoC1] = useState(false);
	const [activadoC2, setActivadoC2] = useState(false);
	const [activadoC3, setActivadoC3] = useState(false);
	const [activadoC4, setActivadoC4] = useState(false);
	const [activadoC5, setActivadoC5] = useState(false);
	const [activadoC6, setActivadoC6] = useState(false);
	const [activadoC7, setActivadoC7] = useState(false);
	const [activadoC8, setActivadoC8] = useState(false);
	const [activadoC9, setActivadoC9] = useState(false);
	const [activadoC10, setActivadoC10] = useState(false);
	const [activadoC11, setActivadoC11] = useState(false);
	const [activadoC12, setActivadoC12] = useState(false);

	const [activadoD1, setActivadoD1] = useState(false);
	const [activadoD2, setActivadoD2] = useState(false);
	const [activadoD3, setActivadoD3] = useState(false);
	const [activadoD4, setActivadoD4] = useState(false);
	const [activadoD5, setActivadoD5] = useState(false);
	const [activadoD6, setActivadoD6] = useState(false);
	const [activadoD7, setActivadoD7] = useState(false);
	const [activadoD8, setActivadoD8] = useState(false);
	const [activadoD9, setActivadoD9] = useState(false);
	const [activadoD10, setActivadoD10] = useState(false);
	const [activadoD11, setActivadoD11] = useState(false);
	const [activadoD12, setActivadoD12] = useState(false);

	const [activadoE1, setActivadoE1] = useState(false);
	const [activadoE2, setActivadoE2] = useState(false);
	const [activadoE3, setActivadoE3] = useState(false);
	const [activadoE4, setActivadoE4] = useState(false);
	const [activadoE5, setActivadoE5] = useState(false);
	const [activadoE6, setActivadoE6] = useState(false);
	const [activadoE7, setActivadoE7] = useState(false);
	const [activadoE8, setActivadoE8] = useState(false);
	const [activadoE9, setActivadoE9] = useState(false);
	const [activadoE10, setActivadoE10] = useState(false);
	const [activadoE11, setActivadoE11] = useState(false);
	const [activadoE12, setActivadoE12] = useState(false);

	const [activadoF1, setActivadoF1] = useState(false);
	const [activadoF2, setActivadoF2] = useState(false);
	const [activadoF3, setActivadoF3] = useState(false);
	const [activadoF4, setActivadoF4] = useState(false);
	const [activadoF5, setActivadoF5] = useState(false);
	const [activadoF6, setActivadoF6] = useState(false);
	const [activadoF7, setActivadoF7] = useState(false);
	const [activadoF8, setActivadoF8] = useState(false);
	const [activadoF9, setActivadoF9] = useState(false);
	const [activadoF10, setActivadoF10] = useState(false);
	const [activadoF11, setActivadoF11] = useState(false);
	const [activadoF12, setActivadoF12] = useState(false);

	const [activadoG1, setActivadoG1] = useState(false);
	const [activadoG2, setActivadoG2] = useState(false);
	const [activadoG3, setActivadoG3] = useState(false);
	const [activadoG4, setActivadoG4] = useState(false);
	const [activadoG5, setActivadoG5] = useState(false);
	const [activadoG6, setActivadoG6] = useState(false);
	const [activadoG7, setActivadoG7] = useState(false);
	const [activadoG8, setActivadoG8] = useState(false);
	const [activadoG9, setActivadoG9] = useState(false);
	const [activadoG10, setActivadoG10] = useState(false);
	const [activadoG11, setActivadoG11] = useState(false);
	const [activadoG12, setActivadoG12] = useState(false);
 

 
	
		
	const alternarEstadoBotonB = (valor, setColor, activado ,setActivado) => {
		setActivado(!activado);
		if(valor === true & activado === true){
			setColor("#ffffff")
		}if(valor === false & activado === false){
			setColor("#75113b")
		}
	};


	//////////////////////////////////////////////////

	const [colorA1 , setColorA1] = useState("#ffffff");
	const [colorA2 , setColorA2] = useState("#ffffff");
	const [colorA3 , setColorA3] = useState("#ffffff");
	const [colorA4 , setColorA4] = useState("#ffffff");
	const [colorA5 , setColorA5] = useState("#ffffff");
	const [colorA6 , setColorA6] = useState("#ffffff");
	const [colorA7, setColorA7] = useState("#ffffff");
	const [colorA8 , setColorA8] = useState("#ffffff");
	const [colorA9 , setColorA9] = useState("#ffffff");
	const [colorA10 , setColorA10] = useState("#ffffff");
	const [colorA11 , setColorA11] = useState("#ffffff");
	const [colorA12 , setColorA12] = useState("#ffffff");
	
	const [colorB1 , setColorB1] = useState("#ffffff");
	const [colorB2 , setColorB2] = useState("#ffffff");
	const [colorB3 , setColorB3] = useState("#ffffff");
	const [colorB4 , setColorB4] = useState("#ffffff");
	const [colorB5 , setColorB5] = useState("#ffffff");
	const [colorB6 , setColorB6] = useState("#ffffff");
	const [colorB7 , setColorB7] = useState("#ffffff");
	const [colorB8 , setColorB8] = useState("#ffffff");
	const [colorB9 , setColorB9] = useState("#ffffff");
	const [colorB10 , setColorB10] = useState("#ffffff");
	const [colorB11, setColorB11] = useState("#ffffff");
	const [colorB12 , setColorB12] = useState("#ffffff");
	

	const [colorC1 , setColorC1] = useState("#ffffff");
	const [colorC2 , setColorC2] = useState("#ffffff");
	const [colorC3 , setColorC3] = useState("#ffffff");
	const [colorC4 , setColorC4] = useState("#ffffff");
	const [colorC5 , setColorC5] = useState("#ffffff");
	const [colorC6 , setColorC6] = useState("#ffffff");
	const [colorC7 , setColorC7] = useState("#ffffff");
	const [colorC8 , setColorC8] = useState("#ffffff");
	const [colorC9 , setColorC9] = useState("#ffffff");
	const [colorC10 , setColorC10] = useState("#ffffff");
	const [colorC11, setColorC11] = useState("#ffffff");
	const [colorC12 , setColorC12] = useState("#ffffff");
	 


	const [colorD1 , setColorD1] = useState("#ffffff");
	const [colorD2 , setColorD2] = useState("#ffffff");
	const [colorD3, setColorD3] = useState("#ffffff");
	const [colorD4 , setColorD4] = useState("#ffffff");
	const [colorD5 , setColorD5] = useState("#ffffff");
	const [colorD6 , setColorD6] = useState("#ffffff");
	const [colorD7 , setColorD7] = useState("#ffffff");
	const [colorD8, setColorD8] = useState("#ffffff");
	const [colorD9 , setColorD9] = useState("#ffffff");
	const [colorD10 , setColorD10] = useState("#ffffff");
	const [colorD11 , setColorD11] = useState("#ffffff");
	const [colorD12 , setColorD12] = useState("#ffffff");
 

 
	const [colorE1 , setColorE1] = useState("#ffffff");
	const [colorE2 , setColorE2] = useState("#ffffff");
	const [colorE3 , setColorE3] = useState("#ffffff");
	const [colorE4 , setColorE4] = useState("#ffffff");
	const [colorE5 , setColorE5] = useState("#ffffff");
	const [colorE6 , setColorE6] = useState("#ffffff");
	const [colorE7 , setColorE7] = useState("#ffffff");
	const [colorE8 , setColorE8] = useState("#ffffff");
	const [colorE9 , setColorE9] = useState("#ffffff");
	const [colorE10 , setColorE10] = useState("#ffffff");
	const [colorE11 , setColorE11] = useState("#ffffff");
	const [colorE12 , setColorE12] = useState("#ffffff");

	const [colorF1 , setColorF1] = useState("#ffffff");
	const [colorF2 , setColorF2] = useState("#ffffff");
	const [colorF3 , setColorF3] = useState("#ffffff");
	const [colorF4 , setColorF4] = useState("#ffffff");
	const [colorF5 , setColorF5] = useState("#ffffff");
	const [colorF6 , setColorF6] = useState("#ffffff");
	const [colorF7 , setColorF7] = useState("#ffffff");
	const [colorF8 , setColorF8] = useState("#ffffff");
	const [colorF9 , setColorF9] = useState("#ffffff");
	const [colorF10 , setColorF10] = useState("#ffffff");
	const [colorF11 , setColorF11] = useState("#ffffff");
	const [colorF12 , setColorF12] = useState("#ffffff");
	

	const [colorG1 , setColorG1] = useState("#ffffff");
	const [colorG2 , setColorG2] = useState("#ffffff");
	const [colorG3 , setColorG3] = useState("#ffffff");
	const [colorG4 , setColorG4] = useState("#ffffff");
	const [colorG5 , setColorG5] = useState("#ffffff");
	const [colorG6 , setColorG6] = useState("#ffffff");
	const [colorG7 , setColorG7] = useState("#ffffff");
	const [colorG8 , setColorG8] = useState("#ffffff");
	const [colorG9 , setColorG9] = useState("#ffffff");
	const [colorG10 ,setColorG10] = useState("#ffffff");
	const [colorG11 ,setColorG11] = useState("#ffffff");
	const [colorG12 ,setColorG12] = useState("#ffffff");
	    
    const formRef = useRef();
	/*const limpiar = () => {
		formRef.current.reset(); // Use ref.current to access the form and reset it
	  }*/
	const handleSubmit = (e) => {
		e.preventDefault();
        
	};

	const[lunes,setLunes]=useState({

		Lu_primero: false,
		Lu_segundo: false,
		Lu_tercero: false,
		Lu_cuarto: false,
		Lu_quinto: false,
		Lu_sexto: false,
		Lu_septimo: false,
		Lu_octavo: false,
		Lu_noveno:false,
		Lu_decimo:false,
		Lu_undecimo:false,
		Lu_duodecimo:false,
		Lu_decimotercero:false,


	});
	const[martes,setMartes]=useState({

		Ma_primero: false,
		Ma_segundo: false,
		Ma_tercero: false,
		Ma_cuarto: false,
		Ma_quinto: false,
		Ma_sexto: false,
		Ma_septimo: false,
		Ma_octavo: false,
		Ma_noveno:false,
		Ma_decimo:false,
		Ma_undecimo:false,
		Ma_duodecimo:false,
		Ma_decimotercero:false,
	});
	const[miercoles,setMiercoles]=useState({

		Mi_primero: false,
		Mi_segundo: false,
		Mi_tercero: false,
		Mi_cuarto: false,
		Mi_quinto: false,
		Mi_sexto: false,
		Mi_septimo: false,
		Mi_octavo: false,
		Mi_noveno:false,
		Mi_decimo:false,
		Mi_undecimo:false,
		Mi_duodecimo:false,
		Mi_decimotercero:false,
	});
	const[jueves,setJueves]=useState({

		Ju_primero: false,
		Ju_segundo: false,
		Ju_tercero: false,
		Ju_cuarto: false,
		Ju_quinto: false,
		Ju_sexto: false,
		Ju_septimo: false,
		Ju_octavo: false,
		Ju_noveno:false,
		Ju_decimo:false,
		Ju_undecimo:false,
		Ju_duodecimo:false,
		Ju_decimotercero:false,
	});
	const[viernes,setViernes]=useState({

		Vi_primero: false,
		Vi_segundo: false,
		Vi_tercero: false,
		Vi_cuarto: false,
		Vi_quinto: false,
		Vi_sexto: false,
		Vi_septimo: false,
		Vi_octavo: false,
		Vi_noveno:false,
		Vi_decimo:false,
		Vi_undecimo:false,
		Vi_duodecimo:false,
		Vi_decimotercero:false,
	});
	const[sabado,setSabado]=useState({

		Sa_primero: false,
		Sa_segundo: false,
		Sa_tercero: false,
		Sa_cuarto: false,
		Sa_quinto: false,
		Sa_sexto: false,
		Sa_septimo: false,
		Sa_octavo: false,
		Sa_noveno:false,
		Sa_decimo:false,
		Sa_undecimo:false,
		Sa_duodecimo:false,
		Sa_decimotercero:false,
	});
	const[domingo,setDomingo]=useState({

		Do_primero: false,
		Do_segundo: false,
		Do_tercero: false,
		Do_cuarto: false,
		Do_quinto: false,
		Do_sexto: false,
		Do_septimo: false,
		Do_octavo: false,
		Do_noveno:false,
		Do_decimo:false,
		Do_undecimo:false,
		Do_duodecimo:false,
		Do_decimotercero:false,
	});

	const NuevosDatos={
		lunes:{
			Lu_primero: lunes.Lu_primero,
			Lu_segundo: lunes.Lu_segundo,
			Lu_tercero: lunes.Lu_tercero,
			Lu_cuarto:  lunes.Lu_cuarto,
			Lu_quinto:  lunes.Lu_quinto,
			Lu_sexto:   lunes.Lu_sexto,
			Lu_septimo: lunes.Lu_septimo,
			Lu_octavo:  lunes.Lu_octavo,
			Lu_noveno:  lunes.Lu_noveno,
			Lu_decimo:  lunes.Lu_decimo,
			Lu_undecimo:lunes.Lu_undecimo,
			Lu_duodecimo:lunes.Lu_duodecimo,
			
		},
		martes:{
			Ma_primero: martes.Ma_primero,
			Ma_segundo: martes.Ma_segundo,
			Ma_tercero: martes.Ma_tercero,
			Ma_cuarto: martes.Ma_cuarto,
			Ma_quinto: martes.Ma_quinto,
			Ma_sexto: martes.Ma_sexto,
			Ma_septimo: martes.Ma_septimo,
			Ma_octavo: martes.Ma_octavo,
			Ma_noveno:martes.Ma_noveno,
			Ma_decimo:martes.Ma_decimo,
			Ma_undecimo:martes.Ma_undecimo,
			Ma_duodecimo:martes.Ma_duodecimo,
		 
		},
		miercoles:{
			Mi_primero: miercoles.Mi_primero,
			Mi_segundo: miercoles.Mi_segundo,
			Mi_tercero: miercoles.Mi_tercero,
			Mi_cuarto: miercoles.Mi_cuarto,
			Mi_quinto: miercoles.Mi_quinto,
			Mi_sexto: miercoles.Mi_sexto,
			Mi_septimo: miercoles.Mi_septimo,
			Mi_octavo: miercoles.Mi_octavo,
			Mi_noveno:miercoles.Mi_noveno,
			Mi_decimo:miercoles.Mi_decimo,
			Mi_undecimo:miercoles.Mi_undecimo,
			Mi_duodecimo:miercoles.Mi_duodecimo,
		 
			
		},
		jueves:{
			Ju_primero: jueves.Ju_primero,
			Ju_segundo: jueves.Ju_segundo,
			Ju_tercero: jueves.Ju_tercero,
			Ju_cuarto: jueves.Ju_cuarto	,
			Ju_quinto: jueves.Ju_quinto,
			Ju_sexto: jueves.Ju_sexto,
			Ju_septimo: jueves.Ju_septimo,
			Ju_octavo: jueves.Ju_octavo,
			Ju_noveno:jueves.Ju_noveno,
			Ju_decimo:jueves.Ju_decimo,
			Ju_undecimo:jueves.Ju_undecimo,
			Ju_duodecimo:jueves.Ju_duodecimo,
			 

		},
		viernes:{
			Vi_primero: viernes.Vi_primero,
			Vi_segundo: viernes.Vi_segundo,
			Vi_tercero: viernes.Vi_tercero,
			Vi_cuarto: viernes.Vi_cuarto,
			Vi_quinto: viernes.Vi_quinto,
			Vi_sexto: viernes.Vi_sexto,
			Vi_septimo: viernes.Vi_septimo,
			Vi_octavo: viernes.Vi_octavo,
			Vi_noveno:viernes.Vi_noveno,
			Vi_decimo:viernes.Vi_decimo,
			Vi_undecimo:viernes.Vi_undecimo,
			Vi_duodecimo:viernes.Vi_duodecimo,
		 

		},
		sabado:{
			Sa_primero: sabado.Sa_primero,
			Sa_segundo: sabado.Sa_segundo,
			Sa_tercero: sabado.Sa_tercero,
			Sa_cuarto: sabado.Sa_cuarto,

			Sa_quinto: sabado.Sa_quinto,
			Sa_sexto: sabado.Sa_segundo,
			Sa_septimo: sabado.Sa_septimo,
			Sa_octavo: sabado.Sa_octavo,
			Sa_noveno:sabado.Sa_noveno,
			Sa_decimo:sabado.Sa_decimo,
			Sa_undecimo:sabado.Sa_undecimo,
			Sa_duodecimo:sabado.Sa_duodecimo,
			

		},
		domingo:{
			Do_primero: domingo.Do_primero,
			Do_segundo: domingo.Do_segundo,
			Do_tercero: domingo.Do_tercero,
			Do_cuarto: domingo.Do_cuarto,
			Do_quinto: domingo.Do_quinto,
			Do_sexto: domingo.Do_sexto,
			Do_septimo: domingo.Do_septimo,
			Do_octavo: domingo.Do_octavo,
			Do_noveno:domingo.Do_noveno,
			Do_decimo:domingo.Do_decimo,
			Do_undecimo:domingo.Do_undecimo,
			Do_duodecimo:domingo.Do_duodecimo,

		},
	};

	const UPDATE_PACIENTE_F6 =gql`
	mutation Mutation($rut: String!, $nuevosDatos: Formulario6!) {
		updatePaciente_F6(rut: $rut, NuevosDatos: $nuevosDatos) {
		  martes {
			Ma_primero
			Ma_segundo
			Ma_tercero
			Ma_cuarto
			Ma_quinto
			Ma_sexto
			Ma_septimo
			Ma_octavo
			Ma_noveno
			Ma_decimo
			Ma_undecimo
			Ma_duodecimo
		  }
		  miercoles {
			Mi_primero
			Mi_segundo
			Mi_tercero
			Mi_cuarto
			Mi_quinto
			Mi_sexto
			Mi_septimo
			Mi_octavo
			Mi_noveno
			Mi_decimo
			Mi_undecimo
			Mi_duodecimo
		  }
		  jueves {
			Ju_primero
			Ju_segundo
			Ju_tercero
			Ju_cuarto
			Ju_quinto
			Ju_sexto
			Ju_septimo
			Ju_octavo
			Ju_noveno
			Ju_decimo
			Ju_undecimo
			Ju_duodecimo
		  }
		  viernes {
			Vi_primero
			Vi_segundo
			Vi_tercero
			Vi_cuarto
			Vi_quinto
			Vi_sexto
			Vi_septimo
			Vi_octavo
			Vi_noveno
			Vi_decimo
			Vi_undecimo
			Vi_duodecimo
		  }
		  sabado {
			Sa_primero
			Sa_segundo
			Sa_tercero
			Sa_cuarto
			Sa_quinto
			Sa_sexto
			Sa_septimo
			Sa_octavo
			Sa_noveno
			Sa_decimo
			Sa_undecimo
			Sa_duodecimo
		  }
		  domingo {
			Do_primero
			Do_segundo
			Do_tercero
			Do_cuarto
			Do_quinto
			Do_sexto
			Do_septimo
			Do_octavo
			Do_noveno
			Do_decimo
			Do_undecimo
			Do_duodecimo
		  }
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
	  }`

	const [handleUpdate] = useMutation(UPDATE_PACIENTE_F6,{variables:{rut:Rut ,nuevosDatos:NuevosDatos }});

	const handleUpdatePacienteF6 = async (e) => {
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

	const handleLu_primeroCheckboxChange = () => {
		setLunes({
		  ...lunes,
		  Lu_primero: (!activadoA1),
		});
	  };
	  const handleLu_segundoCheckboxChange = () => {
		setLunes({
		  ...lunes,
		  Lu_segundo: (!activadoA2),
		});
	  };
	  const handleLu_terceroCheckboxChange = () => {
		setLunes({
		  ...lunes,
		  Lu_tercero: (!activadoA3),
		});

	  };
	  const handleLu_cuartoCheckboxChange = () => {
		setLunes({
		  ...lunes,
		  Lu_cuarto: (!activadoA4),
		});
	  };
	  const handleLu_quintoCheckboxChange = () => {
		setLunes({
		  ...lunes,
		  Lu_quinto: (!activadoA5),
		});
	  };
	  const handleLu_sextoCheckboxChange = () => {
		setLunes({
		  ...lunes,
		  Lu_sexto: (!activadoA6),
		});
	  };
	  const handleLu_septimoCheckboxChange = () => {
		setLunes({
		  ...lunes,
		  Lu_septimo: (!activadoA7),
		});
	  };
	  const handleLu_octavoCheckboxChange = () => {
		setLunes({
		  ...lunes,
		  Lu_octavo: (!activadoA8),
		});
	  };
	  const handleLu_novenoCheckboxChange = () => {
		setLunes({
		  ...lunes,
		  Lu_noveno: (!activadoA9),
		});
	  };
	  const handleLu_decimoCheckboxChange = () => {
		setLunes({
		  ...lunes,
		  Lu_decimo: (!activadoA10),
		});
	  };
	  const handleLu_undecimoCheckboxChange = () => {
		
		setLunes({
		  ...lunes,
		  Lu_undecimo: (!activadoA11),
		});
	  };
	  const handleLu_duodecimoCheckboxChange = () => {
		
		setLunes({
		  ...lunes,
		  Lu_duodecimo: (!activadoA12),
		});
	  };
	 
      ////////////////////////////////////////////////////////////////
	  const handleMa_primeroCheckboxChange = () => {
		
		setMartes({
		  ...martes,
		  Ma_primero: (!activadoB1),
		});
	  };
	  const handleMa_segundoCheckboxChange = () => {
		
		setMartes({
		  ...martes,
		  Ma_segundo: (!activadoB2),
		});
	  };
	  const handleMa_terceroCheckboxChange = () => {
		
		setMartes({
		  ...martes,
		  Ma_tercero: (!activadoB3),
		});
	  };
	  const handleMa_cuartoCheckboxChange = () => {
		
		setMartes({
		  ...martes,
		  Ma_cuarto: (!activadoB4),
		});
	  };
	  const handleMa_quintoCheckboxChange = () => {
		
		setMartes({
		  ...martes,
		  Ma_quinto: (!activadoB5),
		});
	  };
	  const handleMa_sextoCheckboxChange = () => {
		
		setMartes({
		  ...martes,
		  Ma_sexto: (!activadoB6),
		});
	  };
	  const handleMa_septimoCheckboxChange = () => {
		
		setMartes({
		  ...martes,
		  Ma_septimo: (!activadoB7),
		});
	  };
	  const handleMa_octavoCheckboxChange = () => {
		
		setMartes({
		  ...martes,
		  Ma_octavo: (!activadoB8),
		});
	  };
	  const handleMa_novenoCheckboxChange = () => {
		
		setMartes({
		  ...martes,
		  Ma_noveno: (!activadoB9),
		});
	  };
	  const handleMa_decimoCheckboxChange = () => {
		
		setMartes({
		  ...martes,
		  Ma_decimo: (!activadoB10),
		});
	  };
	  const handleMa_undecimoCheckboxChange = () => {
		
		setMartes({
		  ...martes,
		  Ma_undecimo: (!activadoB11),
		});
	  };
	  const handleMa_duodecimoCheckboxChange = () => {
		
		setMartes({
		  ...martes,
		  Ma_duodecimo: (!activadoB12),
		});
	  };
	   
	  /////////////////////////////////////////////////////////////
	  const handleMi_primeroCheckboxChange = () => {
		
		setMiercoles({
		  ...miercoles,
		  Mi_primero: (!activadoC1),
		});
	  };
	  const handleMi_segundoCheckboxChange = () => {
		
		setMiercoles({
		  ...miercoles,
		  Mi_segundo: (!activadoC2),
		});
	  };
	  const handleMi_terceroCheckboxChange = () => {
		
		setMiercoles({
		  ...miercoles,
		  Mi_tercero: (!activadoC3),
		});
	  };
	  const handleMi_cuartoCheckboxChange = () => {
		
		setMiercoles({
		  ...miercoles,
		  Mi_cuarto: (!activadoC4),
		});
	  };
	  const handleMi_quintoCheckboxChange = () => {
		
		setMiercoles({
		  ...miercoles,
		  Mi_quinto: (!activadoC5),
		});
	  };
	  const handleMi_sextoCheckboxChange = () => {
		
		setMiercoles({
		  ...miercoles,
		  Mi_sexto: (!activadoC6),
		});
	  };
	  const handleMi_septimoCheckboxChange = () => {
		
		setMiercoles({
		  ...miercoles,
		  Mi_septimo: (!activadoC7),
		});
	  };
	  const handleMi_octavoCheckboxChange = () => {
		
		setMiercoles({
		  ...miercoles,
		  Mi_octavo: (!activadoC8),
		});
	  };
	  const handleMi_novenoCheckboxChange = () => {
		
		setMiercoles({
		  ...miercoles,
		  Mi_noveno: (!activadoC9),
		});
	  };
	  const handleMi_decimoCheckboxChange = () => {
		
		setMiercoles({
		  ...miercoles,
		  Mi_decimo: (!activadoC10),
		});
	  };
	  const handleMi_undecimoCheckboxChange = () => {
		
		setMiercoles({
		  ...miercoles,
		  Mi_undecimo: (!activadoC11),
		});
	  };
	  const handleMi_duodecimoCheckboxChange = () => {
		
		setMiercoles({
		  ...miercoles,
		  Mi_duodecimo: (!activadoC12),
		});
	  };
	  
	  /////////////////////////////////////////////////////////////
	  const handleJu_primeroCheckboxChange = () => {
		
		setJueves({
		  ...jueves,
		  Ju_primero: (!activadoD1),
		});
	  };
	  const handleJu_segundoCheckboxChange = () => {
		
		setJueves({
		  ...jueves,
		  Ju_segundo: (!activadoD2),
		});
	  };
	  const handleJu_terceroCheckboxChange = () => {
		
		setJueves({
		  ...jueves,
		  Ju_tercero: (!activadoD3),
		});
	  };
	  const handleJu_cuartoCheckboxChange = () => {
		
		setJueves({
		  ...jueves,
		  Ju_cuarto: (!activadoD4),
		});
	  };
	  const handleJu_quintoCheckboxChange = () => {
		
		setJueves({
		  ...jueves,
		  Ju_quinto: (!activadoD5),
		});
	  };
	  const handleJu_sextoCheckboxChange = () => {
		
		setJueves({
		  ...jueves,
		  Ju_sexto: (!activadoD6),
		});
	  };
	  const handleJu_septimoCheckboxChange = () => {
		
		setJueves({
		  ...jueves,
		  Ju_septimo: (!activadoD7),
		});
	  };
	  const handleJu_octavoCheckboxChange = () => {
		
		setJueves({
		  ...jueves,
		  Ju_octavo: (!activadoD8),
		});
	  };
	  const handleJu_novenoCheckboxChange = () => {
		
		setJueves({
		  ...jueves,
		  Ju_noveno: (!activadoD9),
		});
	  };
	  const handleJu_decimoCheckboxChange = () => {
		
		setJueves({
		  ...jueves,
		  Ju_decimo: (!activadoD10),
		});
	  };
	  const handleJu_undecimoCheckboxChange = () => {
		
		setJueves({
		  ...jueves,
		  Ju_undecimo: (!activadoD11),
		});
	  };
	  const handleJu_duodecimoCheckboxChange = () => {
		
		setJueves({
		  ...jueves,
		  Ju_duodecimo: (!activadoD12),
		});
	  };
	 
	  /////////////////////////////////////////////////////////////
	const handleVi_primeroCheckboxChange = () => {
		
		setViernes({
		  ...viernes,
		  Vi_primero: (!activadoE1),
		});
	  };
	  const handleVi_segundoCheckboxChange = () => {
		
		setViernes({
		  ...viernes,
		  Vi_segundo: (!activadoE2),
		});
	  };
	  const handleVi_terceroCheckboxChange = () => {
		
		setViernes({
		  ...viernes,
		  Vi_tercero: (!activadoE3),
		});
	  };
	  const handleVi_cuartoCheckboxChange = () => {
		
		setViernes({
		  ...viernes,
		  Vi_cuarto: (!activadoE4),
		});
	  };
	  const handleVi_quintoCheckboxChange = () => {
		
		setViernes({
		  ...viernes,
		  Vi_quinto: (!activadoE5),
		});
	  };
	  const handleVi_sextoCheckboxChange = () => {
		
		setViernes({
		  ...viernes,
		  Vi_sexto: (!activadoE6),
		});
	  };
	  const handleVi_septimoCheckboxChange = () => {
		
		setViernes({
		  ...viernes,
		  Vi_septimo: (!activadoE7),
		});
	  };
	  const handleVi_octavoCheckboxChange = () => {
		
		setViernes({
		  ...viernes,
		  Vi_octavo: (!activadoE8),
		});
	  };
	  const handleVi_novenoCheckboxChange = () => {
		
		setViernes({
		  ...viernes,
		  Vi_noveno: (!activadoE9),
		});
	  };
	  const handleVi_decimoCheckboxChange = () => {
		
		setViernes({
		  ...viernes,
		  Vi_decimo: (!activadoE10),
		});
	  };
	  const handleVi_undecimoCheckboxChange = () => {
		
		setViernes({
		  ...viernes,
		  Vi_undecimo: (!activadoE11),
		});
	  };
	  const handleVi_duodecimoCheckboxChange = () => {
		
		setViernes({
		  ...viernes,
		  Vi_duodecimo: (!activadoE12),
		});
	  };
	   
	  //////////////////////////////////////////////////////////////////
	  const handleSa_primeroCheckboxChange = () => {
		
		setSabado({
		  ...sabado,
		  Sa_primero: (!activadoF1),
		});
	  };
	  const handleSa_segundoCheckboxChange = () => {
		
		setSabado({
		  ...sabado,
		  Sa_segundo: (!activadoF2),
		});
	  };
	  const handleSa_terceroCheckboxChange = () => {
		
		setSabado({
		  ...sabado,
		  Sa_tercero: (!activadoF3),
		});
	  };
	  const handleSa_cuartoCheckboxChange = () => {
		
		setSabado({
		  ...sabado,
		  Sa_cuarto: (!activadoF4),
		});
	  };
	  const handleSa_quintoCheckboxChange = () => {
		
		setSabado({
		  ...sabado,
		  Sa_quinto: (!activadoF5),
		});
	  };
	  const handleSa_sextoCheckboxChange = () => {
		
		setSabado({
		  ...sabado,
		  Sa_sexto: (!activadoF6),
		});
	  };
	  const handleSa_septimoCheckboxChange = () => {
		
		setSabado({
		  ...sabado,
		  Sa_septimo: (!activadoF7),
		});
	  };
	  const handleSa_octavoCheckboxChange = () => {
		
		setSabado({
		  ...sabado,
		  Sa_octavo: (!activadoF8),
		});
	  };
	  const handleSa_novenoCheckboxChange = () => {
		
		setSabado({
		  ...sabado,
		  Sa_noveno: (!activadoF9),
		});
	  };
	  const handleSa_decimoCheckboxChange = () => {
		
		setSabado({
		  ...sabado,
		  Sa_decimo: (!activadoF10),
		});
	  };
	  const handleSa_undecimoCheckboxChange = () => {
		
		setSabado({
		  ...sabado,
		  Sa_undecimo: (!activadoF11),
		});
	  };
	  const handleSa_duodecimoCheckboxChange = () => {
		
		setSabado({
		  ...sabado,
		  Sa_duodecimo: (!activadoF12),
		});
	  };
	 
	 //////////////////////////////////////////////////////////////////////
	 const handleDo_primeroCheckboxChange = () => {
		
		setDomingo({
		  ...domingo,
		  Do_primero: (!activadoG1),
		});
	  };
	  const handleDo_segundoCheckboxChange = () => {
		
		setDomingo({
		  ...domingo,
		  Do_segundo: (!activadoG2),
		});
	  }; 
	  const handleDo_terceroCheckboxChange = () => {
		
		setDomingo({
		  ...domingo,
		  Do_tercero: (!activadoG3),
		});
	  };
	  const handleDo_cuartoCheckboxChange = () => {
		
		setDomingo({
		  ...domingo,
		  Do_cuarto: (!activadoG4),
		});
	  };
	  const handleDo_quintoCheckboxChange = () => {
		
		setDomingo({
		  ...domingo,
		  Do_quinto: (!activadoG5),
		});
	  };
	  const handleDo_sextoCheckboxChange = () => {
		
		setDomingo({
		  ...domingo,
		  Do_sexto: (!activadoG6),
		});
	  };
	  const handleDo_septimoCheckboxChange = () => {
		
		setDomingo({
		  ...domingo,
		  Do_septimo: (!activadoG7),
		});
	  };
	  const handleDo_octavoCheckboxChange = () => {
		
		setDomingo({
		  ...domingo,
		  Do_octavo: (!activadoG8),
		});
	  };
	  const handleDo_novenoCheckboxChange = () => {
		
		setDomingo({
		  ...domingo,
		  Do_noveno: (!activadoG9),
		});
	  };
	  const handleDo_decimoCheckboxChange = () => {
		
		setDomingo({
		  ...domingo,
		  Do_decimo: (!activadoG10),
		});
	  };
	  const handleDo_undecimoCheckboxChange = () => {
		
		setDomingo({
		  ...domingo,
		  Do_undecimo: (!activadoG11),
		});
	  };
	  const handleDo_duodecimoCheckboxChange = () => {
		
		setDomingo({
		  ...domingo,
		  Do_duodecimo: (!activadoG12),
		});
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
								style={{ color: '#fb4d72', marginTop: '5px', marginLeft: '30px' }}>
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
						<label>Cantidad de semanas que se requiere</label>
						<input type="number" className="form-control" placeholder="Puede ser de 1 a 54, o bien indefinido (99)" />
					</div>

					<label>Una vez que se define la cantidad de semana, se debe indicar si será horario fijo para todas las semanas o si será distinto para cada semana</label>

					<div
					className="container pt-1 pb-3 mt-2 text-bg border border-2 border-dark rounded col-9" 
					style={{backgroundColor:"#ffffff"}}>
						<h1 className="text-center">Horario</h1>

						<div style={{ display: "flex", justifyContent: "space-between", padding: "0px", marginBottom: "0" }} 
						className="container text-bg border border-2 flex border-dark col-12">
							<button disabled
							style={{backgroundColor: "#e8e6e6", color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							>Hora</button>
							<button disabled
							style={{backgroundColor: "#e8e6e6", color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							>Lunes</button>
							<button disabled
							style={{backgroundColor: "#e8e6e6", color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							>Martes</button>
							<button disabled
							style={{backgroundColor: "#e8e6e6", color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							>Miercoles</button>
							<button disabled
							style={{backgroundColor: "#e8e6e6", color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							>Jueves</button>
							<button disabled
							style={{backgroundColor: "#e8e6e6", color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							>Viernes</button>
							<button disabled
							style={{backgroundColor: "#e8e6e6", color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							>Sabado</button>
							<button disabled
							style={{backgroundColor: "#e8e6e6", color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							>Domingo</button>
						</div>

						<div style={{ marginTop: "-3px", display: "flex", justifyContent: "space-between", padding: "0px", marginBottom: "0" }} 
						className="container text-bg border border-2 flex border-dark col-12">
							<button disabled
							style={{backgroundColor: "#e8e6e6", color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							>08:00 - 09:00</button>
							
							<button
							value={lunes.Lu_primero}
							style={{backgroundColor: colorA1, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(lunes.Lu_primero, setColorA1 ,activadoA1, setActivadoA1);handleLu_primeroCheckboxChange()}} >{activadoA1 ? true : false}</button>
							<button
							value={martes.Ma_primero}
							style={{backgroundColor: colorB1, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(martes.Ma_primero, setColorB1,activadoB1,setActivadoB1);handleMa_primeroCheckboxChange()}} >{activadoB1 ? true : false}</button>
							<button
							value={miercoles.Mi_primero}
							style={{backgroundColor: colorC1, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(miercoles.Mi_primero, setColorC1,activadoC1,setActivadoC1);handleMi_primeroCheckboxChange()}} >{activadoC1 ? true : false}</button>
							<button
							value={jueves.Ju_primero}
							style={{backgroundColor: colorD1, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(jueves.Ju_primero, setColorD1,activadoD1,setActivadoD1);handleJu_primeroCheckboxChange()}} >{activadoD1 ? true : false}</button>
							<button
							value={viernes.Vi_primero}
							style={{backgroundColor: colorE1, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(viernes.Vi_primero, setColorE1,activadoE1,setActivadoE1);handleVi_primeroCheckboxChange()}} >{activadoE1 ? true : false}</button>
							<button
							value={sabado.Sa_primero}
							style={{backgroundColor: colorF1, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(sabado.Sa_primero, setColorF1,activadoF1,setActivadoF1);handleSa_primeroCheckboxChange()}} >{activadoF1 ? true : false}</button>
							<button
							value={domingo.Do_primero}
							style={{backgroundColor: colorG1, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(domingo.Do_primero, setColorG1,activadoG1,setActivadoG1);handleDo_primeroCheckboxChange()}} >{activadoG1 ? true : false}</button>
						</div>

						<div style={{ marginTop: "-3px", display: "flex", justifyContent: "space-between", padding: "0px", marginBottom: "0" }} 
						className="container text-bg border border-2 flex border-dark col-12">
							<button disabled
							style={{backgroundColor: "#e8e6e6", color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							>09:00 - 10:00</button>
							
							<button
							value={lunes.Lu_segundo}
							style={{backgroundColor: colorA2, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(lunes.Lu_segundo, setColorA2 ,activadoA2, setActivadoA2);handleLu_segundoCheckboxChange()}} >{activadoA2 ? true : false}</button>
							<button
							value={martes.Ma_segundo}
							style={{backgroundColor: colorB2, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(martes.Ma_segundo, setColorB2,activadoB2,setActivadoB2);handleMa_segundoCheckboxChange()}} >{activadoB2 ? true : false}</button>
							<button
							value={miercoles.Mi_segundo}
							style={{backgroundColor: colorC2, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(miercoles.Mi_segundo, setColorC2,activadoC2,setActivadoC2);handleMi_segundoCheckboxChange()}} >{activadoC2 ? true : false}</button>
							<button
							value={jueves.Ju_segundo}
							style={{backgroundColor: colorD2, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(jueves.Ju_segundo, setColorD2,activadoD2,setActivadoD2);handleJu_segundoCheckboxChange()}} >{activadoD2? true : false}</button>
							<button
							value={viernes.Vi_segundo}
							style={{backgroundColor: colorE2, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(viernes.Vi_segundo, setColorE2,activadoE2,setActivadoE2);handleVi_segundoCheckboxChange()}} >{activadoE2 ? true : false}</button>
							<button
							value={sabado.Sa_segundo}
							style={{backgroundColor: colorF2, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(sabado.Sa_segundo, setColorF2,activadoF2,setActivadoF2);handleSa_segundoCheckboxChange()}} >{setActivadoF2 ? true : false}</button>
							<button
							value={domingo.Do_segundo}
							style={{backgroundColor: colorG2, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(domingo.Do_segundo, setColorG2,activadoG2,setActivadoG2);handleDo_segundoCheckboxChange()}} >{activadoG2 ? true : false}</button>
						</div>

						<div style={{ marginTop: "-3px", display: "flex", justifyContent: "space-between", padding: "0px", marginBottom: "0" }} 
						className="container text-bg border border-2 flex border-dark col-12">
							<button disabled
							style={{backgroundColor: "#e8e6e6", color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							>10:00 - 11:00</button>
							
							<button
							style={{backgroundColor: colorA3, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(lunes.Lu_tercero, setColorA3 ,activadoA3, setActivadoA3);handleLu_terceroCheckboxChange()}} >{activadoA3 ? true : false}</button>
							<button
							value={martes.Ma_tercero}
							style={{backgroundColor: colorB3, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(martes.Ma_tercero, setColorB3,activadoB3,setActivadoB3);handleMa_terceroCheckboxChange()}} >{activadoB3 ? true : false}</button>
							<button
							value={miercoles.Mi_tercero}
							style={{backgroundColor: colorC3, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(miercoles.Mi_tercero, setColorC3,activadoC3,setActivadoC3);handleMi_terceroCheckboxChange()}} >{activadoC3 ? true : false}</button>
							<button
							value={jueves.Ju_tercero}
							style={{backgroundColor: colorD3, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(jueves.Ju_tercero, setColorD3,activadoD3,setActivadoD3);handleJu_terceroCheckboxChange()}} >{activadoD3 ? true : false}</button>
							<button
							value={viernes.Vi_tercero}
							style={{backgroundColor: colorE3, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(viernes.Vi_tercero, setColorE3,activadoE3,setActivadoE3);handleVi_terceroCheckboxChange()}} >{activadoE3 ? true : false}</button>
							<button
							value={sabado.Sa_tercero}
							style={{backgroundColor: colorF3, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(sabado.Sa_tercero, setColorF3,activadoF3,setActivadoF3);handleSa_terceroCheckboxChange()}} >{activadoF3 ? true : false}</button>
							<button
							value={domingo.Do_tercero}
							style={{backgroundColor: colorG3, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(domingo.Do_tercero, setColorG3,activadoG3,setActivadoG3);handleDo_terceroCheckboxChange()}} >{activadoG3 ? true : false}</button>
						</div>


						<div style={{ marginTop: "-3px", display: "flex", justifyContent: "space-between", padding: "0px", marginBottom: "0" }} 
						className="container text-bg border border-2 flex border-dark col-12">
							<button disabled
							style={{backgroundColor: "#e8e6e6", color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							>11:00 - 12:00</button>
							
							<button
							
							style={{backgroundColor: colorA4, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(lunes.Lu_cuarto, setColorA4 ,activadoA4, setActivadoA4);handleLu_cuartoCheckboxChange()}} >{activadoA4 ? true : false}</button>
							<button
							value={martes.Ma_cuarto}
							style={{backgroundColor: colorB4, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(martes.Ma_cuarto, setColorB4,activadoB4,setActivadoB4);handleMa_cuartoCheckboxChange()}} >{activadoB4 ? true : false}</button>
							<button
							value={miercoles.Mi_cuarto}
							style={{backgroundColor: colorC4, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(miercoles.Mi_cuarto, setColorC4,activadoC4,setActivadoC4);handleMi_cuartoCheckboxChange()}} >{activadoC4 ? true : false}</button>
							<button
							value={jueves.Ju_cuarto}
							style={{backgroundColor: colorD4, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(jueves.Ju_cuarto, setColorD4,activadoD4,setActivadoD4);handleJu_cuartoCheckboxChange()}} >{activadoD4 ? true : false}</button>
							<button
							value={viernes.Vi_cuarto}
							style={{backgroundColor: colorE4, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(viernes.Vi_cuarto, setColorE4,activadoE4,setActivadoE4);handleVi_cuartoCheckboxChange()}} >{activadoE4 ? true : false}</button>
							<button
							value={sabado.Sa_cuarto}
							style={{backgroundColor: colorF4, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(sabado.Sa_cuarto, setColorF4,activadoF4,setActivadoF4);handleSa_cuartoCheckboxChange()}} >{activadoF4 ? true : false}</button>
							<button
							value={domingo.Do_cuarto}
							style={{backgroundColor: colorG4, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(domingo.Do_cuarto, setColorG4,activadoG4,setActivadoG4);handleDo_cuartoCheckboxChange()}} >{activadoG4 ? true : false}</button>
						</div>

						<div style={{ marginTop: "-3px", display: "flex", justifyContent: "space-between", padding: "0px", marginBottom: "0" }} 
						className="container text-bg border border-2 flex border-dark col-12">
							<button disabled
							style={{backgroundColor: "#e8e6e6", color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							>12:00 - 13:00</button>
							
							<button
							value={lunes.Lu_quinto}
							style={{backgroundColor: colorA5, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(lunes.Lu_quinto, setColorA5 ,activadoA5, setActivadoA5);handleLu_quintoCheckboxChange()}} >{activadoA5 ? true : false}</button>
							<button
							value={martes.Ma_quinto}
							style={{backgroundColor: colorB5, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(martes.Ma_quinto, setColorB5,activadoB5,setActivadoB5);handleMa_quintoCheckboxChange()}} >{activadoB5 ? true : false}</button>
							<button
							value={miercoles.Mi_quinto}
							style={{backgroundColor: colorC5, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(miercoles.Mi_quinto, setColorC5,activadoC5,setActivadoC5);handleMi_quintoCheckboxChange()}} >{activadoC5 ? true : false}</button>
							<button
							value={jueves.Ju_quinto}
							style={{backgroundColor: colorD5, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(jueves.Ju_quinto, setColorD5,activadoD5,setActivadoD5);handleJu_quintoCheckboxChange()}} >{activadoD5 ? true : false}</button>
							<button
							value={viernes.Vi_quinto}
							style={{backgroundColor: colorE5, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(viernes.Vi_quinto, setColorE5,activadoE5,setActivadoE5);handleVi_quintoCheckboxChange()}} >{activadoE5 ? true : false}</button>
							<button
							value={sabado.Sa_quinto}
							style={{backgroundColor: colorF5, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(sabado.Sa_quinto, setColorF5,activadoF5,setActivadoF5);handleSa_quintoCheckboxChange()}} >{activadoF5 ? true : false}</button>
							<button
							value={domingo.Do_quinto}
							style={{backgroundColor: colorG5, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(domingo.Do_quinto, setColorG5,activadoG5,setActivadoG5);handleDo_quintoCheckboxChange()}} >{activadoG5 ? true : false}</button>
						</div>

						
						<div style={{ marginTop: "-3px", display: "flex", justifyContent: "space-between", padding: "0px", marginBottom: "0" }} 
						className="container text-bg border border-2 flex border-dark col-12">
							<button disabled
							style={{backgroundColor: "#e8e6e6", color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							>13:00 - 14:00</button>
							
							<button
							value={lunes.Lu_sexto}
							style={{backgroundColor: colorA6, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(lunes.Lu_sexto, setColorA6 ,activadoA6, setActivadoA6);handleLu_sextoCheckboxChange()}} >{activadoA6 ? true : false}</button>
							<button
							value={martes.Ma_sexto}
							style={{backgroundColor: colorB6, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(martes.Ma_sexto, setColorB6,activadoB6,setActivadoB6);handleMa_sextoCheckboxChange()}} >{activadoB6 ? true : false}</button>
							<button
							value={miercoles.Mi_sexto}
							style={{backgroundColor: colorC6, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(miercoles.Mi_sexto, setColorC6,activadoC6,setActivadoC6);handleMi_sextoCheckboxChange()}} >{activadoC6 ? true : false}</button>
							<button
							value={jueves.Ju_sexto}
							style={{backgroundColor: colorD6, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(jueves.Ju_sexto, setColorD6,activadoD6,setActivadoD6);handleJu_sextoCheckboxChange()}} >{activadoD6 ? true : false}</button>
							<button
							value={viernes.Vi_sexto}
							style={{backgroundColor: colorE6, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(viernes.Vi_sexto, setColorE6,activadoE6,setActivadoE6);handleVi_sextoCheckboxChange()}} >{activadoE6 ? true : false}</button>
							<button
							value={sabado.Sa_sexto}
							style={{backgroundColor: colorF6, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(sabado.Sa_sexto, setColorF6,activadoF6,setActivadoF6);handleSa_sextoCheckboxChange()}} >{activadoF6 ? true : false}</button>
							<button
							value={domingo.Do_sexto}
							style={{backgroundColor: colorG6, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(domingo.Do_sexto, setColorG6,activadoG6,setActivadoG6);handleDo_sextoCheckboxChange()}} >{activadoG6 ? true : false}</button>
						</div>


						<div style={{ marginTop: "-3px", display: "flex", justifyContent: "space-between", padding: "0px", marginBottom: "0" }} 
						className="container text-bg border border-2 flex border-dark col-12">
							<button disabled
							style={{backgroundColor: "#e8e6e6", color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							>14:00 - 15:00</button>
							
							<button
							value={lunes.Lu_septimo}
							style={{backgroundColor: colorA7, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(lunes.Lu_septimo, setColorA7 ,activadoA7, setActivadoA7);handleLu_septimoCheckboxChange()}} >{activadoA7 ? true : false}</button>
							<button
							value={martes.Ma_septimo}
							style={{backgroundColor: colorB7, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(martes.Ma_septimo, setColorB7,activadoB7,setActivadoB7);handleMa_septimoCheckboxChange()}} >{activadoB7 ? true : false}</button>
							<button
							value={miercoles.Mi_septimo}
							style={{backgroundColor: colorC7, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(miercoles.Mi_septimo, setColorC7,activadoC7,setActivadoC7);handleMi_septimoCheckboxChange()}} >{activadoC7 ? true : false}</button>
							<button
							value={jueves.Ju_septimo}
							style={{backgroundColor: colorD7, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(jueves.Ju_septimo, setColorD7,activadoD7,setActivadoD7);handleJu_septimoCheckboxChange()}} >{activadoD7 ? true : false}</button>
							<button
							value={viernes.Vi_septimo}
							style={{backgroundColor: colorE7, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(viernes.Vi_septimo, setColorE7,activadoE7,setActivadoE7);handleVi_septimoCheckboxChange()}} >{activadoE7 ? true : false}</button>
							<button
							value={sabado.Sa_septimo}
							style={{backgroundColor: colorF7, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(sabado.Sa_septimo, setColorF7,activadoF7,setActivadoF7);handleSa_septimoCheckboxChange()}} >{activadoF7 ? true : false}</button>
							<button
							value={domingo.Do_septimo}
							style={{backgroundColor: colorG7, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(domingo.Do_septimo, setColorG7,activadoG7,setActivadoG7);handleDo_septimoCheckboxChange()}} >{activadoG7 ? true : false}</button>
						</div>

						<div style={{ marginTop: "-3px", display: "flex", justifyContent: "space-between", padding: "0px", marginBottom: "0" }} 
						className="container text-bg border border-2 flex border-dark col-12">
							<button disabled
							style={{backgroundColor: "#e8e6e6", color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							>15:00 - 16:00</button>
							
							<button
							value={lunes.Lu_octavo}
							style={{backgroundColor: colorA8, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(lunes.Lu_octavo, setColorA8 ,activadoA8, setActivadoA8);handleLu_octavoCheckboxChange()}} >{activadoA8 ? true : false}</button>
							<button
							value={martes.Ma_octavo}
							style={{backgroundColor: colorB8, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(martes.Ma_octavo, setColorB8,activadoB8,setActivadoB8);handleMa_octavoCheckboxChange()}} >{activadoB8 ? true : false}</button>
							<button
							value={miercoles.Mi_octavo}
							style={{backgroundColor: colorC8, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(miercoles.Mi_octavo, setColorC8,activadoC8,setActivadoC8);handleMi_octavoCheckboxChange()}} >{activadoC8 ? true : false}</button>
							<button
							value={jueves.Ju_octavo}
							style={{backgroundColor: colorD8, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(jueves.Ju_octavo, setColorD8,activadoD8,setActivadoD8);handleJu_octavoCheckboxChange()}} >{activadoD8 ? true : false}</button>
							<button
							value={viernes.Vi_octavo}
							style={{backgroundColor: colorE8, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(viernes.Vi_octavo, setColorE8,activadoE8,setActivadoE8);handleVi_octavoCheckboxChange()}} >{activadoE8 ? true : false}</button>
							<button
							value={sabado.Sa_octavo}
							style={{backgroundColor: colorF8, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(sabado.Sa_octavo, setColorF8,activadoF8,setActivadoF8);handleSa_octavoCheckboxChange()}} >{activadoF8 ? true : false}</button>
							<button
							value={domingo.Do_octavo}
							style={{backgroundColor: colorG8, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(domingo.Do_octavo, setColorG8,activadoG8,setActivadoG8);handleDo_octavoCheckboxChange()}} >{activadoG8 ? true : false}</button>
						</div>


						<div style={{ marginTop: "-3px", display: "flex", justifyContent: "space-between", padding: "0px", marginBottom: "0" }} 
							className="container text-bg border border-2 flex border-dark col-12">
								<button disabled
								style={{backgroundColor: "#e8e6e6", color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
								>16:00 - 17:00</button>
								
								<button
								value={lunes.Lu_noveno}
								style={{backgroundColor: colorA9, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
								onClick={() => {alternarEstadoBotonB(lunes.Lu_noveno, setColorA9 ,activadoA9, setActivadoA9);handleLu_novenoCheckboxChange()}} >{activadoA9 ? true : false}</button>
								<button
								value={martes.Ma_noveno}
								style={{backgroundColor: colorB9, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
								onClick={() => {alternarEstadoBotonB(martes.Ma_noveno, setColorB9,activadoB9,setActivadoB9);handleMa_novenoCheckboxChange()}} >{activadoB9 ? true : false}</button>
								<button
								value={miercoles.Mi_noveno}
								style={{backgroundColor: colorC9, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
								onClick={() => {alternarEstadoBotonB(miercoles.Mi_noveno, setColorC9,activadoC9,setActivadoC9);handleMi_novenoCheckboxChange()}} >{activadoC9 ? true : false}</button>
								<button
								value={jueves.Ju_noveno}
								style={{backgroundColor: colorD9, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
								onClick={() => {alternarEstadoBotonB(jueves.Ju_noveno, setColorD9,activadoD9,setActivadoD9);handleJu_novenoCheckboxChange()}} >{activadoD9 ? true : false}</button>
								<button
								value={viernes.Vi_noveno}
								style={{backgroundColor: colorE9, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
								onClick={() => {alternarEstadoBotonB(viernes.Vi_noveno, setColorE9,activadoE9,setActivadoE9);handleVi_novenoCheckboxChange()}} >{activadoE9 ? true : false}</button>
								<button
								value={sabado.Sa_noveno}
								style={{backgroundColor: colorF9, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
								onClick={() => {alternarEstadoBotonB(sabado.Sa_noveno, setColorF9,activadoF9,setActivadoF9);handleSa_novenoCheckboxChange()}} >{activadoF9 ? true : false}</button>
								<button
								value={domingo.Do_noveno}
								style={{backgroundColor: colorG9, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
								onClick={() => {alternarEstadoBotonB(domingo.Do_noveno, setColorG9,activadoG9,setActivadoG9);handleDo_novenoCheckboxChange()}} >{activadoG9 ? true : false}</button>
							</div>
						

						<div style={{ marginTop: "-3px", display: "flex", justifyContent: "space-between", padding: "0px", marginBottom: "0" }} 
						className="container text-bg border border-2 flex border-dark col-12">
							<button disabled
							style={{backgroundColor: "#e8e6e6", color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							>17:00 - 18:00</button>
							
							<button
							value={lunes.Lu_decimo}
							style={{backgroundColor: colorA10, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(lunes.Lu_decimo, setColorA10 ,activadoA10, setActivadoA10);handleLu_decimoCheckboxChange()}} >{activadoA10 ? true : false}</button>
							<button
							value={martes.Ma_decimo}
							style={{backgroundColor: colorB10, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(martes.Ma_decimo, setColorB10,activadoB10,setActivadoB10);handleMa_decimoCheckboxChange()}} >{activadoB10 ? true : false}</button>
							<button
							value={miercoles.Mi_decimo}
							style={{backgroundColor: colorC10, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(miercoles.Mi_decimo, setColorC10,activadoC10,setActivadoC10);handleMi_decimoCheckboxChange()}} >{activadoC10 ? true : false}</button>
							<button
							value={jueves.Ju_decimo}
							style={{backgroundColor: colorD10, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(jueves.Ju_decimo, setColorD10,activadoD10,setActivadoD10);handleJu_decimoCheckboxChange()}} >{activadoD10 ? true : false}</button>
							<button
							value={viernes.Vi_decimo}
							style={{backgroundColor: colorE10, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(viernes.Vi_decimo, setColorE10,activadoE10,setActivadoE10);handleVi_decimoCheckboxChange()}} >{activadoE10 ? true : false}</button>
							<button
							value={sabado.Sa_decimo}
							style={{backgroundColor: colorF10, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(sabado.Sa_decimo, setColorF10,activadoF10,setActivadoF10);handleSa_decimoCheckboxChange()}} >{activadoF10 ? true : false}</button>
							<button
							value={domingo.Do_decimo}
							style={{backgroundColor: colorG10, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(domingo.Do_decimo, setColorG10,activadoG10,setActivadoG10);handleDo_decimoCheckboxChange()}} >{activadoG10 ? true : false}</button>
						</div>
						
						<div style={{ marginTop: "-3px", display: "flex", justifyContent: "space-between", padding: "0px", marginBottom: "0" }} 
						className="container text-bg border border-2 flex border-dark col-12">
							<button disabled
							style={{backgroundColor: "#e8e6e6", color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							>18:00 - 19:00</button>
							
							<button
							value={lunes.Lu_undecimo}
							style={{backgroundColor: colorA11, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(lunes.Lu_undecimo, setColorA11 ,activadoA11, setActivadoA11);handleLu_undecimoCheckboxChange()}} >{activadoA11 ? true : false}</button>
							<button
							value={martes.Ma_undecimo}
							style={{backgroundColor: colorB11, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(martes.Ma_undecimo, setColorB11,activadoB11,setActivadoB11);handleMa_undecimoCheckboxChange()}} >{activadoB11 ? true : false}</button>
							<button
							value={miercoles.Mi_undecimo}
							style={{backgroundColor: colorC11, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(miercoles.Mi_undecimo, setColorC11,activadoC11,setActivadoC11);handleMi_undecimoCheckboxChange()}} >{activadoC11 ? true : false}</button>
							<button
							value={jueves.Ju_undecimo}
							style={{backgroundColor: colorD11, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(jueves.Ju_undecimo, setColorD11,activadoD11,setActivadoD11);handleJu_undecimoCheckboxChange()}} >{activadoD11 ? true : false}</button>
							<button
							value={viernes.Vi_undecimo}
							style={{backgroundColor: colorE11, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(viernes.Vi_undecimo, setColorE11,activadoE11,setActivadoE11);handleVi_undecimoCheckboxChange()}} >{activadoE11 ? true : false}</button>
							<button
							value={sabado.Sa_undecimo}
							style={{backgroundColor: colorF11, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(sabado.Sa_undecimo, setColorF11,activadoF11,setActivadoF11);handleSa_undecimoCheckboxChange()}} >{activadoF11 ? true : false}</button>
							<button
							value={domingo.Do_undecimo}
							style={{backgroundColor: colorG11, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(domingo.Do_undecimo, setColorG11,activadoG11,setActivadoG11);handleDo_undecimoCheckboxChange()}} >{activadoG11 ? true : false}</button>
						</div>
						

						
						<div style={{ marginTop: "-3px", display: "flex", justifyContent: "space-between", padding: "0px", marginBottom: "0" }} 
						className="container text-bg border border-2 flex border-dark col-12">
							<button disabled
							style={{backgroundColor: "#e8e6e6", color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							>19:00 - 20:00</button>
							
							<button
							value={lunes.Lu_duodecimo}
							style={{backgroundColor: colorA12, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(lunes.Lu_duodecimo, setColorA12 ,activadoA12, setActivadoA12);handleLu_duodecimoCheckboxChange()}} >{activadoA12 ? true : false}</button>
							<button
							value={martes.Ma_duodecimo}
							style={{backgroundColor: colorB12, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(martes.Ma_duodecimo, setColorB12,activadoB12,setActivadoB12);handleMa_duodecimoCheckboxChange()}} >{activadoB12 ? true : false}</button>
							<button
							value={miercoles.Mi_duodecimo}
							style={{backgroundColor: colorC12, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(miercoles.Mi_duodecimo, setColorC12,activadoC12,setActivadoC12);handleMi_duodecimoCheckboxChange()}} >{activadoC12 ? true : false}</button>
							<button
							value={jueves.Ju_duodecimo}
							style={{backgroundColor: colorD12, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(jueves.Ju_duodecimo, setColorD12,activadoD12,setActivadoD12);handleJu_duodecimoCheckboxChange()}} >{activadoD12 ? true : false}</button>
							<button
							value={viernes.Vi_duodecimo}
							style={{backgroundColor: colorE12, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(viernes.Vi_duodecimo, setColorE12,activadoE12,setActivadoE12);handleVi_duodecimoCheckboxChange()}} >{activadoE12 ? true : false}</button>
							<button
							value={sabado.Sa_duodecimo}
							style={{backgroundColor: colorF12, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(sabado.Sa_duodecimo, setColorF12,activadoF12,setActivadoF12);handleSa_duodecimoCheckboxChange()}} >{activadoF12 ? true : false}</button>
							<button
							value={domingo.Do_duodecimo}
							style={{backgroundColor: colorG12, color:"#000000",width: '140px', height: '50px',borderColor:"#000000", borderWidth:"1px"}}
							onClick={() => {alternarEstadoBotonB(domingo.Do_duodecimo, setColorG12,activadoG12,setActivadoG12);handleDo_duodecimoCheckboxChange()}} >{activadoG12 ? true : false}</button>
						</div>


						<label className="text-center">**Para cada día se debe agregar una opción de horario o varios horarios. Si el horario es variable, se debe mostrar la tabla para cada semana.
							 Se deben completar al menos 2 semanas, las otras pueden quedar sin completar y se completan después.</label>
					</div>
					
					
					
					


					<div className="btn-group-wide d-grip mb-2 text-center">
						<button type='button' className='btn btn-secondary btn-outline-dark text-white col-3 m-1' onClick={() => historial.back()}>Volver</button>
						<button type='button' className='btn btn-success btn-outline-dark text-white col-3 m-1'
						onClick={handleUpdatePacienteF6}>Guardar</button>
					</div>
				</form>
				<div></div>
			</div>
		</div>
	);
}

export default Formulario_6;
