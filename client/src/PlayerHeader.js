import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App';
import { PieChart } from 'react-minimal-pie-chart';

class Response extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pieData:
                [
                    
                    {
                        title: 'Loose',
                        value: this.props.player1['losses'],
                        color: 'red',
                        rate: Math.round((100 / (this.props.player1['wins'] + this.props.player1['losses']) * this.props.player1['losses']) * 100) / 100 ,
                    },
                    {
                        title: 'Win',
                        value: this.props.player1['wins'],
                        color: 'green',
                        rate :  Math.round((100 / (this.props.player1['wins'] + this.props.player1['losses']) * this.props.player1['wins']) * 100) / 100 ,
                    }

                ],
            roleData:
            [
                {
                    title: 'jungle',
                    value: this.props.player1['jungle'],
                    color: 'green'
                },
                {
                    title: 'top',
                    value: this.props.player1['top'],
                    color: 'black'
                },
                {
                    title: 'mid',
                    value: this.props.player1['mid'],
                    color: 'blue'
                },
                {
                    title: 'adc',
                    value: this.props.player1['adc'],
                    color: 'red'
                },
                {
                    title: 'supp',
                    value: this.props.player1['supp'],
                    color: 'yellow'
                },

            ],
            winRate : 100 / (this.props.player1['wins'] + this.props.player1['losses']) * this.props.player1['wins'],
            looseRate :100 / (this.props.player1['wins'] + this.props.player1['losses']) * this.props.player1['losses']
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
            "maxHeight": 100,
             "maxWidth": 100
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

                <div className="row">
                    <img style={mystyle} class="img-thumbnail" class="rounded mx-auto d-block" src={this.getIcon()} />
                </div>
                <div className="row">
                    <span>{this.props.player1['name']}</span>
                </div>
                <div className="row">
                    <span>KDA {this.props.player1['kda']}</span>
                </div>
                <div className="row">
                    <span>K/D/A in {this.props.player1['matches']} {this.props.player1['kills']}/{this.props.player1['deaths']}/{this.props.player1['assists']}</span>
                </div>
                <div className="row">
                    <span>KP%  {this.props.player1['kp']}</span>
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
                    <PieChart
                        data={this.state.roleData}
                        label={({ dataEntry }) => dataEntry.value}
                        style={{
                            ...defaultStyle,
                          }}
                          labelStyle={{
                            ...defaultLabelStyle,
                          }}
                    />;
                </div>
            </div>


        );
    }
}

export default Response;
