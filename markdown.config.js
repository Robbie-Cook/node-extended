const { spawn, execSync } = require('child_process');

const ENTRY_FILE = "node-helper.js";

/* CLI markdown.config.js file example */
module.exports = {
  transforms: {
    /* Match <!-- AUTO-GENERATED-CONTENT:START (API) --> */
    API(content, options) {
      return execSync(`npx jsdoc-to-markdown ${ENTRY_FILE}`).toString(); 
    }
  },
  callback: function () {
    console.log('done')
  }
}