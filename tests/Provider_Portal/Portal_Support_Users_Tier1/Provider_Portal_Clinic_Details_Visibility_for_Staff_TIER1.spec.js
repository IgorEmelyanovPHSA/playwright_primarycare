const { test, expect } = require ('@playwright/test');

let context;
let page;
test.beforeAll(async ({browser}) => {
  context = await browser.newContext();
  await context.tracing.start(
    {
      snapshots: true,
      screenshots: true
    });
    page = await context.newPage();
})

test.afterAll(async () => {
  await context.tracing.stop({path: 'Tier1_Clinic_Detail.zip'});
})


test('Provider_Portal_Clinic_Details_Visibility_for_Staff_TIER1', async ({}) => {
  await page.goto('https://healthbc--hlthbcqax.sandbox.my.site.com/providerclinicportal/s/');
  await page.goto('https://healthbc--hlthbcqax.sandbox.my.site.com/providerclinicportal/s/login/?ec=302&startURL=%2Fproviderclinicportal%2Fs%2F');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('igor.tier1@phsa.ca.hlthbcqax');
  await page.locator('#sfdc_password_container div').click();
  await page.getByPlaceholder('Password').click({ modifiers: ['Control'] });
  await page.getByPlaceholder('Password').fill('PAS@1234');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByLabel('Search all clinics in BC').click();

  await page.getByPlaceholder('Enter Clinic Name').click();
  //await page.getByPlaceholder('Enter Clinic Name').fill('cast');
  //await page.getByRole('button', { name: 'Search' }).click();
  //await page.getByText('CASTLEGAR MED ASSOCIATES').click();
  //await page.getByRole('tab', { name: 'Clinic Details' }).click();
  //await page.getByText('COLUMBIA AVE').first().click();

});
