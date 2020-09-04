import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App';

class Response extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: true,
            x: Object.keys(this.props.player1)
        }
        this.Kapp = this.Kapp.bind(this);
        this.items = this.state.x.map((item) =>
            <div className="row">
                <div className="col-sm-3 bg-info">
                    {item}
                </div>
                <div className="col-sm-3 bg-light">
                    {this.props.player1[item]}
                </div>
                <div className="col-sm-3 bg-secondary">
                    {this.props.player2[item]}
                </div>

            </div>
        );
    }
    Kapp(name) {
        var container = <div className="container"></div>;

        return (
            <div className="row">
                <div className="col-sm-6">
                    <span>{this.props.player1[name]}</span>
                </div>
                <div className="col-sm-6">
                    <span>{this.props.player2[name]}</span>
                </div>

            </div>
        );
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 bg-info">

                    </div>
                    <div className="col-sm-3 bg-light">
                        Player1                    </div>
                    <div className="col-sm-3 bg-secondary">
                        Player2                    </div>
                </div>
                {
                    // this.props.player1["name"]

                    this.items
                    //    this.state.x.forEach(function (key) {
                    //        <div className="row">
                    //        <div className="col-sm-6">
                    //            {this.props.player1[key]}
                    //        </div>
                    //        <div className="col-sm-6">
                    //            {this.props.player2[key]}
                    //        </div>

                    //    </div>            
                    //                })
                }
            </div>

        );
    }
}

export default Response;
