import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Response extends Component {


    constructor(props) {
        super(props);
    }

     App() {
         var container = <div className="container"></div>;
        return (
          <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
          </div>
        );
      }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <span>{this.props.player1['name']}</span>
                </div>
                <div className="col-sm-6">
                    <span>{this.props.player2['name']}</span>
                </div>

            </div>

        );
    }
}

export default Response;
