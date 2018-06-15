import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MiracleItem from './MiracleItem';

class MiracleList extends Component {
    render() { 
        return (<ul>
            {
                this.props.list.map((item, index) => {
                    return (
                        <MiracleItem text={item.text}
                            key={index}
                            onClick={() => this.props.itemClick(index)}
                        />
                    )
                })
            }
        </ul>)
    }
}

MiracleList.propTypes = {
    list: PropTypes.array.isRequired,
    itemClick: PropTypes.func.isRequired
}
 
export default MiracleList;