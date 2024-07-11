import { test, expect } from '@playwright/test';


test('Can_do_Gow-Cooper_Nipus_Registration_for_Attached_in_Portal', async ({page, browser }) => {
    //await page.goto('https://hcr.healthlinkbc.ca/s/');
    await page.goto('https://healthbc.my.site.com/primarycarepatientregistration/s/');
    
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Register myself or my family' }).click();
    await page.getByLabel('First name', { exact: true }).click();
    await page.getByLabel('First name', { exact: true }).fill('Gow-Cooper');
    await page.getByLabel('Last name', { exact: true }).click();
    await page.getByLabel('Last name', { exact: true }).fill('Nipius');
    await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
    await page.getByLabel('Personal Health Number (PHN)', { exact: true }).fill('9097729716');
    await page.getByPlaceholder('MM').click();
    await page.getByPlaceholder('MM').fill('03');
    await page.getByPlaceholder('DD').click();
    await page.getByPlaceholder('DD').fill('23');
    await page.getByPlaceholder('YYYY').click();
    await page.getByPlaceholder('YYYY').fill('1935');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();

    //await page.getByText('Thank you, Gow-Cooper Nipius is already registered.').click();
    //AI Click on the "There was an issue with the information entered." text
    await page.click('omnistudio-omniscript-text-block[data-omni-key="TextBlock4"] h1.head');
    
    /*
    await page.getByRole('combobox', { name: 'Street address' }).click();
    await page.getByRole('combobox', { name: 'Street address' }).fill('307-7631 Francis Rd');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('combobox', { name: 'Province' }).click();
    await page.getByText('BC', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).fill('V6Y 1A3_');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByLabel('Preferred name (optional)').click();
    await page.getByLabel('Preferred name (optional)').fill('GOW-Cooper Nipius Playwright Preferred NAme');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowRight');
    await page.getByLabel('Preferred name (optional)').fill('GOW-Cooper Nipius Playwright Preferred NAme');
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
    await page.fill('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input', 'AI for "GOW-Cooper Nipius" Kurdecha Selector');
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
    ////await page.getByText('Gow-Cooper Nipius, you are now on the Health Connect Registry.').click();
    ////await page.getByRole('article').click();
    ////await page.getByText('Each community has a team').click();
    ////await page.getByRole('heading', { name: 'Successfully registered!' }).click();
    */
   });
   
test('Can_do_Mauricio_Beal_Registration_for_Attached_in_Portal', async ({page, browser }) => {
    await page.goto('https://healthbc.my.site.com/primarycarepatientregistration/s/');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Register myself or my family' }).click();
    await page.getByLabel('First name', { exact: true }).click();
    await page.getByLabel('First name', { exact: true }).fill('Mauricio');
    await page.getByLabel('Last name', { exact: true }).click();
    await page.getByLabel('Last name', { exact: true }).fill('Beal');
    await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
    await page.getByLabel('Personal Health Number (PHN)', { exact: true }).fill('9873010199');
    await page.getByPlaceholder('MM').click();
    await page.getByPlaceholder('MM').fill('01');
    await page.getByPlaceholder('DD').click();
    await page.getByPlaceholder('DD').fill('19');
    await page.getByPlaceholder('YYYY').click();
    await page.getByPlaceholder('YYYY').fill('1966');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();

    //await page.getByText('Thank you, Mauricio  Bealis already registered.').click();
    //AI Click on the "There was an issue with the information entered." text
    await page.click('omnistudio-omniscript-text-block[data-omni-key="TextBlock4"] h1.head');
    /*
    await page.getByRole('combobox', { name: 'Street address' }).click();
    await page.getByRole('combobox', { name: 'Street address' }).fill('307-7631 Francis Rd');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('combobox', { name: 'Province' }).click();
    await page.getByText('BC', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).fill('V6Y 1A3_');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByLabel('Preferred name (optional)').click();
    await page.getByLabel('Preferred name (optional)').fill('"Mauricio_Beal" Playwright Preferred NAme');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowRight');
    await page.getByLabel('Preferred name (optional)').fill('"Mauricio_Beal" Playwright Preferred NAme');
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
    await page.fill('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input', 'AI for "Mauricio_Beal" Kurdecha Selector');
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
    ////await page.getByText('Mauricio Beal, you are now on the Health Connect Registry.').click();
    ////await page.getByRole('article').click();
    ////await page.getByText('Each community has a team').click();
    ////await page.getByRole('heading', { name: 'Successfully registered!' }).click();
    */
   });

