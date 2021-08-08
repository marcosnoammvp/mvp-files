// globalTeardown [string]#
// Default: undefined

// This option allows the use of a custom global teardown module which exports an async function that is triggered once after all test suites. This function gets Jest's globalConfig object as a parameter.

// Note: A global teardown module configured in a project (using multi-project runner) will be triggered only when you run at least one test from this project.

// Note: The same caveat concerning transformation of node_modules as for globalSetup applies to globalTeardown.
import "regenerator-runtime/runtime.js";

module.exports = async () => {
    console.log("global-teardown");
}