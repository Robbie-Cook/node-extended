import { exec } from 'child_process';
import util from 'util';
import process from 'process';
import readline from 'readline';

/**
 * Node helper functions
 */

const executePromisified = util.promisify(exec);

/**
 * Execute a command
 * 
 * @param {string} command 
 */
const execute = async (command) => {
  
  const { stdout, stderr } = await executePromisified(command);
  if (stderr) {
    console.error(stderr);
  }
  return stdout;
};

/**
 * Read input from the user
 * 
 * @param {string} input 
 */
const input = async (input) => new Promise((resolve) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(`${input} `, (answer) => {
    rl.close();
    resolve(answer);
  });
});

/**
 * Whether the user accepted the input
 * 
 * @param {string} input
 */
const isAnswerYes = (input) => {
  return input.match(/[yY]/g);
};

export default { execute, isAnswerYes, input };