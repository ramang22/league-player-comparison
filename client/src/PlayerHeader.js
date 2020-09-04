import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App';
class Response extends Component {

    constructor(props) {
        super(props);
    }

    getIcon(){
        
        let rank = this.props.player1['rank']
        let tier = this.props.player1['tier']
        if (tier.toString() == "CHALLENGER"){
            rank = 1
        }
        if (rank.toString() == "I"){
            rank = 1
        }else if (rank.toString() == "II") {
            rank = 2
        }else if (rank.toString() == "III") {
            rank = 3
        }else if (rank.toString() == "IV") {
            rank = 4 
        }
        let url = 'src\\assets\\s9_ranks\\'+tier.toLowerCase()+"_"+rank+".png"
        console.log(url)
        return url

    }
    render() {
        return (
            <div className="container">
                    
                        <div className="row">
                            <img class="profilepic" src={this.getIcon()} />
                        </div>
                        <div className="row">
                            <span>{this.props.player1['name']}</span>
                        </div>
                        <div className="row">
                            <span>Win/Loose {this.props.player1['wins']}/{this.props.player1['losses']}</span>
                        </div>
                        <div className="row">
                            <span>Winrate {100 / (this.props.player1['wins'] + this.props.player1['losses']) * this.props.player1['wins']}</span>
                        </div>
                        <div className="row">
                            <span>KDA {this.props.player1['kda']}</span>
                        </div>
                        <div className="row">
                            <span>K/D/A in {this.props.player1['matches']} {this.props.player1['kills']}/{this.props.player1['deaths']}/{this.props.player1['assists']}</span>
                        </div>
                    </div>
            

        );
    }
}

export default Response;
