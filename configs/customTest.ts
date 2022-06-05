import { test as base } from '@playwright/test';

export type Options = { defaultItem: string };
type Account = {
    username: string,
    password: string
};

export const test = base.extend({
    // this is a simple fixture created to auth the browser with some credentials 
    // in a page that have basic Auth enabled
    authPage: async ({ browser }, use) => {
      // Sign in with our account.
      const account: Account = {
          username: 'admin',
          password: 'admin'
      }
      const { username, password } = account;
      const authContext = await browser.newContext({
          httpCredentials: {
              username,
              password
          }
      })
      const page = await authContext.newPage(); 
      // Use signed-in page in the test.
      await use(page);
    },
  });
  export { expect } from '@playwright/test';
  