require('babel-register')();

module.exports = function(compTitle, fileName) {
  return `import React from 'react';
import styleable from 'react-styleable';
import PropTypes from 'prop-types';
import '../../styles/core.scss';
import css from './${fileName}.scss';

const ${compTitle} = ({ str = 'state less component' }) => (
  <div className={css.component}>
		<h1>{str}</h1>
  </div>
);

${compTitle}.propTypes = {
	str: PropTypes.string
};

export default styleable(css)(${compTitle});
`;
}
