import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App';
import PlayerHeader from './PlayerHeader';
import { PieChart } from 'react-minimal-pie-chart';
import StatRow from "./StatRow";


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
                    <div className="col-sm-4">
                        <PlayerHeader player1={this.props.player1} />
                    </div>

                    <div className="col-sm-4">
                        <div className="container">

                            <StatRow name="CS diff between 0-10min" value1={this.props.player1['csDiff_0_10']} value2={this.props.player2['csDiff_0_10']} />
                            <StatRow name="CS diff between 10-20min" value1={this.props.player1['csDiff_10_20']} value2={this.props.player2['csDiff_10_20']} />
                            <StatRow name="CS diff between 20-30min" value1={this.props.player1['csDiff_20_30']} value2={this.props.player2['csDiff_20_30']} />
                            <StatRow name="CS diff between 30-endgame" value1={this.props.player1['csDiff_30_end']} value2={this.props.player2['csDiff_30_end']} />

                            <StatRow name="AVG farm/minute at 0-10min" value1={this.props.player1['farm_0_10']} value2={this.props.player2['farm_0_10']} />
                            <StatRow name="AVG farm/minute at 10-20min" value1={this.props.player1['farm_10_20']} value2={this.props.player2['farm_10_20']} />
                            <StatRow name="AVG farm/minute at 20-30min" value1={this.props.player1['farm_20_30']} value2={this.props.player2['farm_20_30']} />
                            <StatRow name="AVG farm/minute at 30-endgame" value1={this.props.player1['farm_30_end']} value2={this.props.player2['farm_30_end']} />
                            <StatRow name="AVG farm per minute" value1={this.props.player1['cs_perMinute']} value2={this.props.player2['cs_perMinute']} />
                            <StatRow name="AVG CS per game" value1={this.props.player1['cs_perGame']} value2={this.props.player2['cs_perGame']} />

                            <StatRow name="DMG to champs per game" value1={this.props.player1['totalDamageDealtToChampions_perGame']} value2={this.props.player2['totalDamageDealtToChampions_perGame']} />
                            <StatRow name="DMG to champs per minute" value1={this.props.player1['totalDamageDealtToChampions_perMinute']} value2={this.props.player2['totalDamageDealtToChampions_perMinute']} />
                            <StatRow name="DMG to objectives per game" value1={this.props.player1['damageDealtToObjectives_perGame']} value2={this.props.player2['damageDealtToObjectives_perGame']} />
                            <StatRow name="DMG to turrets per game" value1={this.props.player1['damageDealtToTurrets_perGame']} value2={this.props.player2['damageDealtToTurrets_perGame']} />

                            <StatRow name="Vision score per game" value1={this.props.player1['visionScore_perGame']} value2={this.props.player2['visionScore_perGame']} />
                            <StatRow name="Vision wards per game" value1={this.props.player1['visionWardsBoughtInGame']} value2={this.props.player2['visionWardsBoughtInGame']} />
                            <StatRow name="Killed wards per game" value1={this.props.player1['wardsKilled_perGame']} value2={this.props.player2['wardsKilled_perGame']} />
                            <StatRow name="Wards Placed per game" value1={this.props.player1['wardsPlaces_perGame']} value2={this.props.player2['wardsPlaces_perGame']} />
                        </div>
                    </div>
                    
                    <div className="col-sm-4">
                        <PlayerHeader player1={this.props.player2} />
                    </div>
                </div>

            </div>
        );
    }
}

export default Response;
