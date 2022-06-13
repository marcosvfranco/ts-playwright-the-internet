import { test } from '@playwright/test';
import { IndexPage } from '../../../page-objects/IndexPage';

test.describe('<POM> when opening index page', () => {

  test('then a page is loaded with a h1 title and h2 subtitle', async ({ page }) => {
    const indexPage: IndexPage = new IndexPage(page);
    await indexPage.visit();
    await indexPage.verifyTitleAndSubTitle();
  });

  test('then a list of 44 links is displayed', async({ page }) => {
    const indexPage: IndexPage = new IndexPage(page);
    await indexPage.visit();
    await indexPage.verifyLinkList();
  })
})