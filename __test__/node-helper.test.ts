import NodeHelper from "../src/node-extended";
const NodeHelperLegacy = require("../dist/node-extended").default;

/**
 * Testing the execute function
 */
test("Execute function", async () => {
  const answer = await NodeHelper.execute(`echo "Hello"`);
  expect(answer).toMatch(/Hello/); // TODO: convert this to toBe
});

/**
 * Testing the execute function
 */
test("Execute function legacy", async () => {
  const answer = await NodeHelperLegacy.execute(`echo "Hello"`);
  expect(answer).toMatch(/Hello/); // TODO: convert this to toBe
});
