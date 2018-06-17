#### 这一分支讲的是 如何完整地(不包含优化，也没有好看的页面) 搭建一个 增删改查 的 react-redux 系统

* 不同于上一节的 react-redux，这里主要采用 函数式组件。 函数式组件 = 函数式的写法 + 不需要state的组件。
> 其实函数式组件也就那么回事。 如果组件本身 没有需要 维护的 state，我们就可以使用 函数式组件。

* react-redux 的一部分难度来源于 connect，其实它就是一个。。。 高阶函数！就是我们上一节说的。
    * 作用：连接React组件与 Redux store。
    * connect之所以会成功，是因为Provider组件：在原应用组件上包裹一层，使原来整个应用成为Provider的子组件
    * 其实它主要是一个链接函数，而它内部的参数是有固定格式的，比若说
    
        ```
        connect([toProps函数，叫什么不重要], [mapDispatch函数], [mergeProps], [optiosn]);
        toProps(state, ownProps) => 将 store 的数据映射到 props 上绑定。
        toDispatch(dispatch, ownProps) => 将 action 的函数映射到 props 上绑定。
        剩下两个一般不用。
        ```

* 还有一部分的难度在于 redux 的拆分，这个官网已经有例子了，这里就不放代码啦。

* * *

#### 一步一步的优化

* 从 class 类的写法到 函数式的写法
* 从集成的 reducer 到拆分的 reducer
* 我们可以增加 保存在本地的 localStorage 来让我们的 app 更加真实一点
> 转成localStorage的过程中要注意，之前写的 toggle 函数(simple组件)中的 index 和 id 需要改动。
`onClick={() => itemClick(item.id)}`
* 我们可以给我们的 App 添加上适当的样式，让其看起来真的想一个 todolist。

#### 其他
* form表单提交的时候会刷新页面。如果不希望刷新的话，需要：
> 例如，如果 type 属性是 "submit"，在事件传播的任意阶段可以调用任意的事件句柄，通过调用该方法，可以阻止提交表单。

* `e.preventDefault();` 可以阻止诸如 提交的默认事件。
* 除此之外，`e.stopPropagation();` 可以阻止事件冒泡，顺带了解一下。