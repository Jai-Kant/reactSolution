import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbarx extends React.Component{
	render(){
		return(
			<React.Fragment>
        		<nav className="navbar navbar-expand-lg navbar-light bg-light">
          			<a className="navbar-brand" href="#">
            		<h1>Total Items <span className="badge badge-secondary">{this.props.totalItems}</span></h1>
          			</a>
        		</nav>
        	</React.Fragment>
			)
	}
}

export default Navbarx;