test('Can_do_Huey_Cheng_Registration_for_Attached_in_Portal', async ({page, browser }) => {
    await page.goto('https://healthbc.my.site.com/primarycarepatientregistration/s/');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Register myself or my family' }).click();
    await page.getByLabel('First name', { exact: true }).click();
    await page.getByLabel('First name', { exact: true }).fill('Huey');
    await page.getByLabel('Last name', { exact: true }).click();
    await page.getByLabel('Last name', { exact: true }).fill('Cheng');
    await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
    await page.getByLabel('Personal Health Number (PHN)', { exact: true }).fill('9873010142');
    await page.getByPlaceholder('MM').click();
    await page.getByPlaceholder('MM').fill('04');
    await page.getByPlaceholder('DD').click();
    await page.getByPlaceholder('DD').fill('27');
    await page.getByPlaceholder('YYYY').click();
    await page.getByPlaceholder('YYYY').fill('1958');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();

    //await page.getByText('Thank you, Huey Cheng is already registered.').click();
    //AI Click on the "There was an issue with the information entered." text
    await page.click('omnistudio-omniscript-text-block[data-omni-key="TextBlock4"] h1.head');
    /*
    await page.getByRole('combobox', { name: 'Street address' }).click();
    await page.getByRole('combobox', { name: 'Street address' }).fill('307-7631 Francis Rd');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('combobox', { name: 'Province' }).click();
    await page.getByText('BC', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).fill('V6Y 1A3_');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByLabel('Preferred name (optional)').click();
    await page.getByLabel('Preferred name (optional)').fill('"Huey_Cheng" Playwright Preferred NAme');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowRight');
    await page.getByLabel('Preferred name (optional)').fill('"Huey_Cheng" Playwright Preferred NAme');
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
    await page.fill('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input', 'AI for "Huey_Cheng" Kurdecha Selector');
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
    ////await page.getByText('Huey Cheng, you are now on the Health Connect Registry.').click();
    ////await page.getByRole('article').click();
    ////await page.getByText('Each community has a team').click();
    ////await page.getByRole('heading', { name: 'Successfully registered!' }).click();
    */
});

