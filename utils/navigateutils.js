async function selectTenant(page, tenantName = 'phenom') {
  // Wait for and type in the tenant search bar
  await page.waitForSelector('//*[@id="crmUITxtSearchTenant"]"]');
  await page.fill('//*[@id="crmUITxtSearchTenant"]', tenantName);

  // Press Enter or select from dropdown if required
  await page.keyboard.press('Enter');
  

  await page('(//*[@class="tenant-item-name f-14 f-f-r"])[1]').click
  // Optional: validate navigation
  await page.waitForNavigation();
}

module.exports = { selectTenant };