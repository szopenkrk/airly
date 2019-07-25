import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

export default class App extends Component {
    state = {
        data: {}
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
        .then(function(response){
            console.log(response.data);
            console.log(response.status);
        })
        .catch(function(error){
            console.log(error);
        });
    }

    render(){
        return (
            <div className="App">
              <header className="App-header">



              </header>
            </div>
        );
    }
}