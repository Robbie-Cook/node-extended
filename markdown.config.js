const { spawn, execSync } = require("child_process");
const fs = require('fs');
const ENTRY_FILE = "./src/node-extended.ts";

/* CLI markdown.config.js file example */
module.exports = {
  transforms: {
    /* Match <!-- AUTO-GENERATED-CONTENT:START (API) --> */
    API(content, options) {
      execSync(`npx typedoc --plugin typedoc-plugin-markdown src/`);
      const string = fs.readFileSync('./docs/modules/_node_extended_.md');
      return string;
    },
  },
  callback: function () {
    console.log("done");
  },
};
