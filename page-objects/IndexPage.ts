import { expect, Locator, Page } from '@playwright/test';

export class IndexPage {
    readonly page: Page;
    readonly getTitle: Locator;
    readonly getSubtitle: Locator;
    readonly getLinkList: Locator;
    readonly expectedTitle: string = 'Welcome to the-internet';
    readonly url: string = 'https://the-internet.herokuapp.com/';

    constructor (page: Page) {
        this.page = page;
        this.getTitle = page.locator('h1.heading');
        this.getSubtitle = page.locator('h2 >> text=Available Examples');
        this.getLinkList = page.locator('div#content > ul > li > a');
    }

    async visit() {
        await this.page.goto(this.url);
    }

    async verifyTitleAndSubTitle() {
        await expect(await this.getTitle).toHaveText('Welcome to the-internet');
        await expect(await this.getSubtitle).toBeVisible();
    }

    async verifyLinkList() {
        for(let i = 0; i < await this.getLinkList.count(); i++) {
            expect(await this.getLinkList.nth(i).getAttribute('href')).not.toBeNull();
          }
          await expect(this.getLinkList).toHaveCount(44);
    }
}