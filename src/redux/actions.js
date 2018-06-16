// 原则上来说，使用的 type 应该用常亮定义，如  const ADD_TODO = 'ADD_TODO';
// 这里为了省一些代码

export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        text
    }
};

export const setFilter = type => {
    return {
        type: 'SET_FILTER',
        filterType: type
    }
};

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};

