const nxPreset = require('@nrwl/jest/preset')

const coverageReporters =
  process.env.CI === 'GitLab' ? ['text', 'cobertura'] : ['html']

module.exports = {
  ...nxPreset,
  collectCoverage: true,
  coverageReporters,
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
