import React, {Component} from 'react';

class Results extends Component {
    render() {
        return (
            <div className="result">
            {
                this.props.mesure.length  === 0 ? (
                    <div>Loading...</div>
                ) : (
                        this.props.mesure.current.values.map((value, index) =>
                        <li key={index}>{value.name} wartość {value.value}</li>
                    )
                )
            }
            </div>
        );
    }
}

export default Results;
