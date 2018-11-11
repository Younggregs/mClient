import React from 'react';
import {render} from "react-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { 
    createStore, 
    applyMiddleware, 
    compose
 } from 'redux'
import  thunk  from 'redux-thunk';
import { Provider } from 'react-redux'; 
import { routerMiddleware } from 'connected-react-router'
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min';
import 'uikit/dist/js/uikit-icons.min';
import { Router } from 'react-router-dom'
import reducers from './store';
import { createBrowserHistory } from 'history';
import { getStateLocally } from './auth/store/actions'

const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];
const enhancers = [applyMiddleware(...middlewares)];
const store = createStore(reducers, {}, compose(...enhancers));
const savedData = getStateLocally();

render(
    <Provider store={store}> 
        <Router history={history}>
            <App data={savedData}/>
        </Router>
    </Provider>,
     document.getElementById('root'));
     
serviceWorker.unregister();
