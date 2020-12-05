import { exec, execSync } from "child_process";
import util from "util";
import process from "process";
import readline from "readline";
import nodeFetch, { Response } from "node-fetch";
import Random from "./Random";

/**
 * A collection of node helper functions
 */

/**
 * Execute a command
 *
 * @param command
 */
async function execute(command: string): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        reject(stderr);
      }
      resolve(stdout);
    });
  });
}

/**
 * Execute a command syncronously
 *
 * @param command
 */
function executeSync(command: string): string {
  const buffer = execSync(command);
  return buffer.toString();
}

/**
 * Read input from the user
 *
 * @param input
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
 * Fetch anything.
 * Uses node-fetch under the hood.
 *
 * @param endpoint
 * @param bearerToken
 */
async function fetch(
  endpoint: string,
  bearerToken?: string
): Promise<Response> {
  const options = bearerToken
    ? {
        headers: { Authorization: `Bearer ${bearerToken}` },
      }
    : {};
  const response = await nodeFetch(endpoint, options);
  return response;
}

const combined = {
  execute,
  isAnswerYes,
  input,
  fetch,
  executeSync,
  getRandomInt: Random.getRandomInt,
};
export default combined;

// For require();
export const NodeExtended = { ...combined };
