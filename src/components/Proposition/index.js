import React, {Component} from 'react';

class Proposition extends Component {
    render() {
        return (
            <div className="proposition">
            {this.props.text.current.indexes[0].advice}
            </div>
        );
    }
}

export default Proposition;
