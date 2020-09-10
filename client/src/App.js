import React, { Component } from 'react';
import logo from './Wipeout_Pengu_Ward.png';
import './App.css';
import axios from 'axios';
import Response from './Response';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import ReactLoading from 'react-loading';
import Footer from './Footer'

class App extends Component {



  constructor(props) {
    super(props);
    this.state = {
      player1Input: '',
      player2Input: '',
      player1Server: 'EUW1',
      player2Server: 'EUW1',
      isLoading: false,
      loaded: false,
      player1: {},
      player2: {},
      sliderValue: 1,
      soloqbox: true,
      flexbox: false
    };
    this.click = this.click.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeFlex = this.handleChangeFlex.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this)
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

  handleChange(event) {
    this.setState({ soloqbox: !this.state.soloqbox });
  }
  handleChangeFlex(event) {
    this.setState({ flexbox: !this.state.flexbox });
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.click()
    }
  }
  click() {

    this.setState({ isLoading: true });

    // axios.get("http://127.0.0.1:5000/?player1="+this.state.player1Input+"&server1="+this.state.player1Server+"&player2="+this.state.player2Input+"&server2="+this.state.player2Server)
    axios.get("http://127.0.0.1:5000/", {
      params:
      {
        player1: this.state.player1Input,
        player2: this.state.player2Input,
        // player1: "narrik",
        // player2: "lord Ramang",
        server1: this.state.player1Server,
        server2: this.state.player2Server,
        numOfGames: this.state.sliderValue,
        //numOfGames : 20,
        soloq: this.state.soloqbox,
        flexq: this.state.flexbox,

      }
    })
      .then((response) => {

        const player1api = response.data['player1']
        const player2api = response.data['player2']
        console.log(player2api)
        this.setState({
          player1: player1api,
          player2: player2api,
          loaded: true,
          isLoading: false
        });
      })
      .catch((err) => {
        console.log(err)
        this.setState({
          isLoading: false,
          loaded: false,
          player1: {},
          player2: {},
          soloqbox: true,
          flexbox: false
        })
      });

  }
  render() {
    return (
      <div className="App">
        <div className="App-header" style={{fontFamily:"Cinzel Decorative", padding: "0"}}>
          <img src={logo} style={{height: "100%"}}></img>
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
                <input value={this.state.player2Input} onChange={evt => this.updatePlayerTwoInput(evt)} type="text" class="form-control" aria-label="Text input with dropdown button" onKeyPress={this.handleKeyPress} placeholder="Summoner Name" required></input>
              </div>
            </div>
          </div>
        </form>
        <div>
          {this.state.isLoading == false ? (
            <div>
              <div class="col-sm-2 font_solo_flex">
                <span class="text-info"> Number of fetch games</span>
                <RangeSlider
                  value={this.state.sliderValue}
                  onChange={changeEvent => this.setState({ sliderValue: changeEvent.target.value })}
                  variant="info"
                />
                <div className="font_solo_flex">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      value={this.state.soloqbox}
                      onChange={this.handleChange}
                      checked={this.state.soloqbox} />
                    <label class="text-info m-2">SoloQ</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      value={this.state.flexbox}
                      onChange={this.handleChangeFlex}
                      checked={this.state.flexbox}
                    />
                    <label class="text-info m-2">FlexQ</label>
                  </div>
                </div>
              </div>
              <button onClick={this.click} class="btn btn-info font_first_screen" style={{margin:"0px 0px 50px 0px"}}>Compare</button>
              {
                this.state.loaded ? (
                  <div>
                    <Response player1={this.state.player1} player2={this.state.player2} />

                  </div>

                ) : (<div></div>)

              }
              <Footer />
            </div>
          ) :
            (
              <div class="container ">
                <div className="font_shit">
                  <span class="text-info m-2">Searching for players</span>
                </div>
                <div class="d-flex justify-content-center">
                  <ReactLoading type="cubes" color="#F3EBD3" />
                </div>
                <div className="font_shit">
                  <span class="text-info m-2">Looking up {this.state.player1Input.toUpperCase()} and {this.state.player2Input.toUpperCase()}</span>
                </div>
                <Footer css={{
                  'position': 'absolute',
                  'bottom': 0,
                  'right' : 0,
                  'left' : 0
                  
                }} />
              </div>

            )
          }
        </div>


      </div>
    );
  }
}

export default App;
