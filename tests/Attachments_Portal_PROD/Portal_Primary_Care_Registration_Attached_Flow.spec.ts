import { test, expect } from '@playwright/test';


test('Can_Register_Person_In_My_Care_LAWERENCE_MENZIES_for_Attached_in_Portal', async ({page, browser }) => {
  //PROD
  await page.goto('https://healthbc.my.site.com/primarycarepatientregistration/s/');
  //QAX
  //await page.goto('https://healthbc--hlthbcqax.sandbox.my.site.com/primarycarepatientregistration/s/');
  //UATX
  //await page.goto('https://healthbc--hlthbcuatx.sandbox.my.site.com/primarycarepatientregistration/s/');

  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('heading', { name: 'I am registering a person in' }).click();
  await page.getByRole('button', { name: 'Register a person in my care' }).click();
  await page.getByRole('combobox', { name: 'Your relationship to this' }).click();
  await page.getByText('Legal guardian', { exact: true }).click();
  await page.getByLabel('Your first and last name').click();
  await page.getByLabel('Your first and last name').fill('DO NOT USE BOTLegalGuardian');
  await page.getByLabel('First name', { exact: true }).click();
  await page.getByLabel('First name', { exact: true }).fill('Lawerence');
  await page.getByLabel('Last name', { exact: true }).click();
  await page.getByLabel('Last name', { exact: true }).fill('Menzies');
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).fill('9873026889');
  await page.getByPlaceholder('MM').click();
  await page.getByPlaceholder('MM').fill('07');
  await page.getByPlaceholder('DD').click();
  await page.getByPlaceholder('DD').fill('21');
  await page.getByPlaceholder('YYYY').click();
  await page.getByPlaceholder('YYYY').fill('1977');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();

  //await page.getByText('Thank you, Lawerence Menzies is already registered.').click();
  //AI Click on the "There was an issue with the information entered." text
  await page.click('omnistudio-omniscript-text-block[data-omni-key="TextBlock4"] h1.head');
  //await page.getByText('The information entered does not match provincial health records.').click();

  /*
  await page.getByRole('combobox', { name: 'Street address' }).click();
  await page.getByRole('combobox', { name: 'Street address' }).fill('15409 92 Ave');
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).fill('Fleetwood');
  await page.getByRole('combobox', { name: 'Province' }).click();
  await page.getByText('BC', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Postal code' }).click();
  await page.getByRole('textbox', { name: 'Postal code' }).fill('V3R 5V9');
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).fill('Fleetwood');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Preferred name (optional)').click();
  await page.getByLabel('Preferred name (optional)').fill('DONOTUSE');
  await page.getByRole('textbox', { name: 'Primary contact name' }).click();
  await page.getByRole('textbox', { name: 'Primary contact name' }).fill('BOT DO NOT USE PLAYWRIGHT PrimaryContactName');
  await page.getByRole('textbox', { name: 'Email address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email address', exact: true }).fill('igor.emelyanov@phsa.ca');
  await page.getByRole('textbox', { name: 'Confirm email address' }).click();
  await page.getByRole('textbox', { name: 'Confirm email address' }).fill('igor.emelyanov@phsa.ca');
  await page.getByRole('textbox', { name: 'Mobile phone number' }).click();
  await page.getByRole('textbox', { name: 'Mobile phone number' }).fill('(444) 444-4444');
  await page.getByRole('combobox', { name: 'Communication preference' }).click();
  await page.click('omnistudio-omniscript-select[data-omni-key="communicationPref"] .slds-listbox__option[data-value="Email"]');
  //await page.locator('[id="\\31 -414"]').getByText('Email').click();
  await page.getByRole('textbox', { name: 'Alternate phone number (' }).click();
  await page.getByRole('textbox', { name: 'Alternate phone number (' }).fill('(888) 888-8888');
  await page.getByRole('button', { name: 'Continue' }).click();
  //Do you currently have a family doctor or nurse practitioner?
  await page.getByRole('group').locator('label').filter({ hasText: 'Yes' }).locator('span').first().click();
  //What is the name of your current family doctor or nurse practitioner?
  await page.click('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input');
  await page.fill('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input', 'AI BOT DO NOT USE Kurdecha PLAYWRIGHT Current Family Doctor');
  //await page.locator('#input109-517').click();
  //await page.locator('#input109-517').fill('AI BOT DO NOT USE Kurdecha PLAYWRIGHT Current Family Doctor');
  //Which town or city is your current family doctor or nurse practitioner located in?
  await page.click('omnistudio-omniscript-text[data-omni-key="practitionerLocation"] input');
  await page.fill('omnistudio-omniscript-text[data-omni-key="practitionerLocation"] input', 'Fleetwood');
  //await page.locator('#input113-527').click();
  //await page.locator('#input113-527').fill('Fleetwood');
  //Why are you looking for a family doctor or nurse practitioner?
  await page.locator('label').filter({ hasText: 'Current family doctor or nurse practitioner is moving out of town or city' }).locator('span').first().click();
  //How far from your home are you able to travel to see a family doctor or nurse practitioner?
  await page.click('omnistudio-omniscript-select[data-omni-key="distanceForPractitioner"] input');
  await page.click('omnistudio-omniscript-select[data-omni-key="distanceForPractitioner"] .slds-listbox__option[data-value="Less than 50 km"]');
  //await page.locator('#comboboxId-554').click();
  //await page.getByText('Less than 50 km').click();
  //Doctor's Gender
  await page.click('omnistudio-omniscript-select[data-omni-key="genderForPractitioner"] input')
  //await page.locator('#comboboxId-564').click();
  await page.getByText('Female').click();
  //Do you need a translator?
  await page.locator('fieldset').filter({ hasText: /^YesNo$/ }).locator('span').nth(1).click();
  // "What Language"
  await page.click('omnistudio-omniscript-typeahead-block[data-omni-key="translatorLanguage-Block"] input');
  await page.fill('omnistudio-omniscript-typeahead-block[data-omni-key="translatorLanguage-Block"] input', 'Filipino Sign Language');
  //await page.locator('#inputId-582').click();
  //await page.locator('#inputId-582').fill('Filipino Sign Language');
  await page.getByText('Filipino Sign Language').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('label').filter({ hasText: 'I am pregnant or have' }).locator('span').first().click();
  await page.locator('label').filter({ hasText: 'Seizures or Epilepsy' }).locator('span').first().click();
  await page.getByRole('button', { name: 'Continue' }).click();
  ///await page.getByRole('button', { name: 'Submit registration' }).click();
  ///await page.getByText('Lawerence Menzies is now on the Health Connect Registry.').click();
  ///await page.getByRole('heading', { name: 'Successfully registered!' }).click();
  ///await page.getByRole('button', { name: 'Start a new registration' }).click();
 */
}); 


