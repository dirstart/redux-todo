// redux 合成，将 管理显示 和 管理todos 分为两个reducer。

const defaultState = {
    filterType: 'ALL',
    todos: []
};


export const todoApp = (state = defaultState, action) => {
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