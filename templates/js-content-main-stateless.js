require('babel-register')();

module.exports = function(compTitle, fileName) {
  return `import React from 'react';
import styleable from 'react-styleable';
import '../../styles/core.scss';
import css from './${fileName}.scss';

const ${compTitle} = ({ options }) => (
  <div className={css.component}>
		<h1>Component</h1>
  </div>
);

${compTitle}.propTypes = {

};

export default styleable(css)(${compTitle});
`;
}
