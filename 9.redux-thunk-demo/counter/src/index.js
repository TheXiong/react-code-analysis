import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import store from "./store";
//Provider这个是自己实现的组件
import {Provider} from "react-redux";
ReactDOM.render(
    <Provider store = {store}>
        <React.Fragment>
            <Counter />
            <Todo />
        </React.Fragment>
    </Provider>, document.getElementById('root'));
