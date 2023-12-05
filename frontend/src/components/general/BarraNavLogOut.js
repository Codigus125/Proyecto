import React from 'react';

import logo from '../../images/Logo_Fundacion.png';
import homeIcon from '../../images/HomeIcon.jpg';

import historial from './historial';
import { LoginButton, LogoutButton} from './botonSesion';
import { useLocation } from 'react-router-dom';

class BarraNavLogOut extends React.Component{
  	render(){
  		return(
  			<nav className="navbar navbar-fixed-top navbar-expand pt-0 pb-0" 
				style={{backgroundImage:"#ff5733"}}> 
				<div className="container-fluid">
					<div className="row">
						<div className="d-inline-flex navbar-brand justify" 
							href="#">
							<img src={logo} 
								className="ms-4 rounded-3 border border-2" 
								alt="Logo" 
								width='70' 
								onClick={() => {
									historial.push("/"); // Navegar a la ruta "/"
									historial.go(0); // Reiniciar el historial de navegación
									}
								}
								style={{cursor:'pointer'}}/>
								<p className='h1' 
									style={{color:'#fb4d72', marginTop: '10px', marginLeft: '30px'}}>
										Fundacion Vida Independiente
								</p>
						</div>
					</div>
				</div>
			</nav>
		);
  	}
}


export default BarraNavLogOut;

//url(https://www.linkpicture.com/q/imgFondo.webp)
//<p className='h1 text-warning'>Fundacion Vida Independiente</p>
