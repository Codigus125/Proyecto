import React, { useState , useRef} from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import historial from '../general/historial';
import logo from '../../images/Logo_Fundacion.png';

function FormularioAsistente_4() {
	const Rut= sessionStorage.getItem('rut');
    
    const formRef = useRef();
	const limpiar = () => {
		formRef.current.reset(); // Use ref.current to access the form and reset it
	  }
	const handleSubmit = (e) => {
		e.preventDefault();
        
	};
	const[p_aseo_cual,setP_aseo_cual] =useState("");
	const[p_ciclo_cual,setP_ciclo_cual] =useState("");
	const[p_fisio_cual,setP_fisio_cual] =useState("");
	const[p_salud_cual,setP_Salud_cual] =useState("");
	const[p_atencion_cual,setP_atencion_cual] =useState("");
	const[p_cuidado_cual,setP_cuidado_cual] =useState("");
	const[h_limp_cual,setH_limp_cual] =useState("");
	const[h_orden_cual,setH_orden_cual] =useState("");
	const[h_alimentacion_cual,setH_alimentacion_cual] =useState("");
	const[h_cuidado_cual,setH_cuidado_cual] =useState("");
	const[a_acompañar_cual,setA_acompañar_cual] =useState("");
	const[a_ocupacion_cual,setA_ocupacion_cual] =useState("");
	const[a_gestion_cual,setA_gesion_cual] =useState("");
	const[a_oscio_cual,setA_oscio_cual] =useState("");
	const[conduccion_cual,setconducion__cual] =useState("");
	const[comunicacion_cual,setcomunicaion__cual] =useState("");
	const[coordinacion_cual,setcordinacion__cual] =useState("");
	const[t_excepcion_cual,setT_excepcion__cual] =useState("");
	 
	//Tareas Personales//

	const[p_aseo,setP_Aseo]=useState({

		lavar_cuerpo: false,
		ducharse: false,
		cepillar_dientes: false,
		maquillar: false,
		afeitar: false,
		depilar: false,
		aplicar_crema: false,
		peinar: false,
		t_a_otra:false,
		t_a_cual:String
	}
	)
	const[p_ciclo,setP_Ciclo]=useState({

		levantarse_cama: false,
		vestirse : false,
		desvestirse : false,
		poner_pijama: false,
		acostarse: false,
		t_ci_otra: false,
		t_ci_cual: String
	}
	)

	const[p_fisio,setP_Fisio]=useState({

		ayuda_comer: false,
		ayuda_beber: false,
		apoyo_limpieza_orinar: false,
		apoyo_limpieza_defecar: false,
		t_f_otra:false,
		t_f_cual:String,
	}
	)

	const[p_salud,setP_Salud]=useState({

		prep_toma_medicamento: false,
		ayuda_tecnica: false,
		t_s_otra:false,
		t_s_cual:String
		
	}
	)

	const[p_atencion,setP_Atencion]=useState({

		responder_tel: false,
		tomar_nota: false,
		pasar_pag: false,
		acomodar_pc_acces: false,
		acomodar_cel_acces: false,
		t_ate_otra:false,
		t_ate_cual:String,
	}
	)

	const[p_cuidado,setP_Cuidado]=useState({

		atencion_hijos:false,
		atencion_sobrinos:false,
		atencion_nietos:false,
		t_cu_otra:false,
		t_cu_cual:String
	,
	}
	)

	//Tareas Hogar//

	const[h_limp,setH_Limp]=useState({

		aseo_hogar:false,
		lavado_vajilla:false,
		lavado_ropa:false,
		limp_muebles:false,
		limp_banos:false,
		hacer_cama:false,
		barrer:false,
		aspirar:false,
		planchar:false,
		h_otra:false,
		h_cual:String
		 

	}
	)
	const[h_orden,setH_Orden]=useState({

		organizar_objetos_h:false,
		guardar_ropa:false,
		guardar_ropa_cama:false,
		guardar_zapatos:false,
		org_deco:false,
		t_o_otra:false,
		t_o_cual:String
		 
	}
	)
	const[h_alimentacion,setH_Alimentacion]=useState({

		prep_desayuno:false,
		prep_merienda:false,
		prep_almuerzo:false,
		prep_once:false,
		prep_cena:false,
		uso_electro:false,
		t_ali_otra:false,
		t_ali_cual:String

		 

	}
	)
	const[h_cuidado,setH_Cuidado]=useState({

		atender_animal:false,
		atender_planta:false,
		h_cuidado_otra:false,
		h_cuidado_cual:String
	}
	)
	//Tarea Acompañamiento// 

	const[a_acompanar,setA_Acompanar]=useState({

		acompanamiento_vivienda:false,
		acompanamiento_otra:false,
		acompanamiento_cual:String
	}
	)

	const[a_ocupacion,setA_Ocupacion]=useState({

		acompanar_traslado_trabajo:false,
		acompanar_traslado_estudio:false,
		acompanar_traslado_comunitaria:false,
		asist_acti_laboral:false,
		asist_acti_educativa:false,
		asist_acti_comunitaria:false,
		ocupacion_otra:false,
		ocupacion_cual:String
	}	
	)

	const[a_gestion,setA_Gestion]=useState({

		realizar_tramites:false,
		ir_banco:false,
		ir_medico:false,
		compras_super:false,
		compras_tiendas:false,
		gestion_otra:false,
		gestio_cual:String,
		 
	}
	)
	const[a_oscio,setA_Oscio]=useState({

		viaje_dentro_pais:false,
		viajes_fuera_pais:false,
		acompanar_vacacion:false,
		asistir_conciertos:false,
		asistir_cine:false,
		asistir_teatros:false,
		asistir_restaurant:false,
		oscio_otra:false,
		oscio_cual:String,
	}
	)

	//Tarea Conduccion//

	const[conduccion,setConduccion]=useState({

		asis_conduce_buscar_persona_disc:false,
		asis_conduce_buscar_tercero:false,
		asistencia_conduccion:false,
		condu_otra:false,
		condu_cual:String,
	}
	)
	//Tarea Comunicacion//
	const[comunicacion,setComunicacion]=useState({

		comu_tableros:false,
		comu_dispositivo:false,
		comu_otra:false,
		comu_cual:String,
	}
	)
	//Tarea Coordinacion//
	const[cordinacion ,setCordinacion]=useState({

		establecer_cumplir_agenda:false,
		coor_otra:false,
		coor_cual:String
	}	 
	)

	//Tarea excepcional//
	const[excepcion ,setExcepcion]=useState({

		situ_crisis_persona:false,
		excepcion:false,
		excepcion_cual:String
	}
	)
	///////////////////////////////////////////////////////////////////////////////////////

	//Tareas Personales//
	const handlelavar_cuerpoCheckboxChange = (event) => {
		const { checked } = event.target;
		setP_Aseo({
		  ...p_aseo,
		  lavar_cuerpo: checked,
		});
	  };
	  const handleducharseCheckboxChange = (event) => {
		const { checked } = event.target;
		setP_Aseo({
		  ...p_aseo,
		  ducharse: checked,
		});
	  };
	  const handlecepillar_dientesCheckboxChange = (event) => {
		const { checked } = event.target;
		setP_Aseo({
		  ...p_aseo,
		  cepillar_dientes: checked,
		});
	  };
	  const handlemaquillarCheckboxChange = (event) => {
		const { checked } = event.target;
		setP_Aseo({
		  ...p_aseo,
		  maquillar: checked,
		});
	  };
	  const handleafeitarCheckboxChange = (event) => {
		const { checked } = event.target;
		setP_Aseo({
		  ...p_aseo,
		  afeitar: checked,
		});
	  };
	  const handledepilarCheckboxChange = (event) => {
		const { checked } = event.target;
		setP_Aseo({
		  ...p_aseo,
		  depilar: checked,
		});
	  };
	  const handleaplicar_cremaCheckboxChange = (event) => {
		const { checked } = event.target;
		setP_Aseo({
		  ...p_aseo,
		  aplicar_crema: checked,
		});
	  };
	  const handlepeinarCheckboxChange = (event) => {
		const { checked } = event.target;
		setP_Aseo({
		  ...p_aseo,
		  peinar: checked,
		});
	  };
	  const handlet_a_otraCheckboxChange = (event) => {
		const { checked } = event.target;
		setP_Aseo({
		  ...p_aseo,
		  t_a_otra: checked,
		});
	  };
///////////////////////////////////////////////////////////////////////////////////////////////////
		const handletlevantarse_camaCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Ciclo({
			...p_ciclo,
			levantarse_cama: checked,
			});
		};
		const handletvestirseCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Ciclo({
			...p_ciclo,
			vestirse: checked,
			});
		};
		const handletdesvestirseCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Ciclo({
			...p_ciclo,
			desvestirse: checked,
			});
		};
		const handletponer_pijamaCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Ciclo({
			...p_ciclo,
			poner_pijama: checked,
			});
		};
		const handletacostarseCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Ciclo({
			...p_ciclo,
			acostarse: checked,
			});
		};
		const handlett_ci_otraCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Ciclo({
			...p_ciclo,
			t_ci_otra: checked,
			});
		};
		////////////////////////////////////////////////////////////////////
		const handletayuda_comerCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Fisio({
			...p_fisio,
			ayuda_comer: checked,
			});
		};
		const handletayuda_beberCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Fisio({
			...p_fisio,
			ayuda_beber: checked,
			});
		};
		const handletapoyo_limpieza_orinarCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Fisio({
			...p_fisio,
			apoyo_limpieza_orinar: checked,
			});
		};
		const handletapoyo_limpieza_defecarCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Fisio({
			...p_fisio,
			apoyo_limpieza_defecar: checked,
			});
		};
		const handlett_f_otraCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Fisio({
			...p_fisio,
			t_f_otra: checked,
			});
		};
		/////////////////////////////////////////////////////////////////
		const handletprep_toma_medicamentoCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Salud({
			...p_salud,
			prep_toma_medicamento: checked,
			});
		};
		const handletayuda_tecnicaCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Salud({
			...p_salud,
			ayuda_tecnica: checked,
			});
		};
		const handlett_s_otraCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Salud({
			...p_salud,
			t_f_otra: checked,
			});
		};
		///////////////////////////////////////////////////////////////////
		const handletresponder_telCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Atencion({
			...p_atencion,
			responder_tel: checked,
			});
		};
		const handlettomar_notaCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Atencion({
			...p_atencion,
			tomar_nota: checked,
			});
		};
		const handletpasar_pagCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Atencion({
			...p_atencion,
			pasar_pag: checked,
			});
		};
		const handletacomodar_pc_accesCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Atencion({
			...p_atencion,
			acomodar_pc_acces: checked,
			});
		};
		const handletacomodar_cel_accesCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Atencion({
			...p_atencion,
			acomodar_cel_acces: checked,
			});
		};
		const handlett_ate_otraCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Atencion({
			...p_atencion,
			t_ate_otra: checked,
			});
		};
	/////////////////////////////////////////////////////////////////////////
		const handletatencion_hijosCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Cuidado({
			...p_cuidado,
			atencion_hijos: checked,
			});
		};
		const handletatencion_sobrinosCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Cuidado({
			...p_cuidado,
			atencion_sobrinos: checked,
			});
		};
		const handletatencion_nietosCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Cuidado({
			...p_cuidado,
			atencion_nietos: checked,
			});
		};
		const handlett_cu_otraCheckboxChange = (event) => {
			const { checked } = event.target;
			setP_Cuidado({
			...p_cuidado,
			t_cu_otra: checked,
			});
		};
		//////////////////////////////////////////////////////
		const handletaseo_hogarCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Limp({
			...h_limp,
			aseo_hogar: checked,
			});
		};
		const handletlavado_vajillaCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Limp({
			...h_limp,
			lavado_vajilla: checked,
			});
		};
		const handletlavado_ropaCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Limp({
			...h_limp,
			lavado_ropa: checked,
			});
		};
		const handletlimp_mueblesCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Limp({
			...h_limp,
			limp_muebles: checked,
			});
		};
		const handletlimp_banosCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Limp({
			...h_limp,
			limp_banos: checked,
			});
		};
		const handlethacer_camaCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Limp({
			...h_limp,
			hacer_cama: checked,
			});
		};
		const handletbarrerCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Limp({
			...h_limp,
			barrer: checked,
			});
		};
		const handletaspirarCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Limp({
			...h_limp,
			aspirar: checked,
			});
		};
		const handletplancharCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Limp({
			...h_limp,
			planchar: checked,
			});
		};
		const handleth_otraCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Limp({
			...h_limp,
			h_otra: checked,
			});
		};
		///////////////////////////////////////////////////////////////
		const handletorganizar_objetos_hCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Orden({
			...h_orden,
			organizar_objetos_h: checked,
			});
		};
		const handletguardar_ropaCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Orden({
			...h_orden,
			guardar_ropa: checked,
			});
		};
		const handletguardar_ropa_camaCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Orden({
			...h_orden,
			guardar_ropa_cama: checked,
			});
		};
		const handletguardar_zapatosCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Orden({
			...h_orden,
			guardar_zapatos: checked,
			});
		};
		const handletorg_decoCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Orden({
			...h_orden,
			org_deco: checked,
			});
		};
		const handlett_o_otraCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Orden({
			...h_orden,
			t_o_otra: checked,
			});
		};
		///////////////////////////////////////////////////////
		const handlett_ali_otraCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Alimentacion({
			...h_alimentacion,
			t_ali_otra: checked,
			});
		};
		const handletprep_desayunoCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Alimentacion({
			...h_alimentacion,
			prep_desayuno: checked,
			});
		};
	
		const handletprep_meriendaCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Alimentacion({
			...h_alimentacion,
			prep_merienda: checked,
			});
		};
	
		const handletprep_almuerzoCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Alimentacion({
			...h_alimentacion,
			prep_almuerzo: checked,
			});
		};
	
		const handletprep_onceCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Alimentacion({
			...h_alimentacion,
			prep_once: checked,
			});
		};
	
		const handletprep_cenaCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Alimentacion({
			...h_alimentacion,
			prep_cena: checked,
			});
		};
	
		const handletuso_electroCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Alimentacion({
			...h_alimentacion,
			uso_electro: checked,
			});
		};
		const handletuso_otroCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Alimentacion({
			...h_alimentacion,
			uso_electro: checked,
			});
		};
		//////////////////////////////////////////////////////////////
		const handletattender_animalCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Cuidado({
			...h_cuidado,
			atender_animal: checked,
			});
		};
		const handletatender_plantaCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Cuidado({
			...h_cuidado,
			atender_planta: checked,
			});
		};
		const handleth_cuidado_otraCheckboxChange = (event) => {
			const { checked } = event.target;
			setH_Cuidado({
			...h_cuidado,
			h_cuidado_otra: checked,
			});
		};
		////////////////////////////////////////////////////////////////////
		
		const handletacompanamiento_viviendaCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Acompanar({
			...a_acompanar,
			acompanamiento_vivienda: checked,
			});
		};
		const handletacompanamiento_otraCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Acompanar({
			...a_acompanar,
			acompanamiento_otra: checked,
			});
		};
		////////////////////////////////////////////////////
		const handletacompanar_traslado_trabajoCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Ocupacion({
			...a_ocupacion,
			acompanar_traslado_trabajo: checked,
			});
		};
		const handletacompanar_traslado_estudioCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Ocupacion({
			...a_ocupacion,
			acompanar_traslado_estudio: checked,
			});
		};
		const handletacompanar_traslado_comunitariaCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Ocupacion({
			...a_ocupacion,
			acompanar_traslado_comunitaria: checked,
			});
		};
		const handletasist_acti_laboralCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Ocupacion({
			...a_ocupacion,
			asist_acti_laboral: checked,
			});
		};
		const handletasist_acti_educativaCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Ocupacion({
			...a_ocupacion,
			asist_acti_educativa: checked,
			});
		};
		const handletasist_acti_comunitariaCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Ocupacion({
			...a_ocupacion,
			asist_acti_comunitaria: checked,
			});
		};
		const handletocupacion_otraCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Ocupacion({
			...a_ocupacion,
			ocupacion_otra: checked,
			});
		};
		////////////////////////////////////////////////////////////////////
		const handletrealizar_tramitesCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Gestion({
			...a_gestion,
			realizar_tramites: checked,
			});
		};
		const handletir_bancoCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Gestion({
			...a_gestion,
			ir_banco: checked,
			});
		};
		const handletir_medicoCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Gestion({
			...a_gestion,
			ir_medico: checked,
			});
		};
		const handletcompras_superCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Gestion({
			...a_gestion,
			compras_super: checked,
			});
		};
		const handletcompras_tiendasCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Gestion({
			...a_gestion,
			compras_tiendas: checked,
			});
		};
		const handletgestion_otraCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Gestion({
			...a_gestion,
			gestion_otra: checked,
			});
		};
		////////////////////////////////////////////////////////
		const handletviaje_dentro_paisCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Oscio({
			...a_oscio,
			viaje_dentro_pais: checked,
			});
		};
		const handletviajes_fuera_paisCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Oscio({
			...a_oscio,
			viajes_fuera_pais: checked,
			});
		};
		const handletacompanar_vacacionCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Oscio({
			...a_oscio,
			acompanar_vacacion: checked,
			});
		};
		const handletasistir_conciertosCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Oscio({
			...a_oscio,
			asistir_conciertos: checked,
			});
		};
		const handletasistir_cineCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Oscio({
			...a_oscio,
			asistir_cine: checked,
			});
		};
		const handletasistir_teatrosCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Oscio({
			...a_oscio,
			asistir_teatros: checked,
			});
		};
		const handletasistir_restaurantCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Oscio({
			...a_oscio,
			asistir_restaurant: checked,
			});
		};
		const handletoscio_otraCheckboxChange = (event) => {
			const { checked } = event.target;
			setA_Oscio({
			...a_oscio,
			oscio_otra: checked,
			});
		};
		/////////////////////////////////////////////////////////////////////////////
		const handletasis_conduce_buscar_persona_discCheckboxChange = (event) => {
			const { checked } = event.target;
			setConduccion({
			...conduccion,
			asis_conduce_buscar_persona_disc: checked,
			});
		};
		const handletasis_conduce_buscar_terceroCheckboxChange = (event) => {
			const { checked } = event.target;
			setConduccion({
			...conduccion,
			asis_conduce_buscar_tercero: checked,
			});
		};
		const handletasistencia_conduccionCheckboxChange = (event) => {
			const { checked } = event.target;
			setConduccion({
			...conduccion,
			asistencia_conduccion: checked,
			});
		};
		const handletcondu_otraCheckboxChange = (event) => {
			const { checked } = event.target;
			setConduccion({
			...conduccion,
			condu_otra: checked,
			});
		};
		/////////////////////////////////////////////////////////
		const handletcomu_tablerosCheckboxChange = (event) => {
			const { checked } = event.target;
			setComunicacion({
			...comunicacion,
			comu_tableros: checked,
			});
		};
		const handletcomu_dispositivoCheckboxChange = (event) => {
			const { checked } = event.target;
			setComunicacion({
			...comunicacion,
			comu_dispositivo: checked,
			});
		};
		
		const handletcomu_otraCheckboxChange = (event) => {
			const { checked } = event.target;
			setComunicacion({
			...comunicacion,
			comu_otra: checked,
			});
		};
		/////////////////////////////////////////////////////////////////////
		const handletestablecer_cumplir_agendaCheckboxChange = (event) => {
			const { checked } = event.target;
			setCordinacion({
			...cordinacion,
			establecer_cumplir_agenda: checked,
			});
		};
		const handletcoor_otraCheckboxChange = (event) => {
			const { checked } = event.target;
			setCordinacion({
			...cordinacion,
			coor_otra: checked,
			});
		};
	/////////////////////////////////////////////////////////////////////////////
		const handletsitu_crisis_personaCheckboxChange = (event) => {
			const { checked } = event.target;
			setExcepcion({
			...excepcion,
			situ_crisis_persona: checked,
			});
		};
		const handletexcepcionCheckboxChange = (event) => {
			const { checked } = event.target;
			setExcepcion({
			...excepcion,
			excepcion: checked,
			});
		};
	///////////////////oooooooo lo que me costo////////////////////

	const NuevosDatos={
		p_aseo:{
			lavar_cuerpo: p_aseo.lavar_cuerpo,
			ducharse: p_aseo.ducharse,
			cepillar_dientes: p_aseo.cepillar_dientes,
			maquillar: p_aseo.maquillar,
			afeitar: p_aseo.afeitar,
			depilar: p_aseo.depilar,
			aplicar_crema: p_aseo.aplicar_crema,
			peinar: p_aseo.peinar,
			t_a_otra:p_aseo.t_a_otra,
			t_a_cual:p_aseo_cual,
		},
		p_ciclo:{
			levantarse_cama: p_ciclo.levantarse_cama,
			vestirse : p_ciclo.vestirse,
			desvestirse : p_ciclo.desvestirse,
			poner_pijama: p_ciclo.poner_pijama,
			acostarse: p_ciclo.acostarse,
			t_ci_otra: p_ciclo.t_ci_otra,
			t_ci_cual: p_ciclo_cual,
		},
		p_fisio:{
			ayuda_comer: p_fisio.ayuda_comer,
			ayuda_beber: p_fisio.ayuda_beber,
			apoyo_limpieza_orinar: p_fisio.apoyo_limpieza_orinar,
			apoyo_limpieza_defecar: p_fisio.apoyo_limpieza_defecar,
			t_f_otra:p_fisio.t_f_otra,
			t_f_cual:p_fisio_cual,
		},
		p_salud:{
			prep_toma_medicamento: p_salud.prep_toma_medicamento,
			ayuda_tecnica: p_salud.ayuda_tecnica,
			t_s_otra:p_salud.t_s_otra,
			t_s_cual:p_salud_cual,
		},
		p_atencion:{
			responder_tel: p_atencion.responder_tel,
			tomar_nota: p_atencion.tomar_nota,
			pasar_pag: p_atencion.pasar_pag,
			acomodar_pc_acces: p_atencion.acomodar_pc_acces,
			acomodar_cel_acces: p_atencion.acomodar_cel_acces,
			t_ate_otra:p_atencion.t_ate_otra,
			t_ate_cual:p_atencion_cual,
		},
		p_cuidado:{
			atencion_hijos:p_cuidado.atencion_hijos,
			atencion_sobrinos:p_cuidado.atencion_sobrinos,
			atencion_nietos:p_cuidado.atencion_nietos,
			t_cu_otra:p_cuidado.t_cu_otra,
			t_cu_cual:p_cuidado_cual,
		},
		h_limp:{
			aseo_hogar:h_limp.aseo_hogar,
			lavado_vajilla:h_limp.lavado_vajilla,
			lavado_ropa:h_limp.lavado_ropa,
			limp_muebles:h_limp.limp_muebles,
			limp_banos:h_limp.limp_banos,
			hacer_cama:h_limp.hacer_cama,
			barrer:h_limp.barrer,
			aspirar:h_limp.aspirar,
			planchar:h_limp.planchar,
			h_otra:h_limp.h_otra,
			h_cual:h_limp_cual,
		},
		h_orden:{
			organizar_objetos_h:h_orden.organizar_objetos_h,
			guardar_ropa:h_orden.guardar_ropa,
			guardar_ropa_cama:h_orden.guardar_ropa_cama,
			guardar_zapatos:h_orden.guardar_zapatos,
			org_deco:h_orden.org_deco,
			t_o_otra:h_orden.t_o_otra,
			t_o_cual:h_orden_cual,
		},
		h_alimentacion:{
			prep_desayuno:h_alimentacion.prep_desayuno,
			prep_merienda:h_alimentacion.prep_merienda,
			prep_almuerzo:h_alimentacion.prep_almuerzo,
			prep_once:h_alimentacion.prep_once,
			prep_cena:h_alimentacion.prep_cena,
			uso_electro:h_alimentacion.uso_electro,
			t_ali_otra:h_alimentacion.t_ali_otra,
			t_ali_cual:h_alimentacion_cual,
		},
		h_cuidado:{
			atender_animal:h_cuidado.atender_animal,
			atender_planta:h_cuidado.atender_planta,
			h_cuidado_otra:h_cuidado.h_cuidado_otra,
			h_cuidado_cual:h_cuidado_cual,
		},
		a_acompanar:{
			acompanamiento_vivienda:a_acompanar.acompanamiento_vivienda,
			acompanamiento_otra:a_acompanar.acompanamiento_otra,
			acompanamiento_cual:a_acompañar_cual,
		},
		a_ocupacion:{
			acompanar_traslado_trabajo:a_ocupacion.acompanar_traslado_trabajo,
			acompanar_traslado_estudio:a_ocupacion.acompanar_traslado_estudio,
			acompanar_traslado_comunitaria:a_ocupacion.acompanar_traslado_comunitaria,
			asist_acti_laboral:a_ocupacion.asist_acti_laboral,
			asist_acti_educativa:a_ocupacion.asist_acti_educativa,
			asist_acti_comunitaria:a_ocupacion.asist_acti_comunitaria,
			ocupacion_otra:a_ocupacion.ocupacion_otra,
			ocupacion_cual:a_ocupacion_cual,
		},
		a_gestion:{
			realizar_tramites:a_gestion.realizar_tramites,
			ir_banco:a_gestion.ir_banco,
			ir_medico:a_gestion.ir_medico,
			compras_super:a_gestion.compras_super,
			compras_tiendas:a_gestion.compras_tiendas,
			gestion_otra:a_gestion.gestion_otra,
			gestio_cual:a_gestion_cual,
		},
		a_oscio:{
			viaje_dentro_pais:a_oscio.viaje_dentro_pais,
			viajes_fuera_pais:a_oscio.viajes_fuera_pais,
			acompanar_vacacion:a_oscio.acompanar_vacacion,
			asistir_conciertos:a_oscio.asistir_conciertos,
			asistir_cine:a_oscio.asistir_cine,
			asistir_teatros:a_oscio.asistir_teatros,
			asistir_restaurant:a_oscio.asistir_restaurant,
			oscio_otra:a_oscio.oscio_otra,
			oscio_cual:a_oscio_cual,
			},
		conduccion:{
			asis_conduce_buscar_persona_disc:conduccion.asis_conduce_buscar_persona_disc,
			asis_conduce_buscar_tercero:conduccion.asis_conduce_buscar_tercero,
			asistencia_conduccion:conduccion.asistencia_conduccion,
			condu_otra:conduccion.condu_otra,
			condu_cual:conduccion_cual,
		},
		comunicacion:{
			comu_tableros:comunicacion.comu_tableros,
			comu_dispositivo:comunicacion.comu_dispositivo,
			comu_otra:comunicacion.comu_otra,
			comu_cual:comunicacion_cual,
		},
		cordinacion:{
			establecer_cumplir_agenda:cordinacion.establecer_cumplir_agenda,
			coor_otra:cordinacion.coor_otra,
			coor_cual:coordinacion_cual,
		},
		excepcion:{
			situ_crisis_persona:excepcion.situ_crisis_persona,
			excepcion:excepcion.excepcion,
			excepcion_cual:t_excepcion_cual,
		},
	}
	
	const UPDATE_ASISTENTE_F5 = gql`
	mutation Mutation($rut: String!, $nuevosDatos: Formulario5!) {
		updateAsistente_F5(rut: $rut, NuevosDatos: $nuevosDatos) {
		  excepcion {
			situ_crisis_persona
			excepcion
			excepcion_cual
		  }
		  cordinacion {
			establecer_cumplir_agenda
			coor_otra
			coor_cual
		  }
		  comunicacion {
			comu_tableros
			comu_dispositivo
			comu_otra
			comu_cual
		  }
		  conduccion {
			asis_conduce_buscar_persona_disc
			asis_conduce_buscar_tercero
			asistencia_conduccion
			condu_otra
			condu_cual
		  }
		  a_oscio {
			viaje_dentro_pais
			viajes_fuera_pais
			acompanar_vacacion
			asistir_conciertos
			asistir_cine
			asistir_teatros
			asistir_restaurant
			oscio_otra
			oscio_cual
		  }
		  a_gestion {
			realizar_tramites
			ir_banco
			ir_medico
			compras_super
			compras_tiendas
			gestion_otra
			gestio_cual
		  }
		  a_ocupacion {
			acompanar_traslado_trabajo
			acompanar_traslado_estudio
			acompanar_traslado_comunitaria
			asist_acti_laboral
			asist_acti_educativa
			asist_acti_comunitaria
			ocupacion_otra
			ocupacion_cual
		  }
		  a_acompanar {
			acompanamiento_vivienda
			acompanamiento_otra
			acompanamiento_cual
		  }
		  h_cuidado {
			atender_animal
			atender_planta
			h_cuidado_otra
			h_cuidado_cual
		  }
		  h_alimentacion {
			prep_desayuno
			prep_merienda
			prep_almuerzo
			prep_once
			prep_cena
			uso_electro
			t_ali_otra
			t_ali_cual
		  }
		  h_orden {
			organizar_objetos_h
			guardar_ropa
			guardar_ropa_cama
			guardar_zapatos
			org_deco
			t_o_otra
			t_o_cual
		  }
		  h_limp {
			aseo_hogar
			lavado_vajilla
			lavado_ropa
			limp_muebles
			limp_banos
			hacer_cama
			barrer
			aspirar
			planchar
			h_otra
			h_cual
		  }
		  p_cuidado {
			atencion_hijos
			atencion_sobrinos
			atencion_nietos
			t_cu_otra
			t_cu_cual
		  }
		  p_atencion {
			responder_tel
			tomar_nota
			pasar_pag
			acomodar_pc_acces
			acomodar_cel_acces
			t_ate_otra
			t_ate_cual
		  }
		  p_aseo {
			lavar_cuerpo
			ducharse
			cepillar_dientes
			maquillar
			afeitar
			depilar
			aplicar_crema
			peinar
			t_a_otra
			t_a_cual
		  }
		  p_ciclo {
			levantarse_cama
			vestirse
			desvestirse
			poner_pijama
			acostarse
			t_ci_otra
			t_ci_cual
		  }
		  p_fisio {
			ayuda_comer
			ayuda_beber
			apoyo_limpieza_orinar
			apoyo_limpieza_defecar
			t_f_otra
			t_f_cual
		  }
		  p_salud {
			prep_toma_medicamento
			ayuda_tecnica
			t_s_otra
			t_s_cual
		  }
		}
	  }`
	const [handleUpdate] = useMutation(UPDATE_ASISTENTE_F5,{variables:{rut:Rut ,nuevosDatos:NuevosDatos }});

    const handleUpdateAsistenteF5 = async (e) => {
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
				<h1 className="text-center">Tareas de Asistente Personal</h1>
				
				<form ref={formRef} onSubmit={handleSubmit}>
					<h2 className="text-center">TAREAS PERSONALES</h2>
					<div className="mb-3">
						<label>Tarea: Aseo</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='lavar_cuerpo'
                             value= {p_aseo.lavar_cuerpo}
                             checked={p_aseo.lavar_cuerpo === true}
							 
                             onChange={handlelavar_cuerpoCheckboxChange}
							 
							/>
							<label className="form-check-label">Lavar partes del cuerpo</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='ducharse'
                             value= {p_aseo.ducharse}
                             checked={p_aseo.ducharse === true}
							 
                             onChange={handleducharseCheckboxChange} />
							<label className="form-check-label">Duchar</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='cepillar_dientes'
                             value= {p_aseo.cepillar_dientes}
                             checked={p_aseo.cepillar_dientes === true}
							 
                             onChange={handlecepillar_dientesCheckboxChange} />
							<label className="form-check-label">Cepillarse los dientes</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='maquillar'
                             value= {p_aseo.maquillar}
                             checked={p_aseo.maquillar === true}
							 
                             onChange={handlemaquillarCheckboxChange}/>
							<label className="form-check-label">Maquillar</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='afeitar'
                             value= {p_aseo.afeitar}
                             checked={p_aseo.afeitar === true}
							 
                             onChange={handleafeitarCheckboxChange} />
							<label className="form-check-label">Afeitar</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='depilar'
                             value= {p_aseo.depilar}
                             checked={p_aseo.depilar === true}
							 
                             onChange={handledepilarCheckboxChange} />
							<label className="form-check-label">Depilar</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='aplicar_crema'
                             value= {p_aseo.aplicar_crema}
                             checked={p_aseo.aplicar_crema === true}
							 
                             onChange={handleaplicar_cremaCheckboxChange} />
							<label className="form-check-label">Aplicar cremas</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='peinar'
                             value= {p_aseo.peinar}
                             checked={p_aseo.peinar === true}
							 
                             onChange={handlepeinarCheckboxChange} />
							<label className="form-check-label">Peinar</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='t_a_otra'
                             value= {p_aseo.t_a_otra}
                             checked={p_aseo.t_a_otra === true}
							 
                             onChange={handlet_a_otraCheckboxChange} />
							<label className="form-check-label">Otra</label>
							<div className="mb-3">
								<label>Cuál:</label>
								<textarea className="form-control" rows="1"
								value={p_aseo_cual}
                                onChange={(e) => setP_aseo_cual(e.target.value)}
								></textarea>
							</div>
						</div>
					</div>

					<div className="mb-3">
						<label>Tarea: Ciclo diario</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='levantarse_cama'
                             value= {p_ciclo.levantarse_cama}
                             checked={p_ciclo.levantarse_cama === true}
							 
                             onChange={handletlevantarse_camaCheckboxChange} />
							<label className="form-check-label">Levantarse de la cama</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='vestirse'
                             value= {p_ciclo.vestirse}
                             checked={p_ciclo.vestirse === true}
							 
                             onChange={handletvestirseCheckboxChange} />  
							<label className="form-check-label">Vestirse</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" 
							 id='desvestirse'
                             value= {p_ciclo.desvestirse}
                             checked={p_ciclo.desvestirse === true}
							 
                             onChange={handletdesvestirseCheckboxChange} />
							<label className="form-check-label">Desvestirse</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='poner_pijama'
							value= {p_ciclo.poner_pijama}
							checked={p_ciclo.poner_pijama === true}
							
							onChange={handletponer_pijamaCheckboxChange} />
							<label className="form-check-label">Poner pijama</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='acostarse'
							value= {p_ciclo.acostarse}
							checked={p_ciclo.acostarse === true}
							
							onChange={handletacostarseCheckboxChange} />
							<label className="form-check-label">Acostarse</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='t_ci_otra'
							value= {p_ciclo.t_ci_otra}
							checked={p_ciclo.t_ci_otra === true}
							
							onChange={handlett_ci_otraCheckboxChange} />
							<label className="form-check-label">Otra</label>
							<div className="mb-3">
								<label>Cuál:</label>
								<textarea className="form-control" rows="1"
								value={p_ciclo_cual}
                                onChange={(e) => setP_ciclo_cual(e.target.value)}></textarea>
							</div>
						</div>
					</div>

					<div className="mb-3">
						<label>Tarea: Fisiológicas</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							 id='ayuda_comer'
                             value= {p_fisio.ayuda_comer}
                             checked={p_fisio.ayuda_comer === true}
							 
                             onChange={handletayuda_comerCheckboxChange} />
							<label className="form-check-label">Ayuda para comer</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='ayuda_beber'
							value= {p_fisio.ayuda_beber}
							checked={p_fisio.ayuda_beber === true}
							
							onChange={handletayuda_beberCheckboxChange} />
							<label className="form-check-label">Ayuda para beber</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='apoyo_limpieza_orinar'
							value= {p_fisio.apoyo_limpieza_orinar}
							checked={p_fisio.apoyo_limpieza_orinar === true}
							
							onChange={handletapoyo_limpieza_orinarCheckboxChange} />
							<label className="form-check-label">Apoyo en limpieza al orinar</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='apoyo_limpieza_defecar'
							value= {p_fisio.apoyo_limpieza_defecar}
							checked={p_fisio.apoyo_limpieza_defecar === true}
							
							onChange={handletapoyo_limpieza_defecarCheckboxChange} />
							<label className="form-check-label">Apoyo en limpieza al defecar</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='t_f_otra'
							value= {p_fisio.t_f_otra}
							checked={p_fisio.t_f_otra === true}
							
							onChange={handlett_f_otraCheckboxChange} />
							<label className="form-check-label">Otra</label>
							<div className="mb-3">
								<label>Cuál:</label>
								<textarea className="form-control" rows="1"
								value={p_fisio_cual}
                                onChange={(e) => setP_fisio_cual(e.target.value)}></textarea>
							</div>
						</div>
					</div>

					<div className="mb-3">
						<label>Tarea: Salud</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='prep_toma_medicamento'
							value= {p_salud.prep_toma_medicamento}
							checked={p_salud.prep_toma_medicamento === true}
							
							onChange={handletprep_toma_medicamentoCheckboxChange} />
							<label className="form-check-label">Preparación y toma de medicamentos</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='ayuda_tecnica'
							value= {p_salud.ayuda_tecnica}
							checked={p_salud.ayuda_tecnica === true}
							
							onChange={handletayuda_tecnicaCheckboxChange} />
							<label className="form-check-label">Uso de ayudas técnicas</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='Otra'
							value= {p_salud.t_f_otra}
							checked={p_salud.t_f_otra === true}
							
							onChange={handlett_s_otraCheckboxChange} />
							<label className="form-check-label">Otra</label>
							<div className="mb-3">
								<label>Cuál:</label>
								<textarea className="form-control" rows="1"
								value={p_salud_cual}
                                onChange={(e) => setP_Salud_cual(e.target.value)}></textarea>
							</div>
						</div>
					</div>

					<div className="mb-3">
						<label>Tarea: Atención</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='responder_tel'
							value= {p_atencion.responder_tel}
							checked={p_atencion.responder_tel === true}
							
							onChange={handletresponder_telCheckboxChange} />
							<label className="form-check-label">Responder el teléfono</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='tomar_nota'
								value= {p_atencion.tomar_nota}
								checked={p_atencion.tomar_nota === true}
								
								onChange={handlettomar_notaCheckboxChange}  />
							<label className="form-check-label">Tomar notas</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='pasar_pag'
								value= {p_atencion.pasar_pag}
								checked={p_atencion.pasar_pag === true}
								
								onChange={handletpasar_pagCheckboxChange}  />
							<label className="form-check-label">Pasar páginas</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='acomodar_pc_acces'
								value= {p_atencion.acomodar_pc_acces}
								checked={p_atencion.acomodar_pc_acces === true}
								
								onChange={handletacomodar_pc_accesCheckboxChange}  />
							<label className="form-check-label">Acomodar un computador y sus accesorios</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='acomodar_cel_acces'
								value= {p_atencion.acomodar_cel_acces}
								checked={p_atencion.acomodar_cel_acces === true}
								
								onChange={handletacomodar_cel_accesCheckboxChange}  />
							<label className="form-check-label">Acomodar un teléfono celular y sus accesorios</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='t_ate_otra'
								value= {p_atencion.t_ate_otra}
								checked={p_atencion.t_ate_otra === true}
								
								onChange={handlett_ate_otraCheckboxChange}  />
							<label className="form-check-label">Otra</label>
							<div className="mb-3">
								<label>Cuál:</label>
								<textarea className="form-control" rows="1"
								value={p_atencion_cual}
                                onChange={(e) => setP_atencion_cual(e.target.value)}></textarea>
							</div>
						</div>
					</div>
					
					<div className="mb-3">
						<label>Tarea: Cuidado</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='atencion_hijos'
								value= {p_cuidado.atencion_hijos}
								checked={p_cuidado.atencion_hijos === true}
								
								onChange={handletatencion_hijosCheckboxChange}  />
							<label className="form-check-label">Atención a hijos o hijas</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='atencion_sobrinos'
							value= {p_cuidado.atencion_sobrinos}
							checked={p_cuidado.atencion_sobrinos === true}
							
							onChange={handletatencion_sobrinosCheckboxChange} />
							<label className="form-check-label">Atención de sobrinos o sobrinas</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='atencion_nietos'
							value= {p_cuidado.atencion_nietos}
							checked={p_cuidado.atencion_nietos === true}
							
							onChange={handletatencion_nietosCheckboxChange} />
							<label className="form-check-label">Atención de nietos o nietas</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='t_cu_otra'
							value= {p_cuidado.t_cu_otra}
							checked={p_cuidado.t_cu_otra === true}
							
							onChange={handlett_cu_otraCheckboxChange} />
							<label className="form-check-label">Otra</label>
							<div className="mb-3">
								<label>Cuál:</label>
								<textarea className="form-control" rows="1"
								value={p_cuidado_cual}
                                onChange={(e) => setP_cuidado_cual(e.target.value)}></textarea>
							</div>
						</div>
					</div>
					
					<h2 className="text-center">TAREAS DEL HOGAR</h2>

					<div className="mb-3">
						<label>Tarea: Limpieza</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='aseo_hogar'
							value= {h_limp.aseo_hogar}
							checked={h_limp.aseo_hogar === true}
							
							onChange={handletaseo_hogarCheckboxChange} />
							<label className="form-check-label">Aseo del hogar</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='lavado_vajilla'
								value= {h_limp.lavado_vajilla}
								checked={h_limp.lavado_vajilla === true}
								
								onChange={handletlavado_vajillaCheckboxChange} />
							<label className="form-check-label">Lavado de vajilla</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='lavado_ropa'
								value= {h_limp.lavado_ropa}
								checked={h_limp.lavado_ropa === true}
								
								onChange={handletlavado_ropaCheckboxChange} />
							<label className="form-check-label">Lavado de ropa</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='limp_muebles'
								value= {h_limp.limp_muebles}
								checked={h_limp.limp_muebles === true}
								
								onChange={handletlimp_mueblesCheckboxChange} />
							<label className="form-check-label">Limpieza de muebles</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='limp_banos'
								value= {h_limp.limp_banos}
								checked={h_limp.limp_banos === true}
								
								onChange={handletlimp_banosCheckboxChange} />
							<label className="form-check-label">Limpieza de baños</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='hacer_cama'
								value= {h_limp.hacer_cama}
								checked={h_limp.hacer_cama === true}
								
								onChange={handlethacer_camaCheckboxChange} />
							<label className="form-check-label">Hacer las camas</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='barrer'
								value= {h_limp.barrer}
								checked={h_limp.barrer === true}
								
								onChange={handletbarrerCheckboxChange} />
							<label className="form-check-label">Barrer</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='aspirar'
								value= {h_limp.aspirar}
								checked={h_limp.aspirar === true}
								
								onChange={handletaspirarCheckboxChange} />
							<label className="form-check-label">Aspirar</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='planchar'
								value= {h_limp.planchar}
								checked={h_limp.planchar === true}
								
								onChange={handletplancharCheckboxChange} />
							<label className="form-check-label">Planchar</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='h_otra'
								value= {h_limp.h_otra}
								checked={h_limp.h_otra === true}
						 
								onChange={handleth_otraCheckboxChange} />
							<label className="form-check-label">Otra</label>
							<div className="mb-3">
								<label>Cuál:</label>
								<textarea className="form-control" rows="1"
								value={h_limp_cual}
                                onChange={(e) => setH_limp_cual(e.target.value)}></textarea>
							</div>
						</div>
					</div>
					
					<div className="mb-3">
						<label>Tarea: Orden</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='organizar_objetos_h'
								value= {h_orden.organizar_objetos_h}
								checked={h_orden.organizar_objetos_h === true}
								
								onChange={handletorganizar_objetos_hCheckboxChange} />
							<label className="form-check-label">Organizar diferentes objetos del hogar</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='guardar_ropa'
								value= {h_orden.guardar_ropa}
								checked={h_orden.guardar_ropa === true}
								
								onChange={handletguardar_ropaCheckboxChange} />
							<label className="form-check-label">Guardar la ropa de vestir</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='guardar_ropa_cama'
								value= {h_orden.guardar_ropa_cama}
								checked={h_orden.guardar_ropa_cama === true}
								
								onChange={handletguardar_ropa_camaCheckboxChange} />
							<label className="form-check-label">Guardar ropa de cama y baño</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='guardar_zapatos'
								value= {h_orden.guardar_zapatos}
								checked={h_orden.guardar_zapatos === true}
								
								onChange={handletguardar_zapatosCheckboxChange} />
							<label className="form-check-label">Guardar zapatos</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='org_deco'
								value= {h_orden.org_deco}
								checked={h_orden.org_deco === true}
								
								onChange={handletorg_decoCheckboxChange} />
							<label className="form-check-label">Organizar decoración</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='t_o_otra'
								value= {h_orden.t_o_otra}
								checked={h_orden.t_o_otra === true}
								
								onChange={handlett_o_otraCheckboxChange} />
							<label className="form-check-label">Otra</label>
							<div className="mb-3">
								<label>Cuál:</label>
								<textarea className="form-control" rows="1"
								value={h_orden_cual}
                                onChange={(e) => setH_orden_cual(e.target.value)}></textarea>
							</div>
						</div>
					</div>
					
					<div className="mb-3">
						<label>Tarea: Alimentación</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='prep_desayuno'
								value= {h_alimentacion.prep_desayuno}
								checked={h_alimentacion.prep_desayuno === true}
								
								onChange={handletprep_desayunoCheckboxChange} />
							<label className="form-check-label">Preparación de comida en desayuno</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='prep_merienda'
							value= {h_alimentacion.prep_merienda}
							checked={h_alimentacion.prep_merienda === true}
							
							onChange={handletprep_meriendaCheckboxChange} />
							<label className="form-check-label">Preparación de comida en merienda</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='prep_almuerzo'
							value= {h_alimentacion.prep_almuerzo}
							checked={h_alimentacion.prep_almuerzo === true}
							
							onChange={handletprep_almuerzoCheckboxChange} />
							<label className="form-check-label">Preparación de comida en almuerzo</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='prep_once'
							value= {h_alimentacion.prep_once}
							checked={h_alimentacion.prep_once === true}
							
							onChange={handletprep_onceCheckboxChange} />
							<label className="form-check-label">Preparación de comida en once</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='prep_cena'
							value= {h_alimentacion.prep_cena}
							checked={h_alimentacion.prep_cena === true}
							
							onChange={handletprep_cenaCheckboxChange} />
							<label className="form-check-label">Preparación de comida en cena</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='uso_electro'
							value= {h_alimentacion.uso_electro}
							checked={h_alimentacion.uso_electro === true}
							
							onChange={handletuso_electroCheckboxChange} />
							<label className="form-check-label">Uso de electrodomésticos</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='attender_animal'
							value= {h_alimentacion.t_ali_otra}
							checked={h_alimentacion.t_ali_otra === true}
							
							onChange={handlett_ali_otraCheckboxChange}/>
							<label className="form-check-label">Otra</label>
							<div className="mb-3">
								<label>Cuál:</label>
								<textarea className="form-control" rows="1"
								value={h_alimentacion_cual}
                                onChange={(e) => setH_alimentacion_cual(e.target.value)}
								></textarea>
							</div>
						</div>
					</div>
					
					<div className="mb-3">
						<label>Tarea: Cuidado</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='attender_animal'
							value= {h_cuidado.atender_animal}
							checked={h_cuidado.atender_animal === true}
							
							onChange={handletattender_animalCheckboxChange} />
							<label className="form-check-label">Atender animales</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='atender_planta'
								value= {h_cuidado.atender_planta}
								checked={h_cuidado.atender_planta === true}
								
								onChange={handletatender_plantaCheckboxChange} />
							<label className="form-check-label">Atender plantas</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='h_cuidado_otra'
								value= {h_cuidado.h_cuidado_otra}
								checked={h_cuidado.h_cuidado_otra === true}
								
								onChange={handleth_cuidado_otraCheckboxChange} />
							<label className="form-check-label">Otra</label>
							<div className="mb-3">
								<label>Cuál:</label>
								<textarea className="form-control" rows="1"
								value={h_cuidado_cual}
                                onChange={(e) => setH_cuidado_cual(e.target.value)}></textarea>
							</div>
						</div>
					</div>
					
					<h2 className="text-center">TAREAS DE ACOMPAÑAMIENTO</h2>
					
					<div className="mb-3">
						<label>Tarea: Hogar</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
								id='acompanamiento_vivienda'
								value= {a_acompanar.acompanamiento_vivienda}
								checked={a_acompanar.acompanamiento_vivienda === true}
								
								onChange={handletacompanamiento_viviendaCheckboxChange} />
							<label className="form-check-label">Acompañamiento dentro de la vivienda (más pasivo que activo).</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='acompanamiento_otra'
							value= {a_acompanar.acompanamiento_otra}
							checked={a_acompanar.acompanamiento_otra === true}
							
							onChange={handletacompanamiento_otraCheckboxChange}  />
							<label className="form-check-label">Otra</label>
							<div className="mb-3">
								<label>Cuál:</label>
								<textarea className="form-control" rows="1"
								value={a_acompañar_cual}
                                onChange={(e) => setA_acompañar_cual(e.target.value)}></textarea>
							</div>
						</div>
					</div>
					<div className="mb-3">
						<label>Tarea: Trabajo o estudios</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='acompanar_traslado_trabajo'
							value= {a_ocupacion.acompanar_traslado_trabajo}
							checked={a_ocupacion.acompanar_traslado_trabajo === true}
							
							onChange={handletacompanar_traslado_trabajoCheckboxChange}  />
							<label className="form-check-label">Acompañar en el traslado a su lugar de trabajo</label>
						</div>
						
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='hermanos'
							value= {a_ocupacion.acompanar_traslado_estudio}
							checked={a_ocupacion.acompanar_traslado_estudio === true}
							
							onChange={handletacompanar_traslado_estudioCheckboxChange} />
							<label className="form-check-label">Acompañar en el traslado a su lugar de estudios</label>
						</div>
						
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='acompanar_traslado_estudio'
							value= {a_ocupacion.acompanar_traslado_comunitaria}
							checked={a_ocupacion.acompanar_traslado_comunitaria === true}
							
							onChange={handletacompanar_traslado_comunitariaCheckboxChange} />
							<label className="form-check-label">Acompañar en el traslado a su lugar de actividades comunitarias</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='acompanar_traslado_comunitaria'
							value= {a_ocupacion.asist_acti_laboral}
							checked={a_ocupacion.asist_acti_laboral === true}
							
							onChange={handletasist_acti_laboralCheckboxChange} />
							<label className="form-check-label">Asistirle en sus actividades laborales</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='asist_acti_laboral'
							value= {a_ocupacion.asist_acti_educativa}
							checked={a_ocupacion.asist_acti_educativa === true}
							
							onChange={handletasist_acti_educativaCheckboxChange} />
							<label className="form-check-label">Asistirle en sus actividades educativas</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='asist_acti_educativa'
							value= {a_ocupacion.asist_acti_comunitaria}
							checked={a_ocupacion.asist_acti_comunitaria === true}
							
							onChange={handletasist_acti_comunitariaCheckboxChange} />
							<label className="form-check-label">Asistirle en sus actividades comunitarias</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='asist_acti_comunitaria'
							value= {a_ocupacion.ocupacion_otra}
							checked={a_ocupacion.ocupacion_otra === true}
		
							onChange={handletocupacion_otraCheckboxChange} />
							<label className="form-check-label">Otra</label>
							<div className="mb-3">
								<label>Cuál:</label>
								<textarea className="form-control" rows="1"
								value={a_ocupacion_cual}
                                onChange={(e) => setA_ocupacion_cual(e.target.value)}></textarea>
							</div>
						</div>
					</div>
					
					<div className="mb-3">
						<label>Tarea: Gestiones</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='realizar_tramites'
							value= {a_gestion.realizar_tramites}
							checked={a_gestion.realizar_tramites === true}
							
							onChange={handletrealizar_tramitesCheckboxChange} />
							<label className="form-check-label">Realización de trámites</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='ir_banco'
							value= {a_gestion.ir_banco}
							checked={a_gestion.ir_banco === true}
							
							onChange={handletir_bancoCheckboxChange} />
							<label className="form-check-label">Ir al banco</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='ir_medico'
							value= {a_gestion.ir_medico}
							checked={a_gestion.ir_medico === true}
							
							onChange={handletir_medicoCheckboxChange} />
							<label className="form-check-label">Ir al médico</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='compras_super'
							value= {a_gestion.compras_super}
							checked={a_gestion.compras_super === true}
							
							onChange={handletcompras_superCheckboxChange} />
							<label className="form-check-label">Compras en el supermercado</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='compras_tiendas'
							value= {a_gestion.compras_tiendas}
							checked={a_gestion.compras_tiendas === true}
 
							onChange={handletcompras_tiendasCheckboxChange} />
							<label className="form-check-label">Compras en varias tiendas</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='gestion_otra'
							value= {a_gestion.gestion_otra}
							checked={a_gestion.gestion_otra === true}
							
							onChange={handletgestion_otraCheckboxChange} />
							<label className="form-check-label">Otra</label>
							<div className="mb-3">
								<label>Cuál:</label>
								<textarea className="form-control" rows="1"
								value={a_gestion_cual}
                                onChange={(e) => setA_gesion_cual(e.target.value)}></textarea>
							</div>
						</div>
					</div>
					
					<div className="mb-3">
						<label>Tarea: Ocio</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='viaje_dentro_pais'
							value= {a_oscio.viaje_dentro_pais}
							checked={a_oscio.viaje_dentro_pais === true}
							
							onChange={handletviaje_dentro_paisCheckboxChange} />
							<label className="form-check-label">Viajes dentro de país</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='viajes_fuera_pais'
							value= {a_oscio.viajes_fuera_pais}
							checked={a_oscio.viajes_fuera_pais === true}
							
							onChange={handletviajes_fuera_paisCheckboxChange} />
							<label className="form-check-label">Viajes fuera del país</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='acompanar_vacacion'
							value= {a_oscio.acompanar_vacacion}
							checked={a_oscio.acompanar_vacacion === true}
							onChange={handletacompanar_vacacionCheckboxChange}
							
							 />
							<label className="form-check-label">Acompañar en vacaciones</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='asistir_conciertos'
							value= {a_oscio.asistir_conciertos}
							checked={a_oscio.asistir_conciertos === true}
							onChange={handletasistir_conciertosCheckboxChange}
							 />
							<label className="form-check-label">Asistir a conciertos</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='asistir_cine'
							value= {a_oscio.asistir_cine}
							checked={a_oscio.asistir_cine === true}
							onChange={handletasistir_cineCheckboxChange}
							 />
							<label className="form-check-label">Asistir al cine</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='asistir_teatros'
							value= {a_oscio.asistir_teatros}
							checked={a_oscio.asistir_teatros === true}
							onChange={handletasistir_teatrosCheckboxChange}
							 />
							<label className="form-check-label">Asistir al teatro</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='asistir_restaurant'
							value= {a_oscio.asistir_restaurant}
							checked={a_oscio.asistir_restaurant === true}
							onChange={handletasistir_restaurantCheckboxChange}
							 />
							<label className="form-check-label">Asistir a restaurantes</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='oscio_otra'
							value= {a_oscio.oscio_otra}
							checked={a_oscio.oscio_otra === true}
							onChange={handletoscio_otraCheckboxChange}
							 />
							<label className="form-check-label">Otra</label>
							<div className="mb-3">
								<label>Cuál:</label>
								<textarea className="form-control" rows="1"
								value={a_oscio_cual}
                                onChange={(e) => setA_oscio_cual(e.target.value)}></textarea>
							</div>
						</div>
					</div>
					
					<h2 className="text-center">TAREAS DE CONDUCCION</h2>

					<div className="mb-3">
						<label>Tarea: Acción</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='asis_conduce_buscar_persona_disc'
							value= {conduccion.asis_conduce_buscar_persona_disc}
							checked={conduccion.asis_conduce_buscar_persona_disc === true}
							onChange={handletasis_conduce_buscar_persona_discCheckboxChange}
							 />
							<label className="form-check-label">Asistente conduce para llevar o buscar a la persona con discapacidad</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='asis_conduce_buscar_tercero'
							value= {conduccion.asis_conduce_buscar_tercero}
							checked={conduccion.asis_conduce_buscar_tercero === true}
							onChange={handletasis_conduce_buscar_terceroCheckboxChange}
							 />
							<label className="form-check-label">Asistente conduce para llevar o buscar a terceros</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='asistencia_conduccion'
							value= {conduccion.asistencia_conduccion}
							checked={conduccion.asistencia_conduccion === true}
							onChange={handletasistencia_conduccionCheckboxChange}
							 />
							<label className="form-check-label">Asistente no conduce, pero asiste en la conducción</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='condu_otra'
							value= {conduccion.condu_otra}
							checked={conduccion.condu_otra === true}
							onChange={handletcondu_otraCheckboxChange}
							 />
							<label className="form-check-label">Otra</label>
							<div className="mb-3">
								<label>Cuál:</label>
								<textarea className="form-control" rows="1"
								value={conduccion_cual}
                                onChange={(e) => setconducion__cual(e.target.value)}></textarea>
							</div>
						</div>
					</div>
					
					<h2 className="text-center">TAREAS DE COMUNICACION</h2>


					<div className="mb-3">
						<label>Tarea: Acción</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='comu_tableros'
							value= {comunicacion.comu_tableros}
							checked={comunicacion.comu_tableros === true}
							onChange={handletcomu_tablerosCheckboxChange}
							 />
							<label className="form-check-label">Comunicarse mediante tableros, permiten que la persona pueda manifestar sus opiniones sin expresarlo verbalmente.</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='comu_dispositivo'
							value= {comunicacion.comu_dispositivo}
							checked={comunicacion.comu_dispositivo === true}
							onChange={handletcomu_dispositivoCheckboxChange}
							 />
							<label className="form-check-label">Comunicarse mediante computador o dispositivo electrónico, permiten que la persona pueda manifestar sus opiniones sin expresarlo verbalmente.</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='comu_otra'
							value= {comunicacion.comu_otra}
							checked={comunicacion.comu_otra === true}
							onChange={handletcomu_otraCheckboxChange}
							 />
							<label className="form-check-label">Otra</label>
							<div className="mb-3">
								<label>Cuál:</label>
								<textarea className="form-control" rows="1"
								value={comunicacion_cual}
                                onChange={(e) => setcomunicaion__cual(e.target.value)}></textarea>
							</div>
						</div>
					</div>

					<h2 className="text-center">TAREAS DE COORDINACION</h2>

					<div className="mb-3">
						<label>Tarea: Acción</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='establecer_cumplir_agenda'
							value= {cordinacion.establecer_cumplir_agenda}
							checked={cordinacion.establecer_cumplir_agenda === true}
							onChange={handletestablecer_cumplir_agendaCheckboxChange}
							 />
							<label className="form-check-label">Establecer agendas diarias y cumplirlas</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='coor_otra'
							value= {cordinacion.coor_otra}
							checked={cordinacion.coor_otra === true}
							onChange={handletcoor_otraCheckboxChange}
							 />
							<label className="form-check-label">Otra</label>
							<div className="mb-3">
								<label>Cuál:</label>
								<textarea className="form-control" rows="1"
								value={coordinacion_cual}
                                onChange={(e) => setcordinacion__cual(e.target.value)}></textarea>
							</div>
						</div>
					</div>
	
					<h2 className="text-center">TAREAS EXCEPCIONALES</h2>

					<div className="mb-3">
						<label>Tarea: Acción</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='situ_crisis_persona'
							value= {excepcion.situ_crisis_persona}
							checked={excepcion.situ_crisis_persona === true}
							onChange={handletsitu_crisis_personaCheckboxChange}
							 />
							<label className="form-check-label">Situaciones de crisis de la persona</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox"
							id='excepcion'
							value= {excepcion.excepcion}
							checked={excepcion.excepcion === true}
							onChange={handletexcepcionCheckboxChange}
							 />
							<label className="form-check-label">Otra</label>
							<div className="mb-3">
								<label>Cuál:</label>
								<textarea className="form-control" rows="1"
								value={t_excepcion_cual}
                                onChange={(e) => setT_excepcion__cual(e.target.value)}></textarea>
							</div>
						</div>
					</div>


					<div className="btn-group-wide d-grip mb-2 text-center">
						<button type='button' className='btn btn-secondary btn-outline-dark text-white col-3 m-1' onClick={() => historial.back()}>Volver</button>
						<button type='button' className='btn btn-success btn-outline-dark text-white col-3 m-1'
						onClick={handleUpdateAsistenteF5}>Guardar</button>
					</div>
				</form>
			</div>
			</div>
		);
	}


export default FormularioAsistente_4;
