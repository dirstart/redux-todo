// 发起请求
export const startReq = () => {
    return {
        type: 'STARTREQ'
    };
};

// 收到请求后的响应
export const receiveData = (data) => {
    return {
        type: 'RECEIVEDATA',
        data
    };
};

// 请求失败
export const errorReq = () => {
    return {
        type: 'ERRORREQ'
    };
};

export const asyncGetData = () => {
    return dispatch => {
        dispatch(startReq());
        fetch('https://www.easy-mock.com/mock/5b03c4ea05e00e7fd3cb3e66/example/mock')
            .then(res => res.json(), err => console.log(err))
            .then((data) => dispatch(receiveData(data)))
            .catch((err) => {
                console.log('错误原因:', err);
                dispatch(errorReq());
            });
    };
};