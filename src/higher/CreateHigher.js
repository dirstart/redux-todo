import React, { Component } from 'react';

// 该组件负责将 localStorage 的数据获取并存入 data， 返回一个带 props 的组件
export default (InnerComponent, localDataAttr) => {
    class ResComponent extends Component {
        constructor() {
            super();
            this.state = {
                data: null
            };
        }

        componentDidMount() {
            let data = localStorage.getItem(localDataAttr);
            this.setState({data});
        }

        render() {
            return <InnerComponent data={this.state.data} />
        }
    }
    return ResComponent
}
