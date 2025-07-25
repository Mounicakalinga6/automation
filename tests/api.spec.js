import { test, expect, request } from '@playwright/test';

test('GET users list - basic test', async () => {
  const context = await request.newContext(); // No auth needed for this
  const response = await context.get('https://jsonplaceholder.typicode.com/users');

  // Check if response is successful
  expect(response.ok()).toBeTruthy();

  // Convert to JSON
  const users = await response.json();

  // Log first user
  console.log('First user:', users[0]);

  // Expect at least 1 user
  expect(users.length).toBeGreaterThan(0);
});




test('POST - Create user', async () => {
  const apiContext = await request.newContext({
    baseURL: 'https://reqres.in',
  });

  const response = await apiContext.post('/api/users', {
    data: {
      name: 'Adi',
      job: 'QA Tester',
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  console.log(body);
  expect(body.name).toBe('Adi');
});



test('PUT - Update user', async () => {
  const apiContext = await request.newContext({
    baseURL: 'https://reqres.in',
  });

  const response = await apiContext.put('/api/users/2', {
    data: {
      name: 'Adi',
      job: 'Senior QA'
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);
});



test('DELETE - Delete user', async () => {
  const apiContext = await request.newContext({
    baseURL: 'https://reqres.in',
  });

  const response = await apiContext.delete('/api/users/2');
  expect(response.status()).toBe(204); // No content
});



const apiContext = await request.newContext({
  baseURL: 'https://gorest.co.in/public/v2',
  extraHTTPHeaders: {
    Authorization: `Bearer your_token_here`,
  }
});