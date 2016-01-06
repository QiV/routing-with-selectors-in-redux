import {createSelector} from 'reselect';

import Index from './components/index';
import Test from './components/test';


export const
	// Get the routing data that redux-simple-router put in the store
	routing = state => state.routing,
	view = createSelector(
		routing,
		({path}) => {
			// We know what page should be shown based on the path
			// Return the component which renders that page
			switch(path) {
			case '/':
				return Index;
			case '/test':
				return Test;
			default:
				// Return a component that renders nothing
				return () => null;
			}
		}
	)
;
