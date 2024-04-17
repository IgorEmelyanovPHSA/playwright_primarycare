import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';



  test('Can_Self_Register_Sandy_Prior', async ({ page }) => {
    await page.goto('https://healthbc--hlthbcqax.sandbox.my.site.com/primarycarepatientregistration/')
    //await ai('Maximize the page', { page, test })
    await ai('Scroll down to very end of the same page', { page, test })
    await ai('Scroll down to very end of the same page', { page, test })
    await ai('Click the "Next" button on the same page', { page, test })
    await ai('Scroll down to very end of the same page', { page, test })
    await ai('Scroll down to very end of the same page', { page, test })
    await ai('Click the "Register a person in my care" button on the same page', { page, test })
    //await ai('Enter the UserName as admin', { page, test })
    //await ai('Enter the Password as password', { page, test })
    //await ai('Click the Login button', { page, test })
    //await page.locator('[data-container="selected-spot"] button:nth-of-type(2)').click()
    //await ai('Fill out the form with realistic values', { page, test })
    //await page.getByText('Schedule Event').click()

    //const element = await page.getByText('You are scheduled')
    //expect(element).toBeDefined()
  })

