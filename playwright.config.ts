import { PlaywrightTestConfig } from '@playwright/test';

/**
* See https://playwright.dev/docs/test-configuration.
*/
const config: PlaywrightTestConfig = {
  testDir: './e2e',
  forbidOnly: !!process.env['CI'],
  webServer: {
    command: 'npm run start',
    port: 4200,
    reuseExistingServer: !process.env['CI'],
  },
};

export default config;