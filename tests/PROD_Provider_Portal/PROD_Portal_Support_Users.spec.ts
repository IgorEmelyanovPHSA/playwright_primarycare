import { test, expect } from '@playwright/test';


test('PROD_Can_see_Clinic_Details_as_an_TIER1', async ({page, browser }) => {
    /*
    await page.goto('https://healthbc--hlthbcuatx.sandbox.my.site.com/providerclinicportal/s/');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('igor.tier1@phsa.ca.hlthbcqax');
    await page.locator('#sfdc_password_container div').click();
    await page.getByPlaceholder('Password').click({ modifiers: ['Control'] });
    await page.getByPlaceholder('Password').fill('PAS@12345');
    ///if user is not Activated yet after Refreshments.
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByLabel('Search all clinics in BC').click();

    await page.getByPlaceholder('Enter Clinic Name').click();
    await page.getByPlaceholder('Enter Clinic Name').fill('cast');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByText('CASTLEGAR MED ASSOCIATES').click();
    // Navigate and wait for element
    /////await page.goto('https://example.com');
    await page.getByText('Clinic Details').waitFor();
    await page.getByRole('tab', { name: 'Clinic Details' }).click();
    await page.getByText('839 Appartment 9674-Clearwater ST NW').first().click();
    */
});
   
test('PROD_Can_see_Clinic_Details_as_an_MOA_NOLAN_GRAY', async ({page, browser }) => {
    
    await page.goto('https://bchealthprovider.ca');
    /*
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('nolan@mail.com.moa');
    await page.locator('#sfdc_password_container div').click();
    await page.getByPlaceholder('Password').click({ modifiers: ['Control'] });
    await page.getByPlaceholder('Password').fill('PROV@567');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByLabel('Search all clinics in BC').click();
    await page.getByPlaceholder('Enter Clinic Name').click();
    await page.getByPlaceholder('Enter Clinic Name').fill('cast');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByText('Castlegar Medical Clinic Kinnaird Office').click();
    await page.getByText('Clinic Details').waitFor();
    await page.getByRole('tab', { name: 'Clinic Details' }).click();
    await page.getByText('1840 8 Avenue').first().click();
    */
});


   