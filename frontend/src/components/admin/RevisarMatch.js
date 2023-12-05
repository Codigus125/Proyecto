import historial from '../general/historial.js';
import React, { useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import Form from 'react-bootstrap/Form';
import logo from '../../images/Logo_Fundacion.png';

function RevisarMatch() {

  const Rut = sessionStorage.getItem('rut');

  const [rut, setRut] = useState();
  const [string_disc, setString_disc] = useState();
  const [nombre, setNombre] = useState();
  const [discapacidad, setDiscapacidad] = useState({
    fisica: false,
    intelectual: false,
    psiquica: false,
    visual: false,
    auditiva: false,
  });
  const [sexo, setSexo] = useState();
  const [edad, setEdad] = useState();
  const [nacionalidad, setNacionalidad] = useState();
  const [direccion, setDireccion] = useState();
  const [diagnostico, setDiagnostico] = useState();
  const [activoId, setActivoId] = useState(null);
  const [data_paciente, setData_paciente] = useState();
  const [asistente, setAsistente] = useState();
  const [auditiva, setAuditiva] = useState();
  const [visual, setVisual] = useState();
  const [psiquica, setPsiquica] = useState();
  const [intelectual, setIntelectual] = useState();
  const [fisica, setFisica] = useState();

  const [porcentaje1a, setPorcentaje1a]= useState();
  const [porcentaje2a, setPorcentaje2a]= useState();
  const [porcentaje3a, setPorcentaje3a]= useState();
  const [porcentaje4a, setPorcentaje4a]= useState();
  const [porcentaje5a, setPorcentaje5a]= useState();

  const [porcentaje1b, setPorcentaje1b]= useState();
  const [porcentaje2b, setPorcentaje2b]= useState();
  const [porcentaje3b, setPorcentaje3b]= useState();
  const [porcentaje4b, setPorcentaje4b]= useState();
  const [porcentaje5b, setPorcentaje5b]= useState();

  const [nombre1, setNombre1]= useState();
  const [nombre2, setNombre2]= useState();
  const [nombre3, setNombre3]= useState();
  const [nombre4, setNombre4]= useState();
  const [nombre5, setNombre5]= useState();

  const borderStyle = { border: '2px solid black', margin: '10px', padding: '5px' };


  const personas = [
    { id: 1, nombre: 'Asistente 1', datos: 'Información detallada del Asistente 1...' },
    { id: 2, nombre: 'Asistente 2', datos: 'Información detallada del Asistente 2...' },
    { id: 3, nombre: 'Asistente 3', datos: 'Información detallada del Asistente 3...' },
    { id: 4, nombre: 'Asistente 4', datos: 'Información detallada del Asistente 4...' },
    { id: 5, nombre: 'Asistente 5', datos: 'Información detallada del Asistente 5...' },
  ];

  const toggleDatos = id => {
    setActivoId(activoId === id ? null : id);
  };


  const GET_PACIENTE = gql`
	query GetPacientesRut($rut: Int!) {
		getPacientesRut(rut: $rut) {
      nombre
      edad
      direccion
      nacionalidad
      sexo
      diagnostico
      discapacidad {
        fisica
        intelectual
        psiquica
        visual
        auditiva}
      
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
      p_atencion {
        responder_tel
        tomar_nota
        pasar_pag
        acomodar_pc_acces
        acomodar_cel_acces
        t_ate_otra
        t_ate_cual
      }
      p_cuidado {
        atencion_hijos
        atencion_sobrinos
        atencion_nietos
        t_cu_otra
        t_cu_cual
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
      h_orden {
        organizar_objetos_h
        guardar_ropa
        guardar_ropa_cama
        guardar_zapatos
        org_deco
        t_o_otra
        t_o_cual
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
      h_cuidado {
        atender_animal
        atender_planta
        h_cuidado_otra
        h_cuidado_cual
      }
      a_acompanar {
        acompanamiento_vivienda
        acompanamiento_otra
        acompanamiento_cual
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
      a_gestion {
        realizar_tramites
        ir_banco
        ir_medico
        compras_super
        compras_tiendas
        gestion_otra
        gestio_cual
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
      conduccion {
        asis_conduce_buscar_persona_disc
        asis_conduce_buscar_tercero
        asistencia_conduccion
        condu_otra
        condu_cual
      }
      comunicacion {
        comu_tableros
        comu_dispositivo
        comu_otra
        comu_cual
      }
      cordinacion {
        establecer_cumplir_agenda
        coor_otra
        coor_cual
      }
      excepcion {
        situ_crisis_persona
        excepcion
        excepcion_cual
      }
		}
	  }
		`;
  const GET_ASISTENTE = gql`
  query Query {
    getAsistentes {
      rut
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
      nombre
      discapacidad {
        fisica
        intelectual
        psiquica
        visual
        auditiva
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
      p_atencion {
        responder_tel
        tomar_nota
        pasar_pag
        acomodar_pc_acces
        acomodar_cel_acces
        t_ate_otra
        t_ate_cual
      }
      p_cuidado {
        atencion_hijos
        atencion_sobrinos
        atencion_nietos
        t_cu_otra
        t_cu_cual
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
      h_orden {
        organizar_objetos_h
        guardar_ropa
        guardar_ropa_cama
        guardar_zapatos
        org_deco
        t_o_otra
        t_o_cual
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
      h_cuidado {
        atender_animal
        atender_planta
        h_cuidado_otra
        h_cuidado_cual
      }
      a_acompanar {
        acompanamiento_vivienda
        acompanamiento_otra
        acompanamiento_cual
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
      a_gestion {
        realizar_tramites
        ir_banco
        ir_medico
        compras_super
        compras_tiendas
        gestion_otra
        gestio_cual
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
      conduccion {
        asis_conduce_buscar_persona_disc
        asis_conduce_buscar_tercero
        asistencia_conduccion
        condu_otra
        condu_cual
      }
      comunicacion {
        comu_tableros
        comu_dispositivo
        comu_otra
        comu_cual
      }
      cordinacion {
        establecer_cumplir_agenda
        coor_otra
        coor_cual
      }
      excepcion {
        situ_crisis_persona
        excepcion
        excepcion_cual
      }
    }
  }
  `; 

  const { data: listado } = useQuery(GET_ASISTENTE);

  const { data } = useQuery(GET_PACIENTE, {
    variables: { rut: parseInt(rut) },
  });

  const handlegetPacienteRut = async () => {
    try {
      const result = await data.getPacientesRut;
      if (result) {
        setData_paciente(result);
      } else {
        console.log("No data");
      }
    } catch (error) {
      console.error("Error fetching paciente data:", error);
      // Handle error (e.g., show an error message to the user)
    }
  };
  
  const handleGetAsistentes = async () => {
    try {
      if (listado.loading) {
        // Handle loading state
      }
  
      if (listado.error) {
        console.error("GraphQL error:", listado.error);
        // Handle error state
      }
  
      if (listado.getAsistentes) {
        let asistente = listado.getAsistentes;
        console.log("asistente",asistente);
        setAsistente(asistente);
        setNombre1(asistente[0].nombre);
        setNombre2(asistente[1].nombre);
        setNombre3(asistente[2].nombre);
        setNombre4(asistente[3].nombre);
        setNombre5(asistente[4].nombre);

  
        // Ensure asistente is always an array
        if (!Array.isArray(asistente)) {
          asistente = [asistente];
        }
  
        
      } else {
        console.log("No data");
      }
    } catch (error) {
      console.error("Error fetching asistente data:", error);
      // Handle error (e.g., show an error message to the user)
    }
  };
  
  

  const convertirJsonACadena = (jsonObj) => {
    try {
      // Utilizar JSON.stringify con espacio en blanco de 2 espacios para agregar salto de línea
      const jsonString = JSON.stringify(jsonObj, null, 2);

      // Quitar llaves y comillas de la cadena resultante
      const cadenaSinLlavesYComillas = jsonString
        .replace(/^{/, '')   // Quitar llave de apertura
        .replace(/}$/, '')   // Quitar llave de cierre
        .replace(/"/g, '')  // Quitar comillas
        .replace(/true/g, 'Si posee')
        .replace(/false/g, 'No posee')
        .replace(/_typename: /g, ''); 

      return cadenaSinLlavesYComillas;
    } catch (error) {
      console.error("Error al convertir JSON a cadena:", error);
      return null;
    }
  }

  const calculateSimilarityPercentageForAssistants1 = (patientSchedule, assistantSchedules) => {
    if (!Array.isArray(assistantSchedules)) {
      console.error('Assistant schedules must be an array.');
      return {};
    }
  
    const categories = [
      'discapacidad',
      'p_aseo',
      'p_ciclo',
      'p_fisio',
      'p_salud',
      'p_atencion',
      'p_cuidado',
      'h_limp',
      'h_orden',
      'h_alimentacion',
      'h_cuidado',
      'a_acompanar',
      'a_ocupacion',
      'a_gestion',
      'a_oscio',
      'conduccion',
      'comunicacion',
      'cordinacion',
      'excepcion',
    ];
  
    const similarityPercentages = [];
  
    assistantSchedules.forEach(assistantSchedule => {
      let totalSlots = 0;
      let matchingSlots = 0;
  
      categories.forEach(category => {
        if (patientSchedule[category] && assistantSchedule[category]) {
          Object.keys(patientSchedule[category]).forEach(activity => {
            totalSlots++;
            // Verificar si la actividad existe en el horario del asistente y si es verdadero
            if (
              assistantSchedule[category][activity] === true ||
              assistantSchedule[category][activity] === 'true'
            ) {
              matchingSlots++;
            }
          });
        }
      });
  
      // Calcular el porcentaje solo si hay slots totales
      const similarityPercentage = totalSlots === 0 ? 0 : (matchingSlots / totalSlots) * 100;
  
      similarityPercentages.push({
        assistantId: assistantSchedule.rut,
        similarityPercentage,
      });
    });
  
    // Ordenar por porcentaje de similitud de mayor a menor
    const sortedResults = similarityPercentages.sort((a, b) => b.similarityPercentage - a.similarityPercentage);
  
    // Filtrar aquellos con valores nulos
    const filteredResults = sortedResults.filter(result => result.similarityPercentage !== null);
  
    // Guardar en variables predefinidas
    const [porcentaje1a, porcentaje2a, porcentaje3a, porcentaje4a, porcentaje5a] = filteredResults.slice(0, 5);
  
    // Devolver los resultados
    setPorcentaje1a(porcentaje1a.similarityPercentage);
    setPorcentaje2a(porcentaje2a.similarityPercentage);
    setPorcentaje3a(porcentaje3a.similarityPercentage);
    setPorcentaje4a(porcentaje4a.similarityPercentage);
    setPorcentaje5a(porcentaje5a.similarityPercentage);
    return {
      porcentaje1a,
      porcentaje2a,
      porcentaje3a,
      porcentaje4a,
      porcentaje5a,
    };
  };

  
  const calculateSimilarityPercentageForAssistants2 = (patientSchedule, assistantSchedules) => {
    if (!Array.isArray(assistantSchedules)) {
      console.error('Assistant schedules must be an array.');
      return {};
    }
    const daysOfWeek = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
    const similarityPercentages = [];
  
    assistantSchedules.forEach(assistantSchedule => {
      let totalSlots = 0;
      let matchingSlots = 0;
  
      daysOfWeek.forEach(day => {
        if (patientSchedule[day] && assistantSchedule[day]) {
          Object.keys(patientSchedule[day]).forEach(slot => {
            totalSlots++;
            // Verificar si el slot existe en el horario del asistente y si es verdadero
            if (assistantSchedule[day][slot] === true || assistantSchedule[day][slot] === 'true') {
              matchingSlots++;
            }
          });
        }
      });
  
      // Calcular el porcentaje solo si hay slots totales
      const similarityPercentage = (totalSlots === 0) ? 0 : (matchingSlots / totalSlots) * 100;
  
      similarityPercentages.push({
        assistantId: assistantSchedule.rut,
        similarityPercentage,
      });
    });
  
    // Ordenar por porcentaje de similitud de mayor a menor
    const sortedResults = similarityPercentages.sort((a, b) => b.similarityPercentage - a.similarityPercentage);
  
    // Filtrar aquellos con valores nulos
    const filteredResults = sortedResults.filter(result => result.similarityPercentage !== null);
  
    // Guardar en variables predefinidas
    const [porcentaje1b, porcentaje2b, porcentaje3b, porcentaje4b, porcentaje5b] = filteredResults;
    setPorcentaje1b(porcentaje1b.similarityPercentage);
    setPorcentaje2b(porcentaje2b.similarityPercentage);
    setPorcentaje3b(porcentaje3b.similarityPercentage);
    setPorcentaje4b(porcentaje4b.similarityPercentage);
    setPorcentaje5b(porcentaje5b.similarityPercentage);
    return {
      porcentaje1b,
      porcentaje2b,
      porcentaje3b,
      porcentaje4b,
      porcentaje5b,
    };
  };
  
  
  
  const ver = async (e) => {
    e.preventDefault();
    try {
      await handlegetPacienteRut();
      await handleGetAsistentes();

      console.log("asistente ver",asistente);
  
      if (data_paciente) {
        console.log("data",data_paciente.sexo)
  
        setNombre(convertirJsonACadena(data_paciente.nombre));
        setEdad(convertirJsonACadena(data_paciente.edad));
        setDireccion(convertirJsonACadena(data_paciente.direccion));
        setNacionalidad(convertirJsonACadena(data_paciente.nacionalidad));
        setVisual(convertirJsonACadena(data_paciente.discapacidad.visual));
        setPsiquica(convertirJsonACadena(data_paciente.discapacidad.psiquica));
        setFisica(convertirJsonACadena(data_paciente.discapacidad.fisica));
        setIntelectual(convertirJsonACadena(data_paciente.discapacidad.intelectual));
        setAuditiva(convertirJsonACadena(data_paciente.discapacidad.auditiva));
        setSexo(convertirJsonACadena(data_paciente.sexo));
        setDiagnostico(convertirJsonACadena(data_paciente.diagnostico));
        const similarityPercentage1 = calculateSimilarityPercentageForAssistants1(data_paciente, asistente);
        const similarityPercentage2 = calculateSimilarityPercentageForAssistants2(data_paciente, asistente);
        console.log(`Similarity Percentage1 a: `,similarityPercentage1.porcentaje1a);
        console.log(`Similarity Percentage2 b: `,similarityPercentage2.porcentaje1b);
        console.log("paciente",data_paciente)
        console.log("asistente ver",asistente)
        console.log("porcentaje a",porcentaje1a)
        console.log("porcentaje b ",porcentaje1b)
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error (e.g., show an error message to the user)
    }
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
                style={{ color: '#fb4d72', marginTop: '10px', marginLeft: '30px' }}>
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
          Vinculación
        </h1>
        <div class="input-group mb-5">
          <input class="form-control mb-2"
            type="number"
            id="barra"
            placeholder='Ingresar Rut'
            value={rut}
            onChange={(e) => setRut(e.target.value)} />
          <button class="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
            onClick={ver}>
            Buscar.
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{...borderStyle, textAlign:'center'}}>Asistente</h2>
            <div style={{...borderStyle, textAlign:'center'}} >
            <input className="form-check-input" type="checkbox"/><h61>Asistente: {nombre1}  %{parseInt(porcentaje1a) + parseInt(porcentaje1b)}</h61>
            </div>
            <div style={{...borderStyle, textAlign:'center'}} >
            <input className="form-check-input" type="checkbox"/><h61>Asistente: {nombre2}  %{parseInt(porcentaje2a) +parseInt(porcentaje2b)}</h61>

            </div>
            <div style={{...borderStyle, textAlign:'center'}} >
            <input className="form-check-input" type="checkbox"/><h61>Asistente: {nombre3}  %{parseInt(porcentaje3a) + parseInt(porcentaje3b)}</h61>

            </div>
            <div style={{...borderStyle, textAlign:'center'}} >
            <input className="form-check-input" type="checkbox"/><h61>Asistente: {nombre4}  %{parseInt(porcentaje4a) + parseInt(porcentaje4b)}</h61>

            </div>
            <div style={{...borderStyle, textAlign:'center'}} >
            <input className="form-check-input" type="checkbox"/><h61>Asistente: {nombre5}  %{parseInt(porcentaje5a) + parseInt(porcentaje5b)}</h61>

            </div>
          </div>

          <div style={{ flex: 1 }}>
            <h2 style={{ ...borderStyle, textAlign: 'center' }}>Persona con discapacidad</h2>
            <div style={{ ...borderStyle, marginTop: '10px' }}>
              <div>
                <text>
                  Nombre: {nombre}<br></br>
                  Edad: {edad}<br></br>
                  Dirección: {direccion}<br></br>
                  Nacionalidad: {nacionalidad}<br></br>
                  Sexo: {sexo}<br></br>
                  Diagnóstico: {diagnostico}<br></br>
                  Discapacidad: <br></br>
                        Visual: {visual}<br></br>
                        Fisica: {fisica}<br></br>
                        Auditiva: {auditiva}<br></br>
                        Intelectual: {intelectual}<br></br>
                        Psiquica: {psiquica}<br></br>
                </text>
              </div>
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button>Aceptar</button>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-group-wide d-grip mb-2 text-center">
          <button type='button'
            className='btn btn-secondary btn-outline-dark text-white col-3 m-1'
            onClick={() => historial.back()}>
            Volver
          </button>
          <button type='submit'
            className='btn btn-success btn-outline-dark text-white col-3 m-1'>
            Guardar
          </button>
        </div>
      </div>

    </div>
  );
};
export default RevisarMatch;
