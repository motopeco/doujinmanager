import { test, expect } from '@playwright/test'

test('foobar', async ({ page }) => {
  await page.goto('http://localhost:3000')
})
