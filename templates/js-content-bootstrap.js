require('babel-register')();

module.exports = function(compTitle, fileName) {
  return `/* global window document */
import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { handleDefaults } from '../helpers/utils';
import ${compTitle}CombinedReducers from './${fileName}-combined-reducers';
import ${compTitle} from './${fileName}';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default class Entry${compTitle} {
	constructor(element, dynamicOptions) {
		const defaults = {};
		this.element = element;
		this.options = handleDefaults(defaults, dynamicOptions);
		this.renderElm();
	}

	renderElm() {
  	const store = createStoreWithMiddleware(
  		${compTitle}CombinedReducers,
  		window.devToolsExtension ? window.devToolsExtension() : f => f
  	);

		ReactDom.render(
			<Provider store={store}>
				<${compTitle} options={this.options} />
			</Provider>,
			document.querySelector(this.element));
		}
}

window.Entry${compTitle} = Entry${compTitle};
`;
}
