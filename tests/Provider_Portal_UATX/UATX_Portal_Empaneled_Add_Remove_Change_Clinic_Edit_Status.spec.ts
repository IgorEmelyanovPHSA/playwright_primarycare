import { test, expect } from '@playwright/test';

test('UATX_Can_Change_Clinic_of_Empaneled_Patient_as_Directors', async ({ page }) => {
  await page.goto('https://healthbc--hlthbcuatx.sandbox.my.site.com/providerclinicportal/s/');
  /*
  await page.locator('#sfdc_username_container div').click();
  await page.getByPlaceholder('Username').fill('director3@phsa.ca.hlthbcuatx');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('PAS@1234');
  await page.getByRole('button', { name: 'Log in' }).click();
  
  await page.getByLabel('My Panel').first().click();
  
  await page.getByRole('menuitem', { name: 'Change Clinic' }).click();
  await page.getByLabel('Select clinics - Current').click();
  await page.getByText('CAPRI MED HOME').click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByLabel('My Panel').nth(1).click();
  await page.getByRole('gridcell', { name: 'MUNCIE' }).locator('lightning-base-formatted-text').click();
*/
});