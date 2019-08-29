import {combineReducers} from 'redux';
import alerts from './alerts';
import products from './products';
import product from './product';
import loginreducers from '../reducers/login/loginreducers';

const createReducer = (asyncReducers) =>
    combineReducers({
        alerts,
        products,
        product,
        loginreducers ,
        ...asyncReducers
    });

export default createReducer;
