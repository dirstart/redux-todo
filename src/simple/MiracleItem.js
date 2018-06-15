import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MiracleItem extends Component {
    render() { 
        return ( <h3 onClick={() => this.props.onClick()}>
            <span>奇迹项目：</span>
            <span>{this.props.text}</span>
        </h3> )
    }
}

MiracleItem.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};
 
export default MiracleItem;