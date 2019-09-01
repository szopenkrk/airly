import React, {Component} from 'react';
import axios from 'axios';
import config from './config.json';
import Results from './components/Results';
import Proposition from './components/Proposition';
import './App.css';

export default class App extends Component {

    state = {
        mesure: []
    };

    componentDidMount() {
        const authOptions = {
            method: 'GET',
            url: 'https://airapi.airly.eu/v2/measurements/nearest?lat=50.041734&lng=19.862593&maxDistanceKM=5',
            headers: {
                'Accept': 'application/json',
                'apikey': config.apiKey
            },
            json: true
        };

        axios(authOptions).then(response => {
            console.log(response.data);
            const mesure  = response.data;
            this.setState({mesure});
         });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {this.state.mesure.length  === 0 ? (
                        <div>Loading...</div>
                    ) : (
                        <div>
                            <Results mesure={this.state.mesure} />
                            <Proposition text={this.state.mesure} />
                        </div>
                    )
                    }
                </header>
            </div>
        );
    }
}
