module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testRegex: "(/unit/.*|(\\.|/)(test|spec))\\.(ts|js)x?$",
  testPathIgnorePatterns: ["dist", "/unit/mock-util.ts", "node_modules"],
  coverageDirectory: "reports/coverage",
  collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}", "!src/**/*.d.ts"],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  rootDir: "../",
  setupFiles: ["./test/jest.setup.js"],
};
