// Text Field

// Dropdown

// Searchable Dropdown

// Number Field

// Checkbox

// Toggle Switch

// Date Field

// Textarea

// Typeahead (Autocomplete)

// Number Slider

// Radio Buttons

// Attachments (File Upload)

// Chips (like tags or pills)








// 1. Text Field – Playwright JavaScript

// const { test, expect } = require('@playwright/test');

// test('Fill a text field', async ({ page }) => {
//   await page.goto('https://example.com'); // 🔁 Replace with your actual URL

//   await page.locator('//input[@placeholder="Enter your name"]').fill('Mounica');

//   const inputValue = await page.locator('input[placeholder="Enter your name"]').inputValue();
//   expect(inputValue).toBe('Mounica');
// });




// 2. Dropdown (select)

// test('Select value from dropdown', async ({ page }) => {
//   await page.goto('https://example.com');

//   await page.selectOption('select#brand', 'vivo'); // 🔁 Use your select id

//   const selected = await page.locator('select#brand').inputValue();
//   expect(selected).toBe('vivo');
// });
// 3. Searchable Dropdown (custom)

// test('Searchable dropdown select', async ({ page }) => {
//   await page.goto('https://example.com');

//   await page.locator('//input[@placeholder="Search brand"]').click();
//   await page.fill('//input[@placeholder="Search brand"]', 'vivo');
//   await page.click('//div[text()="vivo"]');

//   const selected = await page.locator('//div[@class="selected-value"]').innerText();
//   expect(selected).toBe('vivo');
// });
// 4. Number Field

// test('Fill number field', async ({ page }) => {
//   await page.goto('https://example.com');

//   await page.locator('//input[@type="number"]').fill('12345');

//   const value = await page.locator('//input[@type="number"]').inputValue();
//   expect(value).toBe('12345');
// });
// 5. Checkbox

// test('Check checkbox', async ({ page }) => {
//   await page.goto('https://example.com');

//   await page.locator('//input[@type="checkbox" and @value="accept"]').check();

//   const isChecked = await page.locator('//input[@value="accept"]').isChecked();
//   expect(isChecked).toBe(true);
// });
// 6. Toggle Field (Switch)

// test('Toggle switch on', async ({ page }) => {
//   await page.goto('https://example.com');

//   const toggle = page.locator('//input[@type="checkbox" and @id="toggle"]');
//   await toggle.check();

//   const isOn = await toggle.isChecked();
//   expect(isOn).toBe(true);
// });
// 7. Date Field

// test('Pick date', async ({ page }) => {
//   await page.goto('https://example.com');

//   await page.locator('//input[@type="date"]').fill('2025-07-22');

//   const date = await page.locator('//input[@type="date"]').inputValue();
//   expect(date).toBe('2025-07-22');
// });
// 8. Textarea

// test('Fill textarea', async ({ page }) => {
//   await page.goto('https://example.com');

//   await page.locator('//textarea[@placeholder="Enter description"]').fill('Playwright is cool!');

//   const text = await page.locator('textarea').inputValue();
//   expect(text).toBe('Playwright is cool!');
// });
// 9. Typeahead (auto-suggest input)

// test('Typeahead select', async ({ page }) => {
//   await page.goto('https://example.com');

//   await page.fill('//input[@placeholder="Type to search"]', 'Ind');
//   await page.click('//div[contains(text(), "India")]');

//   const value = await page.locator('//input[@placeholder="Type to search"]').inputValue();
//   expect(value).toBe('India');
// });
// 10. Number Slider

// test('Move slider', async ({ page }) => {
//   await page.goto('https://example.com');

//   const slider = page.locator('input[type="range"]');
//   await slider.evaluate(e => e.value = 75); // directly set value

//   const value = await slider.inputValue();
//   expect(value).toBe('75');
// });
// 11. Radio Buttons

// test('Select radio button', async ({ page }) => {
//   await page.goto('https://example.com');

//   await page.check('//input[@type="radio" and @value="female"]');

//   const isSelected = await page.locator('//input[@value="female"]').isChecked();
//   expect(isSelected).toBe(true);
// });
// 12. Attachments (File Upload)

// test('Upload file', async ({ page }) => {
//   await page.goto('https://example.com');

//   const fileInput = page.locator('//input[@type="file"]');
//   await fileInput.setInputFiles('tests/files/sample.pdf'); // provide your file path

//   // Optional check if file attached (depends on app)
// });
// 13. Chips (e.g., add multiple tags)

// test('Enter chips/tags', async ({ page }) => {
//   await page.goto('https://example.com');

