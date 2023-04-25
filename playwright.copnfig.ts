import { PlaywrightTestConfig } from '@playwright/test'
import path from 'path'

const config: PlaywrightTestConfig = {
  timeout: 30 * 1000,
  testDir: path.join(__dirname, 'e2e')
}

export default config
