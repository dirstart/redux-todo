// redux 合成，将 管理显示 和 管理todos 分为两个reducer。

let nextId = JSON.parse(localStorage.getItem('todoId')) || 0;

const _getTodos = () => {
    return JSON.parse(localStorage.getItem('allTodos')) || [];
};

const _setTodos = (state, newId) => {
    nextId = newId || nextId;
    localStorage.setItem('todoId', nextId);
    localStorage.setItem('allTodos', JSON.stringify(state.todos));
    return state;
};

const defaultState = {
    filterType: 'ALL',
    todos: _getTodos()
};

export const todoApp = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return _setTodos(Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        finished: false,
                        id: nextId++
                    }
                ]
            }));
        case 'TOGGLE_TODO':
            return _setTodos(Object.assign({}, state, {
                todos: state.todos.map(item => item.id === action.id ?
                    {...item, finished: !item.finished} : item
                )
            }));
        case 'SET_FILTER':
            return Object.assign({}, state, {
                filterType: action.filterType
            });
        case 'CLEAR_TODOS':
            let newIndex = 0;
            console.log('开始了一个新的轮回');
            const newTodos = Object.assign({}, state, {
                todos: state.todos.filter(item => {
                    if (item.finished === false) {
                        item.id = newIndex++;
                        return item;
                    }
                })
            });
            return _setTodos(newTodos, newIndex);
        default:
            return state;
    }
};
