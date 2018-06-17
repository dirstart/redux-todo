#### 异步的 action，看起来好像比较麻烦呢？据官网说调用 异步API 的时候至少要三个 action？
！！！太麻烦了吧这也。

* 通知 reducer 请求开始的 actions。
* 通知 reducer 请求成功。
* 通知 reducer 请求失败。

## 所以还是不要看 上面/官网 了。

* * *

#### 其实我们的目的就只是 异步而已。 像 vuex 那样使用 action 和 mutation 的区别那样，so easy

* 首先，先把 redux-thunk 的导入方式知道了。 用完这个，就可以像 vuex 的异步那样简单了。
> vuex 的异步 = action + mutation。
而 redux 的异步 = action + action。(前提是拥有 redux-thunk)

* 简单的实例~
```
export const asyncGetData = () => {
    return dispatch => {
        // 1.异步开始，修改 redux内部数据(isLoading)
        dispatch(startReq());
        fetch('https://www.easy-mock.com/mock/5b03c4ea05e00e7fd3cb3e66/example/mock')
            .then(res => res.json(), err => console.log(err))
            // 2.异步成功，修改 redux 内部数据
            .then((data) => dispatch(receiveData(data)))
            .catch((err) => {
                console.log('错误原因:', err);
                // 3.异步失败，修改 redux 内部数据
                dispatch(errorReq());
            });
    };
};
```