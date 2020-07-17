import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers'
import thunk from 'redux-thunk'


const initialState ={}

const middleware = [thunk]

const store = createStore(rootReducer, initialState,)
