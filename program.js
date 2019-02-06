const spawn = require("cross-spawn");
const exec = require("child_process").exec;
const fork = require("child_process").fork;

module.exports = {
  buildProd,
  helpMessage,
  install,
  open,
  rimraf,
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

    [install]    || [i] : yarn install in project dir
    [dev]        || [d] : yarn run dev-server in project dir
    [watch]      || [w] : yarn run watch in project dir
    [aot]        || [a] : yarn run aot-debug in project dir
    [test]       || [t] : yarn run test in project dir
    [test-debug] || [td]: yarn run test-debug in project dir
    [build:prod] || [bp]: yarn run build:prod in project dir
    [build]      || [bp]: yarn run build in project dir
    [lint]       ||  [l]: yarn run lint in project dir
    [rimraf]            : rimraf node_modules
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
      console.log(" Running yarn install...");
      var install = spawn.sync("yarn", ["install"], { stdio: "inherit" });
    });
  } catch (err) {
    console.error(`yarn install error: ${err}`);
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
    var run = spawn.sync("yarn", ["run", "dev-server"], { stdio: "inherit" });
  } catch (err) {
    console.error(`error in vs-code: ${err}`);
  }
}

function rimraf() {
  try {
    _changeDirectory();
    console.log(` New directory: ${process.cwd()}`);
  } catch (err) {
    console.error(`chdir: ${err}`);
  }
  try {
    var run = spawn.sync("rimraf", ["node_modules"], { stdio: "inherit" });
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
    var run = spawn.sync("yarn", ["run", "lint"], { stdio: "inherit" });
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
    var run = spawn.sync("yarn", ["run", "build"], { stdio: "inherit" });
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
    var run = spawn.sync("yarn", ["run", "build:prod"], { stdio: "inherit" });
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
    var run = spawn.sync("yarn", ["run", "watch"], { stdio: "inherit" });
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
    var run = spawn.sync("yarn", ["test"], { stdio: "inherit" });
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
    var run = spawn.sync("yarn", ["run", "test_debugging"], {
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
    var run = spawn.sync("yarn", ["run", "aot-debug"], { stdio: "inherit" });
  } catch (err) {
    console.error(`error running tests: ${err}`);
  }
}

function _changeDirectory() {
  return process.chdir(
    String.raw`C:\projects\carebook\dev\datalink.carebook.web`
  );
}
