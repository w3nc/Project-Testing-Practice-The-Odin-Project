import analyzeArray from "./analyzeArray.js";

describe("analyzeArray", () => {
  describe("basic behavior", () => {
    test("returns the expected object", () => {
      expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
      });
    });

    test("handles unsorted input", () => {
      expect(analyzeArray([2, 1])).toEqual({
        average: 1.5,
        min: 1,
        max: 2,
        length: 2,
      });
    });
  });

  describe("single element", () => {
    test("average, min, and max all equal the single value", () => {
      expect(analyzeArray([5])).toEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 1,
      });
    });
  });

  describe("uniform values", () => {
    test("all-equal array yields that value for average, min, and max", () => {
      expect(analyzeArray([3, 3, 3])).toEqual({
        average: 3,
        min: 3,
        max: 3,
        length: 3,
      });
    });

    test("array of zeros", () => {
      expect(analyzeArray([0, 0])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 2,
      });
    });
  });

  describe("negatives", () => {
    test("handles an all-negative array", () => {
      expect(analyzeArray([-3, -1, -7])).toEqual({
        average: -11 / 3,
        min: -7,
        max: -1,
        length: 3,
      });
    });

    test("handles a mix of positive and negative", () => {
      expect(analyzeArray([-10, 10])).toEqual({
        average: 0,
        min: -10,
        max: 10,
        length: 2,
      });
    });

    test("does not default min/max to 0", () => {
     
      expect(analyzeArray([-5, -2])).toEqual({
        average: -3.5,
        min: -5,
        max: -2,
        length: 2,
      });
    });
  });

  describe("floats", () => {
    test("handles float averages", () => {
      expect(analyzeArray([1.5, 2.5])).toEqual({
        average: 2,
        min: 1.5,
        max: 2.5,
        length: 2,
      });
    });

    test("average is close for repeating decimals", () => {
      const result = analyzeArray([1, 2, 4]);
      expect(result.average).toBeCloseTo(7 / 3);
    });
  });

  describe("empty array", () => {
    test("returns safe defaults for an empty array", () => {
      expect(analyzeArray([])).toEqual({
        average: 0,
        min: null,
        max: null,
        length: 0,
      });
    });

    test("empty-array result is not NaN or Infinity", () => {
      const result = analyzeArray([]);
      expect(result.average).not.toBeNaN();
      expect(result.min).not.toBe(Infinity);
      expect(result.max).not.toBe(-Infinity);
    });
  });

  describe("large values", () => {
    test("handles very large numbers", () => {
      expect(analyzeArray([1000000, -1000000])).toEqual({
        average: 0,
        min: -1000000,
        max: 1000000,
        length: 2,
      });
    });
  });

  describe("shape of the returned object", () => {
    test("has exactly the four expected keys", () => {
      const result = analyzeArray([1, 2, 3]);
      expect(Object.keys(result).sort()).toEqual([
        "average",
        "length",
        "max",
        "min",
      ]);
    });

    test("length matches the input array length", () => {
      expect(analyzeArray([1, 2, 3, 4, 5]).length).toBe(5);
    });

    test("returns a plain object", () => {
      const result = analyzeArray([1, 2, 3]);
      expect(typeof result).toBe("object");
      expect(result).not.toBeNull();
    });
  });

  describe("properties", () => {
    test("min is always <= max", () => {
      const result = analyzeArray([3, 1, 4, 1, 5, 9, 2, 6]);
      expect(result.min).toBeLessThanOrEqual(result.max);
    });

    test("average is always between min and max", () => {
      const result = analyzeArray([3, 1, 4, 1, 5, 9, 2, 6]);
      expect(result.average).toBeGreaterThanOrEqual(result.min);
      expect(result.average).toBeLessThanOrEqual(result.max);
    });

    test("does not mutate the original array", () => {
      const original = [1, 8, 3, 4, 2, 6];
      const copy = [...original];
      analyzeArray(original);
      expect(original).toEqual(copy);
    });
  });
});
