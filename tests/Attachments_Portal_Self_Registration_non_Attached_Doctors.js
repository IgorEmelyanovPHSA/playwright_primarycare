const {test, expect} = require('@playwright/test')
//import { test, expect } from '@playwright/test';
//const {hello, hellow, helloword} = require('./hello')

//console.log (hello());
//console.log (helloword());



test('My first test', async ({page}) => {

  
  await page.goto('https://healthbc--hlthbcqax.sandbox.my.site.com/primarycarepatientregistration/s/');
  await expect(page).toHaveTitle('Home')


})