async function login(page) {
  await page.goto('https://login-intqa.phenompro.com/');

  await page.locator('//*[@id="username"]').fill('ogd_automation_user@phenompeople.com');
  await page.locator('//*[@id="kc-login"]').click
  await page.locator('//*[@id="phenomPassword"]').fill('@Ogd@123');
  await page.locator('//*[@id="kc-login"]').click
  
}

module.exports = { login };