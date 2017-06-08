module.exports = function(compTitle, fileName) {
  return "import React from 'react';\n" +
  "import ReactDom from 'react-dom';\n" +
  "import { handleDefaults } from '../helpers/utils';\n" +
  "import { Provider } from 'react-redux';\n" +
  "import { createStore, applyMiddleware } from 'redux';\n" +
  "import " + compTitle + "CombinedReducers from './" + fileName + "-combined-reducers';\n" +
  "import " + compTitle + " from './" + fileName + "';\n" +
  "import ReduxPromise from 'redux-promise';\n" +
  "\n" +
  "const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);\n" +
  "\n" +
  "export default class Hwrld" + compTitle + "{\n" +
  "  constructor(element, dynamicOptions) {\n" +
  "	  const defaults = {};\n" +
  "		this.element = element;\n" +
  "		this.options = handleDefaults(defaults, dynamicOptions);\n" +
  "		this.renderElm();\n" +
  "  }\n" +
  "\n" +
  "	renderElm() {\n" +
  "	  ReactDom.render(\n" +
  "      <Provider store={createStoreWithMiddleware(" + compTitle + "CombinedReducers)}>\n" +
  "				<" + compTitle + " options={this.options} />\n" +
  "			</Provider>\n" +
  "			,\n" +
  "			document.querySelector(this.element));\n" +
  "	  }\n" +
  "}\n" +
  "\n" +
  "window.Hwrld" + compTitle + " = Hwrld" + compTitle + ";";
}
