import React, {Component} from 'react';
import "./Display.css";

class Display extends Component {
    render(){
        return(
            <div className="Display">
            {/* <p>Hello</p> */}
                {this.props.data}
            </div>
        );
    }
}

export default Display;