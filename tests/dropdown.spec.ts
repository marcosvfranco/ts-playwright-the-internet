import { test, expect } from '@playwright/test';

test.describe('when opening dropdown page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
  })

  test('and a dropdown is displayed, an item of the dropdown is selected ', async ({ page }) => {
    // We can implement this test by different ways
    // One of them is defining a locator, and after that using
    // the function page.selectOption()
    const dropdown = page.locator('select#dropdown')
    await dropdown.selectOption({ index: 1})
    
    expect(await dropdown.locator('option[value="1"]'))
        .toHaveAttribute('selected', 'selected');

    // There is another way to select an option that do the action
    // using page.selectOption() inserting the selector and the options as parameters

    await page.selectOption('select#dropdown', { index: 2});

    expect(await dropdown.locator('option[value="2"]'))
        .toHaveAttribute('selected', 'selected');

  });

})