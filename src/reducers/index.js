import { combineReducers } from 'redux';
import countriesReducer  from '../reducers/countries-reducer';

const reducers = combineReducers({
    countriesReducer
});

export default reducers;