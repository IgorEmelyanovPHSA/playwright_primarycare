import { test, expect } from '@playwright/test';
import { constants } from 'buffer';

test('Can_do_Person_InCare_Registration_for_NoN_Attached_in_Portal', async ({ page }) => {
  
  //console.log("\n=====Devtools : enable Performance Metrics =====\n");
  //Create a new connection to an eisting CDPSession to enable Performance Mesurements
  //const client = await page.context().newCDPSession(page);
  //Tell the DevTools session to record Performance Metrics
  //await client.send('Performance.enable');

  //const { chromium } = require('playwright');  // Or 'chromium' or 'webkit'.

  //(async () => {
    //const browser = await chromium.launch();
    //const page = await browser.newPage();
    //await page.goto('https://example.com');
  //await browser.close();
  //});

  //console.log("\n=====Devtools : startTracing =====\n");
  //await browser.startTracing(page, {path: '.trace.json', sceenshots: true});
  
  await page.goto('https://healthbc--hlthbcqax.sandbox.my.site.com/primarycarepatientregistration/s/');

  //START - Use Performance.mark API
  await page.evaluate(() => window.performance.mark("perf:start"));

  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Register a person in my care' }).click();
  await page.getByRole('combobox', { name: 'Your relationship to this' }).click();
  await page.getByText('Case manager').click();
  await page.getByLabel('Your first and last name').click();
  await page.getByLabel('Your first and last name').fill('Igor Emelyanov CAse MAnager');
  await page.getByLabel('Your first and last name').press('ArrowLeft');
  await page.getByLabel('Your first and last name').press('ArrowLeft');
  await page.getByLabel('Your first and last name').press('ArrowLeft');
  await page.getByLabel('Your first and last name').press('ArrowLeft');
  await page.getByLabel('Your first and last name').click();
  await page.getByLabel('Your first and last name').click();
  await page.getByLabel('First name', { exact: true }).click();
  await page.getByLabel('First name', { exact: true }).click();
  await page.getByLabel('First name', { exact: true }).fill('Kenton');
  await page.getByLabel('Last name', { exact: true }).click();
  await page.getByLabel('Last name', { exact: true }).fill('Troup');
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).fill('9873010088');
  await page.getByPlaceholder('MM').click();
  await page.getByPlaceholder('MM').fill('12');
  await page.getByPlaceholder('DD').click();
  await page.getByPlaceholder('DD').fill('05');
  await page.getByPlaceholder('YYYY').click();
  await page.getByPlaceholder('YYYY').fill('1959');
  await page.getByPlaceholder('DD').click();
  await page.getByLabel('Personal Health Number (PHN)', { exact: true }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  
  //Performance.mark API - STOP
  await page.evaluate(() => window.performance.mark("perf:stop"));
  
  //Performance.measure API
  await page.evaluate(() => window.performance.measure("overall","perf:start","perf:stop"));

  //Get All Performance Marks Includinh Google'e
  const getAllMarksJson = await page.evaluate(() => JSON.stringify(window.performance.getEntriesByType("measure")));
  const getAllMarks = JSON.parse(getAllMarksJson);
  console.log('window.performance.getEntriesByType("measure")', getAllMarks);

  //Get All Performance Measures Includinh Google'e
  const getAllMeasureJson = await page.evaluate(() => JSON.stringify(window.performance.getEntriesByType("measure")));
  const getAllMeasures = JSON.parse(getAllMarksJson);
  console.log('window.performance.getEntriesByType("measure")', getAllMeasures);



  //console.log("\n=====Devtools : Performance.getMetricd =====\n");
  //et performanceMetrics = await client.send('Performance.getMetrics');
  //onsole.log(performanceMetrics.metrics);

});