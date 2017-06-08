require('babel-register')();

module.exports = function(compTitle, compCamel, fileName) {
  return `import { combineReducers } from 'redux';
import ${compCamel}Reducer from './${fileName}-reducer';

const ${compTitle}CombinedReducers = combineReducers({
  ${compCamel}Reducer
});

export default ${compTitle}CombinedReducers;
`;
}
