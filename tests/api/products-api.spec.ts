import { test, expect } from '@playwright/test';

test('Get products', async ({ request }) => {
  const response = await request.get('https://dummyjson.com/products');

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.products.length).toBeGreaterThan(0);

  expect(body.products[0]).toHaveProperty('title');
  expect(body.products[0]).toHaveProperty('price');
  expect(body.products[0]).toHaveProperty('category');
});