const {test, expect} = require('@playwright/test')

test("login", async ({page})=> {

    await page.goto('https://login-intqa.phenompro.com/')
    await page.locator('//input[@id="username"]').fill("ogd_automation_user@phenompeople.com")
    await page.locator('//input[@class="btn-primary-signin"]').click()
    
    await page.locator('//input[@id="phenomPassword3"]').fill("Ogd@123")
    await page.locator('//input[@class="btn-primary-signin"]').click()
    
    await page.locator('//input[@class="input-sign-in button"]').click()
    
    await expect(page).toHaveText("phenom")
    
    await page.waitForTimeout(3000)
})