test('Can_do_Courtney_Harty_Self_Registration_for_Attached_in_Portal', async ({page, browser }) => {
 await page.goto('https://healthbc.my.site.com/primarycarepatientregistration/s/');
 await page.getByRole('button', { name: 'Next' }).click();
 await page.getByRole('button', { name: 'Register myself or my family' }).click();
 await page.getByLabel('First name', { exact: true }).click();
 await page.getByLabel('First name', { exact: true }).fill('Courtney');
 await page.getByLabel('Last name', { exact: true }).click();
 await page.getByLabel('Last name', { exact: true }).fill('Harty');
 await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
 await page.getByLabel('Personal Health Number (PHN)', { exact: true }).fill('9873009979');
 await page.getByPlaceholder('MM').click();
 await page.getByPlaceholder('MM').fill('09');
 await page.getByPlaceholder('DD').click();
 await page.getByPlaceholder('DD').fill('13');
 await page.getByPlaceholder('YYYY').click();
 await page.getByPlaceholder('YYYY').fill('1959');
 await page.getByRole('button', { name: 'Continue' }).click();
 await page.getByRole('button', { name: 'Continue' }).click();

 //await page.getByText('Thank you, Courtney Harty is already registered.').click();
 //AI Click on the "There was an issue with the information entered." text
 await page.click('omnistudio-omniscript-text-block[data-omni-key="TextBlock4"] h1.head');
 
 /*
 await page.getByRole('combobox', { name: 'Street address' }).click();
 await page.getByRole('combobox', { name: 'Street address' }).fill('307-7631 Francis Rd');
 await page.getByRole('textbox', { name: 'City' }).click();
 await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
 await page.getByRole('combobox', { name: 'Province' }).click();
 await page.getByText('BC', { exact: true }).click();
 await page.getByRole('textbox', { name: 'Postal code' }).click();
 await page.getByRole('textbox', { name: 'Postal code' }).fill('V6Y 1A3_');
 await page.getByRole('textbox', { name: 'City' }).click();
 await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
 await page.getByRole('button', { name: 'Continue' }).click();
await page.getByLabel('Preferred name (optional)').click();
 await page.getByLabel('Preferred name (optional)').fill('HARTY Courtney Playwright Preferred NAme');
 await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
 await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
 await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
 await page.getByLabel('Preferred name (optional)').press('ArrowRight');
 await page.getByLabel('Preferred name (optional)').fill('Sandy Playwright Preferred Name');
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
 ///// AI Click on the "Phone" option
 await page.click('omnistudio-omniscript-select[data-omni-key="communicationPref"] .slds-listbox__option[data-value="Phone"]');
 
 await page.getByRole('textbox', { name: 'Alternate phone number (' }).click();
 await page.getByRole('textbox', { name: 'Alternate phone number (' }).fill('(778) 879-3822_');
 await page.getByRole('button', { name: 'Continue' }).click();
 await page.getByRole('group').locator('label').filter({ hasText: 'Yes' }).locator('span').first().click();
 ///// AI Click on the input component
 await page.click('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input');
 
 //////AI Enter Provider preferences and enter "AI Kurdecha Selector"
 await page.fill('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input', 'AI for "Harty Courtney" Kurdecha Selector');
 
 ////// AI Click on the input component
 await page.click('omnistudio-omniscript-text[data-omni-key="practitionerLocation"] input');
 
 ////// AI Enter City
 await page.fill('omnistudio-omniscript-text[data-omni-key="practitionerLocation"] input', 'Richmond');
 
 await page.locator('label').filter({ hasText: 'Current family doctor or nurse practitioner is retiring' }).locator('span').first().click();
 ////// AI Enter "How far from Home"
 await page.click('omnistudio-omniscript-select[data-omni-key="distanceForPractitioner"] input');
 
 await page.getByText('Less than 20 km').click();
 ///// AI Enter "Gender"
 await page.click('omnistudio-omniscript-select[data-omni-key="genderForPractitioner"] input');
 
 await page.getByText('Female').click();
 await page.locator('fieldset').filter({ hasText: /^YesNo$/ }).locator('span').nth(1).click();
 ///// AI Enter "What Language"
 await page.click('omnistudio-omniscript-typeahead-block[data-omni-key="translatorLanguage-Block"] input');
 
 await page.fill('omnistudio-omniscript-typeahead-block[data-omni-key="translatorLanguage-Block"] input', 'Polis');
 
 await page.getByText('Polish').click();
 await page.getByRole('button', { name: 'Continue' }).click();
 await page.locator('label').filter({ hasText: 'Major surgery' }).locator('span').first().click();
 await page.locator('label').filter({ hasText: 'I am pregnant or have recently given birth' }).locator('span').first().click();
 await page.locator('label').filter({ hasText: 'Sickle Cell Disease' }).locator('span').first().click();
 await page.getByRole('button', { name: 'Continue' }).click();
 ////await page.getByRole('button', { name: 'Submit registration' }).click();
 ////await page.getByText('Harty Self, you are now on the Health Connect Registry.').click();
 ////await page.getByRole('article').click();
 ////await page.getByText('Each community has a team').click();
 ////await page.getByRole('heading', { name: 'Successfully registered!' }).click();
 
 *///
});

