import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  async getApiCall(url) {
    try {
      const response = await axios.get(url);
      document.getElementById("data").value = response;
      //return response;
    } catch (error) {
      console.error(error);
    }
  }

  getUrl(){
    const formData = new FormData(document.querySelector('form'));
    var url = "http://localhost:5000/?";
    var count = 0;
    for (var pair of formData.entries()) {
      if(count != 0){
        url +=  "&" + pair[0] + "&"+ pair[1];
      }
      else{
        url +=  pair[0] + "&"+ pair[1];
      }
    } 
    //document.getElementById("data").value = url;
    return url;
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
                  <select name="server1" class="btn btn-outline-info dropdown-toggle" required>
                    <option value="euw1">EUW</option>
                    <option value="eun1">EUNE</option>
                    <option value="kr">KR</option>
                    <option value="na1">NA</option>
                    <option value="br1">BR</option>
                    <option value="jp1">JP</option>
                    <option value="la1">LAN</option>
                    <option value="la2">LAS</option>
                    <option value="oc1">OC</option>
                    <option value="ru">RU</option>
                    <option value="tr1">TR</option>
                  </select>
                </div>
                <input type="text" name="player1" class="form-control" aria-label="Text input with dropdown button" placeholder="Summoner Name" required></input>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <select name="server2" class="btn btn-outline-info dropdown-toggle" required>
                    <option value="euw1">EUW</option>
                    <option value="eun1">EUNE</option>
                    <option value="kr">KR</option>
                    <option value="na1">NA</option>
                    <option value="br1">BR</option>
                    <option value="jp1">JP</option>
                    <option value="la1">LAN</option>
                    <option value="la2">LAS</option>
                    <option value="oc1">OC</option>
                    <option value="ru">RU</option>
                    <option value="tr1">TR</option>
                  </select>
                </div>
                <input type="text" name="player2" class="form-control" aria-label="Text input with dropdown button" placeholder="Summoner Name" required></input>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-dark" onSubmit="getApiCall(getUrl())">Compare</button>
        </form>
        <p id="data"></p>
      </div>
    );
  }
}

export default App;
