require('babel-register')();

module.exports = function(compTitle, fileName) {
  return `import React from 'react';
import styleable from 'react-styleable';
import '../../styles/core.scss';
import css from './${fileName}.scss';

const ${compTitle} = ({}) => (
  <div className={css.component}>

  </div>
);

${compTitle}.propTypes = {

};

export default styleable(css)(${compTitle});
`;
}
