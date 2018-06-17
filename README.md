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

*