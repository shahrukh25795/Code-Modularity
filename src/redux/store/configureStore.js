import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from '../reducers/index';

export default createStore(Reducers, applyMiddleware(thunk))