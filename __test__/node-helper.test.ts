import NodeHelper from "../src/node-extended";
const NodeHelperLegacy = require("../dist/node-extended").default;
import { exec, execSync } from "child_process";

const currentDir = execSync('pwd').toString();

/**
 * Testing the execute function
 */
test("Execute function", async () => {
  const answer = await NodeHelper.execute(`echo "Hello"`);
  expect(answer).toEqual('Hello\n'); 
});

/**
 * Testing the execute function
 */
test("Execute function legacy", async () => {
  const answer = await NodeHelperLegacy.execute(`echo "Hello"`);
  expect(answer).toEqual('Hello\n');
});

/**
 * Testing the syncronous execute function
 */
test("Execute function sync", async () => {
  const answer = NodeHelper.executeSync(`echo "Hello"`);
  expect(answer).toEqual('Hello\n');
});

/**
 * Testing the working dir
 */
test("Get 'pwd' sync (no dir)", async () => {
  const answer = NodeHelper.executeSync(`pwd`);
  expect(answer).toEqual(currentDir);
});

/**
 * Testing the synchronous execute function
 */
test("Get 'pwd' sync (dir)", async () => {
  const answer = NodeHelper.executeSync(`pwd`, __dirname);
  expect(answer).not.toEqual(currentDir);
});

/**
 * Testing the working dir
 */
test("Get 'pwd' async (no dir)", async () => {
  const answer = await NodeHelper.execute(`pwd`);
  expect(answer).toEqual(currentDir);
});

/**
 * Testing the asynchronous execute function
 */
test("Get 'pwd' async (dir)", async () => {
  const answer = await NodeHelper.execute(`pwd`, __dirname);
  expect(answer).not.toEqual(currentDir);
});
