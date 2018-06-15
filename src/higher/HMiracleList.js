import React, { Component } from 'react';
import {connect} from 'react-redux';

import MiracleList from '../simple/MiracleList';
// 我们可以知道简单组件 所缺乏的是 一个list数组 和 一个函数

const getList = (list, condition) => {
    if (condition) {
        return;
    }

    return list;
};

const mapStateToProps = state => {
    return {
        list: getList(state.miracle)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        itemClick: id => console.log(id)
    };
};

const HMiracleList = connect(
    mapStateToProps,
    mapDispatchToProps
)(MiracleList);

export default HMiracleList;