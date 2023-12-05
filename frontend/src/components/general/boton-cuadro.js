import React from 'react';
import historial from '../general/historial';

class BotonCuadro extends React.Component{
	cambiaPag = (direccion) => {
		historial.push("/" + direccion)
		historial.go(0)
	}
	
	render(){
		return(
			<div className='container m-0 border border-dark justify-content-center text-center col-4'>
				<img src={this.props.imagen} 
					alt={"icono-"+this.props.titulo} 
					onClick={() => this.cambiaPag(this.props.direccion)} 
					style={{width:'65px', height:'65px', margin:'1vh', cursor:'pointer'}}/>
				<button type="submit" 
					className="btn col-12" 
					value={this.props.direccion} 
					onClick={e => this.cambiaPag(e.target.value)} 
					style={{fontWeight:'bold'}}>{this.props.titulo}
				</button>
				<p className='p' style={{textAlign:'justify'}}>{this.props.descripcion}</p>
			</div>
		)
	}
}
export default BotonCuadro;
