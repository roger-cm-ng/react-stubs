module.exports = function(compTitle) {
  return "import { combineReducers } from 'redux';\n" +
  "\n" +
  "const " + compTitle + "CombinedReducers = combineReducers({\n" +
  "\n" +
  "});\n" +
  "\n" +
  "export default " + compTitle + "CombinedReducers;";
}
