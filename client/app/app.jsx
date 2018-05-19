import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes.jsx';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = applyMiddleware(thunk);
export const store = createStore(rootReducer, middleware);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>{routes}</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);