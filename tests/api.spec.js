import { test, expect } from '@playwright/test';

test('GET /api/health returns status OK', async ({ request }) => {
  const res = await request.get('http://localhost:3000/api/health');
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.status).toBe('OK');
});
