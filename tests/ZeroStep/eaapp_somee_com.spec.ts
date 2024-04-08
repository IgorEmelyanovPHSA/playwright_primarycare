import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';


test.describe('EA Website Testing', () => {
  test('Can_login_to_eaapp.somee.com_site', async ({ page }) => {
    await page.goto('http://eaapp.somee.com')

    await ai('Click "Visit now"', { page, test })
    //await ai('Click "Start Learning Today" button', { page, test })
    //await ai('Enter the UserName as admin', { page, test })
    //await ai('Enter the Password as password', { page, test })
    //await ai('Click the Login button', { page, test })
    //await page.locator('[data-container="selected-spot"] button:nth-of-type(2)').click()
    //await ai('Fill out the form with realistic values', { page, test })
    //await page.getByText('Schedule Event').click()

    //const element = await page.getByText('You are scheduled')
    //expect(element).toBeDefined()
  })
})
