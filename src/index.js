import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
// import { createLogger } from 'redux-logger';
import DevTools from './DevTools';
import { createStore, applyMiddleware } from 'redux';
import { app as reducer} from './reducer';
import { addComment } from './actions';

// const logger = createLogger();
const store = createStore(
	reducer,
	// applyMiddleware(logger)
	DevTools.instrument()
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));
//registerServiceWorker();

//store.boundAddComment('pierwszy komentarz');
//store.boundAddComment('drugi komentarz');
//debugger;


store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));
