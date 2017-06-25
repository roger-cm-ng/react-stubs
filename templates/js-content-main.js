require('babel-register')();

module.exports = function(compTitle, compCamel, fileName) {
  return `import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import '../../styles/core.scss';
import css from './${fileName}.scss';
import { action } from './${fileName}-actions';

@styleable(css)
class ${compTitle} extends Component {
  static propTypes= {
    css: PropTypes.object,
    action: PropTypes.func,
    ${compCamel}Reducer: PropTypes.object
  };

  componentWillUpdate() {}

  render() {
    return (
      <div className={css.component} >
        <h1>Component</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ${compCamel}Reducer: state.${compCamel}Reducer
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    action
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(${compTitle});
`;
}
