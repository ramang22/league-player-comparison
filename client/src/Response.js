import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Response extends Component {

    bla() {
        var player1 = this.props.player1;
        var player2 = this.props.player2;
        const newContainer = document.createElement("div");
        newContainer.className = "container";

        for (var i = 0; i++; i < player1.size()) {
            const newRow = document.createElement("div");
            newRow.className = "row";
            const newCol = document.createElement("div");
            newCol.className = "col-sm-6";
            var key1 = Array.from(player1.keys())[i];
            newCol.innerText = key1 + player1.get(key1);
            const newCol2 = document.createElement("div");
            newCol2.className = "col-sm-6";
            var key2 = Array.from(player2.keys())[i];
            newCol2.innerText = key2 + player2.get(key2);
            newRow.appendChild(newCol);
            newRow.appendChild(newCol2);
            newContainer.appendChild(newRow);

        }

        document.body.appendChild(div);

    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Summoner Vision</h2>
                </div>
            </div>
        );
    }
}

export default App;
