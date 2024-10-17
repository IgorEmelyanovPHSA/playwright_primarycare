import { test, expect } from '@playwright/test';

test('Can_see_Login_Page_click_Login_button', async ({ page }) => {
  await page.goto('https://healthbc--hlthbcqax.sandbox.my.salesforce.com/');
  await page.getByLabel('Username').fill('igor.emelyanov@phsa.ca.hlthbcqax');
  await page.getByLabel('Password').fill('Technology1990!!!!!!@');
  //page.screenshot({ path: 'screenshot01.png' });
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  //await page.getByLabel('Show Navigation Menu').click();
  //await page.getByRole('menuitem', { name: 'Create New Registration' }).click();
  //await page.locator('c-radio-group span').nth(1).click();
  //await page.locator('c-input span').first().click();
  //await page.getByRole('button', { name: 'Continue' }).click();
});