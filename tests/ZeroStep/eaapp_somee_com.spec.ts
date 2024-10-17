import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';


test.describe('EA Website Testing', () => {
  test('Can_login_to_eaapp.somee.com_site', async ({ page }) => {
    await page.goto('http://eaapp.somee.com')
    //ZeroStep Account usage expided - Current Cycle Usage 500 requests.
    //await ai('Click "Visit now"', { page, test })
    //await page.goto('https://www.executeautomation.com/')
    //await ai('Click Start Learning Today', { page, test })
    //await ai('Click Sign In in the top menu', { page, test })
    //await ai('Enter the UserName as Igor.Melanoff@gmail.com', { page, test })
    //await ai('Enter the Password as Igor7777', { page, test })
    //await ai('Click the "Sign In" button in the bottom of the form', { page, test })
    //await ai('Verify the message in a form "Your Email and/or Password do not match."', { page, test })
    //await page.locator('[data-container="selected-spot"] button:nth-of-type(2)').click()
    //await ai('Fill out the form with realistic values', { page, test })
    //await page.getByText('Schedule Event').click()

    //const element = await page.getByText('You are scheduled')
    //expect(element).toBeDefined()
  })
})
