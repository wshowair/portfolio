const nxPreset = require('@nrwl/jest/preset')

module.exports = {
  ...nxPreset,
  collectCoverage: true,
  coverageReporters: [process.env.CI === 'GitLab' ? 'text' : 'html'],
  collectCoverageFrom: [
    '**/src/app/**/*.{ts,tsx}',
    '**/src/lib/**/*.{ts,tsx}',
    '!node_modules/**',
    '!dist/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}
