import React from 'react';
import { Link } from 'react-router-dom';
import BarraNavLogOut from './BarraNavLogOut';
import logo from '../../images/Logo_Fundacion.png';
import homeIcon from '../../images/HomeIcon.jpg';
import historial from './historial';

class PerfilesInicio extends React.Component{
	render(){
    		return (
    			<div>
    				<BarraNavLogOut />
      				<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
      					
		  			<div className="container p-2 mt-4 rounded-4" 
		  				style={{border: '2px solid black', maxWidth: '300px', margin: '0 auto'}}>
		      				<h2 className="text-center">
		      					Seleccionar Perfil
		      				</h2>
		      				<form action="/action_page.php" 
		      					style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
		          				<Link to={"/InicioSesionAdmin"}  
		          					style={{width: '100%', marginBottom: '10px'}}>
		              					<button type="submit" 
		              						className="btn custom-button" 
		              						style={{border: "1px solid black", width: '100%'}}>
		              							Administrador
		              					</button>
		          				</Link>
		         				<Link to={"/InicioSesionAsist"}
		         					style={{width: '100%', marginBottom: '10px'}}>
		              					<button type="submit" 
		              						className="btn custom-button" 
		              						style={{border: "1px solid black", width: '100%'}}>
		              							Asistente
		              					</button>
		          				</Link>
		          				<Link to={"/InicioSesionPaci"} 
		          					style={{width: '100%', marginBottom: '10px'}}>
		              					<button type="submit" 
		              						className="btn custom-button" 
		              						style={{border: "1px solid black", width: '100%'}}>
		              							Persona con Discapacidad
		              					</button>
		          				</Link>
		      				</form>
		  			</div>
      				</div>
      			</div>
    		);
  	}
}
export default PerfilesInicio;
