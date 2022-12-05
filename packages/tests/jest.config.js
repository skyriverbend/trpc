module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  rootDir: '../',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  collectCoverageFrom: [
    './*/src/**/*.{ts,tsx,js,jsx}',
    // Ignore deprecated from codecov
    '!**/deprecated/**',
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './tests/jest.setup.js',
  ],
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react',
        target: 'ES2020',
        noUnusedLocals: false,
        noUnusedParameters: false,
      },
    },
  },
  // setupFiles: ['core-js', 'regenerator-runtime/runtime'],
};
