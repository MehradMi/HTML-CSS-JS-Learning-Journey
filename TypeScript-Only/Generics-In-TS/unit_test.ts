
// unit_test.ts
import * as assertModule from "assert";

// Export the standard node assertion library
export const assert = assertModule;

// Export Mocha's global functions so they can be imported specifically
export const describe = global.describe;
export const it = global.it;

// Set this to true to run the "submit" test cases (the harder ones)
// Set to false if you only want to run the basic cases
export const withSubmit = true;
