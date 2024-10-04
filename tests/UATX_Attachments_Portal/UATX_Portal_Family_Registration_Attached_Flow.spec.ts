import { test, expect } from '@playwright/test';


test('Can_do_UATX_Family_GORDON_KRULL_And_KELVIN_LEMOINE_Member_Registration_Attached_in_Portal', async ({page, browser }) => {
  //UATX
  await page.goto('https://healthbc--hlthbcuatx.sandbox.my.site.com/primarycarepatientregistration/s/');

  ///////////1. Register Gordon Krull, FIRST  ///////////////
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Register myself or my family' }).click();
  await page.getByLabel('First name', { exact: true }).click();
  await page.getByLabel('First name', { exact: true }).fill('Gordon');
  await page.getByLabel('Last name', { exact: true }).click();
  await page.getByLabel('Last name', { exact: true }).fill('Krull');
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).fill('9873026929');
  await page.getByPlaceholder('MM').click();
  await page.getByPlaceholder('MM').fill('06');
  await page.getByPlaceholder('DD').click();
  await page.getByPlaceholder('DD').fill('29');
  await page.getByPlaceholder('YYYY').click();
  await page.getByPlaceholder('YYYY').fill('1990');
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
  await page.getByRole('button', { name: 'Continue' }).click();


  //await page.getByText('Thank you, Gordon Krull is already registered.').click();
  //AI Click on the "There was an issue with the information entered." text
  /////await page.click('omnistudio-omniscript-text-block[data-omni-key="TextBlock4"] h1.head');
  //await page.getByText('The information entered does not match provincial health records.').click();

  /*
  ///////await page.getByRole('combobox', { name: 'Street address' }).click();
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
  await page.getByRole('textbox', { name: 'Email address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email address', exact: true }).fill('igor.emelyanov@phsa.ca');
  await page.getByRole('textbox', { name: 'Confirm email address' }).click();
  await page.getByRole('textbox', { name: 'Confirm email address' }).fill('igor.emelyanov@phsa.ca');
  await page.getByRole('textbox', { name: 'Mobile phone number' }).click();
  await page.getByRole('textbox', { name: 'Mobile phone number' }).fill('(555)555-5555');
  await page.getByRole('combobox', { name: 'Communication preference' }).click();
  await page.click('omnistudio-omniscript-select[data-omni-key="communicationPref"] .slds-listbox__option[data-value="Email"]');
  //await page.locator('[id="\\31 -414"]').getByText('Email').click();
  await page.getByRole('textbox', { name: 'Alternate phone number (' }).click();
  await page.getByRole('textbox', { name: 'Alternate phone number (' }).fill('(777) 777-7777');
  await page.getByRole('button', { name: 'Continue' }).click();
  //Do you currently have a family doctor or nurse practitioner?
  await page.getByRole('group').locator('label').filter({ hasText: 'No' }).locator('span').first().click();
  //What is your most recent family doctor?
  await page.click('omnistudio-omniscript-text[data-omni-key="mostRecentPractitionerName"] input');
  //await page.locator('#input111-519').click();
  await page.fill('omnistudio-omniscript-text[data-omni-key="mostRecentPractitionerName"] input', 'AI BOT DO NOT USE Kurdecha PLAYWRIGHT most Recent Family Doctor');
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
  await page.fill('omnistudio-omniscript-typeahead-block[data-omni-key="translatorLanguage-Block"] input', 'Quebec Sign Language');
  //await page.locator('#inputId-582').fill('German');
  await page.getByText('Quebec Sign Language', { exact: true }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  //Health Questionary
  await page.locator('label').filter({ hasText: 'I was just discharged from hospital and require follow up' }).locator('span').first().click();
  await page.locator('label').filter({ hasText: 'Stroke or Transient Ischemic Attack' }).locator('span').first().click();
  await page.locator('label').filter({ hasText: 'Heart Attack, Heart Disease, Irregular Heartbeat, Angina, Heart Failure or High Blood Pressure' }).locator('span').first().click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Submit registration' }).click();
  await page.getByText('Gordon Krull, you are now on the Health Connect Registry.').click();
  await page.getByRole('heading', { name: 'Successfully registered!' }).click();

  
  ///////////2. Register Family Member "Kelvin Lemoine"  -> Gordon's DAD /////////////////////////
  
  await page.getByRole('button', { name: 'Add a family member' }).click();
  await page.getByRole('combobox', { name: 'This person’s relationship to' }).click();
  await page.getByText('My parent').click();
  await page.getByLabel('First name', { exact: true }).click();
  await page.getByLabel('First name', { exact: true }).fill('Kelvin');
  await page.getByLabel('Last name', { exact: true }).click();
  await page.getByLabel('Last name', { exact: true }).fill('Lemoine');
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).fill('9873026904');
  await page.getByPlaceholder('MM').click();
  await page.getByPlaceholder('MM').fill('10');
  await page.getByPlaceholder('DD').click();
  await page.getByPlaceholder('DD').fill('30');
  await page.getByPlaceholder('YYYY').click();
  await page.getByPlaceholder('YYYY').fill('1943');
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('Preferred name (optional)').click();
  await page.getByLabel('Preferred name (optional)').fill('DONOTUSE');
  await page.getByRole('button', { name: 'Continue' }).click();
  //Do you currently have a family doctor or nurse practitioner?
  await page.getByRole('group').locator('label').filter({ hasText: 'Yes' }).locator('span').first().click();
  //What is the name of your current family doctor or nurse practitioner?
  await page.click('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input');
  await page.fill('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input', 'AI BOT DO NOT USE Kurdecha PLAYWRIGHT most Recent Family Doctor');
  //await page.locator('#input235-1294').click();
  //await page.locator('#input235-1294').fill('BOT DO NOT USE LeemonCitrus Prefferd Name - Gordon"s Dad'');
  //Which town or city is your current family doctor or nurse practitioner located in?
  await page.click('omnistudio-omniscript-text[data-omni-key="practitionerLocation"] input');
  await page.fill('omnistudio-omniscript-text[data-omni-key="practitionerLocation"] input', 'Fleetwood');
  //await page.locator('#input239-1304').click();
  //await page.locator('#input239-1304').fill('Fleetwood');
  //Why are you looking for a family doctor or nurse practitioner?
  await page.locator('label').filter({ hasText: 'Current family doctor or nurse practitioner is moving out of town or city' }).locator('span').first().click();
  //How far from your home are you able to travel to see a family doctor or nurse practitioner?
  await page.click('omnistudio-omniscript-select[data-omni-key="distanceForPractitioner"] input');
  await page.click('omnistudio-omniscript-select[data-omni-key="distanceForPractitioner"] .slds-listbox__option[data-value="Less than 20 km"]');
  //await page.locator('#comboboxId-1331').click();
  //await page.getByText('Less than 20 km').click();
  //Do you need a translator?
  await page.locator('fieldset').filter({ hasText: /^YesNo$/ }).locator('span').nth(1).click();
  //In what language do you need a translator?
  await page.click('omnistudio-omniscript-typeahead-block[data-omni-key="translatorLanguage-Block"] input');
  await page.fill('omnistudio-omniscript-typeahead-block[data-omni-key="translatorLanguage-Block"] input', 'Banso - from Cameroon. Lamso');
  //await page.locator('#inputId-1359').click();
  //await page.locator('#inputId-1359').fill('Banso - from Cameroon. Lamso'');
  await page.getByText('Banso - from Cameroon. Lamso').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  //Health Conserns
  await page.locator('label').filter({ hasText: 'I am worried about my living situation, finances, or being able to feed my family nutritious food' }).locator('span').first().click();
  await page.locator('label').filter({ hasText: 'I am pregnant or have recently given birth' }).locator('span').first().click();
  //Health Diagnoses
  await page.locator('label').filter({ hasText: 'Eating Disorder' }).locator('span').first().click();
  await page.locator('label').filter({ hasText: 'Stroke or Transient Ischemic Attack' }).locator('span').first().click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Submit registration' }).click();
  await page.getByText('Kelvin Lemoine is now on the Health Connect Registry.').click();
  await page.getByRole('heading', { name: 'Successfully registered!' }).click();
  */
}); 


