/* 
    万事万物都有规则。
    我们努力了，行动了，却未必会成功。

    让我们来制造规则吧。让 actions 不被白费。
*/
import {GROW, MIRACLE, PEOPLETAG} from './actions';
import {makeMiracle, startGrow} from './actions';

// 人生的一开始，是一张白纸
const whitePaper = {
    girlFriend: [],
    miracle: [{
        text: 'user'
    }, {
        text: 'test'
    }],
    identity: PEOPLETAG.child
};

// 于是我们人生的旅途开始了
export const YourLife = (state = whitePaper, action) => {
    switch (action.type) {
        case GROW:
            return Object.assign({}, state, {
                identity: action.growType
            });
        case MIRACLE:
            return Object.assign({}, state, {
                miracle: [
                    ...state.miracle,
                    {
                        text: action.text
                    }
                ]
            });
        default: 
            return state;
    }
};