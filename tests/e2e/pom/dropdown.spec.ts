import { test } from '@playwright/test';
import { DropdownPage } from '../../page-objects/DropdownPage'

test.describe('when opening dropdown page', () => {

  test('and a dropdown is displayed, an item of the dropdown is selected ', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);
    await dropdownPage.visit();
    await dropdownPage.verifyDropdownBehavior();
  });

})