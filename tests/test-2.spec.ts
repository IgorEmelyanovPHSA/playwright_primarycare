import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://healthbc--hlthbcqax.sandbox.my.site.com/primarycarepatientregistration/s/');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Register myself or my family' }).click();
  await page.getByLabel('First name', { exact: true }).click();
  await page.getByLabel('First name', { exact: true }).click({
    button: 'right'
  });
  await page.getByLabel('First name', { exact: true }).fill('Kenton');
  await page.getByLabel('Last name', { exact: true }).click();
  await page.getByLabel('Last name', { exact: true }).fill('Troup');
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).fill('9873010088');
  await page.getByPlaceholder('MM').click();
  await page.getByPlaceholder('MM').dblclick();
  await page.getByPlaceholder('MM').click({
    button: 'right'
  });
  await page.getByPlaceholder('MM').fill('12');
  await page.getByPlaceholder('DD').click();
  await page.getByPlaceholder('DD').dblclick();
  await page.getByPlaceholder('DD').click({
    button: 'right'
  });
  await page.getByPlaceholder('DD').fill('05');
  await page.getByPlaceholder('YYYY').click();
  await page.getByPlaceholder('YYYY').dblclick();
  await page.getByPlaceholder('YYYY').click({
    button: 'right'
  });
  await page.getByPlaceholder('YYYY').fill('1959');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('combobox', { name: 'Street address' }).click();
  await page.getByRole('combobox', { name: 'Street address' }).fill('309-7631 Francis Rd');
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).click({
    button: 'right'
  });
  await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
  await page.getByRole('combobox', { name: 'Province' }).click();
  await page.getByRole('combobox', { name: 'Province' }).click();
  await page.getByRole('combobox', { name: 'Province' }).click();
  await page.getByText('BC', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Postal code' }).click();
  await page.getByRole('textbox', { name: 'Postal code' }).click({
    button: 'right'
  });
  await page.getByRole('textbox', { name: 'Postal code' }).fill('___ ___V6Y 1A3');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Preferred name (optional)').click();
  await page.getByLabel('Preferred name (optional)').fill('Preferred Kenton');
  await page.getByRole('textbox', { name: 'Email address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email address', exact: true }).click({
    button: 'right'
  });
  await page.getByRole('textbox', { name: 'Email address', exact: true }).fill('igor.emelyanov@phsa.ca');
  await page.getByRole('textbox', { name: 'Email address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Confirm email address' }).click({
    button: 'right'
  });
  await page.getByRole('textbox', { name: 'Confirm email address' }).fill('igor.emelyanov@phsa.ca');
  await page.getByRole('textbox', { name: 'Mobile phone number' }).click();
  await page.getByRole('textbox', { name: 'Mobile phone number' }).click({
    button: 'right'
  });
  await page.getByRole('textbox', { name: 'Mobile phone number' }).fill('(778) 879-1111_');
  await page.getByRole('combobox', { name: 'Communication preference' }).click();
  await page.getByRole('combobox', { name: 'Communication preference' }).click();
  await page.getByRole('combobox', { name: 'Communication preference' }).click();
  await page.locator('[id="\\32 -400"]').getByText('Phone').click();
  await page.getByRole('textbox', { name: 'Alternate phone number (' }).click();
  await page.getByRole('textbox', { name: 'Alternate phone number (' }).fill('(778) 879-2222_');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('group').locator('label').filter({ hasText: 'Yes' }).locator('span').first().click();
  await page.locator('#input103-490').click();
  await page.locator('#input103-490').fill('Kurdecha');
  await page.locator('#input107-500').click();
  await page.locator('#input107-500').fill('Richmond');
  await page.locator('label').filter({ hasText: 'Moving out of the town or' }).locator('span').first().click();
  await page.locator('#comboboxId-527').click();
  await page.getByText('Less than 5 km').click();
  await page.locator('#comboboxId-537').click();
  await page.getByText('Female').click();
  await page.locator('fieldset').filter({ hasText: /^YesNo$/ }).locator('span').nth(1).click();
  await page.locator('#inputId-555').click();
  await page.locator('#inputId-555').fill('bulgari');
  await page.getByText('Bulgarian').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('label').filter({ hasText: 'Major surgery (stents, heart' }).locator('span').first().click();
  await page.locator('label').filter({ hasText: 'Chronic infectious diseases,' }).locator('span').first().click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Submit registration' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('heading', { name: 'Successfully registered!' }).click();
  await page.getByRole('button', { name: 'Add a family member' }).click();
  await page.getByRole('heading', { name: 'Information' }).click();
});