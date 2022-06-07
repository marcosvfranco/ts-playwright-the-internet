import { test, expect } from '@playwright/test';

test.describe('when opening dynamic controls page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
  })

  test('and a checkbox is displayed, them the checkbox is removed asynchronously ', async ({ page }) => {
    const checkbox = await page.locator('#checkbox > input');
    const addRemoveButton = await page.locator('#checkbox-example > button');

    await expect(await checkbox).toBeVisible();

    await addRemoveButton.click();
    await expect(await checkbox).not.toBeVisible();

    await addRemoveButton.click();
    await expect(await page.locator('input#checkbox')).toBeVisible();
  });
})
