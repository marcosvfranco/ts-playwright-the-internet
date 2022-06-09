import { expect, Locator, Page } from '@playwright/test';

export class DropdownPage {
    readonly page: Page;
    readonly getDropdown: Locator;
    readonly url: string = 'https://the-internet.herokuapp.com/dropdown';

    constructor (page: Page) {
        this.page = page;   
        this.getDropdown = page.locator('select#dropdown')
    }

    async visit() {
        await this.page.goto(this.url);
    }

    async verifyDropdownBehavior() {
        // We can implement this test by different ways
        // One of them is defining a locator, and after that using
        // the function page.selectOption()
        await this.getDropdown.selectOption({ index: 1})
    
        await expect(this.getDropdown.locator('option[value="1"]'))
            .toHaveAttribute('selected', 'selected');
    
        // There is another way to select an option that do the action
        // using page.selectOption() inserting the selector and the options as parameters
        await this.page.selectOption('select#dropdown', { index: 2});

        await expect(this.getDropdown.locator('option[value="2"]'))
            .toHaveAttribute('selected', 'selected');
    }
}