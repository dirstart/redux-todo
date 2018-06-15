#### 其实 redux 真正让人感到混乱的还是在 react-redux 的使用中。

也不是说混乱，主要是网上 推崇 **最佳实践**。学习一个新东西的时候，本来就很陌生，上来就用最佳实践，当然让人摸不着头脑。

其实搞定 react-redux 主要分两点：
* 容器组件 和 展示组件 的最佳实践  (难就难在这里，系统架构层次的难)
> 办法：想办法精通react  props 的传值。

* 另外一个就是 react-redux 的固定用法了。

*  *  *

### 1.数据从哪里来？  高阶组件(容器组件)其实就是解决这么一个问题。   --- 高阶组件是一个函数！！！函数！！！
> 严格地区分了各国人的进入，就能防止罪犯的逃逸。

你们懂的，如果希望稳定，有时候就需要滴水不漏。

单独举个例子区分一下，数据的来源假设有三种
* localStorage
* 调用web接口获得的
* state里面的数据

这里参考 react 小书的（要付钱哦）：http://huziketang.mangojuice.top/books/react/lesson28
也可以直接看我代码 src 层的 higher/simple 中的 CreateHigher、UseHigher 文件。

* CreateHigher：一个函数，参数是 （组件，需要从本地获取的属性），返回一个带 props 的组件。
> 完成了获取本地数据的 逻辑。

* UseHigher：先定义了一个组件，此后使用CreateHigher创建了一个我们真正需要的组件(相当于类的实例化)。

#### 总结：当有两个组件都需要从 本地 localStorage 加载相关的数据，上述的高阶组件就能很好地 实现逻辑的复用。复用的同时也将 获取数据的 逻辑和纯组件 解耦。
> 一举两得。

### 2.然后我们通过对数据的剥离，构造纯组件，降低耦合性。

||展示组件|容器(高级)组件|
|:-|:-|:-|
|作用|展示样式和骨架|描述如何运行？数据获取/状态更新|
|直接使用redux？|否|是|
|数据来源|props|监听redux|
|数据修改|调用props中的回调函数|由redux派发|
|调用方式(这个我没理解)|手动|由react-redux生成|

上面贴了一张官网的图(http://www.redux.org.cn/docs/basics/UsageWithReact.html)，拿我们之前的 redux 例子来 架构一下吧~

我们之前的 reducer 有什么内容呢？ 创造奇迹 和 通过成长改变人的状态 和 ~~添加女朋友(不存在的，已PASS)~~

#### 展示组件
* MiracleList：用于展示奇迹列表(可以被添加)
    miracle: []  /  Array   ---- 结构 {text: ''}
    method: 来自 App上层 传下来的  itemClick    -> `onClick = {() => this.props.itemClick(index)}`
    > List中含有 index，由它来决定 参数
* MiracleItem：专门展示奇迹事项
    text: String
    method: 来自 MiracleList 传下来的 onClick   ->  `onClick = {() => this.props.onClick()}`
* 最顶层组件 Index：用于架构各种小罗罗
    method：`onClick = {(index) => console.log(index)}` (基本的逻辑)
* GrowStatus: 显示人类当前的成长年龄/状态(可以被改变)

*  *  *

