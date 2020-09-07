import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App';
import { PieChart } from 'react-minimal-pie-chart';
import BarChart from 'react-bar-chart';
const margin = { top: 20, right: 20, bottom: 30, left: 40 };
class Response extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pieData:
                [

                    {
                        title: 'Loose',
                        value: this.props.player1['losses'],
                        color: '#A7151E',
                        rate: Math.round((100 / (this.props.player1['wins'] + this.props.player1['losses']) * this.props.player1['losses']) * 100) / 100,
                    },
                    {
                        title: 'Win',
                        value: this.props.player1['wins'],
                        color: '#A0C4BD',
                        rate: Math.round((100 / (this.props.player1['wins'] + this.props.player1['losses']) * this.props.player1['wins']) * 100) / 100,
                    }

                ],
            roleData:
                [
                    {
                        text: 'jungle',
                        value: this.props.player1['jungle'],
                        //                      color: 'green'
                    },
                    {
                        text: 'top',
                        value: this.props.player1['top'],
                        //                        color: 'black'
                    },
                    {
                        text: 'mid',
                        value: this.props.player1['mid'],
                        //                    color: 'blue'
                    },
                    {
                        text: 'adc',
                        value: this.props.player1['adc'],
                        //                  color: 'red'
                    },
                    {
                        text: 'supp',
                        value: this.props.player1['supp'],
                        //                color: 'yellow'
                    },

                ],
            winRate: 100 / (this.props.player1['wins'] + this.props.player1['losses']) * this.props.player1['wins'],
            looseRate: 100 / (this.props.player1['wins'] + this.props.player1['losses']) * this.props.player1['losses']
        }

    }

    getIcon() {

        let rank = this.props.player1['rank']
        let tier = this.props.player1['tier']
        if (tier.toString() == "CHALLENGER") {
            rank = 1
        }
        if (rank.toString() == "I") {
            rank = 1
        } else if (rank.toString() == "II") {
            rank = 2
        } else if (rank.toString() == "III") {
            rank = 3
        } else if (rank.toString() == "IV") {
            rank = 4
        }
        let url = 'https://raw.githubusercontent.com/ramang22/league-player-comparison/master/client/src/assets/s9_ranks/' + tier.toLowerCase() + "_" + rank + ".png"
        return url

    }
    render() {
        const mystyle = {
            "maxHeight": 170,
            "maxWidth": 170
        };
        const defaultStyle = {

            "maxHeight": 200,
            "maxWidth": 200
        };
        const defaultLabelStyle = {
            fontSize: '12px',
            fontFamily: 'sans-serif',
        };
        return (
            <div className="container">

                <div class="card text-white bg-dark mb-3">
                    <div class="row no-gutters">
                        <div class="col-auto shadow">
                            <img src={this.getIcon()} class="img-fluid" style={mystyle} />
                        </div>
                        <div class="col">
                            <div class="card-block px-2">
                                <h4 class="card-title">{this.props.player1['name']}</h4>
                                <p class="card-text">KDA: {this.props.player1['kda']}</p>
                                <p class="card-text">Games: {this.props.player1['match']}</p>
                        <p class="card-text">K/D/A: {this.props.player1['kills']}/{this.props.player1['deaths']}/{this.props.player1['assists']}</p>
                        <p class="card-text">KP%:  {this.props.player1['kp']}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <span>Win/Loose</span>
                </div>
                <div className="row">
                    <PieChart
                        data={this.state.pieData}
                        label={({ dataEntry }) => (dataEntry.rate)}
                        style={{
                            ...defaultStyle,
                        }}
                        labelStyle={{
                            ...defaultLabelStyle,
                        }}
                    />;
                </div>

                <div className="row">
                    <span>Winrate {100 / (this.props.player1['wins'] + this.props.player1['losses']) * this.props.player1['wins']}</span>
                </div>
                <div className="row">
                    <span>Role selection</span>
                </div>
                <div className="row">
                    <BarChart ylabel='Number of games'
                        xlabel='Roles'
                        width={250}
                        height={300}
                        margin={margin}
                        data={this.state.roleData}
                    //onBarClick={this.handleBarClick}
                    />
                </div>
            </div>


        );
    }
}

export default Response;
