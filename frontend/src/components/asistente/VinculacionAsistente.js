import historial from '../general/historial.js';
import React, { useState, useRef } from 'react';
import { useQuery, gql, useApolloClient } from '@apollo/client';
import logo from '../../images/Logo_Fundacion.png';
import Pruebacorreo from './Pruebacorreo.js';

function VinculacionPaciente() {
  const Rut = sessionStorage.getItem('rut');
  const [rut, setRut] = useState('');
  const rutAsignado = sessionStorage.getItem('asignado');
  const [infoCompleta, setInfoCompleta] = useState([]);
  const [infoVisible, setInfoVisible] = useState(false);
  const [correo, setCorreo] = useState('');
  const [nombre, setNombre] = useState('');
  const [mensajeVisible, setMensajeVisible] = useState(false);
  const [checkBoxChecked, setCheckBoxChecked] = useState(false);
  const [correoDestinatario, setCorreoDestinatario] = useState('');
  const client = useApolloClient();
  const pruebacorreoRef = useRef(); // Referencia para acceder al componente Pruebacorreo

  const GET_PACIENTE = gql`
    query GetPacientesRut($rut: Int!) {
      getPacientesRut(rut: $rut) {
        nombre
        fecha_nac
        edad
        direccion
        comuna
        region
        nacionalidad
        telefono
        rut
        correo
        pers_contc
        telef_contc
        sexo
        diagnostico
      }
    }
  `;

  const mostrarMensaje = () => {
    setMensajeVisible(true);

    setTimeout(() => {
      setMensajeVisible(false);
    }, 3000);
  };

  const cambiarVariable = () => {
    setRut(rutAsignado);
  };

  const handleMostrarInfoPorValorPaciente = async () => {
    try {
      const rutAsignado = sessionStorage.getItem('asignado');
      const cleanedRut = rutAsignado.trim();
      const { data } = await client.query({
        query: GET_PACIENTE,
        variables: { rut: parseInt(cleanedRut) },
      });

      if (data && data.getPacientesRut) {
        const Paciente = data.getPacientesRut;
        if (Paciente) {
          const informacion = [
            { label: 'Nombre', value: Paciente.nombre },
            { label: 'Edad', value: Paciente.edad },
            { label: 'Fecha de Nacimiento', value: Paciente.fecha_nac },
            { label: 'Sexo', value: Paciente.sexo },
            { label: 'Nacionalidad', value: Paciente.nacionalidad },
            { label: 'Región', value: Paciente.region },
            { label: 'Comuna', value: Paciente.comuna },
            { label: 'Correo', value: Paciente.correo },
            { label: 'Dirección', value: Paciente.direccion },
            { label: 'Teléfono', value: Paciente.telefono },
            { label: 'Rut del Paciente', value: Paciente.rut },
            { label: 'Teléfono Persona Contacto', value: Paciente.telef_contc },
            { label: 'Diagnóstico', value: Paciente.diagnostico },
          ];

          setInfoCompleta(informacion);
          setInfoVisible(true);
          setCorreo(Paciente.correo);
          setNombre(Paciente.nombre);
          setCorreoDestinatario(Paciente.correo);
        } else {
          console.log("Paciente no encontrado");
        }
      } else {
        console.log("Datos no disponibles");
      }
    } catch (error) {
      console.error("Error al manejar los datos del Paciente:", error);
    }
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
            <div>
              <p>Rut: {Rut}</p>
            </div>
          </div>
          
        </div>
      </nav>

      <div className="container p-4 mt-3 rounded-4" style={{ border: '2px solid black' }}>
        <h1 className="text-center" style={{ color: 'black', marginTop: '10px', marginLeft: '30px' }}>
          Datos de la Persona con Discapacidad
        </h1>

        <div className="btn-group-wide d-grip mb-2 text-center">
          <button
            type="button"
            className="btn btn-info btn-outline-dark text-white col-3 m-1"
            onClick={handleMostrarInfoPorValorPaciente}
          >
            Mostrar Información
          </button>
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
              <Pruebacorreo
                destinatario={correo}
                onDestinatarioChange={(destinatario) => setCorreoDestinatario(destinatario)}
                ref={pruebacorreoRef} // Asigna la referencia al componente Pruebacorreo
                onCheckboxChange={(isChecked) => setCheckBoxChecked(isChecked)}
              />
            </div>


          </div>
        )}
      </div>
    </div>
  );
}

export default VinculacionPaciente;