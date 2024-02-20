import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://healthbc--hlthbcqax.sandbox.my.site.com/primarycarepatientregistration/s/');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Register a person in my care' }).click();
  await page.getByRole('combobox', { name: 'Your relationship to this' }).click();
  await page.getByText('Case manager').click();
  await page.getByLabel('Your first and last name').click();
  await page.getByLabel('Your first and last name').fill('Igor Emelyanov CAse MAnager');
  await page.getByLabel('Your first and last name').press('ArrowLeft');
  await page.getByLabel('Your first and last name').press('ArrowLeft');
  await page.getByLabel('Your first and last name').press('ArrowLeft');
  await page.getByLabel('Your first and last name').press('ArrowLeft');
  await page.getByLabel('Your first and last name').click();
  await page.getByLabel('Your first and last name').click();
  await page.getByLabel('First name', { exact: true }).click();
  await page.getByLabel('First name', { exact: true }).click();
  await page.getByLabel('First name', { exact: true }).fill('Kenton');
    await page.getByLabel('Last name', { exact: true }).click();
  await page.getByLabel('Last name', { exact: true }).fill('Troup');
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).fill('9873010088');
  await page.locator('#content-167').click();
  await page.getByPlaceholder('MM').click();
  await page.getByPlaceholder('MM').fill('12');
  await page.getByPlaceholder('DD').click();
  await page.getByPlaceholder('DD').fill('05');
  await page.getByPlaceholder('YYYY').click();
  await page.getByPlaceholder('YYYY').fill('1959');
  await page.getByPlaceholder('DD').click();
  //await page.getByRole('button', { name: 'Continue' }).click();
  //await page.getByRole('button', { name: 'Continue' }).click();
  
});