test('Can_do_Norris_Mays_Registration_for_Attached_in_Portal', async ({page, browser }) => {
    await page.goto('https://healthbc.my.site.com/primarycarepatientregistration/s/');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Register myself or my family' }).click();
    await page.getByLabel('First name', { exact: true }).click();
    await page.getByLabel('First name', { exact: true }).fill('Norris');
    await page.getByLabel('Last name', { exact: true }).click();
    await page.getByLabel('Last name', { exact: true }).fill('Mays');
    await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
    await page.getByLabel('Personal Health Number (PHN)', { exact: true }).fill('9873009961');
    await page.getByPlaceholder('MM').click();
    await page.getByPlaceholder('MM').fill('03');
    await page.getByPlaceholder('DD').click();
    await page.getByPlaceholder('DD').fill('12');
    await page.getByPlaceholder('YYYY').click();
    await page.getByPlaceholder('YYYY').fill('1959');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();

    //await page.getByText('Thank you, Norris Mays is already registered.').click();
    //AI Click on the "There was an issue with the information entered." text
    await page.click('omnistudio-omniscript-text-block[data-omni-key="TextBlock4"] h1.head');
    
    /*
    await page.getByRole('combobox', { name: 'Street address' }).click();
    await page.getByRole('combobox', { name: 'Street address' }).fill('307-7631 Francis Rd');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('combobox', { name: 'Province' }).click();
    await page.getByText('BC', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).fill('V6Y 1A3_');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByLabel('Preferred name (optional)').click();
    await page.getByLabel('Preferred name (optional)').fill('May Norris Playwright Preferred NAme');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowRight');
    await page.getByLabel('Preferred name (optional)').fill('MAY NORRIS Playwright Preferred NAme');
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
    await page.fill('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input', 'AI for "May Norris" Kurdecha Selector');
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
    ////await page.getByText('Norris Mays, you are now on the Health Connect Registry.').click();
    ////await page.getByRole('article').click();
    ////await page.getByText('Each community has a team').click();
    ////await page.getByRole('heading', { name: 'Successfully registered!' }).click();
    */
   });

test('Can_do_Burt_Sneed_Registration_for_Attached_in_Portal', async ({page, browser }) => {
    await page.goto('https://healthbc.my.site.com/primarycarepatientregistration/s/');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Register myself or my family' }).click();
    await page.getByLabel('First name', { exact: true }).click();
    await page.getByLabel('First name', { exact: true }).fill('Burt');
    await page.getByLabel('Last name', { exact: true }).click();
    await page.getByLabel('Last name', { exact: true }).fill('Sneed');
    await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
    await page.getByLabel('Personal Health Number (PHN)', { exact: true }).fill('9873010181');
    await page.getByPlaceholder('MM').click();
    await page.getByPlaceholder('MM').fill('06');
    await page.getByPlaceholder('DD').click();
    await page.getByPlaceholder('DD').fill('07');
    await page.getByPlaceholder('YYYY').click();
    await page.getByPlaceholder('YYYY').fill('1995');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    
    //await page.getByText('Thank you, Burt Sneed is already registered.').click();
    //AI Click on the "There was an issue with the information entered." text
    await page.click('omnistudio-omniscript-text-block[data-omni-key="TextBlock4"] h1.head');
    
    /*
    await page.getByRole('combobox', { name: 'Street address' }).click();
    await page.getByRole('combobox', { name: 'Street address' }).fill('307-7631 Francis Rd');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('combobox', { name: 'Province' }).click();
    await page.getByText('BC', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).fill('V6Y 1A3_');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByLabel('Preferred name (optional)').click();
    await page.getByLabel('Preferred name (optional)').fill('Burt SNEED Playwright Preferred NAme');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowRight');
    await page.getByLabel('Preferred name (optional)').fill('"Burt_Sneed" Playwright Preferred NAme');
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
    await page.fill('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input', 'AI for "Burt Sneed" Kurdecha Selector');
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
    ////await page.getByText('Burt Sneed, you are now on the Health Connect Registry.').click();
    ////await page.getByRole('article').click();
    ////await page.getByText('Each community has a team').click();
    ////await page.getByRole('heading', { name: 'Successfully registered!' }).click();
    */
   }); 
   
