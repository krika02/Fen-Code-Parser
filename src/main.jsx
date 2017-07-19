import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App/App';
import reducer from './reducers';

const store = createStore(reducer, {
	fenCode: {
		valid: true,
		field: [[]],
	},
});

render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.body.appendChild(document.createElement('div')),
);
