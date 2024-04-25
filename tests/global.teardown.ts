import { test as teardown } from '@playwright/test';

teardown('execute teardown script', async ({ }) => {
  console.log('execute teardown script...');
});