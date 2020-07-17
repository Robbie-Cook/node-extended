import NodeHelper from '../dist/node-helper';

/**
 * Testing the execute function
 */
test('Execute function', async () => {
  const answer = await NodeHelper.execute(`echo "Hello"`);
  expect(answer).toMatch(/Hello/); // TODO: convert this to toBe
});