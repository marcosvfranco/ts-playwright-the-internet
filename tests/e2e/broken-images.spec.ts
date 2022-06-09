import { test, expect } from '@playwright/test';

test.describe('when opening broken images page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/broken_images');
  })

  test('then a page with 2 broken images and 1 correct image is displayed', async ({ page, request }) => {
    const imagesList = await page.locator('.example > img');
    const imagesCount = await imagesList.count();
    let imagePath: string;
    let response;
    
    for(let i = 0; i < imagesCount; i++) {
      imagePath = await imagesList.nth(i).getAttribute('src');
      response = await request.get(`https://the-internet.herokuapp.com/${imagePath}`);
      if((imagePath == 'asdf.jpg' || imagePath == 'hjkl.jpg')) {
        await expect(await response.status()).toBe(404);
      } else {
        await expect(await response.status()).toBe(200);
      }
    }
  });

})