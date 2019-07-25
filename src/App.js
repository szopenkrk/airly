import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
        this.props = {};
    }

    componentDidMount() {
        var authOptions = {
            method: 'GET',
            url: 'https://airapi.airly.eu/v2/meta/indexes',
            headers: {
                'Accept': 'application/json',
                'apikey': 'sAR15nUCNUooLodxOzUdvRzFZKvbVEh3'
            },
            json: true
        };

        axios(authOptions)
        .then(function(response) {
            console.log(response.data);
            console.log(response.status);

            this.setState((state, props) => {
                return {data: response.data };
            });
        })
        .catch(function(error){
            console.log(error);
        });
    }

    render() {
        return (
            <div className="App">
              <header className="App-header">
                  { JSON.stringify(this.state.data, null, 4) }
              </header>
            </div>
        );
    }
}