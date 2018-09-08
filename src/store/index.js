import { createStore } from 'redux';
import reducers from '../reducers/index';
import { getCountries } from '../actions/actions-countries';


const store = createStore(reducers);

store.dispatch(getCountries());

export default store;