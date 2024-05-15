import { test, expect } from '@playwright/test';

test('Can_Add_Current_Staff_to_Directors_Clinic_in_Portal', async ({ page }) => {
  ////////////////////
  //1. Manuall in SF Remove Kristine Fisher from Clinic stuff first.
  ///////////////////////////
  
  await page.goto('https://healthbc--hlthbcqax.sandbox.my.site.com/providerclinicportal/s/');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('director6@phsa.ca.hlthbcqax');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('PAS@1234');
  await page.getByRole('button', { name: 'Log in' }).click();
  
  //2. Adding Staff Member "Kristine Fisher" as an Provider to Clinic
  await page.getByLabel('CASTLEGAR MED FAMILY CLINIC').click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByPlaceholder('Search Contacts...').click();
  await page.getByPlaceholder('Search Contacts...').fill('kristine');
  await page.locator('span').filter({ hasText: /^39100$/ }).click();
  await page.getByLabel('System Role - Current').click();
  
  await page.getByText('Provider', { exact: true }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Kristine Fisher | CASTLEGAR').click();
  
  //3. Manage Access -> checkbox "Manage Fasility" for Kristine Fisher in Details.
  await page.getByRole('tab', { name: 'Give Access To' }).click();
  await page.getByRole('tab', { name: 'Details' }).click();
  await page.getByRole('tab', { name: 'Details' }).click();
  await page.getByRole('button', { name: 'Edit Manage Facility' }).click();
  await page.getByLabel('Manage Facility').check();
  await page.getByRole('button', { name: 'Save' }).click();
  
});