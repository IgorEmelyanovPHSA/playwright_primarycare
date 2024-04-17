import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';


test.describe('Calendly', () => {
  test('Can_book_Appintment_at_Friday_4am', async ({ page }) => {
    await page.goto('https://calendly.com/zerostep-test/test-calendly')

    await page.waitForSelector('[data-testid="calendar"]')
    await ai('Dismiss the privacy cookie modal form', { page, test })
    /*
    await ai('Click on a first available day in the calendar', { page, test })
    await ai('Click on the 4 am timeslot button', { page, test })
    await ai('Click the "Next" button', { page, test })
    await page.locator('[data-container="selected-spot"] button:nth-of-type(2)').click()
    await ai('Fill out the form with realistic values', { page, test })
    await page.getByText('Schedule Event').click()

    const element = await page.getByText('You are scheduled')
    expect(element).toBeDefined()
    */
  })
})
