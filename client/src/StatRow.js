import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App';
import { PieChart } from 'react-minimal-pie-chart';
import BarChart from 'react-bar-chart';
const margin = { top: 20, right: 20, bottom: 30, left: 40 };
class StatRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {
        return (
                <div className="row">
                    <div className="col-sm-6">
                        {this.props.name}
                    </div>
                    <div className="col-sm-3">
                        {this.props.value1}
                    </div>
                    <div className="col-sm-3">
                        {this.props.value2}
                    </div>
                </div>
        );
    }
}

export default StatRow;
