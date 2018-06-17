export const asyncReducer = (state = {
    isLoading: false,
    dataArray: []
}, action) => {
    switch(action.type) {
        case 'getData':
            return 'test';
        case 'STARTREQ':
            return Object.assign({}, state, {
                isLoading: true
            });
        case 'RECEIVEDATA':
            return Object.assign({}, state, {
                isLoading: false,
                dataArray: action.data.data.projects || []
            });
        case 'ERRORREQ':
            return Object.assign({}, state, {
                isLoading: false
            });
        default:
            return state;
    }
};