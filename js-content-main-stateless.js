module.exports = function(compTitle, fileName) {
  return "import React from 'react';\n" +
  "import styleable from 'react-styleable';\n" +
  "import '../../../styles/core.scss';\n" +
  "import css from './" + fileName + ".scss';\n" +
  "\n" +
  "const " + compTitle + " = () => (\n" +
  "  <div className={`hwrld ${css.hwrld}`}>\n" +
  "\n" +
  "  </div>\n" +
  ");\n" +
  "\n" +
  compTitle + ".propTypes = {};\n" +
  "\n" +
  "export default styleable(css)(" + compTitle + ");";

}
