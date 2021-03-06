import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import { getCountries } from './actions/actions-countries';

const enhancers = [];
if (window.devToolsExtension) {
  enhancers.push(window.devToolsExtension());
}

render(
    <Provider store={store}>
        <h1>Inicjalizacja projektu</h1>
    </Provider>,
    document.getElementById('root')
);


store.dispatch(getCountries());