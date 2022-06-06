import { test, expect } from '@playwright/test';

test.describe('when opening key_presses page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/key_presses');
  })

  test('and an input is displayed, so something is typed and registered in the page', async ({ page }) => {

    const input = page.locator('input#target');
    const characterToBeTyped = 'A';
    await input.type(characterToBeTyped);

    await expect(page.locator('#result')).toHaveText(`You entered: ${characterToBeTyped}`);
  });

})