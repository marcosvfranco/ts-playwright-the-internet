import { test, expect } from '@playwright/test';

test.describe('when opening index page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
  })

  test('then a page is loaded with a h1 title and h2 subtitle', async ({ page }) => {
    const title = page.locator('h1.heading');
    const subTitle = page.locator('h2 >> text=Available Examples');
    await expect(title).toHaveText('Welcome to the-internet');
    await expect(subTitle).toBeVisible();
  });

    test('then a list of 44 links is displayed', async({ page }) => {
      const linkList = await page.locator('div#content > ul > li > a');
      for(let i = 0; i < await linkList.count(); i++) {
        expect(await linkList.nth(i).getAttribute('href')).not.toBeNull();
      }
      await expect(linkList).toHaveCount(44);
  })
})