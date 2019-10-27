import React,{Component} from 'react';
import {Input, Button, Row, Col, Label, ButtonGroup} from 'reactstrap';


 class Tabla extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inicio
        };
        //Declaracion de funciones
        this.setInicio=this.setInicio.bind(this);
      }
  
    setInicio(){//guarda valor inicio

        this.setState({inicio: 3});
    }
    
   render(){
    
      return(
            <div>
           
           </div>
        )
    }
}
export default Tabla