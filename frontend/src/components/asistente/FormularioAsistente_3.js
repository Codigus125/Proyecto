import React, { useState, useRef } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import historial from '../general/historial';
import logo from '../../images/Logo_Fundacion.png';




function FormularioAsistente_3() {
  const Rut = sessionStorage.getItem('rut');

  const formRef = useRef();
  const limpiar = () => {
    formRef.current.reset(); // Use ref.current to access the form and reset it
  }
  const handleSubmit = (e) => {
    e.preventDefault();

  };

  const [grado, setGrado] = useState("0");
  const [discapacidad, setDiscapacidad] = useState({
    fisica: false,
    intelectual: false,
    psiquica: false,
    visual: false,
    auditiva: false,
  });
  const[pref_asis,setPrefAsis]= useState("");


  const NuevosDatos = {
    grado,
    discapacidad: {
      auditiva: discapacidad.auditiva,
      visual: discapacidad.visual,
      psiquica: discapacidad.psiquica,
      intelectual: discapacidad.intelectual,
      fisica: discapacidad.fisica,
    },
    pref_asis,
  };

  const UPDATE_ASISTENTE_F3 = gql`
	mutation Mutation($rut: String!, $nuevosDatos: FormularioA3!) {
    updateAsistente_F3(rut: $rut, NuevosDatos: $nuevosDatos) {
      pref_asis
      discapacidad {
        fisica
        intelectual
        psiquica
        visual
        auditiva
      }
      grado
    }
  }
    `

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
		if (name === 'pref_asis') {
			setPrefAsis(value); 
		}
	  };


  const [handleUpdate] = useMutation(UPDATE_ASISTENTE_F3, { variables: { rut: Rut, nuevosDatos: NuevosDatos } });

  const handleUpdateAsistenteF3 = async (e) => {
    e.preventDefault();
    try {
      const { data } = await handleUpdate({
        variables: {
          rut: Rut,
          nuevosDatos: NuevosDatos,
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
        style={{ backgroundImage: "#ff5733" }}>
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
      <div className="container pt-3 pb-2 mt-2 text-bg border border-2 border-dark rounded col-12">
        <h1 className="text-center">Actividades de participación</h1>

        <form ref={formRef} onSubmit={handleSubmit}>

          <div className="mb-3">
            <label>Grado</label>
            <input type="text" className="form-control" placeholder="%"
              value={grado}
              onChange={(e) => setGrado(e.target.value)} />
          </div>

          <div className="mb-3">
            <label>Tipo de discapacidad</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox"
                id='fisica'
                value={discapacidad.fisica}
                checked={discapacidad.fisica === true}
                onChange={handleFisicaCheckboxChange} />
              <label className="form-check-label">Física</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox"
                id='intelectual'
                checked={discapacidad.intelectual === true}
                onChange={handleIntelectualCheckboxChange} />
              <label className="form-check-label">Intelectual</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox"
                id='psiquica'
                checked={discapacidad.psiquica === true}
                onChange={handlePsiquicaCheckboxChange} />
              <label className="form-check-label">Psíquica</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox"
                id='visual'
                checked={discapacidad.visual === true}
                onChange={handleVisualCheckboxChange} />
              <label className="form-check-label">Visual</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox"
                id='auditiva'
                checked={discapacidad.auditiva === true}
                onChange={handleAuditivaCheckboxChange} />
              <label className="form-check-label">Auditiva</label>
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
            <button type='button' className='btn btn-secondary btn-outline-dark text-white col-3 m-1'
              onClick={() => historial.back()}>Volver</button>
            <button type='button' className='btn btn-success btn-outline-dark text-white col-3 m-1'
              onClick={handleUpdateAsistenteF3}>Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default FormularioAsistente_3;
