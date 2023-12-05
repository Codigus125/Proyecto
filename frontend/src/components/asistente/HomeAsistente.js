import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import ImagenCarrusel from '../general/imagen-carrusel';
import BotonCuadro from '../general/boton-cuadro';
import historial from '../general/historial';
import logo from '../../images/Logo_Fundacion.png';
import foto1 from '../../images/foto1.png';
import foto2 from '../../images/foto2.png';
import foto3 from '../../images/foto3.png';
import VoidIcon from '../../images/vacio.png';
import catalogoIcon from '../../images/catalogoIcon.webp';
import registroIcon from '../../images/registroIcon.png';
import prestamoIcon from '../../images/prestamoIcon.webp';
import VinculoIcon from '../../images/vinculo.png'

const GET_USUARIO = gql`
  query GetUsuariosRut($rut: Int!) {
    getUsuariosRut(rut: $rut) {
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
      sexo
      diagnostico
      asignado
    }
  }
`;

class HomeAsistente extends React.Component {
  constructor() {
    super();
    this.state = {
      rut: sessionStorage.getItem('rut'),
      asignado: sessionStorage.getItem('asignado'),
      usuario: null,
    };
  }


  async fetchUsuarioData() {
    try {
      const { data } = await this.props.client.query({
        query: GET_USUARIO,
        variables: { rut: parseInt(this.state.rut) },
      });

      if (data && data.getUsuariosRut) {
        this.setState({ usuario: data.getUsuariosRut });
      }
    } catch (error) {
      console.error('Error al obtener datos del Usuario:', error.message);
    }
  }
  render() {
    const { usuario } = this.state;
    return (
      <div>
        <nav className="navbar navbar-fixed-top navbar-expand pt-0 pb-0" style={{ backgroundImage: "#ff5733" }}>
          <div className="container-fluid">
            <div className="row">
              <div className="d-inline-flex navbar-brand justify" href="#">
                <img src={logo} className="ms-4 rounded-3 border border-2" alt="Logo" width='70' onClick={() => {
                  historial.push("/HomeAsistente");
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
              <p>
                Rut: {this.state.rut}
              </p>
            </div>
          </div>
        </nav>
		
        <div className='d-flex h3 justify-content-center ' style={{ color: '#FB4D72' }}>Avisos / Noticias Asistente</div>

        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          {/* Indicadores de imagen */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          </div>

          {/* Imagenes de carrusel */}
          <div className="carousel-inner shadow">
            <div className="carousel-item active">
              <ImagenCarrusel imagen={foto1} />
            </div>
            <div className="carousel-item">
              <ImagenCarrusel imagen={foto2} />
            </div>
            <div className="carousel-item">
              <ImagenCarrusel imagen={foto3} />
            </div>
          </div>

          {/* Botones para movimiento */}
          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        {/* Renderizar detalles del usuario si están disponibles */}
        {usuario && (
          <div>
            <h1>Detalles del Usuario</h1>
            <p>Nombre: {usuario.nombre}</p>
            {/* ... otros campos */}
          </div>
        )}

        <div className='row m-0 mt-0 border shadow' style={{ background: '#f5f5f5' }}>
          <BotonCuadro imagen={prestamoIcon} titulo="Modificar Mis Datos" direccion={"FormularioSolicitudAsistente/"} descripcion="" />
          <BotonCuadro imagen={VoidIcon}></BotonCuadro>
          <BotonCuadro imagen={VinculoIcon} titulo="Datos de la Persona Asignada" direccion={"VinculacionAsistente/"} descripcion="" />
        </div>
      </div>
    );
  }
}

export default HomeAsistente;