test('Can_do_Heath_Crippen_Registration_for_Attached_in_Portal', async ({page, browser }) => {
    await page.goto('https://healthbc.my.site.com/primarycarepatientregistration/s/');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Register myself or my family' }).click();
    await page.getByLabel('First name', { exact: true }).click();
    await page.getByLabel('First name', { exact: true }).fill('Heath');
    await page.getByLabel('Last name', { exact: true }).click();
    await page.getByLabel('Last name', { exact: true }).fill('Crippen');
    await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
    await page.getByLabel('Personal Health Number (PHN)', { exact: true }).fill('9873010174');
    await page.getByPlaceholder('MM').click();
    await page.getByPlaceholder('MM').fill('10');
    await page.getByPlaceholder('DD').click();
    await page.getByPlaceholder('DD').fill('24');
    await page.getByPlaceholder('YYYY').click();
    await page.getByPlaceholder('YYYY').fill('1982');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    
    //await page.getByText('Thank you, Heath Crippen is already registered.').click();
    //AI Click on the "There was an issue with the information entered." text
    await page.click('omnistudio-omniscript-text-block[data-omni-key="TextBlock4"] h1.head');
    
    /*
    await page.getByRole('combobox', { name: 'Street address' }).click();
    await page.getByRole('combobox', { name: 'Street address' }).fill('307-7631 Francis Rd');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('combobox', { name: 'Province' }).click();
    await page.getByText('BC', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).fill('V6Y 1A3_');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByLabel('Preferred name (optional)').click();
    await page.getByLabel('Preferred name (optional)').fill('Burt SNEED Playwright Preferred NAme');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowRight');
    await page.getByLabel('Preferred name (optional)').fill('MAy Norris Playwright Preferred NAme');
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
    await page.fill('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input', 'AI for "Heath Crippen" Kurdecha Selector');
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
    ////await page.getByText('Heath Crippen, you are now on the Health Connect Registry.').click();
    ////await page.getByRole('article').click();
    ////await page.getByText('Each community has a team').click();
    ////await page.getByRole('heading', { name: 'Successfully registered!' }).click();
   
    */
   });
   
test('BOT_Can_do_Silas_Cherry_Registration_for_Attached_in_Portal', async ({page, browser }) => {
    await page.goto('https://healthbc.my.site.com/primarycarepatientregistration/s/');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Register myself or my family' }).click();
    await page.getByLabel('First name', { exact: true }).click();
    await page.getByLabel('First name', { exact: true }).fill('Silas');
    await page.getByLabel('Last name', { exact: true }).click();
    await page.getByLabel('Last name', { exact: true }).fill('Cherry');
    await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
    await page.getByLabel('Personal Health Number (PHN)', { exact: true }).fill('9873010167');
    await page.getByPlaceholder('MM').click();
    await page.getByPlaceholder('MM').fill('01');
    await page.getByPlaceholder('DD').click();
    await page.getByPlaceholder('DD').fill('15');
    await page.getByPlaceholder('YYYY').click();
    await page.getByPlaceholder('YYYY').fill('1959');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    
    //await page.getByText('Thank you, Silas Cherry is already registered.').click();
    //AI Click on the "There was an issue with the information entered." text
    await page.click('omnistudio-omniscript-text-block[data-omni-key="TextBlock4"] h1.head');
    
    /*
    await page.getByRole('combobox', { name: 'Street address' }).click();
    await page.getByRole('combobox', { name: 'Street address' }).fill('307-7631 Francis Rd');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('combobox', { name: 'Province' }).click();
    await page.getByText('BC', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).fill('V6Y 1A3_');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByLabel('Preferred name (optional)').click();
    await page.getByLabel('Preferred name (optional)').fill('BOT DO NOT USE Silas Cherry Preferred Name');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowRight');
    await page.getByLabel('Preferred name (optional)').fill('BOT DO NOT USE Silas Cherry Preferred Name');
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
    await page.fill('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input', 'AI BOT DO NOT USE Kurdecha most Recent Family Doctor');
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
    ///await page.getByRole('button', { name: 'Submit registration' }).click();
    ///await page.getByText('Silas Cherry, you are now on the Health Connect Registry.').click();
    ///await page.getByRole('article').click();
    ///await page.getByText('Each community has a team').click();
    ///await page.getByRole('heading', { name: 'Successfully registered!' }).click();
    */
    });  

