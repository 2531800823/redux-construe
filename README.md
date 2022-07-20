# Redux



### redux 三大原则

#### 单一数据源

**整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 state 中。**

#### State 是只读的  (每次会返回新的对象)

**唯一改变 state 的方法就是触发 action ，action 是一个用于描述已发生事件的普通对象。**

#### 使用纯函数 reducer 执行修改 state 更新

**同样的输入得到同样的输出。没有副作用**



### redux 工作流

![数据流更新动画](http://cn.redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)



### 实例

#### Redux 

#### 异步



![Redux 异步数据流](http://cn.redux.js.org/assets/images/ReduxAsyncDataFlowDiagram-d97ff38a0f4da0f327163170ccc13e80.gif)





#### React-Redux 
