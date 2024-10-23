import { test, expect } from '@playwright/test';


test('UATX_Can_see_Clinic_Details_as_an_TIER1', async ({page, browser }) => {
    /*
    //PREVIEW WIN'25
    await page.goto('https://healthbc--previewqa.sandbox.my.site.com/providerclinicportal/s/');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('igor.tier1@phsa.ca.previewqa');
    await page.locator('#sfdc_password_container div').click();
    await page.getByPlaceholder('Password').click({ modifiers: ['Control'] });
    await page.getByPlaceholder('Password').fill('PAS@1234');
    */

    /*
    //UATX
    await page.goto('https://healthbc--hlthbcuatx.sandbox.my.site.com/providerclinicportal/s/');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('igor.tier1@phsa.ca.hlthbcuatx');
    await page.locator('#sfdc_password_container div').click();
    await page.getByPlaceholder('Password').click({ modifiers: ['Control'] });
    await page.getByPlaceholder('Password').fill('PAS@1234');
    
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByLabel('Search all clinics in BC').click();
    await page.getByPlaceholder('Enter Clinic Name').click();
    await page.getByPlaceholder('Enter Clinic Name').fill('cast');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByText('CASTLEGAR MED ASSOCIATES').click();
    await page.getByText('Clinic Details').waitFor();
    await page.getByRole('tab', { name: 'Clinic Details' }).click();
    await page.getByText('839 Appartment 9674-Clearwater ST NW').first().click();
    */
});
   
test('UATX_Can_see_Clinic_Details_as_an_MOA_AGNES_PHILLIP', async ({page, browser }) => {
    /*
    //PREVIEW WIN'25
    await page.goto('https://healthbc--previewqa.sandbox.my.site.com/providerclinicportal/s/');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('moa1@phsa.ca.previewqa');
    await page.locator('#sfdc_password_container div').click();
    await page.getByPlaceholder('Password').click({ modifiers: ['Control'] });
    await page.getByPlaceholder('Password').fill('PAS@1234');
    */
   
    /*
    //UATX
    await page.goto('https://healthbc--hlthbcuatx.sandbox.my.site.com/providerclinicportal/s/');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('moa1@phsa.ca.hlthbcuatx');
    await page.locator('#sfdc_password_container div').click();
    await page.getByPlaceholder('Password').click({ modifiers: ['Control'] });
    await page.getByPlaceholder('Password').fill('PAS@1234');
    
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByLabel('Search all clinics in BC').click();
    await page.getByPlaceholder('Enter Clinic Name').click();
    await page.getByPlaceholder('Enter Clinic Name').fill('cast');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByText('CASTLEGAR MED FAMILY CLINIC').click();
    await page.getByText('Clinic Details').waitFor();
    await page.getByRole('tab', { name: 'Clinic Details' }).click();
    await page.getByText('970 Appartment 7547-Clearwood RD SW').first().click();
   
    */
});


   