import '@babel/polyfill'
import ReactDOM from 'react-dom'
import React from 'react'
import Hello from './components/Hello/index'
import { Provider} from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/sagas'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers,applyMiddleware(sagaMiddleware));
 sagaMiddleware.run(rootSaga)



ReactDOM.render(
    <Provider store={store}>
        <Hello/>
    </Provider>,
    document.querySelector('#root')
    );