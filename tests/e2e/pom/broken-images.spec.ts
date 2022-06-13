import { test } from '@playwright/test';
import { BrokenImagesPage } from '../../../page-objects/BrokenImagesPage';
test.describe('<POM> when opening broken images page', () => {

  test('then a page with 2 broken images and 1 correct image is displayed', async ({ page, request }) => {
    const brokenImagesPage = new BrokenImagesPage(page, request);
    await brokenImagesPage.visit();
    await brokenImagesPage.verifyBrokenAndValidImages();
  });
})