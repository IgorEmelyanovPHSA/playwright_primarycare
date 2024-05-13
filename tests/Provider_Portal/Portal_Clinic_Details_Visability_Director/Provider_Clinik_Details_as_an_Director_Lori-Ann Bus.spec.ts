import { test, expect } from '@playwright/test';

test('Can_see_Clinic_Details_as_an_Director', async ({ page }) => {
  await page.goto('https://healthbc--hlthbcqax.sandbox.my.site.com/providerclinicportal/s/');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('director6@phsa.ca.hlthbcqax');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('PAS@1234');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByLabel('Search all clinics in BC').click();
  await page.getByPlaceholder('Enter Clinic Name').click();
  await page.getByPlaceholder('Enter Clinic Name').fill('cast');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('CASTLEGAR MED ASSOCIATES').click();
  await page.getByRole('tab', { name: 'Clinic Details' }).click();
  await page.getByText('839 Appartment 9674-Clearwater ST NW').first().click();
});