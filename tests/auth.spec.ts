import { test } from '../configs/customTest';
import { expect } from '@playwright/test';

test.describe('when open a page with basic auth', async () => {

    test.beforeEach(async ({ authPage }) => {
        await authPage.goto('https://the-internet.herokuapp.com/basic_auth');
    })

    test('then the page should be displayed after the authentication', async ({ authPage }) => {
        await expect(authPage.locator('text=Congratulations! You must have the proper credentials.')).toBeVisible();
    })
})
