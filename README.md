#### 这一分支讲的是 如何完整地 搭建一个 增删改查的 react-redux 系统

#### 不同于上一节的 react-redux，这里主要采用 函数式组件。 函数式组件 = 函数式的写法 + 不需要state的组件。
> 其实函数式组件也就那么回事。 如果组件本身 没有需要 维护的 state，我们就可以使用 函数式组件。


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