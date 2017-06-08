require('babel-register')();

module.exports = function(fileName) {
  return `import { ACTIONED } from './${fileName}-actions';

export default function (state = null, action) {
  switch (action.type) {
    case ACTIONED:
      return action.payload;
		default:
	}

  return state;
}
`;
}
