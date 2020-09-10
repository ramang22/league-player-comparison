import React, { Component } from 'react';
import './App.css';

const margin = { top: 20, right: 20, bottom: 30, left: 40 };
class TitleRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {
        return (
                <div class="d-flex justify-content-center h4 text-white mt-4">
                    
                        {this.props.name}
                    
                </div>
        );
    }
}

export default TitleRow;
