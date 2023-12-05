import React from 'react';

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

import { useLocation } from 'react-router-dom';



class HomeAdministrador extends React.Component{
	constructor() {
    		super();
    		this.state = {
      			rut: sessionStorage.getItem('rut'),
    		};
  	}
	
	render(){ 
		return(
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
										historial.push("/HomeAdministrador"); 
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
								Rut: {this.state.rut}
							</p>
						</div>
					</div>
				</nav>
				<div className='d-flex h3 justify-content-center '
					style={{color:'#FB4D72'}} >
						Avisos / Noticias Administrador
				</div>
				<div id="demo" 
					className="carousel slide" 
					data-bs-ride="carousel">
					{/* Indicadores de imagen */}
					<div className="carousel-indicators">
						<button type="button" 
							data-bs-target="#demo" 
							data-bs-slide-to="0" 
							className="active">
						</button>
						<button type="button" 
							data-bs-target="#demo" 
							data-bs-slide-to="1">
						</button>
						<button type="button" 
							data-bs-target="#demo" 
							data-bs-slide-to="2">
						</button>
					</div>
					{/* Imagenes de carrusel */}
					<div className="carousel-inner shadow">
							<div className="carousel-item active">
								<ImagenCarrusel imagen={foto1} />
							</div>
							<div className="carousel-item">
									<ImagenCarrusel imagen={foto2}/>
							</div>
							<div className="carousel-item">
									<ImagenCarrusel imagen={foto3}/>
							</div>
					</div>
					{/* Botones para movimiento */}
					<button className="carousel-control-prev" 
						type="button" 
						data-bs-target="#demo" 
						data-bs-slide="prev">
						<span className="carousel-control-prev-icon"></span>
					</button>
					<button className="carousel-control-next" 
						type="button" data-bs-target="#demo" 
						data-bs-slide="next">
						<span className="carousel-control-next-icon"></span>
					</button>
				</div>
				<div className='row m-0 mt-0 border shadow flex' style={{display: "flex", justifyContent: "space-between", padding: "0px", marginBottom: "0", background:'#f5f5f5'}}>
					<BotonCuadro imagen={catalogoIcon} 
						titulo="Revisar match" 
						direccion={"RevisarMatch/"} 
						descripcion=""/>
					<BotonCuadro imagen={VoidIcon}></BotonCuadro>
					<BotonCuadro imagen={registroIcon} 
						titulo="Administrar usuarios" 
						direccion={"AdministrarUsuarios"} 
						descripcion=""/>
				</div>
				
			</div>
		);
	}
}

export default HomeAdministrador;
