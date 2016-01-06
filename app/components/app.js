import {element} from 'deku';

import {view} from '../selectors';


export default {
	render({context: state}) { // deku's context is the current store state
		// Get the component to render the current page
		const Component = view(state);

		// Render it
		return <div>
			<Component/>
		</div>;
	}
}
