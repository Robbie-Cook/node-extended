const { exec } = require('child_process');
const util = require('util');
import process from 'process';
const readline = require('readline');
const fetch = require('node-fetch');

/**
 * A collection of node helper functions
 */

/**
 * Execute a command
 * 
 * @param command 
 */
const execute = async (command: string) => {
  const executePromisified = util.promisify(exec);
  const { stdout, stderr } = await executePromisified(command);
  if (stderr) {
    console.error(stderr);
  }
  return stdout;
};

/**
 * Read input from the user
 * 
 * @param input 
 * @returns {Promise<string>}
 */
const input = async (input: string) => new Promise((resolve) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(`${input} `, (answer: string) => {
    rl.close();
    resolve(answer);
  });
});

/**
 * Whether the user accepted the input
 * 
 * @param input
 */
const isAnswerYes = (input: string) => {
  return input.match(/[yY]/g);
};

/** 
 * Fetch a file from an endpoint
 * 
 * @param endpoint
 * @param bearerToken
 */
const fetchFile = async (endpoint: string, bearerToken?: string) => {
  const options = bearerToken ? {
    headers: {'Authorization': `Bearer ${bearerToken}`}
  } : {};
  const response = await fetch(endpoint, options);
  const data = await response.arrayBuffer();
  return data;
}

module.exports = { execute, isAnswerYes, input, fetchFile };