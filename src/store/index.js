import { createStore, compose } from 'redux';
import reducers from '../reducers/index';
const enhancers = [];
if (window.devToolsExtension) {
  enhancers.push(window.devToolsExtension());
}
//import { getCountries } from '../actions/actions-countries';


const store = createStore(reducers, [], compose(...enhancers));

export default store;