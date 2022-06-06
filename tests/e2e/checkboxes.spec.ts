import { test, expect } from '@playwright/test';

test.describe('when opening checkbox page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
  })

  test('and a list of checkboxes is displayed, the checkboxes are checked and unchecked', async ({ page }) => {
    const checkbox1 = await page.locator('#checkboxes > input >> nth=0');
    const checkbox2 = await page.locator('#checkboxes > input >> nth=1');

    expect(await checkbox1.isChecked()).toBeFalsy();
    expect(await checkbox2.isChecked()).toBeTruthy();

    await checkbox1.check();
    await checkbox2.uncheck();
    expect(await checkbox1.isChecked()).toBeTruthy();
    expect(await checkbox2.isChecked()).toBeFalsy();

  });

})