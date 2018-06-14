/*
    规则已经写好了，但是，我们看不见他们。

    我们需要历史。

    记录下你的一生，哪怕你只是一片微不足道的落叶或羽毛。
    store只有一个。
*/
import {createStore} from 'redux';
import {YourLife} from './reducer';
import {PEOPLETAG} from './actions';
import {makeMiracle, startGrow} from './actions';

let store = createStore(YourLife);

// 监听人生的每一次变化，如果单独调用一次这个函数则会 接触监听。 设置如此，极简。
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(makeMiracle('做了一个mad'));
store.dispatch(makeMiracle('不存在的'));
store.dispatch(makeMiracle('哈哈哈'));
// 人长大了
store.dispatch(startGrow(PEOPLETAG.adult));

unsubscribe();

