#### redux其实非常简单。当复杂的步骤被拆分，其实每一步都是很容易的。

## 本文在 create-react-app 中的 index.js 随便引入了一下。
> (其实不必如此。测试环境支持 export/import 即可开展)


其实，redux不过就是一个数据库罢了。

*  *  *

action + reducer + store
行为 + 规则 + 历史/结果。

#### 以追女孩子为例子
> 想寻你喜欢的女孩子。你想好了你要怎么做，你仿佛也看到了这么做的后果。 那么，你准备好开始了吗？

* * *

#### 1.action (我们在行为中添加一个 固定的常量来命名，来诠释我们的生命)
你的每一个行为，依据规则，进行执行，从而改变了你的人生轨迹。
> action 是我们定义的行为结构。由 type 和 你自己定义的数据构成的一个对象。

```
// 一些变量罢了。
export const MIRACLE = 'MIRACLE';
export const GROW = 'GROW';
export const PEOPLETAG = {
    student: 'student',
    adult: 'adult',
    child: 'child'
};

// 也许你不曾创造奇迹，但，有何不可？
export const makeMiracle = (text) => {
    return {
        type: MIRACLE,
        text
    };
};

// 人类的成长行为
export const startGrow = (growType) => {
    return {
        type: GROW,
        growType
    };
};
```

成长 是我们生命中必定会进行的行为，时间让我们成长。

#### 2.reducer (有时候，努力并不一定会成功，我们要顺应规则。或者，打破规则。reducer是我们的规则。)
> reducer 是我们定义的一个 行为对应的规则。你的行为会给你带来什么改变？

```
import {GROW, MIRACLE, PEOPLETAG} from './actions';
import {makeMiracle, startGrow} from './actions';

// 人生的一开始，是一张白纸
const whitePaper = {
    girlFriend: [],
    miracle: [],
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
```

#### 3.store (每个人的历史都值得被尊重。你就是你，唯一的你。)
> store是 一个完善的 人生系统。它是 action 和 reducer 的实际操作。

##### 想寻你喜欢的女孩子。你想好了你要怎么做，你仿佛也看到了这么做的后果。 那么，你准备好开始了吗？

```
import {createStore} from 'redux';
import {YourLife} from './reducer';
import {PEOPLETAG} from './actions';
import {makeMiracle, startGrow} from './actions';

let store = createStore(YourLife);

// 监听人生的每一次变化
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(makeMiracle('做了一个mad'));
// 人长大了
store.dispatch(startGrow(PEOPLETAG.adult));

// 停止监听
unsubscribe();
```
