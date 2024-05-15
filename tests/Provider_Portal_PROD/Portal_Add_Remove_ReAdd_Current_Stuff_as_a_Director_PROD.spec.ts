import { test, expect } from '@playwright/test';


test('Can_Add_Current_Staff_NOAN_GRAY_to_Directors_BELLAs_APPLETREEs_Clinic_in_Portal', async ({page, browser }) => {
    ///////////////////
    //1. Manuall in SF Remove NOAN_GRAY from Clinic stuff first.
    ///////////////////////////

    //2. Login as Director 'BELLA APPLETREE'
    //await page.goto('https://bchealthprovider.ca');
    await page.goto('https://healthbc.my.site.com/primarycarepatientregistration/s');
    /*
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('bella@mail.com');
    await page.locator('#sfdc_password_container div').click();
    await page.getByPlaceholder('Password').click({ modifiers: ['Control'] });
    await page.getByPlaceholder('Password').fill('PROV@222');
    await page.getByRole('button', { name: 'Log in' }).click();

    //3. Adding Staff Member "NOAN GRAY" as an Provider to Clinic "Elwood Medical Clinic Do Not Use"
    await page.getByLabel('Elwood Medical Clinic Do Not Use').click();
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByPlaceholder('Search Contacts...').click();
    await page.getByPlaceholder('Search Contacts...').fill('noan');
    await page.locator('span').filter({ hasText: /^39100$/ }).click();
    await page.getByLabel('System Role - Current').click();

    await page.getByText('Provider', { exact: true }).click();
    await page.getByRole('button', { name: 'Save' }).click();

    //4. Manage Access -> checkbox "Manage Fasility" for Kristine Fisher in Details.
    await page.getByText('Noan Gray | Elwood Medical').click();
    await page.getByRole('tab', { name: 'Give Access To' }).click();
    await page.getByRole('tab', { name: 'Details' }).click();
    await page.getByRole('tab', { name: 'Details' }).click();
    await page.getByRole('button', { name: 'Edit Manage Facility' }).click();
    await page.getByLabel('Manage Facility').check();
    await page.getByRole('button', { name: 'Save' }).click();
    */
});
   

   