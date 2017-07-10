require('babel-register')();

module.exports = function(compTitle, fileName) {
  return `import expect from 'expect'
import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from '';
import ${compTitle} from '../${fileName}';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(Reducers);

function setup() {
  return mount(<Provider store={store}>
    <${compTitle} />
  </Provider>);
}

describe('<${compTitle}>', () => {
  it('should have ', () => {

  });
});`
}
