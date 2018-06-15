import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GrowStatus extends Component {
    render() { 
        return ( <h2>
            当前的状态是: {this.props.identify}
        </h2> )
    }
}

GrowStatus.propTyps = {
    identify: PropTypes.string.isRequired
};
 
export default GrowStatus;