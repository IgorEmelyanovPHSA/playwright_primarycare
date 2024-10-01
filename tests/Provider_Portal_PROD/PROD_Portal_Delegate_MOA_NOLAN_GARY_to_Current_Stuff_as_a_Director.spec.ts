import { test, expect } from '@playwright/test';


test('PROD_Can_Delegate_Current_MOA_Staff_NOLAN_GARY_to_Directors_BELLA"s_APPLETREE"s_Clinic_in_Portal', async ({page, browser }) => {
    //////////////DELEGATION /////
    //1. Manualy in SF Remove MoA - NOLAN_GRAY from Clinic stuff first. Bella -> "Give Access To" Tab
    ///////////////////////////
    
    //2. Login as Director 'Bella Appletree Do Not Use'
    await page.goto('https://bchealthprovider.ca');
    /*
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('bella@mail.com');
    await page.locator('#sfdc_password_container div').click();
    await page.getByPlaceholder('Password').click({ modifiers: ['Control'] });
    await page.getByPlaceholder('Password').fill('PROV@5678');
    await page.getByRole('button', { name: 'Log in' }).click();
    
    //3. Adding Staff Member "NOLAN GRAY" to Clinic "Avecina Medical Clinic Do Not Use"
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
    await page.getByRole('button', { name: 'Save' }).click();

    //Verify
    //4. Manage Access -> checkbox "Manage Fasility" for "NOLAN GRAY" in Details.
    await page.getByText('Nolan Gary Do Not Use | Avecina Medical Clinic Do Not Use').click();
    
    */
});

test('PROD_Can_Check_Manage_Facility_FOR_MoA_NOLAN_GARY_In_Portal', async ({page, browser }) => {
    //////////////DELEGATION /////
    //1. Manualy in SF Remove MoA - NOLAN_GARY from Clinic stuff first.
    ///////////////////////////
    
    //2. Login as Director 'Bella Appletree Do Not Use'
    await page.goto('https://bchealthprovider.ca');
    /*
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('bella@mail.com');
    await page.locator('#sfdc_password_container div').click();
    await page.getByPlaceholder('Password').click({ modifiers: ['Control'] });
    await page.getByPlaceholder('Password').fill('PROV@5678');
    await page.getByRole('button', { name: 'Log in' }).click();
    ////  Ellwood Medical Clinic Do Not Use  //Avecina Medical Clinic Do Not Use
    await page.getByRole('article').getByLabel('Avecina Medical Clinic Do Not').click();
    // Scroll down the page
    await page.waitForTimeout(500);
    await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight);
    });
    await page.waitForTimeout(500);
    
    //4. Manage Access -> checkbox "Manage Fasility" for "NOLAN GARY" in Details.
    
    ////  Nolan Gray Do Not Use | Ellwood Medical Clinic Do Not Use
    await page.getByText('Nolan Gary Do Not Use | Avecina Medical Clinic Do Not Use').click();
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





   

   