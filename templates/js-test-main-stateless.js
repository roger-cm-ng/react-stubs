require('babel-register')();

module.exports = function(compTitle, fileName) {
  return `import React from 'react';
import styleable from 'react-styleable';
import '../../styles/core.scss';
import css from './test-compo.scss';

const TestCompo = () => (
  <div className={css.component}>
		<h1>stateless</h1>
  </div>
);

TestCompo.propTypes = {};

export default styleable(css)(TestCompo);
`
}
