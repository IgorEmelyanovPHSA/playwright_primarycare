import { test, expect } from '@playwright/test';


test('Can_Delegate_Current_MOA_Staff_NOLAN_GRAY_to_Directors_BELLA"s_APPLETREE"s_Clinic_in_Portal', async ({page, browser }) => {
    //////////////DELEGATION /////
    //PROD//1. Manualy in SF Remove MoA - NOLAN_GRAY from Clinic stuff first. Bella -> "Give Access To" Tab
    //UATX//1. Manualy in SF Remove MoA - Agnes Phillip from Clinic stuff first. Karen -> "Give Access To" Tab or just go to Agness Phillip and remove 	
                                                                                                //"Agnes Phillip | NORTH SHORE PRIMARY CARE MED HOME"
    ///////////////////////////

    //PROD//2. Login as Director 'Bella Appletree Do Not Use'
    await page.goto('https://bchealthprovider.ca');
    /////////////////https://healthbc.my.site.com/providerclinicportal/s/login/ ///////--custom link to provider 
    ///UATX//2. Login as Director 'Karen F. Beegan'
    ///await page.goto('https://healthbc--hlthbcuatx.sandbox.my.site.com/providerclinicportal/s');

    
    await page.getByPlaceholder('Username').click();
    
    //PROD
    await page.getByPlaceholder('Username').fill('bella@mail.com');
    //UATX
    ///await page.getByPlaceholder('Username').fill('director3@phsa.ca.hlthbcuatx');
    
    await page.locator('#sfdc_password_container div').click();
    await page.getByPlaceholder('Password').click({ modifiers: ['Control'] });
    
    //PROD
    await page.getByPlaceholder('Password').fill('PROV@5678');
    //UATX
    ///await page.getByPlaceholder('Password').fill('PAS@1234');
    
    await page.getByRole('button', { name: 'Log in' }).click();
    
    //PROD//3. Adding Staff Member "NOLAN GRAY" to Clinic "Avecina Medical Clinic Do Not Use"
    //UATX//3. Adding Staff Member "Agnes Phillip" to Clinic "AVECINA MED FAMILY CLINIC"
    
    //UATX
    ///await page.getByLabel('NORTH SHORE PRIMARY CARE MED HOME').click();
    ///await page.getByRole('button', { name: 'Add' }).click();
    ///await page.getByPlaceholder('Search Contacts...').click();
    
    //PROD
    await page.getByRole('article').getByLabel('Avecina Medical Clinic Do Not').click();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByPlaceholder('Search Contacts...').click();
    await page.getByPlaceholder('Search Contacts...').fill('nolan');
    await page.getByTitle('Nolan Gary Do Not Use').click();
    await page.getByRole('combobox', { name: 'System Role' }).click();
    //await page.waitForTimeout(500);
    ///???? why await page.getByText('Medical Office Assistant', { exact: true }).click(); // this on has stop working ???
    await page.getByRole('option', { name: 'Medical Office Assistant' }).click();  //this one is working
    ///await page.getByRole('article').getByLabel('Avecina Medical Clinic Do Not').click();
    //await page.waitForTimeout(500);
    
    //UATX
    ///await page.getByPlaceholder('Search Contacts...').fill('Agnes'); //MOA
    /////////await page.getByPlaceholder('Search Contacts...').fill('Kristine Fisher'); //Provider Kristine Fisher
    ///await page.getByTitle('Agnes Phillip').click();// for MoA Agnes
    /////////await page.locator('span').filter({ hasText: /^39100$/ }).click();//only for Provider Kristine Fisher
    ///await page.getByRole('combobox', { name: 'System Role' }).click();
    ///await page.click('span.slds-media__body span[title="Medical Office Assistant"]');
    ////////await page.click('span.slds-media__body span[title="Provider"]');//only for Provider Kristine Fisher
    
    await page.getByRole('button', { name: 'Save' }).click();

    //Verify
    //PROD//4. Manage Access -> checkbox "Manage Fasility" for "NOLAN GRAY" in Details.
    //UATX//4. Manage Access -> checkbox "Manage Fasility" for "Agnes Phillip" in Details.
    //PROD    
    await page.getByText('Nolan Gary Do Not Use | Avecina Medical Clinic Do Not Use').click();
    //UATX
    ///await page.getByText('Agnes Phillip | NORTH SHORE PRIMARY CARE MED HOME').click();
    ///////await page.getByText('Kristine Fisher | NORTH SHORE PRIMARY CARE MED HOME').click();//only for Provider Kristine Fisher
    
    
});

test('Can_Check_Manage_Facility_FOR_MoA_NOLAN_GRAY_In_Portal', async ({page, browser }) => {
    //////////////DELEGATION /////
    //PROD//1. Manualy in SF Remove MoA - NOLAN_GRAY from Clinic stuff first.
    //UATX//1. Manualy in SF Remove MoA - Agnes Phillip from Clinic stuff first.
    ///////////////////////////
  
    //PROD//2. Login as Director 'Bella Appletree Do Not Use'
    await page.goto('https://bchealthprovider.ca');
    //UATX//2. Login as Director 'Karen F. Beegan'
    ///await page.goto('https://healthbc--hlthbcuatx.sandbox.my.site.com/providerclinicportal/s');

    
    await page.getByPlaceholder('Username').click();
    
    //PROD
    await page.getByPlaceholder('Username').fill('bella@mail.com');
    //UATX
    ///await page.getByPlaceholder('Username').fill('director3@phsa.ca.hlthbcuatx');
    
    await page.locator('#sfdc_password_container div').click();
    await page.getByPlaceholder('Password').click({ modifiers: ['Control'] });
    
    //PROD
    await page.getByPlaceholder('Password').fill('PROV@333');
    //UATX
    ///await page.getByPlaceholder('Password').fill('PAS@1234');
    
    await page.getByRole('button', { name: 'Log in' }).click();
    
    //PROD           ////  Ellwood Medical Clinic Do Not Use  //Avecina Medical Clinic Do Not Use
    await page.getByRole('article').getByLabel('Avecina Medical Clinic Do Not').click();
    //UATX
    ///await page.getByLabel('NORTH SHORE PRIMARY CARE MED HOME').click();
    
    // Scroll down the page
    await page.waitForTimeout(500);
    await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(500);
    
    //PROD//4. Manage Access -> checkbox "Manage Fasility" for "NOLAN GRAY" in Details.
    //UATX//4. Manage Access -> checkbox "Manage Fasility" for "Agnes Phillip" in Details.
    //PROD             ////  Nolan Gray Do Not Use | Ellwood Medical Clinic Do Not Use
    await page.getByText('Nolan Gary Do Not Use | Avecina Medical Clinic Do Not Use').click();
    //UATX
    ///await page.getByText('Agnes Phillip | NORTH SHORE PRIMARY CARE MED HOME').click();

    await page.getByRole('tab', { name: 'Give Access To' }).click();
    await page.getByRole('tab', { name: 'Details' }).click();
    await page.getByRole('tab', { name: 'Details' }).click();

    ///need to scroll done in PROD to click on Manage Fsility check Box
    // Scroll down the page
    await page.waitForTimeout(1000);
    await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(1000);

    // Scroll down the page
    await page.waitForTimeout(1000);
    await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(1000);

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
    await page.waitForTimeout(1000);
    await page.getByLabel('Manage Facility').check();

    // Scroll down the page
    await page.waitForTimeout(1000);
    await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Save' }).click();
    
    
});





   

   