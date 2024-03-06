import { test, expect } from '@playwright/test';

test('Can_do_Self_Registration_for_Attached_in_Portal', async ({ page }) => {
  // Recording...
await page.goto('https://healthbc--hlthbcqax.sandbox.my.site.com/primarycarepatientregistration/s/');
await page.getByRole('button', { name: 'Next' }).click();
await page.getByRole('button', { name: 'Register myself or my family' }).click();
await page.getByLabel('First name', { exact: true }).click();
await page.getByLabel('First name', { exact: true }).fill('Sandy');
await page.getByLabel('Last name', { exact: true }).click();
await page.getByLabel('Last name', { exact: true }).fill('Prior');
await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
await page.getByLabel('Personal Health Number (PHN)', { exact: true }).fill('9873010063');
await page.getByPlaceholder('MM').click();
await page.getByPlaceholder('MM').fill('03');
await page.getByPlaceholder('DD').click();
await page.getByPlaceholder('DD').fill('01');
await page.getByPlaceholder('YYYY').click();
await page.getByPlaceholder('YYYY').fill('1975');
await page.getByPlaceholder('DD').click();
await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
await page.getByPlaceholder('DD').click();
await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
await page.getByRole('button', { name: 'Continue' }).click();
await page.getByRole('combobox', { name: 'Street address' }).click();
await page.getByRole('combobox', { name: 'Street address' }).fill('307-7631 Francis Rd');
await page.getByRole('textbox', { name: 'Postal code' }).fill('V6Y 1A3');
await page.getByRole('textbox', { name: 'City' }).click();
await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
await page.getByRole('combobox', { name: 'Province' }).click();
await page.getByText('BC', { exact: true }).click();
await page.getByRole('textbox', { name: 'Postal code' }).click();
await page.getByRole('textbox', { name: 'Postal code' }).fill('V6Y 1A3');
await page.locator('#content-251').click();
await page.getByRole('button', { name: 'Continue' }).click();
await page.getByRole('textbox', { name: 'Email address', exact: true }).click();
await page.getByRole('textbox', { name: 'Email address', exact: true }).fill('accountToDelete@phsa.ca');
await page.getByRole('textbox', { name: 'Confirm email address' }).click();
await page.getByRole('textbox', { name: 'Confirm email address' }).fill('accountToDelete@phsa.ca');
await page.getByRole('textbox', { name: 'Mobile phone number' }).click();
await page.getByRole('textbox', { name: 'Mobile phone number' }).fill('7788792222');
await page.getByRole('textbox', { name: 'Alternate phone number (' }).click();
await page.getByRole('textbox', { name: 'Alternate phone number' }).fill('7787893333');
await page.getByRole('combobox', { name: 'Communication preference' }).click();
await page.locator('[id="\\32 -393"]').getByText('Phone').click();
await page.getByRole('button', { name: 'Continue' }).click();
await page.getByRole('group').locator('label').filter({ hasText: 'Yes' }).click();
await page.locator('#input103-483').click();
await page.locator('#input103-483').fill('MyFamilyDoctor Form New West');
await page.locator('#input107-493').click();
await page.locator('#input107-493').fill('NewWest');
await page.locator('label').filter({ hasText: 'Family doctor or nurse practitioner is not accepting additional family members' }).locator('span').first().click();
await page.locator('#comboboxId-520').click();
await page.getByText('Less than 5 km').click();
await page.locator('#comboboxId-530').click();
await page.getByText('Female').click();
await page.locator('label').filter({ hasText: 'Yes' }).nth(1).click();
await page.locator('#inputId-548').click();
await page.locator('#inputId-548').fill('jap');
await page.getByText('Japanese').click();
await page.getByRole('button', { name: 'Continue' }).click();
await page.getByRole('button', { name: 'Submit registration' }).click();
await page.getByRole('heading', { name: 'Successfully registered!' }).click();
await page.getByRole('button', { name: 'Add a family member' }).click();
});