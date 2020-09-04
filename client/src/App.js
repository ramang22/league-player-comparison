import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player1Input: '',
      player2Input: '',
      player1Server: '',
      player2Server: '',
      isLoading: false,
      player1: {},
      player2: {}
    };
    this.click = this.click.bind(this);
  }

  updatePlayerOneInput(evt) {
    this.setState({
      player1Input: evt.target.value
    });
  }

  updatePlayerTwoInput(evt) {
    this.setState({
      player2Input: evt.target.value
    });
  }
  handleServer1 = (event) => {
    this.setState({
      player1Server: event.target.value
    })
  }
  handleServer2 = (event) => {
    this.setState({
      player2Server: event.target.value
    })
  }

  click() {

    this.setState({ isLoading: true });

    axios.get("http://127.0.0.1:5000/?player1=TwTv%20Drututt&server1=euw1&player2=ND%20Nivelenn&server2=eun1")
      .then((response) => {

        const player1api = response.data['player1']
        const player2api = response.data['player2']
        console.log(player2api)
        this.setState({
          player1: player1api,
          player2: player2api,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err)
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Summoner Vision</h2>
        </div>

        <form class="custom_form">
          <div class="form-row">
            <div class="col-sm-6">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <select onChange={evt => this.handleServer1(evt)} class="btn btn-outline-info dropdown-toggle" required>
                    <option value="EUW1">EUW</option>
                    <option value="EUN1">EUNE</option>
                    <option value="KR">KR</option>
                    <option value="NA1">NA</option>
                    <option value="BR1">BR</option>
                    <option value="JP1">JP</option>
                    <option value="LA1">LAN</option>
                    <option value="LA2">LAS</option>
                    <option value="OC1">OC</option>
                    <option value="RU">RU</option>
                    <option value="TR1">TR</option>
                  </select>
                </div>
                <input value={this.state.player1Input} onChange={evt => this.updatePlayerOneInput(evt)} type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="Summoner Name" required></input>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <select onChange={evt => this.handleServer2(evt)} class="btn btn-outline-info dropdown-toggle" required>
                    <option value="EUW1">EUW</option>
                    <option value="EUN1">EUNE</option>
                    <option value="KR">KR</option>
                    <option value="NA1">NA</option>
                    <option value="BR1">BR</option>
                    <option value="JP1">JP</option>
                    <option value="LA1">LAN</option>
                    <option value="LA2">LAS</option>
                    <option value="OC1">OC</option>
                    <option value="RU">RU</option>
                    <option value="TR1">TR</option>
                  </select>
                </div>
                <input value={this.state.player2Input} onChange={evt => this.updatePlayerTwoInput(evt)} type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="Summoner Name" required></input>
              </div>
            </div>
          </div>
        </form>
        <div>
          {this.state.isLoading==false ? (

            <button onClick={this.click} class="btn btn-dark">Compare</button>
          ) :
            (
              <div></div>

            ) 

            }
        </div>
      </div>
    );
  }
}

export default App;
