import React, { Component } from 'react';

export default (InnerComponent, attrName) => {
    class ResComponent extends Component {
        constructor() {
            super();
            this.state = {
                data: null
            }
        }

        componentWillMount() {
            ajax.get('/data' + attrName, (res) => {
                this.setState({data: res});
            });
        }

        render() {
            return <InnerComponent data={this.state.data} />
        }
    }

    return ResComponent;
}