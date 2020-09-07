import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App';
import PlayerHeader from './PlayerHeader';
import { PieChart } from 'react-minimal-pie-chart';


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
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-3">
                        <PlayerHeader player1={this.props.player1} />
                    </div>
                    <div className="col-sm-3">
                        <PlayerHeader player1={this.props.player2} />

                    </div>

                </div>
                <div className="row">
                    <div className="col-sm-1">
                        Creep Score
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                    CS diff between 0-10min
                    </div>
                    <div className="col-sm-3">
                        {this.props.player1['csDiff_0_10']}
                    </div>
                    <div className="col-sm-3">
                        {this.props.player2['csDiff_0_10']}

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        CS diff between 10-20min
                    </div>
                    <div className="col-sm-3">
                        {this.props.player1['csDiff_10_20']}
                    </div>
                    <div className="col-sm-3">
                        {this.props.player2['csDiff_10_20']}

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                    CS diff between 20-30min
                    </div>
                    <div className="col-sm-3">
                        {this.props.player1['csDiff_20_30']}
                    </div>
                    <div className="col-sm-3">
                        {this.props.player2['csDiff_20_30']}

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                    CS diff between 30min - end game
                    </div>
                    <div className="col-sm-3">
                        {this.props.player1['csDiff_30_end']}
                    </div>
                    <div className="col-sm-3">
                        {this.props.player2['csDiff_30_end']}

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                   AVG farm/minute at 0 - 10min
                    </div>
                    <div className="col-sm-3">
                        {this.props.player1['farm_0_10']}
                    </div>
                    <div className="col-sm-3">
                        {this.props.player2['farm_0_10']}

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                   AVG farm/minute at 10 - 20min
                    </div>
                    <div className="col-sm-3">
                        {this.props.player1['farm_10_20']}
                    </div>
                    <div className="col-sm-3">
                        {this.props.player2['farm_10_20']}

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                   AVG farm/minute at 20 - 30min
                    </div>
                    <div className="col-sm-3">
                        {this.props.player1['farm_20_30']}
                    </div>
                    <div className="col-sm-3">
                        {this.props.player2['farm_20_30']}

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                   AVG farm/minute at 30min - end
                    </div>
                    <div className="col-sm-3">
                        {this.props.player1['farm_30_end']}
                    </div>
                    <div className="col-sm-3">
                        {this.props.player2['farm_30_end']}

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                   AVG farm per minute
                    </div>
                    <div className="col-sm-3">
                        {this.props.player1['cs_perMinute']}
                    </div>
                    <div className="col-sm-3">
                        {this.props.player2['cs_perMinute']}

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                   AVG CS per game
                    </div>
                    <div className="col-sm-3">
                        {this.props.player1['cs_perGame']}
                    </div>
                    <div className="col-sm-3">
                        {this.props.player2['cs_perGame']}

                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-1">
                        DMG
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                   DMG to champs per game
                    </div>
                    <div className="col-sm-3">
                        {this.props.player1['totalDamageDealtToChampions_perGame']}
                    </div>
                    <div className="col-sm-3">
                        {this.props.player2['totalDamageDealtToChampions_perGame']}

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                    DMG to champs per minute
                    </div>
                    <div className="col-sm-3">
                        {this.props.player1['totalDamageDealtToChampions_perMinute']}
                    </div>
                    <div className="col-sm-3">
                        {this.props.player2['totalDamageDealtToChampions_perMinute']}

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                    DMG to objectives per game
                    </div>
                    <div className="col-sm-3">
                        {this.props.player1['damageDealtToObjectives_perGame']}
                    </div>
                    <div className="col-sm-3">
                        {this.props.player2['damageDealtToObjectives_perGame']}

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                    DMG to turrets per game
                    </div>
                    <div className="col-sm-3">
                        {this.props.player1['damageDealtToTurrets_perGame']}
                    </div>
                    <div className="col-sm-3">
                        {this.props.player2['damageDealtToTurrets_perGame']}

                    </div>
                </div>
                
                <div className="row">
                    <div className="col-sm-1">
                        Vision
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-3">
                    Vision score per game
                    </div>
                    <div className="col-sm-3">
                        {this.props.player1['visionScore_perGame']}
                    </div>
                    <div className="col-sm-3">
                        {this.props.player2['visionScore_perGame']}

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                    Vision wards per game
                    </div>
                    <div className="col-sm-3">
                        {this.props.player1['visionWardsBoughtInGame']}
                    </div>
                    <div className="col-sm-3">
                        {this.props.player2['visionWardsBoughtInGame']}

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                    Killed wards per game
                    </div>
                    <div className="col-sm-3">
                        {this.props.player1['wardsKilled_perGame']}
                    </div>
                    <div className="col-sm-3">
                        {this.props.player2['wardsKilled_perGame']}

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                    Wards Placed per game
                    </div>
                    <div className="col-sm-3">
                        {this.props.player1['wardsPlaces_perGame']}
                    </div>
                    <div className="col-sm-3">
                        {this.props.player2['wardsPlaces_perGame']}

                    </div>
                </div>
                {/* {
                    this.items
                } */}
            </div >

        );
    }
}

export default Response;
