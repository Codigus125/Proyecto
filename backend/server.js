const mongoose = require('mongoose');
const { gql, ApolloServer } = require('apollo-server-express');
const bcrypt = require('bcrypt');
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'vida_independiente_chile';

const Profesional = require('./models/profesional');
const Asistente = require('./models/asistente')
const Paciente = require('./models/paciente')

mongoose.connect('mongodb+srv://Codigus:Testing159@cluster0.52bhgus.mongodb.net/VIC', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(
		() => {
			console.log('Se ha conectado a MongoDB');
		})
	.catch(
		(err) => {
			console.log('Error a conectarse a MongoDB:', err);
		}
	);

	const typeDefs = gql`
	type Profesional {
		id: ID!
		rut: Int!
		clave: String!
		rol: Int!
		nombre: String
		telefono: String
		correo: String
	}

	input Profesional_I {
		nombre: String
		telefono: String
		correo: String
	}
	
	type Asistente {
		id: ID!
		rut: Int!
		clave: String!
		rol: Int!
		nombre: String
		fecha_nac: String
		edad: String
		direccion: String
		comuna: String
		region: String
		nacionalidad: String
		telefono: String
		correo: String
		sexo: String
		asignado:Int,

		inscripcion: String,
		diagnostico: String,
		alergias:String,
		contextura:String,

		prevision: Prevision,
		afp: String,
		afp_nombre: String,
		ano_escolaridad: String,
		nvl_escolar: String,
		ano_ulti_nvl: String,
		profesion: String,

		pref_asis: String,
		discapacidad:Discapacidad,
		grado: String,
		
		p_aseo:P_aseo
		p_ciclo:P_ciclo
		p_fisio:P_fisio
		p_salud:P_salud
		p_atencion:P_atencion
		p_cuidado:P_cuidado
		h_limp:H_limp
		h_orden:H_orden
		h_alimentacion:H_alimentacion
		h_cuidado:H_cuidado
		a_acompanar:A_acompanar
		a_ocupacion:A_ocupacion
		a_gestion:A_gestion
		a_oscio:A_oscio
		conduccion:Conduccion
		comunicacion:Comunicacion
		cordinacion:Cordinacion
		excepcion:Excepcion

		lunes:Lunes
		martes:Martes
		miercoles:Miercoles
		jueves:Jueves
		viernes:Viernes
		sabado:Sabado
		domingo:Domingo
	}

	input Formulario6{
		lunes:Lunes_I
		martes:Martes_I
		miercoles:Miercoles_I
		jueves:Jueves_I
		viernes:Viernes_I
		sabado:Sabado_I
		domingo:Domingo_I
	}

	type Lunes{
		Lu_primero:Boolean,
		Lu_segundo:Boolean,
		Lu_tercero:Boolean,
		Lu_cuarto:Boolean,
		Lu_quinto:Boolean,
		Lu_sexto:Boolean,
		Lu_septimo:Boolean,
		Lu_octavo:Boolean,
		Lu_noveno:Boolean,
		Lu_decimo:Boolean,
		Lu_undecimo:Boolean,
		Lu_duodecimo:Boolean,
	},
	type Martes{
		Ma_primero:Boolean,
		Ma_segundo:Boolean,
		Ma_tercero:Boolean,
		Ma_cuarto:Boolean,
		Ma_quinto:Boolean,
		Ma_sexto:Boolean,
		Ma_septimo:Boolean,
		Ma_octavo:Boolean,
		Ma_noveno:Boolean,
		Ma_decimo:Boolean,
		Ma_undecimo:Boolean,
		Ma_duodecimo:Boolean,
	},
	type Miercoles{
		Mi_primero:Boolean,
		Mi_segundo:Boolean,
		Mi_tercero:Boolean,
		Mi_cuarto:Boolean,
		Mi_quinto:Boolean,
		Mi_sexto:Boolean,
		Mi_septimo:Boolean,
		Mi_octavo:Boolean,
		Mi_noveno:Boolean,
		Mi_decimo:Boolean,
		Mi_undecimo:Boolean,
		Mi_duodecimo:Boolean,
	},
	type Jueves{
		Ju_primero:Boolean,
		Ju_segundo:Boolean,
		Ju_tercero:Boolean,
		Ju_cuarto:Boolean,
		Ju_quinto:Boolean,
		Ju_sexto:Boolean,
		Ju_septimo:Boolean,
		Ju_octavo:Boolean,
		Ju_noveno:Boolean,
		Ju_decimo:Boolean,
		Ju_undecimo:Boolean,
		Ju_duodecimo:Boolean,
	},
	type Viernes{
		Vi_primero:Boolean,
		Vi_segundo:Boolean,
		Vi_tercero:Boolean,
		Vi_cuarto:Boolean,
		Vi_quinto:Boolean,
		Vi_sexto:Boolean,
		Vi_septimo:Boolean,
		Vi_octavo:Boolean,
		Vi_noveno:Boolean,
		Vi_decimo:Boolean,
		Vi_undecimo:Boolean,
		Vi_duodecimo:Boolean,
	},
	type Sabado{
		Sa_primero:Boolean,
		Sa_segundo:Boolean,
		Sa_tercero:Boolean,
		Sa_cuarto:Boolean,
		Sa_quinto:Boolean,
		Sa_sexto:Boolean,
		Sa_septimo:Boolean,
		Sa_octavo:Boolean,
		Sa_noveno:Boolean,
		Sa_decimo:Boolean,
		Sa_undecimo:Boolean,
		Sa_duodecimo:Boolean,
	},
	type Domingo{
		Do_primero:Boolean,
		Do_segundo:Boolean,
		Do_tercero:Boolean,
		Do_cuarto:Boolean,
		Do_quinto:Boolean,
		Do_sexto:Boolean,
		Do_septimo:Boolean,
		Do_octavo:Boolean,
		Do_noveno:Boolean,
		Do_decimo:Boolean,
		Do_undecimo:Boolean,
		Do_duodecimo:Boolean,
	},

	input Lunes_I{
		Lu_primero:Boolean,
		Lu_segundo:Boolean,
		Lu_tercero:Boolean,
		Lu_cuarto:Boolean,
		Lu_quinto:Boolean,
		Lu_sexto:Boolean,
		Lu_septimo:Boolean,
		Lu_octavo:Boolean,
		Lu_noveno:Boolean,
		Lu_decimo:Boolean,
		Lu_undecimo:Boolean,
		Lu_duodecimo:Boolean,
	},
	input Martes_I{
		Ma_primero:Boolean,
		Ma_segundo:Boolean,
		Ma_tercero:Boolean,
		Ma_cuarto:Boolean,
		Ma_quinto:Boolean,
		Ma_sexto:Boolean,
		Ma_septimo:Boolean,
		Ma_octavo:Boolean,
		Ma_noveno:Boolean,
		Ma_decimo:Boolean,
		Ma_undecimo:Boolean,
		Ma_duodecimo:Boolean,
	},
	input Miercoles_I{
		Mi_primero:Boolean,
		Mi_segundo:Boolean,
		Mi_tercero:Boolean,
		Mi_cuarto:Boolean,
		Mi_quinto:Boolean,
		Mi_sexto:Boolean,
		Mi_septimo:Boolean,
		Mi_octavo:Boolean,
		Mi_noveno:Boolean,
		Mi_decimo:Boolean,
		Mi_undecimo:Boolean,
		Mi_duodecimo:Boolean,
	},
	input Jueves_I{
		Ju_primero:Boolean,
		Ju_segundo:Boolean,
		Ju_tercero:Boolean,
		Ju_cuarto:Boolean,
		Ju_quinto:Boolean,
		Ju_sexto:Boolean,
		Ju_septimo:Boolean,
		Ju_octavo:Boolean,
		Ju_noveno:Boolean,
		Ju_decimo:Boolean,
		Ju_undecimo:Boolean,
		Ju_duodecimo:Boolean,
	},
	input Viernes_I{
		Vi_primero:Boolean,
		Vi_segundo:Boolean,
		Vi_tercero:Boolean,
		Vi_cuarto:Boolean,
		Vi_quinto:Boolean,
		Vi_sexto:Boolean,
		Vi_septimo:Boolean,
		Vi_octavo:Boolean,
		Vi_noveno:Boolean,
		Vi_decimo:Boolean,
		Vi_undecimo:Boolean,
		Vi_duodecimo:Boolean,
	},
	input Sabado_I{
		Sa_primero:Boolean,
		Sa_segundo:Boolean,
		Sa_tercero:Boolean,
		Sa_cuarto:Boolean,
		Sa_quinto:Boolean,
		Sa_sexto:Boolean,
		Sa_septimo:Boolean,
		Sa_octavo:Boolean,
		Sa_noveno:Boolean,
		Sa_decimo:Boolean,
		Sa_undecimo:Boolean,
		Sa_duodecimo:Boolean,
	},
	input Domingo_I{
		Do_primero:Boolean,
		Do_segundo:Boolean,
		Do_tercero:Boolean,
		Do_cuarto:Boolean,
		Do_quinto:Boolean,
		Do_sexto:Boolean,
		Do_septimo:Boolean,
		Do_octavo:Boolean,
		Do_noveno:Boolean,
		Do_decimo:Boolean,
		Do_undecimo:Boolean,
		Do_duodecimo:Boolean,
	},

	input Formulario1A{
		inscripcion: String,
		diagnostico: String,
		alergias:String,
		contextura:String,
	}

	input Formulario2A{
		prevision:Prevision_I,
		afp: String,
		afp_nombre: String,
		ano_escolaridad: String,
		nvl_escolar: String,
		ano_ulti_nvl: String,
		profesion: String,
	}
	input Formulario3A{
		pref_asis: String,
		discapacidad: Discapacidad_I,
		grado: String,
	}

	input Formulario5_A{
		p_aseo:P_aseo_I
		p_ciclo:P_ciclo_I
		p_fisio:P_fisio_I
		p_salud:P_salud_I
		p_atencion:P_atencion_I
		p_cuidado:P_cuidado_I
		h_limp:H_limp_I
		h_orden:H_orden_I
		h_alimentacion:H_alimentacion_I
		h_cuidado:H_cuidado_I
		a_acompanar:A_acompanar_I
		a_ocupacion:A_ocupacion_I
		a_gestion:A_gestion_I
		a_oscio:A_oscio_I
		conduccion:Conduccion_I
		comunicacion:Comunicacion_I
		cordinacion:Cordinacion_I
		excepcion:Excepcion_I
	}



	input Asistente_I {
		nombre: String
		fecha_nac: String
		edad: String
		direccion: String
		comuna: String
		region: String
		nacionalidad: String
		telefono: String
		correo: String
		sexo: String
	}
	
	type Paciente {
		id: ID!
		rut: Int!
		clave: String!
		rol: Int!
		nombre: String
		fecha_nac: String
		edad: String
		direccion: String
		comuna: String
		region: String
		nacionalidad: String
		telefono: String
		correo: String
		pers_contc: String
		telef_contc: String
		sexo: String
		asignado: Int

		discapacidad: Discapacidad,
		inscripcion: String,
		grado: String,
		diagnostico: String,
		comorbilidad:String,
		medico:String,
		contMed:String,
		ayudasTec:String,
		ayudasTecdesc:String,
		alergias:String,
		dolor:String,
		contextura:String,
		usoFarm:String,
		descFarm:String,

		interdiccion:String
		tutor:String
		prevision:Prevision
		afp: String
		afp_nombre: String
		pension: String
		prevision_salud : Prevision_salud

		acompanante: Acompanante
		relacionfamiliar: String
		desc_vivienda: String
		ano_escolaridad: String
		nvl_escolar: String
		ano_ulti_nvl: String
		profesion: String
		redes:Redes

		a_estudia: String,
		a_trabaja: String,
		a_act_comuni: String,
		a_act_hogar: String,
		a_otro: String,
		r_cual: String,
		a_cual: String,
		pref_asis: String
		r_estudia:R_estudia
		r_trabaja:R_trabaja
		r_actividadesC:R_actividadesC
		r_actividadesH:R_actividadesH
		r_otra:R_otra

		p_aseo:P_aseo
		p_ciclo:P_ciclo
		p_fisio:P_fisio
		p_salud:P_salud
		p_atencion:P_atencion
		p_cuidado:P_cuidado
		h_limp:H_limp
		h_orden:H_orden
		h_alimentacion:H_alimentacion
		h_cuidado:H_cuidado
		a_acompanar:A_acompanar
		a_ocupacion:A_ocupacion
		a_gestion:A_gestion
		a_oscio:A_oscio
		conduccion:Conduccion
		comunicacion:Comunicacion
		cordinacion:Cordinacion
		excepcion:Excepcion

		lunes:Lunes
		martes:Martes
		miercoles:Miercoles
		jueves:Jueves
		viernes:Viernes
		sabado:Sabado
		domingo:Domingo
	}

	input Paciente_I {
		nombre: String
		fecha_nac: String
		edad: String
		direccion: String
		comuna: String
		region: String
		nacionalidad: String
		telefono: String
		correo: String
		pers_contc: String
		telef_contc: String
		sexo: String
	}

	type Discapacidad {
		fisica: Boolean
		intelectual: Boolean
		psiquica: Boolean
		visual: Boolean
		auditiva: Boolean
	  }

	input Formulario1 {
		discapacidad: Discapacidad_I
		inscripcion: String
		grado: String
		diagnostico: String
		comorbilidad:String
		medico:String
		contMed:String
		ayudasTec:String
		ayudasTecdesc:String
		alergias:String
		dolor:String,
		contextura:String,
		usoFarm:String,
		descFarm:String,
	}

	input FormularioA1 {
		inscripcion: String
		alergias:String
		diagnostico: String
		contextura:String,
	}
	input FormularioA2{
		prevision:Prevision_I
		prevision_cual:String
		afp: String
		afp_nombre: String
		ano_escolaridad: String,
      	nvl_escolar: String,
      	ano_ulti_nvl: String,
      	profesion: String,
	}
	input FormularioA3 {
		discapacidad: Discapacidad_I
		grado: String
		pref_asis: String
	}

	input Discapacidad_I {
		fisica: Boolean
		intelectual: Boolean
		psiquica: Boolean
		visual: Boolean
		auditiva: Boolean
	}

	input Formulario2{
		interdiccion:String
		tutor:String
		prevision:Prevision_I
		prevision_cual:String
		afp: String
		afp_nombre: String
		pension: String
		prevision_salud : Prevision_salud_I
	}


	

	type Prevision{
		fonasa: Boolean
      	banmedica: Boolean
     	colmena:Boolean
      	cruzblanca:Boolean
     	nuevamasvida:Boolean
      	capredena: Boolean
     	dipreca: Boolean
		Otro: Boolean,
		Cual: String
	}
	input Prevision_I{
		fonasa: Boolean
      	banmedica: Boolean
     	colmena:Boolean
      	cruzblanca:Boolean
     	nuevamasvida:Boolean
      	capredena: Boolean
     	dipreca: Boolean
		Otro: Boolean,
		Cual: String
	}

	type Prevision_salud{
		basica: Boolean
      	invalidez_AFP: Boolean
      	Otra: Boolean
		Cual: String
	}

	input Prevision_salud_I{
		basica: Boolean
      	invalidez_AFP: Boolean
      	Otra: Boolean
		Cual: String
	}

	input Formulario3 {
		acompanante: Acompanante_I,
		relacionfamiliar: String,
      	desc_vivienda: String,
      	ano_escolaridad: String,
      	nvl_escolar: String,
      	ano_ulti_nvl: String,
      	profesion: String,
		redes:Redes_I,
	}

	type Acompanante{
        padre: Boolean,
        madre: Boolean,
        hermanos: Boolean,
        abuelos: Boolean,
        pareja : Boolean,
        hijos: Boolean,
        amigos: Boolean,
        solo: Boolean,
        otrosA: Boolean,
        cual: String
      }

	input Acompanante_I{
        padre: Boolean,
        madre: Boolean,
        hermanos: Boolean,
        abuelos: Boolean,
        pareja : Boolean,
        hijos: Boolean,
        amigos: Boolean,
        solo: Boolean,
        otrosA: Boolean,
        cual: String
      }
      

    type Redes{
        religion: Boolean,
        salud:  Boolean,
        amistades:  Boolean,
        recreacion :  Boolean,
        familia:  Boolean,
        trabajo: Boolean,
        comunitario:  Boolean,
        politico: Boolean,
        otrosR: Boolean,
        cual:String
      }

	input Redes_I{
        religion:Boolean
        salud:Boolean
        amistades:Boolean
        recreacion :Boolean
        familia:  Boolean
        trabajo: Boolean
        comunitario:  Boolean
        politico: Boolean
        otrosR: Boolean
        cual:String
    }

	input Formulario4{
		a_estudia: String,
		a_trabaja: String,
		a_act_comuni: String,
		a_act_hogar: String,
		a_otro: String,
		r_cual: String,
		a_cual: String,
		pref_asis: String
		r_estudia:R_estudia_I
		r_trabaja:R_trabaja_I
		r_actividadesC:R_actividadesC_I
		r_actividadesH:R_actividadesH_I
		r_otra:R_otra_I
	}
	type R_estudia{
			e_nadie:Boolean,
			e_familia: Boolean,
			e_amistades: Boolean,
			e_profesional_remunerado:Boolean,
		}
	type R_trabaja{
			t_nadie: Boolean,
			t_familia:Boolean,
			t_amistades: Boolean,
			t_profesional_remunerado: Boolean,
		}
	type R_actividadesC{
			ac_nadie: Boolean,
			ac_familia: Boolean,
			ac_amistades: Boolean,
			ac_profesional_remunerado: Boolean,
		}
	type R_actividadesH{
			ah_nadie: Boolean,
			ah_familia: Boolean,
			ah_amistades: Boolean,
			ah_profesional_remunerado: Boolean,
		}
	type R_otra{
			o_nadie:Boolean,
			o_familia: Boolean,
			o_amistades: Boolean,
			o_profesional_remunerado: Boolean,
		}

	input R_estudia_I{
			e_nadie:Boolean,
			e_familia: Boolean,
			e_amistades: Boolean,
			e_profesional_remunerado:Boolean,
		}
	input R_trabaja_I{
			t_nadie: Boolean,
			t_familia:Boolean,
			t_amistades: Boolean,
			t_profesional_remunerado: Boolean,
		}
	input R_actividadesC_I{
			ac_nadie: Boolean,
			ac_familia: Boolean,
			ac_amistades: Boolean,
			ac_profesional_remunerado: Boolean,
		}
	input R_actividadesH_I{
			ah_nadie: Boolean,
			ah_familia: Boolean,
			ah_amistades: Boolean,
			ah_profesional_remunerado: Boolean,
		}
	input R_otra_I{
			o_nadie:Boolean,
			o_familia: Boolean,
			o_amistades: Boolean,
			o_profesional_remunerado: Boolean,
		}

	input Formulario5{
		p_aseo:P_aseo_I
		p_ciclo:P_ciclo_I
		p_fisio:P_fisio_I
		p_salud:P_salud_I
		p_atencion:P_atencion_I
		p_cuidado:P_cuidado_I
		h_limp:H_limp_I
		h_orden:H_orden_I
		h_alimentacion:H_alimentacion_I
		h_cuidado:H_cuidado_I
		a_acompanar:A_acompanar_I
		a_ocupacion:A_ocupacion_I
		a_gestion:A_gestion_I
		a_oscio:A_oscio_I
		conduccion:Conduccion_I
		comunicacion:Comunicacion_I
		cordinacion:Cordinacion_I
		excepcion:Excepcion_I
	}
	
	type P_aseo{
			lavar_cuerpo: Boolean,
			ducharse: Boolean,
			cepillar_dientes: Boolean,
			maquillar: Boolean,
			afeitar: Boolean,
			depilar: Boolean,
			aplicar_crema: Boolean,
			peinar: Boolean,
			t_a_otra:Boolean,
			t_a_cual:String
		},
	type P_ciclo{
			levantarse_cama: Boolean,
			vestirse : Boolean,
			desvestirse : Boolean,
			poner_pijama: Boolean,
			acostarse: Boolean,
			t_ci_otra: Boolean,
			t_ci_cual: String
		},
	type P_fisio{
			ayuda_comer: Boolean,
			ayuda_beber: Boolean,
			apoyo_limpieza_orinar: Boolean,
			apoyo_limpieza_defecar: Boolean,
			t_f_otra:Boolean,
			t_f_cual:String,
		},
	type P_salud{
			prep_toma_medicamento: Boolean,
			ayuda_tecnica: Boolean,
			t_s_otra:Boolean,
			t_s_cual:String
		},
	type P_atencion{
			responder_tel: Boolean,
			tomar_nota: Boolean,
			pasar_pag: Boolean,
			acomodar_pc_acces: Boolean,
			acomodar_cel_acces: Boolean,
			t_ate_otra:Boolean,
			t_ate_cual:String,
		},
	type P_cuidado{
			atencion_hijos:Boolean,
			atencion_sobrinos:Boolean,
			atencion_nietos:Boolean,
			t_cu_otra:Boolean,
			t_cu_cual:String
		},
	type H_limp{
			aseo_hogar:Boolean,
			lavado_vajilla:Boolean,
			lavado_ropa:Boolean,
			limp_muebles:Boolean,
			limp_banos:Boolean,
			hacer_cama:Boolean,
			barrer:Boolean,
			aspirar:Boolean,
			planchar:Boolean,
			h_otra:Boolean,
			h_cual:String
		},
	type H_orden{
			organizar_objetos_h:Boolean,
			guardar_ropa:Boolean,
			guardar_ropa_cama:Boolean,
			guardar_zapatos:Boolean,
			org_deco:Boolean,
			t_o_otra:Boolean,
			t_o_cual:String
		},
	type H_alimentacion{
			prep_desayuno:Boolean,
			prep_merienda:Boolean,
			prep_almuerzo:Boolean,
			prep_once:Boolean,
			prep_cena:Boolean,
			uso_electro:Boolean,
			t_ali_otra:Boolean,
			t_ali_cual:String
		},
	type H_cuidado{
			atender_animal:Boolean,
			atender_planta:Boolean,
			h_cuidado_otra:Boolean,
			h_cuidado_cual:String
		},
	type	A_acompanar{
			acompanamiento_vivienda:Boolean,
			acompanamiento_otra:Boolean,
			acompanamiento_cual:String
		},
	type A_ocupacion{
			acompanar_traslado_trabajo:Boolean,
			acompanar_traslado_estudio:Boolean,
			acompanar_traslado_comunitaria:Boolean,
			asist_acti_laboral:Boolean,
			asist_acti_educativa:Boolean,
			asist_acti_comunitaria:Boolean,
			ocupacion_otra:Boolean,
			ocupacion_cual:String
		},
	type A_gestion{
			realizar_tramites:Boolean,
			ir_banco:Boolean,
			ir_medico:Boolean,
			compras_super:Boolean,
			compras_tiendas:Boolean,
			gestion_otra:Boolean,
			gestio_cual:String,
		},
	type A_oscio{
			viaje_dentro_pais:Boolean,
			viajes_fuera_pais:Boolean,
			acompanar_vacacion:Boolean,
			asistir_conciertos:Boolean,
			asistir_cine:Boolean,
			asistir_teatros:Boolean,
			asistir_restaurant:Boolean,
			oscio_otra:Boolean,
			oscio_cual:String,
			},
	type Conduccion{
			asis_conduce_buscar_persona_disc:Boolean,
			asis_conduce_buscar_tercero:Boolean,
			asistencia_conduccion:Boolean,
			condu_otra:Boolean,
			condu_cual:String,
		},
	type Comunicacion{
			comu_tableros:Boolean,
			comu_dispositivo:Boolean,
			comu_otra:Boolean,
			comu_cual:String,
		},
	type Cordinacion{
			establecer_cumplir_agenda:Boolean,
			coor_otra:Boolean,
			coor_cual:String
		},
	type Excepcion{
			situ_crisis_persona:Boolean,
			excepcion:Boolean,
			excepcion_cual:String
		},
		

	input P_aseo_I{
			lavar_cuerpo: Boolean,
			ducharse: Boolean,
			cepillar_dientes: Boolean,
			maquillar: Boolean,
			afeitar: Boolean,
			depilar: Boolean,
			aplicar_crema: Boolean,
			peinar: Boolean,
			t_a_otra:Boolean,
			t_a_cual:String
		},
	input P_ciclo_I{
			levantarse_cama: Boolean,
			vestirse : Boolean,
			desvestirse : Boolean,
			poner_pijama: Boolean,
			acostarse: Boolean,
			t_ci_otra: Boolean,
			t_ci_cual: String
		},
	input P_fisio_I{
			ayuda_comer: Boolean,
			ayuda_beber: Boolean,
			apoyo_limpieza_orinar: Boolean,
			apoyo_limpieza_defecar: Boolean,
			t_f_otra:Boolean,
			t_f_cual:String,
		},
	input P_salud_I{
			prep_toma_medicamento: Boolean,
			ayuda_tecnica: Boolean,
			t_s_otra:Boolean,
			t_s_cual:String
		},
	input P_atencion_I{
			responder_tel: Boolean,
			tomar_nota: Boolean,
			pasar_pag: Boolean,
			acomodar_pc_acces: Boolean,
			acomodar_cel_acces: Boolean,
			t_ate_otra:Boolean,
			t_ate_cual:String,
		},
	input P_cuidado_I{
			atencion_hijos:Boolean,
			atencion_sobrinos:Boolean,
			atencion_nietos:Boolean,
			t_cu_otra:Boolean,
			t_cu_cual:String
		},
	input H_limp_I{
			aseo_hogar:Boolean,
			lavado_vajilla:Boolean,
			lavado_ropa:Boolean,
			limp_muebles:Boolean,
			limp_banos:Boolean,
			hacer_cama:Boolean,
			barrer:Boolean,
			aspirar:Boolean,
			planchar:Boolean,
			h_otra:Boolean,
			h_cual:String
		},
	input H_orden_I{
			organizar_objetos_h:Boolean,
			guardar_ropa:Boolean,
			guardar_ropa_cama:Boolean,
			guardar_zapatos:Boolean,
			org_deco:Boolean,
			t_o_otra:Boolean,
			t_o_cual:String
		},
	input H_alimentacion_I{
			prep_desayuno:Boolean,
			prep_merienda:Boolean,
			prep_almuerzo:Boolean,
			prep_once:Boolean,
			prep_cena:Boolean,
			uso_electro:Boolean,
			t_ali_otra:Boolean,
			t_ali_cual:String
		},
	input H_cuidado_I{
			atender_animal:Boolean,
			atender_planta:Boolean,
			h_cuidado_otra:Boolean,
			h_cuidado_cual:String
		},
	input A_acompanar_I{
			acompanamiento_vivienda:Boolean,
			acompanamiento_otra:Boolean,
			acompanamiento_cual:String
		},
	input A_ocupacion_I{
			acompanar_traslado_trabajo:Boolean,
			acompanar_traslado_estudio:Boolean,
			acompanar_traslado_comunitaria:Boolean,
			asist_acti_laboral:Boolean,
			asist_acti_educativa:Boolean,
			asist_acti_comunitaria:Boolean,
			ocupacion_otra:Boolean,
			ocupacion_cual:String
		},
	input A_gestion_I{
			realizar_tramites:Boolean,
			ir_banco:Boolean,
			ir_medico:Boolean,
			compras_super:Boolean,
			compras_tiendas:Boolean,
			gestion_otra:Boolean,
			gestio_cual:String,
		},
	input A_oscio_I{
			viaje_dentro_pais:Boolean,
			viajes_fuera_pais:Boolean,
			acompanar_vacacion:Boolean,
			asistir_conciertos:Boolean,
			asistir_cine:Boolean,
			asistir_teatros:Boolean,
			asistir_restaurant:Boolean,
			oscio_otra:Boolean,
			oscio_cual:String,
			},
	input Conduccion_I{
			asis_conduce_buscar_persona_disc:Boolean,
			asis_conduce_buscar_tercero:Boolean,
			asistencia_conduccion:Boolean,
			condu_otra:Boolean,
			condu_cual:String,
		},
	input Comunicacion_I{
			comu_tableros:Boolean,
			comu_dispositivo:Boolean,
			comu_otra:Boolean,
			comu_cual:String,
		},
	input Cordinacion_I{
			establecer_cumplir_agenda:Boolean,
			coor_otra:Boolean,
			coor_cual:String
		},
	input Excepcion_I{
			situ_crisis_persona:Boolean,
			excepcion:Boolean,
			excepcion_cual:String
		},

	type Usuario {
		id: ID!
		rut: Int!
		clave: String!
		rol: Int!
	}
	
	type Alert{
		message: String
	}

	type AuthPayload {
		token: String
		success: Boolean
		message: String
	}

	input AdminAsistenteUpdate{
		nombre: String
		edad: Int
		
	}

	type Query{
		getProfesionales: [Profesional]
		getAsistentes: [Asistente]
		getPacientes: [Paciente]
		
		getProfesionalRut(rut: Int!): Profesional
		getAsistentesRut(rut: Int!): Asistente
		getPacientesRut(rut: Int!): Paciente

		getPacientesRutE(rut: String!): Paciente
		
	}

	type Mutation{
		addUsuario(rut: Int!, clave: String!, rol: Int!): Usuario
	
		loginProfesional(rut: Int!, clave: String!): AuthPayload
		deleteProfesional(rut: Int!): Alert
		
		loginAsistente(rut: Int!, clave: String!): AuthPayload
		deleteAsistente(rut: Int!): Alert
		
		loginPaciente(rut: Int!, clave: String!): AuthPayload
		deletePaciente(rut: Int!): Alert

		updateProfesional(rut:String!, NuevosDatos:Profesional_I):Profesional
		updateAdminAsistente(rut:Int!, NuevosDatos:Asistente_I):Asistente
		updateAdminPaciente(rut:Int!, NuevosDatos:Paciente_I):Paciente

		updateAsistente(rut:String!, NuevosDatos:Asistente_I):Asistente
		updateAsistente_F1(rut:String!,NuevosDatos:FormularioA1!):Asistente
		updateAsistente_F2(rut:String!,NuevosDatos:FormularioA2!):Asistente
		updateAsistente_F3(rut:String!,NuevosDatos:FormularioA3!):Asistente
		updateAsistente_F5(rut:String!,NuevosDatos:Formulario5!):Asistente
		updateAsistente_F6(rut:String!,NuevosDatos:Formulario6!):Asistente
		
		updatePaciente(rut:String!, NuevosDatos:Paciente_I):Paciente
		updatePaciente_F1(rut:String!,NuevosDatos:Formulario1!):Paciente
		updatePaciente_F2(rut:String!,NuevosDatos:Formulario2!):Paciente
		updatePaciente_F3(rut:String!,NuevosDatos:Formulario3!):Paciente
		updatePaciente_F4(rut:String!,NuevosDatos:Formulario4!):Paciente
		updatePaciente_F5(rut:String!,NuevosDatos:Formulario5!):Paciente
		updatePaciente_F6(rut:String!,NuevosDatos:Formulario6!):Paciente
	}
`;

const resolvers = {
	Query: {
		async getProfesionales(obj){
			const profesional = await Profesional.find();
			return profesional;
		},
		async getAsistentes(obj){
			const asistentes = await Asistente.find();
			return asistentes;
		},
		async getPacientes(obj){
			const paciente = await Paciente.find();
			return paciente;
		},
		async getAsistentesRut(obj,{rut}){
			const asistente = await Asistente.findOne({ rut})
			return asistente;
		},
		async getPacientesRut(obj,{rut}){
			const paciente = await Paciente.findOne({ rut})
			return paciente;
		},
		async getPacientesRutE(obj,{rut}){
			const paciente = await Paciente.findOne({ rut})
			return paciente;
		},
		async getProfesionalRut(obj,{rut}){
			const profesional = await Profesional.findOne({ rut})
			return profesional;
		},
	},
	Mutation:{
		async loginProfesional(obj, { rut, clave }) {
 			 const profesional = await Profesional.findOne({ rut });
 			 if (!profesional) {
    				console.log('Usuario no encontrado');
    				return {
      					token: null,
      					success: false,
      					message: 'Usuario no encontrado',
    				};
  			}
  			
  			const passwordMatch = await bcrypt.compare(clave, profesional.clave);
  			if (!passwordMatch) {
    				console.log('Contraseña incorrecta');
    				return {
      					token: null,
      					success: false,
      					message: 'Contraseña incorrecta',
    				};
  			}

  			const token = jwt.sign({ rut: profesional.rut, rol: profesional.rol }, SECRET_KEY, { expiresIn: '1h' });
  			console.log('Token generado:', token);

  			return {
    				token,
    				success: true,
    				message: 'Autenticación exitosa',
  			};
		},
		async loginAsistente(obj, { rut, clave }) {
 			 const asistente = await Asistente.findOne({ rut });
 			 if (!asistente) {
    				console.log('Usuario no encontrado');
    				return {
      					token: null,
      					success: false,
      					message: 'Usuario no encontrado',
    				};
  			}
  			
  			const passwordMatch = await bcrypt.compare(clave, asistente.clave);
  			if (!passwordMatch) {
    				console.log('Contraseña incorrecta');
    				return {
      					token: null,
      					success: false,
      					message: 'Contraseña incorrecta',
    				};
  			}

  			const token = jwt.sign({ rut: asistente.rut }, SECRET_KEY, { expiresIn: '1h' });
  			console.log('Token generado:', token);

  			return {
    				token,
    				success: true,
    				message: 'Autenticación exitosa',
  			};
		},
		async loginPaciente(obj, { rut, clave }) {
 			 const paciente = await Paciente.findOne({ rut });
 			 if (!paciente) {
    				console.log('Usuario no encontrado');
    				return {
      					token: null,
      					success: false,
      					message: 'Usuario no encontrado',
    				};
  			}
  			
  			const passwordMatch = await bcrypt.compare(clave, paciente.clave);
  			if (!passwordMatch) {
    				console.log('Contraseña incorrecta');
    				return {
      					token: null,
      					success: false,
      					message: 'Contraseña incorrecta',
    				};
  			}

  			const token = jwt.sign({ rut: paciente.rut }, SECRET_KEY, { expiresIn: '1h' });
  			console.log('Token generado:', token);

  			return {
    				token,
    				success: true,
    				message: 'Autenticación exitosa',
  			};
		},
		async addUsuario(obj, { rut, clave, rol }) {
  			try {	
  				const hashedClave = await bcrypt.hash(clave, 10);
  				if (!rol) {
        				rol = 1; 
      				}
    				let usuario;

			      	if (rol === 1) {
					const paciente = new Paciente({ rut, clave: hashedClave, rol });
    					await paciente.save();
    					return paciente;
			      } else if (rol === 2) {
					const asistente = new Asistente({ rut, clave: hashedClave, rol });
    					await asistente.save();
    					return asistente;
			      } else if (rol === 3) {
					const profesional = new Profesional({ rut, clave: hashedClave, rol });
					await profesional.save();
					return profesional;
			      } else {
				
			      }
  			} catch (error) {
    				throw new Error("Error");
  			}
  			
		},
		async deleteProfesional(obj, { rut }){
			try {
      				const deletedProfesional = await Profesional.findOneAndDelete({ rut });

      				if (!deletedProfesional) {
        				throw new Error("Profesional no encontrado");
      				}

      				return {
        				message: "Profesional eliminado exitosamente",
      				};
    				} catch (error) {
      					throw new Error("Error al eliminar el profesional: " + error.message);
    				}
		},
		async deleteAsistente(obj, { rut }){
			try {
      				const deletedAsistente = await Asistente.findOneAndDelete({ rut });

      				if (!deletedAsistente) {
        				throw new Error("Asistente no encontrado");
      				}

      				return {
        				message: "Asistente eliminado exitosamente",
      				};
    				} catch (error) {
      					throw new Error("Error al eliminar al Asistente: " + error.message);
    				}
		},
		async deletePaciente(obj, { rut }){
			try {
      				const deletedPaciente = await Paciente.findOneAndDelete({ rut });

      				if (!deletedPaciente) {
        				throw new Error("Profesional no encontrado");
      				}

      				return {
        				message: "Paciente eliminado exitosamente",
      				};
    				} catch (error) {
      					throw new Error("Error al eliminar el paciente: " + error.message);
    				}
		},
		async updateProfesional(obj,{rut,NuevosDatos}){
			try{
				const updateProfesional = await Profesional.findOneAndUpdate(
					{rut},
					{$set: NuevosDatos}
					);

				if (!updateProfesional) {
					throw new Error("Asistente no actualizado");
				  }
				return {
					message: "Asistente actualizado exitosamente",
					paciente: updateProfesional,
				  };
				} catch (error) {
					throw new Error("Error al actualizar el Asistente: " + error.message);
			  	}
		},
		async updateAdminPaciente(obj,{rut,NuevosDatos}){
			try{
				const updateAdminPaciente = await Paciente.findOneAndUpdate(
					{rut},
					{$set: NuevosDatos}
					);

				if (!updateAdminPaciente) {
					throw new Error("Asistente no actualizado");
				  }
				return {
					message: "Asistente actualizado exitosamente",
					paciente: updateAdminPaciente,
				  };
				} catch (error) {
					throw new Error("Error al actualizar el Asistente: " + error.message);
			  	}
		},
		async updateAdminAsistente(obj,{rut,NuevosDatos}){
			try{
				const updateAdminAsistente = await Asistente.findOneAndUpdate(
					{rut},
					{$set: NuevosDatos}
					);

				if (!updateAdminAsistente) {
					throw new Error("Asistente no actualizado");
				  }
				return {
					message: "Asistente actualizado exitosamente",
					asistente: updateAdminAsistente,
				  };
				} catch (error) {
					throw new Error("Error al actualizar el Asistente: " + error.message);
			  	}
		},
		async updateAsistente(obj,{rut,NuevosDatos}){
			try{
				const updateAsistente = await Asistente.findOneAndUpdate(
					{rut},
					{$set: NuevosDatos}
					);

				if (!updateAsistente) {
					throw new Error("Asistente no actualizado");
				  }
				return {
					message: "Asistente actualizado exitosamente",
					asistente: updateAsistente,
				  };
				} catch (error) {
					throw new Error("Error al actualizar el Asistente: " + error.message);
			  	}
		},
		async updateAsistente_F1(obj,{rut,NuevosDatos}){
			try{
				const updateAsistente_F1 = await Asistente.findOneAndUpdate(
					{rut},
					{$set: NuevosDatos}
					);

				if (!updateAsistente_F1) {
					throw new Error("Paciente no actualizado");
				  }
				return {
					message: "Paciente actualizado exitosamente",
					paciente: updateAsistente_F1,
				  };
				} catch (error) {
					throw new Error("Error al actualizar el paciente: " + error.message);
			  	}
		},
		async updateAsistente_F2(obj,{rut,NuevosDatos}){
			try{
				const updateAsistente_F2 = await Asistente.findOneAndUpdate(
					{rut},
					{$set: NuevosDatos}
					);

				if (!updateAsistente_F2) {
					throw new Error("Paciente no actualizado");
				  }
				return {
					message: "Paciente actualizado exitosamente",
					paciente: updateAsistente_F2,
				  };
				} catch (error) {
					throw new Error("Error al actualizar el paciente: " + error.message);
			  	}
		},
		async updateAsistente_F3(obj,{rut,NuevosDatos}){
			try{
				const updateAsistente_F3 = await Asistente.findOneAndUpdate(
					{rut},
					{$set: NuevosDatos}
					);

				if (!updateAsistente_F3) {
					throw new Error("Paciente no actualizado");
				  }
				return {
					message: "Paciente actualizado exitosamente",
					paciente: updateAsistente_F3,
				  };
				} catch (error) {
					throw new Error("Error al actualizar el paciente: " + error.message);
			  	}
		},
		async updateAsistente_F5(obj,{rut,NuevosDatos}){
			try{
				const updateAsistente_F5 = await Asistente.findOneAndUpdate(
					{rut},
					{$set: NuevosDatos}
					);

				if (!updateAsistente_F5) {
					throw new Error("Paciente no actualizado");
				  }
				return {
					message: "Paciente actualizado exitosamente",
					paciente: updateAsistente_F5,
				  };
				} catch (error) {
					throw new Error("Error al actualizar el paciente: " + error.message);
			  	}
		},
		async updateAsistente_F6(obj,{rut,NuevosDatos}){
			try{
				const updateAsistente_F6 = await Asistente.findOneAndUpdate(
					{rut},
					{$set: NuevosDatos}
					);

				if (!updateAsistente_F6) {
					throw new Error("Paciente no actualizado");
				  }
				return {
					message: "Paciente actualizado exitosamente",
					paciente: updateAsistente_F6,
				  };
				} catch (error) {
					throw new Error("Error al actualizar el paciente: " + error.message);
			  	}
		},



		async updatePaciente(obj,{rut,NuevosDatos}){
			try{
				const updatePaciente = await Paciente.findOneAndUpdate(
					{rut},
					{$set: NuevosDatos}
					);

				if (!updatePaciente) {
					throw new Error("Asistente no actualizado");
				  }
				return {
					message: "Asistente actualizado exitosamente",
					paciente: updatePaciente,
				  };
				} catch (error) {
					throw new Error("Error al actualizar el Asistente: " + error.message);
			  	}
		},
		async updatePaciente_F1(obj,{rut,NuevosDatos}){
			try{
				const updatePaciente_F1 = await Paciente.findOneAndUpdate(
					{rut},
					{$set: NuevosDatos}
					);

				if (!updatePaciente_F1) {
					throw new Error("Paciente no actualizado");
				  }
				return {
					message: "Paciente actualizado exitosamente",
					paciente: updatePaciente_F1,
				  };
				} catch (error) {
					throw new Error("Error al actualizar el paciente: " + error.message);
			  	}
		},
		async updatePaciente_F2(obj,{rut,NuevosDatos}){
			try{
				const updatePaciente_F2 = await Paciente.findOneAndUpdate(
					{rut},
					{$set: NuevosDatos}
					);

				if (!updatePaciente_F2) {
					throw new Error("Paciente no actualizado");
				  }
				return {
					message: "Paciente actualizado exitosamente",
					paciente: updatePaciente_F2,
				  };
				} catch (error) {
					throw new Error("Error al actualizar el Paciente: " + error.message);
			  	}
		},
		async updatePaciente_F3(obj,{rut,NuevosDatos}){
			try{
				const updatePaciente_F3 = await Paciente.findOneAndUpdate(
					{rut},
					{$set: NuevosDatos}
					);

				if (!updatePaciente_F3) {
					throw new Error("Paciente no actualizado");
				  }
				return {
					message: "Paciente actualizado exitosamente",
					paciente: updatePaciente_F3,
				  };
				} catch (error) {
					throw new Error("Error al actualizar el Paciente: " + error.message);
			  	}
		},
		async updatePaciente_F4(obj,{rut,NuevosDatos}){
			try{
				const updatePaciente_F4 = await Paciente.findOneAndUpdate(
					{rut},
					{$set: NuevosDatos}
					);

				if (!updatePaciente_F4) {
					throw new Error("Paciente no actualizado");
				  }
				return {
					message: "Paciente actualizado exitosamente",
					paciente: updatePaciente_F4,
				  };
				} catch (error) {
					throw new Error("Error al actualizar el Paciente: " + error.message);
			  	}
		},
		async updatePaciente_F5(obj,{rut,NuevosDatos}){
			try{
				const updatePaciente_F5 = await Paciente.findOneAndUpdate(
					{rut},
					{$set: NuevosDatos}
					);

				if (!updatePaciente_F5) {
					throw new Error("Paciente no actualizado");
				  }
				return {
					message: "Paciente actualizado exitosamente",
					paciente: updatePaciente_F5,
				  };
				} catch (error) {
					throw new Error("Error al actualizar el Paciente: " + error.message);
			  	}
		},
		async updatePaciente_F6(obj,{rut,NuevosDatos}){
			try{
				const updatePaciente_F6 = await Paciente.findOneAndUpdate(
					{rut},
					{$set: NuevosDatos}
					);

				if (!updatePaciente_F6) {
					throw new Error("Paciente no actualizado");
				  }
				return {
					message: "Paciente actualizado exitosamente",
					paciente: updatePaciente_F6,
				  };
				} catch (error) {
					throw new Error("Error al actualizar el Paciente: " + error.message);
			  	}
		},
	}
};

const app = new express();

const corsOptions = {
	origin: 'http://localhost:8090',
	credentials: false
};

const apolloServer = new ApolloServer({ typeDefs, resolvers, cors: corsOptions });

app.use(cors());

async function startApolloServer() {
	await apolloServer.start();
	apolloServer.applyMiddleware({ app });
};

startApolloServer()
	.then(
		() => {
			app.listen(8090, () => {
				console.log('Servidor Iniciado')
			});
		}
	);
