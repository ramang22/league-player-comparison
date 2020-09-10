import React, { Component } from 'react';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {
        return (
            <footer class="page-footer text-white font-small blue" style={this.props.css}>

            <div class="footer-copyright text-center py-3">
              © 2020 Copyright: SummonerVision
              <div>
                <a href="https://github.com/ramang22/league-player-comparison">🧻 source</a>
              </div>
            </div>

          </footer>
        );
    }
}

export default Footer;
