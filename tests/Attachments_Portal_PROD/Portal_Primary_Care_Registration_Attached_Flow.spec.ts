import { test, expect } from '@playwright/test';


test('Can_Register_Person_In_My_Care_DANNY_BELLMAN_And_LAWERENCE_MENZINES_for_Attached_in_Portal', async ({page, browser }) => {
    await page.goto('https://hcr.healthlinkbc.ca/s/');
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
    await page.getByRole('button', { name: 'Continue' }).click();
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
    await page.getByLabel('Preferred name (optional)').fill('"Danny_Bellman" Playwright Preferred Name');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowRight');
    await page.getByLabel('Preferred name (optional)').fill('"Danny_Bellman" Playwright Preferred Name');
    await page.getByRole('textbox', { name: 'Email address', exact: true }).click();
    await page.getByRole('textbox', { name: 'Email address', exact: true }).click();
    await page.getByRole('textbox', { name: 'Email address', exact: true }).fill('igor.emelyanov@phsa.ca');
    await page.getByRole('textbox', { name: 'Confirm email address' }).click();
    await page.getByRole('textbox', { name: 'Confirm email address' }).click();
    await page.getByRole('textbox', { name: 'Confirm email address' }).fill('igor.emelyanov@phsa.ca');
    await page.getByRole('textbox', { name: 'Mobile phone number' }).click();
    await page.getByRole('textbox', { name: 'Mobile phone number' }).fill('(778) 879-3811_');
    await page.getByRole('combobox', { name: 'Communication preference' }).click();
    await page.getByRole('combobox', { name: 'Communication preference' }).click();
    await page.getByRole('combobox', { name: 'Communication preference' }).click();
    // AI Click on the "Phone" option
    await page.click('omnistudio-omniscript-select[data-omni-key="communicationPref"] .slds-listbox__option[data-value="Phone"]');
    //await page.locator('[id="\\32 -410"]').getByText('Phone').click();
    await page.getByRole('textbox', { name: 'Alternate phone number (' }).click();
    await page.getByRole('textbox', { name: 'Alternate phone number (' }).fill('(778) 879-3822_');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('group').locator('label').filter({ hasText: 'Yes' }).locator('span').first().click();
    // AI Click on the input component
    await page.click('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input');
    //await page.locator('#input107-513').click();
    //AI Enter Provider preferences and enter "AI Kurdecha Selector"
    await page.fill('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input', 'AI for "Danny_Bellman" Kurdecha Selector');
    //await page.locator('#input107-513').fill('Kurdecha Family Doctor');
    // AI Click on the input component
    await page.click('omnistudio-omniscript-text[data-omni-key="practitionerLocation"] input');
    //await page.locator('#input111-523').click();
    // AI Enter City
    await page.fill('omnistudio-omniscript-text[data-omni-key="practitionerLocation"] input', 'Richmond');
    //await page.locator('#input111-523').fill('Richmond');
    await page.locator('label').filter({ hasText: 'Current family doctor or nurse practitioner is retiring' }).locator('span').first().click();
    // AI Enter "How far from Home"
    await page.click('omnistudio-omniscript-select[data-omni-key="distanceForPractitioner"] input');
    //await page.locator('#comboboxId-550').click();
    await page.getByText('Less than 20 km').click();
    // AI Enter "Gender"
    await page.click('omnistudio-omniscript-select[data-omni-key="genderForPractitioner"] input');
    //await page.locator('#comboboxId-560').click();
    await page.getByText('Female').click();
    await page.locator('fieldset').filter({ hasText: /^YesNo$/ }).locator('span').nth(1).click();
    // AI Enter "What Language"
    await page.click('omnistudio-omniscript-typeahead-block[data-omni-key="translatorLanguage-Block"] input');
    //await page.locator('#inputId-578').click();
    await page.fill('omnistudio-omniscript-typeahead-block[data-omni-key="translatorLanguage-Block"] input', 'Polis');
    //await page.locator('#inputId-578').fill('Polis');
    await page.getByText('Polish').click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.locator('label').filter({ hasText: 'Major surgery' }).locator('span').first().click();
    await page.locator('label').filter({ hasText: 'I am pregnant or have recently given birth' }).locator('span').first().click();
    await page.locator('label').filter({ hasText: 'Sickle Cell Disease' }).locator('span').first().click();
    await page.getByRole('button', { name: 'Continue' }).click();
    ////await page.getByRole('button', { name: 'Submit registration' }).click();
    ////await page.getByText('Danny Bellman is now on the').click();
    ////await page.getByRole('article').click();
    ////await page.getByText('Each community has a team').click();
    ////await page.getByRole('heading', { name: 'Successfully registered!' }).click();
   */
   }); 


