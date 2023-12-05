import React from 'react';

class LoginButton extends React.Component{
	render(){
		return(
			<button type="submit" 
			className="btn col-3 rounded-5 border border-2" 
			style={{ backgroundColor: 'fb4d72' }} 
			onClick={this.props.onClick} >
    			Iniciar Sesión
			</button>

		)
	}
}

class LogoutButton extends React.Component{
	render(){
		return(
			<button type="submit" className="btn  col-3 rounded-5 border border-2" onClick={this.props.onClick}>
				Cerrar Sesión
			</button>
		)
	}
}

export {LoginButton, LogoutButton}


/*return(
	<button type="submit" className="btn col-3 rounded-5 border border-2" onClick={this.props.onClick} style={{backgroundColor: 'f25f70'}}>
		Iniciar Sesión
	</button>
)*/