test('Can_do_Titus_Suitt_Registration_for_Attached_in_Portal', async ({page, browser }) => {
    await page.goto('https://healthbc.my.site.com/primarycarepatientregistration/s/');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Register myself or my family' }).click();
    await page.getByLabel('First name', { exact: true }).click();
    await page.getByLabel('First name', { exact: true }).fill('Titus');
    await page.getByLabel('Last name', { exact: true }).click();
    await page.getByLabel('Last name', { exact: true }).fill('Suitt');
    await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
    await page.getByLabel('Personal Health Number (PHN)', { exact: true }).fill('9873026818');
    await page.getByPlaceholder('MM').click();
    await page.getByPlaceholder('MM').fill('11');
    await page.getByPlaceholder('DD').click();
    await page.getByPlaceholder('DD').fill('30');
    await page.getByPlaceholder('YYYY').click();
    await page.getByPlaceholder('YYYY').fill('1998');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    
    //await page.getByText('Thank you, Titus Suitt is already registered.').click();
    //AI Click on the "There was an issue with the information entered." text
    //await page.click('omnistudio-omniscript-text-block[data-omni-key="TextBlock4"] h1.head');
    await page.getByText('The information entered does not match provincial health records.').click();
    
    /*
    await page.getByRole('combobox', { name: 'Street address' }).click();
    await page.getByRole('combobox', { name: 'Street address' }).fill('307-7631 Francis Rd');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('combobox', { name: 'Province' }).click();
    await page.getByText('BC', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).fill('V6Y 1A3_');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByLabel('Preferred name (optional)').click();
    await page.getByLabel('Preferred name (optional)').fill('"Titus_Suitt" Playwright Preferred Name');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowRight');
    await page.getByLabel('Preferred name (optional)').fill('"Titus_Suitt" Playwright Preferred Name');
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
    await page.fill('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input', 'AI for "Titus_Suitt" Kurdecha Selector');
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
    ////await page.getByText('Titus Suitt, you are now on the Health Connect Registry.').click();
    ////await page.getByRole('article').click();
    ////await page.getByText('Each community has a team').click();
    ////await page.getByRole('heading', { name: 'Successfully registered!' }).click();
   
    */
   }); 

test('BOT_Can_do_Gordon_Krull_Registration_for_Attached_in_Portal', async ({page, browser }) => {
    await page.goto('https://hcr.healthlinkbc.ca/s/');
    //await page.goto('https://healthbc.my.site.com/primarycarepatientregistration/s/');
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
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    
    //await page.getByText('Thank you, Gordon Krull is already registered.').click();
    //AI Click on the "There was an issue with the information entered." text
    await page.click('omnistudio-omniscript-text-block[data-omni-key="TextBlock4"] h1.head');
    
    /*
    await page.getByRole('combobox', { name: 'Street address' }).click();
    await page.getByRole('combobox', { name: 'Street address' }).fill('307-7631 Francis Rd');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('combobox', { name: 'Province' }).click();
    await page.getByText('BC', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).fill('V6Y 1A3');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByLabel('Preferred name (optional)').click();
    await page.getByLabel('Preferred name (optional)').fill('AI BOT DO NOT USE "Gordon_Krull" Playwright Preferred Name');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowRight');
    await page.getByLabel('Preferred name (optional)').fill('AI BOT DO NOT USE "Gordon_Krull" Playwright Preferred Name');
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
    //AI Enter Provider preferences and enter "AI BOT DO NOT USE Kurdecha Selector"
    await page.fill('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input', 'AI BOT DO NOT USE for "Gordon_Krull" Kurdecha Selector');
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
    ////await page.getByText('Gordon Krull, you are now on the Health Connect Registry.').click();
    ////await page.getByRole('article').click();
    ////await page.getByText('Each community has a team').click();
    ////await page.getByRole('heading', { name: 'Successfully registered!' }).click();
   */
   }); 

