import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App/App';
import reducer from './reducers';
import fenCodeConstants from './constants/fenCode';

const store = createStore(reducer, { fenCode: fenCodeConstants.INITIAL_STATE });

render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.body.appendChild(document.createElement('div')),
);
