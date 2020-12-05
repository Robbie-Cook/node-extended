import Random from "../src/Random";

/**
 * Testing the RandomHelper
 */
describe("RandomHelper", () => {
  test("Random", async () => {
    for (let i = 0; i < 100; i++) {
      const answer = Random.getRandomInt(-10, 10);
      expect(answer).toBeGreaterThanOrEqual(-10);
      expect(answer).toBeLessThan(10);
    }
  });
});
