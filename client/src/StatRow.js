import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App';
import { PieChart } from 'react-minimal-pie-chart';
import BarChart from 'react-bar-chart';


const margin = { top: 20, right: 20, bottom: 30, left: 40 };

const GOOD = "green"
const BAD = "red"
const TIE = "yellow"
class StatRow extends Component {

    constructor(props) {
        super(props);
        let comparison = props.compare
        if (comparison === undefined) {
            comparison = "desc"
        }
        this.state = {
            comparison: comparison,
            value1: props.value1,
            value2: props.value2,
        }
        this.getValueColor = this.getValueColor.bind(this)
    }

    getValueColor(valueNum) {
        
        if (this.state.comparison == "asc") {
            valueNum = valueNum == 1 ? 2 : 1
        }
        let goodReturn = {
           // color:LightenDarkenColor(GOOD, 10)
           color : GOOD
        }
        let badReturn = {
            color: BAD
        }
        let tieReturn = {
            color: TIE
        }
        if (valueNum == 1) {
            if (this.state.value1 > this.state.value2) {
                return goodReturn
            }
            else if (this.state.value1 == this.state.value2) {
                return tieReturn
            } else {
                return badReturn
            }
        } else {
            if (this.state.value2 > this.state.value1) {
                return goodReturn
            } else if (this.state.value2 == this.state.value1) {
                return tieReturn
            } else {
                return badReturn
            }
        }
    }
    render() {
        return (
            <div className="row text-white">
                <div className="col-sm-6">
                    {this.props.name}
                </div>
                <div className="col-sm-3" style={this.getValueColor(1)}>
                    {this.props.value1}
                </div>
                <div className="col-sm-3" style={this.getValueColor(2)}>
                    {this.props.value2}
                </div>
            </div>
        );
    }
}

export default StatRow;
