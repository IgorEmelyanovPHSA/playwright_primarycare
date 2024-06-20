import { test, expect } from '@playwright/test';


test('Can_Delegate_Current_MOA_Staff_NOLAN_GRAY_to_Directors_BELLA"s_APPLETREE"s_Clinic_in_Portal', async ({page, browser }) => {
    //////////////DELEGATION /////
    //PROD//1. Manualy in SF Remove MoA - NOLAN_GRAY from Clinic stuff first.
    //UATX//1. Manualy in SF Remove MoA - Agnes Phillip from Clinic stuff first.
    ///////////////////////////

    //PROD//2. Login as Director 'Bella Appletree Do Not Use'
    await page.goto('https://bchealthprovider.ca');
    ///UATX//2. Login as Director 'Karen F. Beegan'
    ///await page.goto('https://healthbc--hlthbcuatx.sandbox.my.site.com/providerclinicportal/s');

    /*
    await page.getByPlaceholder('Username').click();
    
    //PROD
    await page.getByPlaceholder('Username').fill('bella@mail.com');
    //UATX
    ///await page.getByPlaceholder('Username').fill('director3@phsa.ca.hlthbcuatx');
    
    await page.locator('#sfdc_password_container div').click();
    await page.getByPlaceholder('Password').click({ modifiers: ['Control'] });
    
    //PROD
    await page.getByPlaceholder('Password').fill('PROV@222');
    //UATX
    ///await page.getByPlaceholder('Password').fill('PAS@1234');
    
    await page.getByRole('button', { name: 'Log in' }).click();
    
    //PROD//3. Adding Staff Member "NOLAN GRAY" to Clinic "Avecina Medical Clinic Do Not Use"
    //UATX//3. Adding Staff Member "Agnes Phillip" to Clinic "AVECINA MED FAMILY CLINIC"
    //PROD           ////  Ellwood Medical Clinic Do Not Use - no Add button there //Avecina Medical Clinic Do Not Use
    await page.getByLabel('Avecina Medical Clinic Do Not Use').click();
    //UATX
    ///await page.getByLabel('NORTH SHORE PRIMARY CARE MED HOME').click();
    
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByPlaceholder('Search Contacts...').click();
    
    //PROD
    await page.getByPlaceholder('Search Contacts...').fill('Nolan');//MOA
    //UATX
    //await page.getByPlaceholder('Search Contacts...').fill('Agnes'); //MOA
    ///await page.getByPlaceholder('Search Contacts...').fill('Kristine Fisher'); //Provider

    //PROD
    ///////?await page.locator('span').filter({ hasText: /^39100$/ }).click();//only for Provider
    //await page.getByTitle('Nolan Gray Do Not Use').click();// not working for PROD
    await page.click('span.slds-media__body:has-text("Nolan Gary Do Not Use")');
    //UATX
    //await page.getByTitle('Agnes Phillip').click();// for MoA Agnes
    //////await page.locator('span').filter({ hasText: /^39100$/ }).click();//only for Provider Kristine Fisher
    
    await page.getByRole('combobox', { name: 'System Role' }).click();
    await page.click('span.slds-media__body span[title="Medical Office Assistant"]');
    ////////await page.click('span.slds-media__body span[title="Provider"]');//only for Provider
    await page.getByRole('button', { name: 'Save' }).click();

    //Verify
    //PROD//4. Manage Access -> checkbox "Manage Fasility" for "NOLAN GRAY" in Details.
    //UATX//4. Manage Access -> checkbox "Manage Fasility" for "Agnes Phillip" in Details.
    //PROD          ////  Nolan Gray Do Not Use | Ellwood Medical Clinic Do Not Use  
    await page.getByText('Nolan Gary Do Not Use | Avecina Medical Clinic Do Not Use').click();
    //UATX
    ///await page.getByText('Agnes Phillip | NORTH SHORE PRIMARY CARE MED HOME').click();
    ///////await page.getByText('Kristine Fisher | NORTH SHORE PRIMARY CARE MED HOME').click();//only for Provider
    
    */
});

test('Can_Check_Manage_Facility_FOR_MoA_NOLAN_GRAY_In_Portal', async ({page, browser }) => {
    //////////////DELEGATION /////
    //PROD//1. Manualy in SF Remove MoA - NOLAN_GRAY from Clinic stuff first.
    //UATX//1. Manualy in SF Remove MoA - Agnes Phillip from Clinic stuff first.
    ///////////////////////////

    //PROD//2. Login as Director 'Bella Appletree Do Not Use'
    ///await page.goto('https://bchealthprovider.ca');
    //UATX//2. Login as Director 'Karen F. Beegan'
    await page.goto('https://healthbc--hlthbcuatx.sandbox.my.site.com/providerclinicportal/s');

    /*
    await page.getByPlaceholder('Username').click();
    
    //PROD
    ///await page.getByPlaceholder('Username').fill('bella@mail.com');
    //UATX
    await page.getByPlaceholder('Username').fill('director3@phsa.ca.hlthbcuatx');
    
    await page.locator('#sfdc_password_container div').click();
    await page.getByPlaceholder('Password').click({ modifiers: ['Control'] });
    
    //PROD
    ///await page.getByPlaceholder('Password').fill('PROV@222');
    //UATX
    await page.getByPlaceholder('Password').fill('PAS@1234');
    
    await page.getByRole('button', { name: 'Log in' }).click();
    
    //PROD//3. Adding Staff Member "NOLAN GRAY" to Clinic "Avecina Medical Clinic Do Not Use"
    //UATX//3. Adding Staff Member "Agnes Phillip" to Clinic "AVECINA MED FAMILY CLINIC"
    //PROD           ////  Ellwood Medical Clinic Do Not Use  //Avecina Medical Clinic Do Not Use
    ///await page.getByLabel('Avecina Medical Clinic Do Not Use').click();
    //UATX
    await page.getByLabel('NORTH SHORE PRIMARY CARE MED HOME').click();
    
    // Scroll down the page
    await page.waitForTimeout(500);
    await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(500);
    
    //PROD//4. Manage Access -> checkbox "Manage Fasility" for "NOLAN GRAY" in Details.
    //UATX//4. Manage Access -> checkbox "Manage Fasility" for "Agnes Phillip" in Details.
    //PROD             ////  Nolan Gray Do Not Use | Ellwood Medical Clinic Do Not Use
    ///await page.getByText('Nolan Gary Do Not Use | Avecina Medical Clinic Do Not Use').click();
    //UATX
    await page.getByText('Agnes Phillip | NORTH SHORE PRIMARY CARE MED HOME').click();

    await page.getByRole('tab', { name: 'Give Access To' }).click();
    await page.getByRole('tab', { name: 'Details' }).click();
    await page.getByRole('tab', { name: 'Details' }).click();

    ///need to scroll done in PROD to click on Manage Fsility check Box
    // Scroll down the page
    await page.waitForTimeout(500);
    await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(500);

    //scroll up
    //await page.waitForTimeout(500);
    //await page.evaluate(() => {
        //window.scrollBy(0, -window.innerHeight);
    //});

    //await page.waitForTimeout(500);
    //await page.evaluate(() => {
       //window.scrollTo(0, 500); // Replace 500 with the desired Y coordinate
      //});


    await page.getByRole('button', { name: 'Edit Manage Facility' }).click();
    await page.getByLabel('Manage Facility').check();
    await page.getByRole('button', { name: 'Save' }).click();
    */
});





   

   