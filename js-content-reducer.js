module.exports = function(fileName) {
  return "import { ACTION } from '" + fileName + "-actions';\n" +
  "\n" +
  "export default function (state = null, action) {\n" +
  "  switch (action.type) {\n" +
  "    case ACTION:\n" +
  "      return action.payload;\n" +
  "		default:\n" +
  "	}\n" +
  "\n" +
  "  return state;\n" +
  "}";
}
