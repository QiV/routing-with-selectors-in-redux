import {element} from 'deku';

import {pushPath} from 'redux-simple-router';


export default {
	render({dispatch}) {
		return <div>
			This is the index page.<br/>
			<a href="/test" onClick={linkClick(dispatch)}>Link to Test page</a>
		</div>
	}
}

function linkClick(dispatch) {
	return e => {
		e.preventDefault();
		dispatch(pushPath(e.target.getAttribute('href')));
	}
}
