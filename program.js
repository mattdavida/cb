const spawn = require("cross-spawn");
const exec = require("child_process").exec;
const fork = require("child_process").fork;

module.exports = {
  buildProd,
  helpMessage,
  install,
  open,
  runAotDebug,
  runDevServer,
  runLint,
  runBuild,
  runWatch,
  runTest,
  runTestDebug
};

function helpMessage() {
  console.log(`
CareBook - to get started:

    [install]    || [i] : npm install in project dir
    [dev]        || [d] : npm run dev-server in project dir
    [watch]      || [w] : npm run watch in project dir
    [aot]        || [a] : npm run aot-debug in project dir
    [test]       || [t] : npm run test in project dir
    [test-debug] || [td]: npm run test-debug in project dir
    [build:prod] || [bp]: npm run build:prod in project dir
    [build]      || [bp]: npm run build in project dir
    [lint]       ||  [l]: npm run lint in project dir
    [.]                 : opens project in vs-code
    [help]              : help
`);
}

function install() {
  try {
    _changeDirectory();
    console.log(` New directory: ${process.cwd()}`);
  } catch (err) {
    console.error(`chdir: ${err}`);
  }
  try {
    var dir = exec("dir", (err, stdout) => {
      console.log(` stdout: ${stdout}`);
      console.log(" Runnging npm install...");
      var install = spawn.sync("npm", ["install"], { stdio: "inherit" });
    });
  } catch (err) {
    console.error(`npm install error: ${err}`);
  }
}

function open() {
  try {
    _changeDirectory();
    console.log(` New directory: ${process.cwd()}`);
  } catch (err) {
    console.error(`chdir: ${err}`);
  }
  try {
    var code = exec("code .", (err, stdout) => {
      console.log(" opening project in vs-code...");
      process.exit();
    });
  } catch (err) {
    console.error(`error in vs-code: ${err}`);
  }
}

function runDevServer() {
  try {
    _changeDirectory();
    console.log(` New directory: ${process.cwd()}`);
  } catch (err) {
    console.error(`chdir: ${err}`);
  }
  try {
    var run = spawn.sync("npm", ["run", "dev-server"], { stdio: "inherit" });
  } catch (err) {
    console.error(`error in vs-code: ${err}`);
  }
}

function runLint() {
  try {
    _changeDirectory();
    console.log(` New directory: ${process.cwd()}`);
  } catch (err) {
    console.error(`chdir: ${err}`);
  }
  try {
    var run = spawn.sync("npm", ["run", "lint"], { stdio: "inherit" });
  } catch (err) {
    console.error(`error in vs-code: ${err}`);
  }
}

function runBuild() {
  try {
    _changeDirectory();
    console.log(` New directory: ${process.cwd()}`);
  } catch (err) {
    console.error(`chdir: ${err}`);
  }
  try {
    var run = spawn.sync("npm", ["run", "build"], { stdio: "inherit" });
  } catch (err) {
    console.error(`error in vs-code: ${err}`);
  }
}

function buildProd() {
  try {
    _changeDirectory();
    console.log(` New directory: ${process.cwd()}`);
  } catch (err) {
    console.error(`chdir: ${err}`);
  }
  try {
    var run = spawn.sync("npm", ["run", "build:prod"], { stdio: "inherit" });
  } catch (err) {
    console.error(`error in vs-code: ${err}`);
  }
}

function runWatch() {
  try {
    _changeDirectory();
    console.log(` New directory: ${process.cwd()}`);
  } catch (err) {
    console.error(`chdir: ${err}`);
  }
  try {
    var run = spawn.sync("npm", ["run", "watch"], { stdio: "inherit" });
  } catch (err) {
    console.error(`error in vs-code: ${err}`);
  }
}

function runTest() {
  try {
    _changeDirectory();
    console.log(` New directory: ${process.cwd()}`);
  } catch (err) {
    console.error(`chdir: ${err}`);
  }
  try {
    var run = spawn.sync("npm", ["test"], { stdio: "inherit" });
  } catch (err) {
    console.error(`error running tests: ${err}`);
  }
}

function runTestDebug() {
  try {
    _changeDirectory();
    console.log(` New directory: ${process.cwd()}`);
  } catch (err) {
    console.error(`chdir: ${err}`);
  }
  try {
    var run = spawn.sync("npm", ["run", "test_debugging"], {
      stdio: "inherit"
    });
  } catch (err) {
    console.error(`error running tests: ${err}`);
  }
}

function runAotDebug() {
  try {
    _changeDirectory();
    console.log(` New directory: ${process.cwd()}`);
  } catch (err) {
    console.error(`chdir: ${err}`);
  }
  try {
    var run = spawn.sync("npm", ["run", "aot-debug"], { stdio: "inherit" });
  } catch (err) {
    console.error(`error running tests: ${err}`);
  }
}

function _changeDirectory() {
  return process.chdir(
    String.raw`C:\Users\matthew.arvidson\source\workspaces\workspace\carebook\dev\datalink.carebook.web`
  );
}
