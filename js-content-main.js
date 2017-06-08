module.exports = function(compTitle, compName, fileName) {
  return "import React, { Component } from 'react';\n"  +
    "import styleable from 'react-styleable';\n" +
    "import { connect } from 'react-redux';\n" +
    "import { bindActionCreators } from 'redux';\n"  +
    "import '../styles/core.scss';\n" +
    "import css from './" + fileName + ".scss';\n" +
    "import " + compName + "Actions from './" + fileName + "-actions.js';\n" +
    "\n" +
    "@styleable(css)\n" +
    "class " + compTitle + " extends Component {\n" +
    "  static propTypes= {\n" +
    "    css: React.PropTypes.object,\n" +
    "    " + compName + "Actions: React.PropTypes.func,\n" +
    "    " + compName + "Reducer: React.PropTypes.object\n" +
    "	};\n" +
    "\n" +
    "  render() {\n" +
    "    return (\n" +
    "      <div className={`hwrld ${this.props.css.hwrld}`} >\n" +
    "\n" +
    "      </div>\n" +
    "    );\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    "function mapStateToProps(state) {\n" +
    "	return {\n" +
    "    " + compName + "Reducer: state." + compName + "Reducer\n" +
    "	};\n" +
    "}\n" +
    "\n" +
    "function mapDispatchToProps(dispatch) {\n" +
    "	return bindActionCreators({\n" +
    "    " + compName + "Actions\n" +
    "  }, dispatch);\n" +
    "}\n" +
    "\n" +
    "export default connect(mapStateToProps, mapDispatchToProps)(" + compTitle + ");"
}
