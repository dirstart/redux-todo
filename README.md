#### 这一分支讲的是 如何完整地 搭建一个 增删改查的 react-redux 系统

#### 不同于上一节的 react-redux，这里主要采用 函数式组件。 函数式组件 = 函数式的写法 + 不需要state的组件。
> 其实函数式组件也就那么回事。 如果组件本身 没有需要 维护的 state，我们就可以使用 函数式组件。

#### 一步一步的优化

* 从 class 类的写法到 函数式的写法
* 从集成的 reducer 到拆分的 reducer

#### 我所学到的新知识。
* form表单提交的时候会刷新页面。如果不希望刷新的话，需要：
> 例如，如果 type 属性是 "submit"，在事件传播的任意阶段可以调用任意的事件句柄，通过调用该方法，可以阻止提交表单。

`e.preventDefault();` 可以阻止诸如 提交的默认事件。
除此之外，`e.stopPropagation();` 可以阻止事件冒泡，顺带了解一下。

* * *

#### redux的拆分 - 拆分之前
```
const defaultState = {
    filterType: 'ALL',
    todos: []
};

const todoApp = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        finished: false
                    }
                ]
            });
        case 'SET_FILTER':
            return Object.assign({}, state, {
                filterType: action.filterType
            });
        default:
            return state;
    }
};
```