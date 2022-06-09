import { APIRequestContext, APIResponse, expect, Locator, Page } from '@playwright/test';

export class BrokenImagesPage {
    readonly request: APIRequestContext;
    readonly page: Page;
    readonly imagesList: Locator;
    readonly imagesCount: number;
    readonly getRequestImage: APIRequestContext;
    readonly url: string = 'https://the-internet.herokuapp.com/broken_images';


    constructor (page: Page, request: APIRequestContext) {
        this.request = request
        this.page = page;
        this.imagesList = page.locator('.example > img');
    }

    async visit() {
        await this.page.goto(this.url);
    }

    async getImagesCount() {
        return await this.imagesList.count();
    }

    async verifyBrokenAndValidImages() {
        for(let i = 0; i < await this.getImagesCount(); i++) {
            const imagePath: string = await this.imagesList.nth(i).getAttribute('src');
            const response: APIResponse = await this.request.get(`https://the-internet.herokuapp.com/${imagePath}`);
            if((imagePath == 'asdf.jpg' || imagePath == 'hjkl.jpg')) {
              await expect(await response.status()).toBe(404);
            } else {
              await expect(await response.status()).toBe(200);
            }
          }
    }
}