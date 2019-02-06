#! /usr/bin/env node
const program = require("./program.js");

// Example: cb i -> runs npm install in carebook directory.
const commands = {
  aot: program.runAotDebug,
  a: program.runAotDebug,
  build: program.runBuild,
  b: program.runBuild,
  "build:prod": program.buildProd,
  bp: program.buildProd,
  dev: program.runDevServer,
  d: program.runDevServer,
  install: program.install,
  i: program.install,
  lint: program.runLint,
  l: program.runLint,
  rimraf: program.rimraf,
  test: program.runTest,
  t: program.runTest,
  "test-debug": program.runTestDebug,
  td: program.runTestDebug,
  watch: program.runWatch,
  w: program.runWatch,
  ".": program.open,
  help: program.helpMessage
};

if (process.argv[2] in commands) {
  commands[process.argv[2]]();
} else {
  commands.help();
}