test('BOT_Can_do_Kelvin_Lemoine_Registration_for_Attached_in_Portal', async ({page, browser }) => {
    await page.goto('https://healthbc.my.site.com/primarycarepatientregistration/s/');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Register myself or my family' }).click();
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
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    
    //await page.getByText('Thank you, Kelvin Lemoine is already registered.').click();
    //AI Click on the "There was an issue with the information entered." text
    await page.click('omnistudio-omniscript-text-block[data-omni-key="TextBlock4"] h1.head');
    
    /*
    await page.getByRole('combobox', { name: 'Street address' }).click();
    await page.getByRole('combobox', { name: 'Street address' }).fill('307-7631 Francis Rd');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('combobox', { name: 'Province' }).click();
    await page.getByText('BC', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).fill('V6Y 1A3');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByLabel('Preferred name (optional)').click();
    await page.getByLabel('Preferred name (optional)').fill('AI BOT DO NOT USE "Kelvin_Lemoine" Playwright Preferred Name');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowRight');
    await page.getByLabel('Preferred name (optional)').fill('AI BOT DO NOT USE "Kelvin_Lemoine" Playwright Preferred Name');
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
    await page.fill('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input', 'AI BOT DO NOT USE for "Kelvin_Lemoine" Kurdecha Selector');
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
    //await page.locator('#inputId-578').click()
    await page.fill('omnistudio-omniscript-typeahead-block[data-omni-key="translatorLanguage-Block"] input', 'Polis');
    //await page.locator('#inputId-578').fill('Polis');
    await page.getByText('Polish').click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.locator('label').filter({ hasText: 'Major surgery' }).locator('span').first().click();
    await page.locator('label').filter({ hasText: 'I am pregnant or have recently given birth' }).locator('span').first().click();
    await page.locator('label').filter({ hasText: 'Sickle Cell Disease' }).locator('span').first().click();
    await page.getByRole('button', { name: 'Continue' }).click();
    ////await page.getByRole('button', { name: 'Submit registration' }).click();
    ////await page.getByText('Kelvin Lemoine, you are now on the Health Connect Registry.').click();
    ////await page.getByRole('article').click();
    ////await page.getByText('Each community has a team').click();
    ////await page.getByRole('heading', { name: 'Successfully registered!' }).click();
   */
   }); 

test('Can_do_Danny_Bellman_Registration_for_Attached_in_Portal', async ({page, browser }) => {
    await page.goto('https://healthbc.my.site.com/primarycarepatientregistration/s/');
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
    await page.getByRole('combobox', { name: 'Street address' }).fill('307-7631 Francis Rd');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('combobox', { name: 'Province' }).click();
    await page.getByText('BC', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).fill('V6Y 1A3_');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
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
    ////await page.getByText('Danny Bellman, you are now on the Health Connect Registry.').click();
    ////await page.getByRole('article').click();
    ////await page.getByText('Each community has a team').click();
    ////await page.getByRole('heading', { name: 'Successfully registered!' }).click();
   */
   }); 

test('BOT_Can_do_Lawerence_Menzies_Registration_for_Attached_in_Portal', async ({page, browser }) => {
    await page.goto('https://healthbc.my.site.com/primarycarepatientregistration/s/');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Register myself or my family' }).click();
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
    
    /*
    await page.getByRole('combobox', { name: 'Street address' }).click();
    await page.getByRole('combobox', { name: 'Street address' }).fill('307-7631 Francis Rd');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('combobox', { name: 'Province' }).click();
    await page.getByText('BC', { exact: true }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).click();
    await page.getByRole('textbox', { name: 'Postal code' }).fill('V6Y 1A3_');
    await page.getByRole('textbox', { name: 'City' }).click();
    await page.getByRole('textbox', { name: 'City' }).fill('Richmond');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByLabel('Preferred name (optional)').click();
    await page.getByLabel('Preferred name (optional)').fill('AI BOT DO NOT USE "Lawerence_Menzies" Playwright Preferred Name');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowLeft');
    await page.getByLabel('Preferred name (optional)').press('ArrowRight');
    await page.getByLabel('Preferred name (optional)').fill('AI BOT DO NOT USE "Lawerence_Menzies" Playwright Preferred Name');
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
    await page.fill('omnistudio-omniscript-text[data-omni-key="currentPractitionerName"] input', 'AI BOT DO NOT USE for "Lawerence_Menzies" Kurdecha Selector');
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
    ////await page.getByText('Lawerence Menzies, you are now on the Health Connect Registry.').click();
    ////await page.getByRole('article').click();
    ////await page.getByText('Each community has a team').click();
    ////await page.getByRole('heading', { name: 'Successfully registered!' }).click();
   */
   }); 
