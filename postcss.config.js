const autoprefixer = require("autoprefixer");
const precss = require("precss");
const psmq = require("postcss-sort-media-queries");
const pdd = require("postcss-discard-duplicates");

module.exports = {
  plugins: [precss, pdd, psmq, autoprefixer]
};
