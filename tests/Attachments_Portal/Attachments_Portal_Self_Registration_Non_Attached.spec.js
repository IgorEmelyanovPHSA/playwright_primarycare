const {test, expect} = require('@playwright/test')
//import { test, expect } from '@playwright/test';
//const {hello, hellow, helloword} = require('./hello')

//console.log (hello());
//console.log (helloword());



test('Can_do_Self_Registration_for_Not_Attached_in_Portal', async ({page}) => {

  
  await page.goto('https://healthbc--hlthbcqax.sandbox.my.site.com/primarycarepatientregistration/s/');
  await expect(page).toHaveTitle('Home')


})