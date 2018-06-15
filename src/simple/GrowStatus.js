import React, { Component } from 'react';

class GrowStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <h2>
            当前的状态是: {this.props.identify}
        </h2> )
    }
}
 
export default GrowStatus;