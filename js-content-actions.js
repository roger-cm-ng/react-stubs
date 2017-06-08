module.exports = function(compName) {
  return "export const ACTION = 'ACTION';\n" +
  "export function " + compName + "Action(payload) {\n" +
  "  return {\n" +
  "    type: ACTION,\n" +
  "		payload\n" +
  "  };\n" +
  "}\n";
}
