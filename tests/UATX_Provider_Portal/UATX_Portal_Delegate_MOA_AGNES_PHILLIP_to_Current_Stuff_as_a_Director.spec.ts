import { test, expect } from '@playwright/test';


test('UATX_Can_Delegate_Current_MOA_Staff_AGNES_PHILLIP_to_Directors_KAREN"S_BEEGAN"S_Clinic_in_Portal', async ({page, browser }) => {
    //////////////DELEGATION /////
    //1. Manualy in SF Remove MoA - Agnes Phillip from Clinic stuff first. Karen -> "Give Access To" Tab or just go to Agness Phillip and remove 	
                                                                                                //"Agnes Phillip | NORTH SHORE PRIMARY CARE MED HOME"
    ///////////////////////////
    
    /*
    //2. Login as Director 'Karen F. Beegan'
    await page.goto('https://healthbc--hlthbcuatx.sandbox.my.site.com/providerclinicportal/s');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('director3@phsa.ca.hlthbcuatx');
    await page.locator('#sfdc_password_container div').click();
    await page.getByPlaceholder('Password').click({ modifiers: ['Control'] });
    await page.getByPlaceholder('Password').fill('PAS@1234');
    await page.getByRole('button', { name: 'Log in' }).click();
    
    //3. Adding Staff Member "Agnes Phillip" to Clinic 
    await page.getByLabel('NORTH SHORE PRIMARY CARE MED HOME').click();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByPlaceholder('Search Contacts...').click();
    
    await page.getByRole('combobox', { name: 'System Role' }).click();
    //await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Medical Office Assistant' }).click();  //this one is working
    //await page.waitForTimeout(500);
    
    await page.getByPlaceholder('Search Contacts...').fill('Agnes'); //MOA
    /////////await page.getByPlaceholder('Search Contacts...').fill('Kristine Fisher'); //Provider Kristine Fisher
    await page.getByTitle('Agnes Phillip').click();// for MoA Agnes
    /////////await page.locator('span').filter({ hasText: /^39100$/ }).click();//only for Provider Kristine Fisher
    await page.getByRole('combobox', { name: 'System Role' }).click();
    await page.click('span.slds-media__body span[title="Medical Office Assistant"]');
    ////////await page.click('span.slds-media__body span[title="Provider"]');//only for Provider Kristine Fisher
    await page.getByRole('button', { name: 'Save' }).click();

    //Verify
    //4. Manage Access -> checkbox "Manage Fasility" for "Agnes Phillip" in Details.
    await page.getByText('Agnes Phillip | NORTH SHORE PRIMARY CARE MED HOME').click();
    ///////await page.getByText('Kristine Fisher | NORTH SHORE PRIMARY CARE MED HOME').click();//only for Provider Kristine Fisher
    
    */
});

test('UATX_Can_Check_Manage_Facility_FOR_MoA_AGNES_PHILLIP_In_Portal', async ({page, browser }) => {
    //////////////DELEGATION /////
    //1. Manualy in SF Remove MoA - Agnes Phillip from Clinic stuff first.
    ///////////////////////////

    /*
    //2. Login as Director 'Karen F. Beegan'
    await page.goto('https://healthbc--hlthbcuatx.sandbox.my.site.com/providerclinicportal/s');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('director3@phsa.ca.hlthbcuatx');
    
    await page.locator('#sfdc_password_container div').click();
    await page.getByPlaceholder('Password').click({ modifiers: ['Control'] });
    await page.getByPlaceholder('Password').fill('PAS@1234');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByLabel('NORTH SHORE PRIMARY CARE MED HOME').click();
    
    // Scroll down the page
    await page.waitForTimeout(500);
    await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(500);
    
    //4. Manage Access -> checkbox "Manage Fasility" for "Agnes Phillip" in Details.
    await page.getByText('Agnes Phillip | NORTH SHORE PRIMARY CARE MED HOME').click();
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
    
    */
});





   

   