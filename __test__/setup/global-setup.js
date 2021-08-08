// Default: undefined

// This option allows the use of a custom global setup module which exports an async function that is triggered once before all test suites. This function gets Jest's globalConfig object as a parameter.

// Note: A global setup module configured in a project (using multi-project runner) will be triggered only when you run at least one test from this project.

// Note: Any global variables that are defined through globalSetup can only be read in globalTeardown. You cannot retrieve globals defined here in your test suites.

// Note: While code transformation is applied to the linked setup-file, Jest will not transform any code in node_modules. This is due to the need to load the actual transformers (e.g. babel or typescript) to perform transformation.

// Example:

// // setup.js
// module.exports = async () => {
//   // ...
//   // Set reference to mongod in order to close the server during teardown.
//   global.__MONGOD__ = mongod;
// };
// // teardown.js
// module.exports = async function () {
//   await global.__MONGOD__.stop();
// };
import "regenerator-runtime/runtime.js";

module.exports = async () => {
    console.log("global-setup");
}