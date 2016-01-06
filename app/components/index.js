import {element} from 'deku';

export default {
	render(module) {
		console.log('m', module)
		return <div>This is the index page. <a href="/test">Link to Test page</a></div>
	}
}
