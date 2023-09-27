module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: ['src/index.ts', 'src/test'],
  coverageReporters: ['lcov', 'text-summary'],
  coverageDirectory: 'coverage',
  testTimeout: 30000,
  verbose: true,
};
