import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Navbarx from './components/Navbarx';

class App extends React.Component{
  constructor(){
    super();
  }
  handleSubmit=()=>{
    console.log("Submitted");
  }

  render(){
    return(
      <React.Fragment>
      <Navbarx />
        <h1 style={{color:"green",fontFamily:"verdana"}}>Welcome to React</h1>
        
        <Login />
        
      
      </React.Fragment>
      )
  }
}

export default App;
