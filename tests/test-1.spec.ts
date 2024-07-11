import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.bchealthprovider.ca/s/');
  await page.goto('https://www.bchealthprovider.ca/s/login/?ec=302&startURL=%2Fs%2F');
  /*
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('bella@mail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('PROV@222');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByLabel('Avecina Medical Clinic Do Not').click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByPlaceholder('Search Contacts...').click();
  await page.getByPlaceholder('Search Contacts...').fill('Nolan');
  await page.getByText('Nolan', { exact: true }).click();
  await page.getByRole('combobox', { name: 'System Role' }).click();
  await page.getByRole('option', { name: 'Medical Office Assistant' }).click();
  await page.getByRole('combobox', { name: 'System Role' }).click();
  await page.getByRole('option', { name: 'Director' }).click();
  */
});