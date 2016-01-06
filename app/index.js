import {dom, element} from 'deku';

// redux-simple-router just keeps the browser url bar synced with a
// path in the store. We're going to use that data to do our own routing.
import {syncReduxAndRouter} from 'redux-simple-router';

// Required for redux-simple-router
import createBrowserHistory from 'history/lib/createBrowserHistory';

import createStore from './store';

import App from './components/app';


function createApp(rootEl) {
	const store = createStore();
	window.store=store;

	syncReduxAndRouter(createBrowserHistory(), store);

	// deku does rendering
	const render = dom.createRenderer(rootEl, store.dispatch);
	render(<App/>, store.getState());
	return store.subscribe(() => render(<App/>, store.getState()));
}


createApp(document.getElementById('approot'));
