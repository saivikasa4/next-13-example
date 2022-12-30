const nextJest = require("next/jest")

const createJestConfig = nextJest({
  dir: "./",
})

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  modulePathIgnorePatterns: ["e2e"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/lib/(.*)$": "<rootDir>/lib/$1",
    "^@/types(.*)$": "<rootDir>/types.ts",
    "^@/constants(.*)$": "<rootDir>/constants.ts",
  },
}

module.exports = createJestConfig(customJestConfig)
