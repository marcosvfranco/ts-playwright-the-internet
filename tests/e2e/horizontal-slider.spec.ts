import { test, expect } from '@playwright/test';

test.describe('when opening slider page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/horizontal_slider');
  })

  test('then the slider is moved to a defined position', async ({ page }) => {
    const slider = page.locator('div.sliderContainer > input');
    await slider.fill('1.5');
    expect(await page.locator('span#range').textContent()).toEqual('1.5');
  });
})