//   await page.fill('//input[@placeholder="Add tag"]', 'Playwright');
//   await page.keyboard.press('Enter');
//   await page.fill('//input[@placeholder="Add tag"]', 'JavaScript');
//   await page.keyboard.press('Enter');

//   const chips = await page.locator('.chip').allTextContents();
//   expect(chips).toEqual(['Playwright', 'JavaScript']);
// });



// like thi s:::


// 1. Text Field

// const nameValue = await page.locator('#name').inputValue();
// expect(nameValue).toBe('Mounica');



// 2. Dropdown
// const selectedValue = await page.locator('#brand').inputValue();
// expect(selectedValue).toBe('vivo');



// 3. Searchable Dropdown (like typeahead dropdowns)
// await page.locator('#search-dropdown').fill('vivo');
// await page.keyboard.press('Enter');

// const selected = await page.locator('#search-dropdown').inputValue();
// expect(selected).toBe('vivo');
// 4. Number Field
// await page.locator('#age').fill('28');

// const number = await page.locator('#age').inputValue();
// expect(number).toBe('28');
// 5. Checkbox
// await page.locator('#agree').check();

// const isChecked = await page.locator('#agree').isChecked();
// expect(isChecked).toBe(true);
// 6. Toggle Field (Switch Button)
// await page.locator('#toggle-newsletter').click();

// const isToggled = await page.locator('#toggle-newsletter').isChecked();
// expect(isToggled).toBe(true);
// 7. Date Field
// await page.locator('#dob').fill('2025-07-22');

// const date = await page.locator('#dob').inputValue();
// expect(date).toBe('2025-07-22');
// 8. Text Area
// await page.locator('#message').fill('Hello, this is Mounica!');

// const message = await page.locator('#message').inputValue();
// expect(message).toBe('Hello, this is Mounica!');
// 9. Typeahead (Autocomplete Input)
// await page.locator('#typeahead').fill('vi');
// await page.keyboard.press('ArrowDown');
// await page.keyboard.press('Enter');

// const selected = await page.locator('#typeahead').inputValue();
// expect(selected).toBe('vivo');
// 10. Number Slider
// await page.locator('#volume').fill('75');

// const sliderValue = await page.locator('#volume').inputValue();
// expect(sliderValue).toBe('75');
// 11. Radio Buttons
// await page.locator('input[value="female"]').check();

// const isFemale = await page.locator('input[value="female"]').isChecked();
// expect(isFemale).toBe(true);
// 12. Attachments (File Upload)
// await page.setInputFiles('#upload', 'tests/data/sample.pdf');

// const fileName = await page.locator('#upload').inputValue();
// expect(fileName).not.toBe('');
// 13. Chips (Multi-select tags)
// await page.locator('#chips-input').fill('JavaScript');
// await page.keyboard.press('Enter');

// const chipText = await page.locator('.chip').nth(0).textContent();
// expect(chipText).toBe('JavaScript');


// const { test, expect } = require('@playwright/test');

// test('Simple Playwright Test', async ({ page }) => {
//   await page.goto('https://www.example.com');
//   await expect(page).toHaveTitle(/Example Domain/);
// });



const { test, expect } = require('@playwright/test');
const { launchBrowser } = require('../utils/browserutils.js');
const { login } = require('../utils/loginutils.js');
const { selectTenant } = require('../utils/navigateutils.js');





test('Login to Phenom and Select Tenant', async () => {
  const { browser, page } = await launchBrowser();
  
  await login(page);
  await selectTenant(page, 'phenom');

  await expect(page).toHaveURL(/dashboard|home|phenom/);

  await browser.close();
}, 60000);

dcdhcgd



//  Develop and execute test plan and test cases for mobile apps on different operating systems and devices.
// Automated web application testing using Selenium, designed POM (Page Object Model) classes, and executed
// parallel testing across different browsers.
// Automated mobile and web testing for Google apps using Test.AI and ROBO, enhancing defect deduction through AI
// driven validation and decrease the manual efforts for developing the scripts.
// Good communication, collaboration with proficiency at grasping new technical concepts quickly and utilize the same in a
// productive manner.
// Conducted Smoke and Regression Testing with a strong understanding of software testing methodologies and processes.
// Good Knowledge on API Testing(HTTP Requests) using postman and Rest Assured to validate the API response.
// Proficient in Java Programming Language, with the ability to develop and maintain automation test scripts.
// Integrated automated test suites into CI/CD Pipeline to enable faster and more reliable software releases.
// Experience in defect log using defect management tools such as Bugnizer and prepared daily test status reports
// to communicate the test status with the team.