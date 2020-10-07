const { TsDocExtended } = require("tsdoc-extended");
const fs = require("fs");

/* CLI markdown.config.js file example */
module.exports = {
  transforms: {
    /* Match <!-- AUTO-GENERATED-CONTENT:START (API) --> */
    API(content, options) {
      return TsDocExtended.generateMarkdown('src');
    },
  },
  callback: function () {
    console.log("done");
  },
};
