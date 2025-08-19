const { test, expect, request } = require('@playwright/test');

test('API GET test', async () => {
  const context = await request.newContext();
  const response = await context.get('https://reqres.in/api/users/2');
  expect(response.status()).toBe(200);
  const body = await response.json();
  console.log(body);
});





test('loginapi', async ()=>{
  const context = await request.newContext()
  const responce = await context.get("https://reqres.in/api/users?page=2")

  expect(responce.status()).toBe(200)

  const body = await responce.json()
  console.log(body)
})
