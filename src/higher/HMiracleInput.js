import React, { Component } from 'react';

import {connect} from 'react-redux';
import {makeMiracle} from '../redux/actions';

class HMiracleInput extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return ( <div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input ref={node => this.input = node} />
                <button type="submit">开始吧</button>
            </form>
        </div> )
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.input.value.trim()) {
            return;
        }
        this.props.dispatch(makeMiracle(this.input.value));
    }
}
 
HMiracleInput = connect()(HMiracleInput);

export default HMiracleInput;