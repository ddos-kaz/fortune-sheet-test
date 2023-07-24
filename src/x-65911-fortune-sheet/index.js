import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<h2>Test</h2>
	);
};

createCustomElement('x-65911-fortune-sheet', {
	renderer: {type: snabbdom},
	view,
	styles
});
