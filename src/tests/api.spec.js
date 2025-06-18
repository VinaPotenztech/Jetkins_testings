import { test, expect, request } from '@playwright/test';

test('GET /health should return 200', async () => {
  const apiContext = await request.newContext();
  const res = await apiContext.get('http://localhost:3000/health');
  expect(res.status()).toBe(200);
});
