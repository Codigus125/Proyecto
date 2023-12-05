import React from 'react'

class ImagenCarrusel extends React.Component{
  render(){
    return(
			<div className='image' style={{position:'relative', width:'100%'}}>
				<img src={this.props.imagen} alt="Los Angeles" className="d-block mx-auto" style={{height:'65vh', width:'80%'}}/>
				<h2 style={{position:'absolute', top:'60%', left:'0', width:'100%'}}>
					<span style={{color:'white', font:'bold 24px/45px Helvetica, Sans-Serif', letterSpacing:'-1px',background:('rgb(0,0,0)','rgba(0,0,0, 0.7)'), padding:'10px'}}>{this.props.titulo}<br/>{this.props.subtitulo}</span>
				</h2>
			</div>     
    )
  }
}

export default ImagenCarrusel;