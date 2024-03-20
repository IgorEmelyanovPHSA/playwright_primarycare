import { test, expect } from '@playwright/test';
import { constants } from 'buffer';

test('Can_do_Person_InCare_Registration_for_NoN_Attached_in_Portal', async ({ page, browser }) => {
  
  console.log("\n=====Devtools : enable Performance Metrics =====\n");
  //Create a new connection to an eisting CDPSession to enable Performance Mesurements
  const client = await page.context().newCDPSession(page);
  //Tell the DevTools session to record Performance Metrics
  await client.send('Performance.enable');

  

  console.log("\n=====Devtools : startTracing =====\n");
  await browser.startTracing(page, {path: 'trace.json', sceenshots: true});
  await page.goto('https://healthbc--hlthbcqax.sandbox.my.site.com/primarycarepatientregistration/s/');
  ///////START - Use Performance.mark API
  await page.evaluate(() => window.performance.mark("perf:start"));
  ///////
  ///FCP - First Content Paint tracing
  //const paintTimingJson = await page.evaluate(() => JSON.stringify(window.performance.getEntriesByType('paint')))
  //const paintTiming = JSON.parse(paintTimingJson)
  //console.log(paintTiming)
  //////
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

  console.log("\n=====The Paint Timing =====\n");
  ///FCP - First Content Paint tracing
  const paintTimingJson = await page.evaluate(() => JSON.stringify(window.performance.getEntriesByType('paint')))
  const paintTiming = JSON.parse(paintTimingJson)
  console.log(paintTiming)
  ///LCP 
  const largestContentfulPaint = await page.evaluate(() => {
    return new Promise((resolve) => {
      new PerformanceObserver((l) => {
        const entries = l.getEntries()
        // the last entry is the largest contentful paint
        const largestPaintEntry = entries.at(-1)
        resolve(largestPaintEntry.startTime)
      }).observe({
        type: 'largest-contentful-paint',
        buffered: true
      })
    })
  })
  console.log("\n largestContentfulPaint =", parseFloat(largestContentfulPaint))
  /////////////////////////////////////


  console.log("\n=====Devtools : Performance.getMetricd =====\n");
  let performanceMetrics = await client.send('Performance.getMetrics');
  console.log(performanceMetrics.metrics);

  console.log("\n=====Devtools : Get Tracing =====\n");
  //Performance.mark API - STOP
  
  await page.evaluate(() => window.performance.mark("perf:stop"));
  //Performance.measure API
  await page.evaluate(() => window.performance.measure("overall","perf:start","perf:stop"));
  //Get All Performance Marks Including Google'e
  const getAllMarksJson = await page.evaluate(() => JSON.stringify(window.performance.getEntriesByType("mark")));
  const getAllMarks = JSON.parse(getAllMarksJson);
  console.log('window.performance.getEntriesByType("mark")', getAllMarks);
  //Get All Performance Measures Including Google'e
  const getAllMeasureJson = await page.evaluate(() => JSON.stringify(window.performance.getEntriesByType("measure")));
  const getAllMeasures = JSON.parse(getAllMeasureJson);
  console.log('window.performance.getEntriesByType("measure")', getAllMeasures);

  console.log("\n=====Devtools : stopTracing =====\n");
  await browser.stopTracing();


});