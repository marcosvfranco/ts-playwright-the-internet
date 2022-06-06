import { chromium } from 'playwright';

class PageDriver {
    private chromium;
    
    constructor() {
        this.chromium = chromium;
    }

    async newBrowser() {
        return await this.chromium.launch({
            headless: false
        });
    }

    async newContext(browser, username, password){
        return await browser.newContext({
            httpCredentials: {
                username,
                password
            },
        });
    }

    async closeBroswer(browser) {
        browser.close();
    }
}

module.exports = PageDriver;