import { exec } from "child_process";
import util from "util";
import process from "process";
import readline from "readline";
import fetch from "node-fetch";

/**
 * A collection of node helper functions
 */

/**
 * Execute a command
 *
 * @param command
 */
async function execute(command: string): Promise<string> {
  const executePromisified = util.promisify(exec);
  const { stdout, stderr } = await executePromisified(command);
  if (stderr) {
    throw stderr;
  }
  return stdout;
}

/**
 * Read input from the user
 *
 * @param input
 * @returns {Promise<string>}
 */
async function input(input: string): Promise<string> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(`${input} `, (answer: string) => {
      rl.close();
      resolve(answer);
    });
  });
}

/**
 * Whether the user accepted the input
 *
 * @param input
 */
function isAnswerYes(input: string): boolean | null {
  return !!input.match(/[yY]/g);
}

/**
 * Fetch a file from an endpoint
 *
 * @param endpoint
 * @param bearerToken
 */
async function fetchFile(endpoint: string, bearerToken?: string): Promise<ArrayBuffer> {
  const options = bearerToken
    ? {
        headers: { Authorization: `Bearer ${bearerToken}` },
      }
    : {};
  const response = await fetch(endpoint, options);
  const data = await response.arrayBuffer();
  return data;
}

export default { execute, isAnswerYes, input, fetchFile };
