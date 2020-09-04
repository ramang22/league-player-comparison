import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  async getApiCall(url) {
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async getMenuItems() {
    let response = await this.getApiCall(apiUrl);
    let imagesOfFood = this.parseImages(response['data']['images']);
    this.setState({
      loaded: true,
      menu: response['data'],
      images: imagesOfFood
    });
    return response['data'];
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Summoner Vision</h2>
        </div>

        <form class="custom_form">
          <div class="form-row">
            <div class="col-sm-6">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <select class="btn btn-outline-info dropdown-toggle" required>
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
                <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="Summoner Name" required></input>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <select class="btn btn-outline-info dropdown-toggle" required>
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
                <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="Summoner Name" required></input>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-dark">Compare</button>
        </form>
      </div>
    );
  }
}

export default App;
