import React, {Component} from 'react';
import "./Display.css";

class Display extends Component {
    render(){
        return(
            <div className='inputdisplay'>
               <input  className="input" type="text" readOnly value = {this.props.userdata}/>
            </div>
        );
    }
}

export default Display;