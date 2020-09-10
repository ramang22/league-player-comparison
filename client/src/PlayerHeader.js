import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App';
import { PieChart } from 'react-minimal-pie-chart';
import BarChart from 'react-bar-chart';
import {ResponsiveRadar} from '@nivo/radar'
import StatRow from "./StatRow";
import TitleRow from "./TitleRow";

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
                        color: '#BD3C28',
                        rate: Math.round((100 / (this.props.player1['wins'] + this.props.player1['losses']) * this.props.player1['losses']) * 100) / 100,
                    },
                    {
                        title: 'Win',
                        value: this.props.player1['wins'],
                        color: '#72B982',
                        rate: Math.round((100 / (this.props.player1['wins'] + this.props.player1['losses']) * this.props.player1['wins']) * 100) / 100,
                    }

                ],
            roleData:
                [
                    {
                        "role": "jungle",
                        "player": this.props.player1['jungle']
                    },
                    {
                        "role": "top",
                        "player": this.props.player1['top']
                    },
                    {
                        "role": "mid",
                        "player": this.props.player1['mid']
                        //                    color: 'blue'
                    },
                    {
                        "role": "adc",
                        "player": this.props.player1['adc']
                        //                  color: 'red'
                    },
                    {
                        "role": "supp",
                        "player": this.props.player1['supp']
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
        const chartStyle = {
            "height": 170,
            "width": 170
        };
        const defaultLabelStyle = {
            fontSize: '12px',
            fontFamily: 'sans-serif',
        };
        return (
            <div className="container" style={{ width: "inherit", height: "inherit", margin:"0", padding:"0" }}>

                <div class="card text-white mb-3 shadow" style={{backgroundColor:"#49545f"}}>
                    <div class="row no-gutters">
                        <div class="col-auto shadow">
                            <img src={this.getIcon()} class="img-fluid" style={mystyle} />
                            <p class="card-text">{this.props.player1['tier']} {this.props.player1['rank']}</p>

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
                
                <TitleRow name="Win/Loss"/>
                <div className="row d-flex justify-content-center">
                    <PieChart
                        data={this.state.pieData}
                        label={({ dataEntry }) => (dataEntry.rate)}
                        style={{
                            ...defaultStyle,
                        }}
                        labelStyle={{
                            ...defaultLabelStyle,
                        }}
                    />
                </div>

                <TitleRow name="Role selection"/>
                <div className="row d-flex justify-content-center" style={{ width: "350px", height: "200px" }}>


                         <ResponsiveRadar
                             width={300}
                             height={300}
                             data={this.state.roleData}
                             keys={["player"]}
                             indexBy="role"
                             maxValue="auto"
                             margin={{ top: 0, right: 50, bottom: 54, left: 100 }}
                             curve="catmullRomClosed"
                             borderWidth={4}
                             borderColor="#94C3B5"
                             gridLevels={4}
                             gridShape="circular"
                             gridLabelOffset={24}
                             enableDots={true}
                             dotSize={6}
                             dotColor="#E48648"
                             dotBorderWidth={1}
                             dotBorderColor="#94C3B5"
                             enableDotLabel={true}
                             dotLabel="value"
                             dotLabelYOffset={18}
                             colors={["#E59F95"]}       //color of whole inside
                             fillOpacity={0.8}
                             blendMode="normal"
                             animate={true}
                             motionStiffness={90}
                             motionDamping={15}
                             isInteractive={true}
                             theme={{
                                 dots: {
                                     text: {
                                         fill: "#879893"
                                     }
                                 },
                                 axis: {
                                    ticks: {
                                         text: {
                                             fill: '#E7F6E7'
                                         }
                                    },
                                 }
                             }}
                         />
                    
                </div>
            </div>


        );
    }
}

export default Response;
