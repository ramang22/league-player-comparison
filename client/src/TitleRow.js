import React, { Component } from 'react';
import './App.css';

const margin = { top: 20, right: 20, bottom: 30, left: 40 };
class TitleRow extends Component {

    constructor(props) {
        super(props);
        let color = props.color
        if (color === undefined){
            color = "white"
        }
        this.state = {
            textColor : color
        }

    }

    render() {
        return (
                <div class="d-flex justify-content-center h4 mt-4" style={{color : this.state.textColor}}>
                    
                        {this.props.name}
                    
                </div>
        );
    }
}

export default TitleRow;
