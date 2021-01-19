import env from "../src";

describe("env", () => {
  beforeAll(() => {
    process.env.TEST_A = "a";
    process.env.TEST_B = "b";
  });

  it("fetches values from existing envs", () => {
    expect(env.TEST_A).toBe("a");
    expect(env.TEST_B).toBe("b");
  });

  it("throws on non-existing env variables", () => {
    expect(() => env.TEST_C).toThrowError("Environment variable 'TEST_C' is not defined");
  });
});
