import React, { useState } from 'react';
import { useQuery, gql, useApolloClient } from '@apollo/client';
import logo from '../../images/Logo_Fundacion.png';
import historial from '../general/historial.js';
import Alert from 'react-bootstrap/Alert';

function VinculacionPaciente() {
  const Rut = sessionStorage.getItem('rut');
  const [infoCompleta, setInfoCompleta] = useState([]);
  const [infoVisible, setInfoVisible] = useState(false);
  const [correo, setCorreo] = useState('');
  const [nombre, setNombre] = useState('');
  const [checkBoxChecked, setCheckBoxChecked] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState(null);
  const client = useApolloClient();

  const GET_ASISTENTE = gql`
    query GetAsistentesRut($rut: Int!) {
      getAsistentesRut(rut: $rut) {
        nombre
        edad
        direccion
        comuna
        region
        nacionalidad
        rut
        correo
        telefono
        sexo
        asignado
      }
    }
  `;

  const mostrarMensaje = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const handleMostrarInfoPorValorPaciente = async () => {
    const rutAsignado = sessionStorage.getItem('asignado');
    const cleanedRut = rutAsignado.trim();
    try {
      const { data } = await client.query({
        query: GET_ASISTENTE,
        variables: { rut: parseInt(cleanedRut) },
      });

      if (data && data.getAsistentesRut) {
        const Asistente = data.getAsistentesRut;
        if (Asistente) {
          const informacion = [
            { label: 'Nombre', value: Asistente.nombre },
            { label: 'Edad', value: Asistente.edad },
            { label: 'Nacionalidad', value: Asistente.nacionalidad },
            { label: 'Región', value: Asistente.region },
            { label: 'Comuna', value: Asistente.comuna },
            { label: 'Correo', value: Asistente.correo },
            { label: 'Dirección', value: Asistente.direccion },
            { label: 'Teléfono', value: Asistente.telefono },
            { label: 'Rut de Asistente Asignado', value: Asistente.rut },
          ];

          setInfoCompleta(informacion);
          setInfoVisible(true);
          setCorreo(Asistente.correo);
          setNombre(Asistente.nombre);
        } else {
          console.log("Asistente no encontrado");
        }
      } else {
        console.log("Datos no disponibles");
      }
    } catch (error) {
      if (error.networkError) {
        console.log('Error de red:', error.networkError);
      }

      if (error.graphQLErrors) {
        console.log('Errores de GraphQL:', error.graphQLErrors);
      }

      console.error('Error general:', error);
    }
  };

  const handleAceptar = () => {
    // Lógica actual del handleAceptar

    // Muestra la alerta de éxito
    setAlertType('success');
    setShowAlert(true);
  };

  const handleRechazar = () => {
    // Lógica actual del handleRechazar

    // Muestra la alerta en rojo
    setAlertType('danger');
    setShowAlert(true);
  };

  return (
    <div>
      <nav className="navbar navbar-fixed-top navbar-expand pt-0 pb-0" style={{ backgroundImage: "#ff5733" }}>
        <div className="container p-4 mt-3 rounded-4" style={{ border: '2px solid black' }}>
          <div className="row">
            <div className="d-inline-flex navbar-brand justify" href="#">
              <img src={logo} className="ms-4 rounded-3 border border-2" alt="Logo" width='70'
                onClick={() => {
                  historial.push("/HomeAdministrador");
                  historial.go(0);
                }}
                style={{ cursor: 'pointer' }} />
              <p className='h1' style={{ color: '#fb4d72', marginTop: '10px', marginLeft: '30px' }}>
                Fundacion Vida Independiente
              </p>
              <p>
                Rut: {Rut}
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
          </div>
        </div>
      </nav>

      <div className="container p-4 mt-3 rounded-4" style={{ border: '2px solid black' }}>
        <h1 className="text-center" style={{ color: 'black', marginTop: '10px', marginLeft: '30px' }}>
          Datos Asistente Vinculado
        </h1>
        <div style={{ marginTop: '20px' }}></div>
        <div className="btn-group-wide d-grip mb-2 text-center">
          <button
            type="button"
            className="btn btn-info btn-outline-dark text-white col-3 m-1"
            onClick={handleMostrarInfoPorValorPaciente}
          >
            Mostrar Información
          </button>
          <div style={{ marginTop: '20px' }}></div>
        </div>
        {infoVisible && (
          <div>
            <table className="table">
              <tbody>
                {infoCompleta.map((item, index) => (
                  <tr key={index}>
                    <td>{item.label}</td>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontWeight: 'bold' }}>Marque la casilla si desea aceptar este vínculo.</p>
            <div className="btn-group-wide d-grip mb-2 text-center">
              <input
                type="checkbox"
                id="aceptarCheckbox"
                checked={checkBoxChecked}
                onChange={() => setCheckBoxChecked(!checkBoxChecked)}
              />
              <label htmlFor="aceptarCheckbox">Aceptar términos y condiciones</label>
            </div>
            {/* Nueva checkbox */}
            <div className="btn-group-wide d-grip mb-2 text-center">
              <button
                type="submit"
                className="btn btn-success btn-outline-dark text-white col-3 m-1"
                onClick={handleAceptar}
                disabled={!checkBoxChecked}
              >
                Aceptar
              </button>
              <button
                type="submit"
                className="btn btn-danger btn-outline-dark text-white col-3 m-1"
                onClick={handleRechazar}
                disabled={!checkBoxChecked}
              >
                Rechazar
              </button>
            </div>
            {showAlert && alertType && (
              <Alert key={alertType} variant={alertType} className="mt-3">
                {alertType === 'success' ? 'Vínculo Aceptado' : 'Vínculo Rechazado'}
              </Alert>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default VinculacionPaciente;