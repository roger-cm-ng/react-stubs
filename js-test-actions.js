require('babel-register')();

module.exports = function(compTitle) {
  return `import expect from 'expect';

describe('<${compTitle}> Actions', () => {
  it('should be true', () => {
    expect(true).toBe(true);
  });
});`

}
