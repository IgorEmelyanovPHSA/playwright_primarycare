import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 11'],
});

test('Can_Register_on_iPhone11', async ({ page }) => {
  await page.goto('https://healthbc--hlthbcqax.sandbox.my.site.com/primarycarepatientregistration/s/');
  /////await page.pause();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Register a person in my care' }).click();
  await page.getByLabel('First name', { exact: true }).click();
  await page.getByLabel('First name', { exact: true }).fill('Kenton');
  await page.getByLabel('Last name', { exact: true }).click();
  await page.getByLabel('Last name', { exact: true }).fill('Troup');
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).fill('9873010088');
  await page.getByPlaceholder('MM').click();
  await page.getByPlaceholder('MM').fill('12');
  await page.getByPlaceholder('DD').click();
  await page.getByPlaceholder('DD').fill('05');
  await page.getByPlaceholder('YYYY').click();
  await page.getByPlaceholder('YYYY').fill('1959');
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();

  ////flaky
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('combobox', { name: 'Your relationship to this' }).click();
  await page.getByText('Legal guardian', { exact: true }).click();
  await page.getByLabel('Your first and last name').click();
  await page.getByLabel('Your first and last name').fill('Igor_Legal Gardian');
  await page.getByLabel('Your first and last name').click();
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
  await page.getByLabel('Last name', { exact: true }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  /////await page.locator('(//button[@aria-label="Continue"])[2]').click();
  await page.getByRole('combobox', { name: 'Street address' }).click();
  await page.getByRole('combobox', { name: 'Street address' }).click();
  await page.getByRole('combobox', { name: 'Street address' }).fill('309-7631 Francis Rd');
  await page.getByRole('textbox', { name: 'Postal code' }).click();
  await page.getByRole('textbox', { name: 'Postal code' }).click();
  await page.getByRole('textbox', { name: 'Postal code' }).fill('V6Y 1A3___ ___');
  await page.getByRole('combobox', { name: 'Province' }).click();
  await page.getByText('BC', { exact: true }).click();
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
  await page.getByRole('textbox', { name: 'Postal code' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Primary contact name' }).click();
  await page.getByRole('textbox', { name: 'Primary contact name' }).fill('Igor Gardian Contact Name');
  await page.getByRole('textbox', { name: 'Email address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Confirm email address' }).click();
  await page.getByRole('textbox', { name: 'Confirm email address' }).fill('accountToDelete@phsa.ca');
  
  ////await page.pause();

  await page.getByRole('textbox', { name: 'Email address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email address', exact: true }).fill('accountToDelete@phsa.ca');
  await page.getByRole('textbox', { name: 'Mobile phone number' }).click();
  await page.getByRole('textbox', { name: 'Mobile phone number' }).fill('(778) 789-0000');
  await page.getByRole('combobox', { name: 'Communication preference' }).click();
  await page.locator('[id="\\32 -498"]').getByText('Phone').click();
  await page.getByRole('textbox', { name: 'Alternate phone number (' }).click();
  await page.getByRole('textbox', { name: 'Alternate phone number' }).fill('(778) 789-1111');
  
  ////flaky
  await page.getByRole('button', { name: 'Continue' }).click();
  /////await page.locator('(//button[@aria-label="Continue"])[2]').click();
  await page.getByRole('group').locator('label').filter({ hasText: 'Yes' }).locator('span').first().click();
  await page.locator('#input137-588').click();
  await page.locator('#input137-588').fill('Family Doctor is Kurdecha');
  await page.locator('#input141-598').click();
  await page.locator('#input141-598').fill('NewWestminster');
  await page.locator('label').filter({ hasText: 'Moving out of the town or' }).locator('span').first().click();
  await page.locator('#comboboxId-625').click();
  await page.getByText('Less than 20 km').click();
  await page.locator('#comboboxId-635').click();
  await page.getByText('Female').click();
  await page.locator('fieldset').filter({ hasText: /^YesNo$/ }).locator('span').nth(1).click();
  await page.locator('#inputId-653').click();
  await page.locator('#inputId-653').fill('French');
  await page.getByText('French').click();
  /////await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('(//button[@aria-label="Continue"])[2]').click();
  await page.getByRole('button', { name: 'Submit registration' }).click();
  await page.getByRole('heading', { name: 'Successfully registered!' }).click();
  await page.getByRole('button', { name: 'Start a new registration' }).click();
});