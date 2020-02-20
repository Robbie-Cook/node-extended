const { exec } = require('child_process');
const util = require('util');
const process = require('process');
const readline = require('readline');
const fetch = require('node-fetch');

/**
 * A collection of node helper functions
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

/** 
 * Fetch a file from an endpoint
 * 
 * @param {string} endpoint
 * @param {string} endpoint
 * @returns {Promise<ArrayBuffer>}
 */
const fetchFile = async (endpoint, bearerToken) => {
  const options = bearerToken ? {
    headers: {'Authorization': `Bearer ${bearerToken}`}
  } : {};
  const response = await fetch(endpoint, options);
  const data = await response.arrayBuffer();
  return data;
}

module.exports = { execute, isAnswerYes, input, fetchFile };