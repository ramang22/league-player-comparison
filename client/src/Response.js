import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App';
import PlayerHeader from './PlayerHeader';
class Response extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: true,
            x: Object.keys(this.props.player1)
        }
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

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-3">
                        <PlayerHeader player1={this.props.player1} />
                    </div>
                    <div className="col-sm-3">
                        <PlayerHeader player1={this.props.player2} />

                    </div>

                </div>

                {
                    this.items
                }
            </div>

        );
    }
}

export default Response;
