import type { Config } from 'jest';

export default {
  displayName: 'botprobe-nest-e2e',
  preset: '../../jest.preset.js',
  globalSetup: '<rootDir>/src/support/global-setup.ts',
  globalTeardown: '<rootDir>/src/support/global-teardown.ts',
  setupFiles: ['<rootDir>/src/support/test-setup.ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  // testMatch: ['**/delete-todo.spec.ts'],
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/botprobe-nest-e2e',
} satisfies Config;
