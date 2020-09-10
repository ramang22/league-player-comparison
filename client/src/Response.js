import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App';
import PlayerHeader from './PlayerHeader';
import { PieChart } from 'react-minimal-pie-chart';
import StatRow from "./StatRow";
import TitleRow from "./TitleRow";


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
                    <div className="col-sm-4 card text-white mb-3" style={{backgroundColor:"#49545f", padding:"0", fontFamily:"exo2"}}>
                        <PlayerHeader player1={this.props.player1} />
                    </div>

                    <div className="col-sm-4">
                        <div className="container" style={{fontFamily:"palatino"}}>
                            <TitleRow name="Game info" color="#F3EBD3"/>
                            <StatRow name="AVG Level" value1={this.props.player1['avgLv']} value2={this.props.player2['avgLv']} />
                            <StatRow name="AVG Game time" value1={this.props.player1['avgGameTime']} value2={this.props.player2['avgGameTime']} />
                            <TitleRow name="CS Diff" color="#F3EBD3"/>
                            <StatRow name="0-10min" value1={this.props.player1['csDiff_0_10']} value2={this.props.player2['csDiff_0_10']} />
                            <StatRow name="10-20min" value1={this.props.player1['csDiff_10_20']} value2={this.props.player2['csDiff_10_20']} />
                            <StatRow name="20-30min" value1={this.props.player1['csDiff_20_30']} value2={this.props.player2['csDiff_20_30']} />
                            <StatRow name="30-Endgame" value1={this.props.player1['csDiff_30_end']} value2={this.props.player2['csDiff_30_end']} />
                            <TitleRow name="Farm" color="#F3EBD3"/>
                            <StatRow name="CS/min" value1={this.props.player1['cs_perMinute']} value2={this.props.player2['cs_perMinute']} />
                            <StatRow name="CS/game" value1={this.props.player1['cs_perGame']} value2={this.props.player2['cs_perGame']} />
                            <StatRow name="0-10min" value1={this.props.player1['farm_0_10']} value2={this.props.player2['farm_0_10']} />
                            <StatRow name="10-20min" value1={this.props.player1['farm_10_20']} value2={this.props.player2['farm_10_20']} />
                            <StatRow name="20-30min" value1={this.props.player1['farm_20_30']} value2={this.props.player2['farm_20_30']} />
                            <StatRow name="30-endgame" value1={this.props.player1['farm_30_end']} value2={this.props.player2['farm_30_end']} />
                            <TitleRow name="Damage" color="#F3EBD3"/>
                            <StatRow name="To champs/game" value1={this.props.player1['totalDamageDealtToChampions_perGame']} value2={this.props.player2['totalDamageDealtToChampions_perGame']} />
                            <StatRow name="To champs/min" value1={this.props.player1['totalDamageDealtToChampions_perMinute']} value2={this.props.player2['totalDamageDealtToChampions_perMinute']} />
                            <StatRow name="To objectives/game" value1={this.props.player1['damageDealtToObjectives_perGame']} value2={this.props.player2['damageDealtToObjectives_perGame']} />
                            <StatRow name="To turrets/game" value1={this.props.player1['damageDealtToTurrets_perGame']} value2={this.props.player2['damageDealtToTurrets_perGame']} />
                            <StatRow name="DMG per 1 Gold" value1={this.props.player1['dmgPerGold']} value2={this.props.player2['dmgPerGold']} />
                            <StatRow name="First Blood KP%" value1={this.props.player1['firstBloodKP']} value2={this.props.player2['firstBloodKP']} />
                            <StatRow name="Tanked/game" value1={this.props.player1['totalDamageTaken_perGame']} value2={this.props.player2['totalDamageTaken_perGame']} />
                            <StatRow name="Tanked/minute" value1={this.props.player1['totalDamageTaken_perMinute']} value2={this.props.player2['totalDamageTaken_perMinute']} />
                            <TitleRow name="Vision" color="#F3EBD3"/>
                            <StatRow name="Score/game" value1={this.props.player1['visionScore_perGame']} value2={this.props.player2['visionScore_perGame']} />
                            <StatRow name="Vision wards/game" value1={this.props.player1['visionWardsBoughtInGame']} value2={this.props.player2['visionWardsBoughtInGame']} />
                            <StatRow name="Killed wards/game" value1={this.props.player1['wardsKilled_perGame']} value2={this.props.player2['wardsKilled_perGame']} />
                            <StatRow name="Wards Placed/game" value1={this.props.player1['wardsPlaces_perGame']} value2={this.props.player2['wardsPlaces_perGame']} />
                        </div>
                    </div>

                    <div className="col-sm-4 card text-white mb-3" style={{backgroundColor:"#49545f", padding:"0", fontFamily:"exo2"}}>
                        <PlayerHeader player1={this.props.player2} />
                    </div>
                </div>

            </div>
        );
    }
}

export default Response;
