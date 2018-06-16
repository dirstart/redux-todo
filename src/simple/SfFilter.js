import React, { Component } from 'react';

class SfFilter extends Component {
    render() { 
        const {filterType, isActive, handleFilter} = this.props;
        return ( <span>
            {
                isActive ?
                    <span> {filterType} </span>
                    :
                    <button onClick={() => handleFilter(filterType)}>{filterType}</button>
            }
        </span> )
    }
}
 
export default SfFilter;