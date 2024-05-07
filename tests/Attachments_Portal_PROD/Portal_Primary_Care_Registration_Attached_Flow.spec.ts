import { test, expect } from '@playwright/test';


test('Can_Register_Person_In_My_Care_DANNY_BELLMAN_And_LAWERENCE_MENZINES_for_Attached_in_Portal', async ({page, browser }) => {
  //PROD
  await page.goto('https://hcr.healthlinkbc.ca/s/');
  //QAX
  //await page.goto('https://healthbc--hlthbcqax.sandbox.my.site.com/primarycarepatientregistration/s/');
  ///////////1. Register Danny Bellman, FIRST  ///////////////
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Register myself or my family' }).click();
  await page.getByLabel('First name', { exact: true }).click();
  await page.getByLabel('First name', { exact: true }).fill('Danny');
  await page.getByLabel('Last name', { exact: true }).click();
  await page.getByLabel('Last name', { exact: true }).fill('Bellman');
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).fill('9873026896');
  await page.getByPlaceholder('MM').click();
  await page.getByPlaceholder('MM').fill('05');
  await page.getByPlaceholder('DD').click();
  await page.getByPlaceholder('DD').fill('28');
  await page.getByPlaceholder('YYYY').click();
  await page.getByPlaceholder('YYYY').fill('1961');
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
  await page.getByRole('button', { name: 'Continue' }).click();

  //await page.getByText('Thank you, Danny Bellman is already registered.').click();
  //AI Click on the "There was an issue with the information entered." text
  //await page.click('omnistudio-omniscript-text-block[data-omni-key="TextBlock4"] h1.head');
  await page.getByText('The information entered does not match provincial health records.').click();
  
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
  await page.getByLabel('Preferred name (optional)').fill('Dannyishka Preferred Name');
  await page.getByRole('textbox', { name: 'Email address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email address', exact: true }).fill('igor.emelyanov@phsa.ca');
  await page.getByRole('textbox', { name: 'Confirm email address' }).click();
  await page.getByRole('textbox', { name: 'Confirm email address' }).fill('igor.emelyanov@phsa.ca');
  await page.getByRole('textbox', { name: 'Mobile phone number' }).click();
  await page.getByRole('textbox', { name: 'Mobile phone number' }).fill('7788791111');
  await page.getByRole('combobox', { name: 'Communication preference' }).click();
  await page.click('omnistudio-omniscript-select[data-omni-key="communicationPref"] .slds-listbox__option[data-value="Email"]');
  //await page.locator('[id="\\31 -414"]').getByText('Email').click();
  await page.getByRole('textbox', { name: 'Alternate phone number (' }).click();
  await page.getByRole('textbox', { name: 'Alternate phone number (' }).fill('(778) 879-2222');
  await page.getByRole('button', { name: 'Continue' }).click();
  //Do you currently have a family doctor or nurse practitioner?
  await page.getByRole('group').locator('label').filter({ hasText: 'No' }).locator('span').first().click();
  //What is your most recent family doctor?
  await page.click('omnistudio-omniscript-text[data-omni-key="mostRecentPractitionerName"] input');
  //await page.locator('#input111-519').click();
  await page.fill('omnistudio-omniscript-text[data-omni-key="mostRecentPractitionerName"] input', 'AI Kurdecha most Recent Family Doctor Selector');
  //await page.locator('#input111-519').fill('Kurdecha Family Doctor');
  await page.click('omnistudio-omniscript-text[data-omni-key="lastPractitionerVisit"] input');
  //await page.locator('#input115-535').click();
  await page.fill('omnistudio-omniscript-text[data-omni-key="lastPractitionerVisit"] input', 'AI 5 years ago last seen :)');
  //await page.locator('#input115-535').fill('5 years ago last seen :)');
  //How far
  await page.click('omnistudio-omniscript-select[data-omni-key="distanceForPractitioner"] input');
  await page.click('omnistudio-omniscript-select[data-omni-key="distanceForPractitioner"] .slds-listbox__option[data-value="Less than 5 km"]');
  //await page.locator('#comboboxId-554').click();
  //await page.getByText('Less than 5 km').click();
  //Doctor's Gender
  await page.click('omnistudio-omniscript-select[data-omni-key="genderForPractitioner"] input')
  //await page.locator('#comboboxId-564').click();
  await page.getByText('Female').click();
  //Do you need a translator?
  await page.locator('fieldset').filter({ hasText: /^YesNo$/ }).locator('span').nth(1).click();
  // "What Language"
  await page.click('omnistudio-omniscript-typeahead-block[data-omni-key="translatorLanguage-Block"] input');
  //await page.locator('#inputId-582').click();
  await page.fill('omnistudio-omniscript-typeahead-block[data-omni-key="translatorLanguage-Block"] input', 'German');
  //await page.locator('#inputId-582').fill('German');
  await page.getByText('German', { exact: true }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  //Health Questionary
  await page.locator('label').filter({ hasText: 'I am pregnant or have' }).locator('span').first().click();
  await page.locator('label').filter({ hasText: 'Stroke or Transient Ischemic' }).locator('span').first().click();
  await page.getByRole('button', { name: 'Continue' }).click();
  
  //await page.getByRole('button', { name: 'Submit registration' }).click();
  //await page.getByText('Danny Bellman, you are now on').click();
  //await page.getByRole('heading', { name: 'Successfully registered!' }).click();
*/
  
  ///////////2. Register Person in My Care "Lawerence Menzies" /////////////////////////




}); 


