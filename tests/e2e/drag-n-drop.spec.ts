import { test, expect } from '@playwright/test';

test.describe('when opening drag n drop page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
  })

  test('then an item is drag and dropped in another target', async ({ page }) => {
    await page.dragAndDrop('div#column-a', 'div#column-b');
    expect(await page.locator('#column-a > header').textContent()).toEqual('B');

    await page.dragAndDrop('div#column-a', 'div#column-b');
    expect(await page.locator('#column-a > header').textContent()).toEqual('A');
  });

})