require('babel-register')();

module.exports = function(compName) {
  return `export const ACTIONED = 'ACTIONED';
export function action(payload) {
  return {
    type: ACTIONED,
      payload
  };
}
`;
}
