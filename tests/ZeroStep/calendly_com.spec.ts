import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';


test.describe('Calendly', () => {
  test('Can_book_Appintment_at_Friday_4am', async ({ page }) => {
    await page.goto('https://calendly.com/zerostep-test/test-calendly')
    await page.waitForSelector('[data-testid="calendar"]')
    //ZeroStep Account usage expided - Current Cycle Usage 500 requests.
    //await ai('Dismiss the privacy cookie modal form', { page, test })
    
    //await ai('Click on a first available day in the calendar', { page, test })
    //await ai('Click on 31 in the calendar', { page, test })
    //await ai('Click on the 2:00pm timeslot button', { page, test })
    //await ai('Click the "Next" button', { page, test })
    //await page.locator('[data-container="selected-spot"] button:nth-of-type(2)').click()
    //await ai('Fill out the form with realistic values', { page, test })
    //await page.getByText('Schedule Event').click()

    //const element = await page.getByText('You are scheduled')
    //expect(element).toBeDefined()
    
  })
})
