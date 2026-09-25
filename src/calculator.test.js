import calculator from "./calculator.js";

describe("calculator", () => {
  describe("shape", () => {
    test("exports an object", () => {
      expect(typeof calculator).toBe("object");
      expect(calculator).not.toBeNull();
    });

    test("exposes add, subtract, divide, and multiply as functions", () => {
      expect(typeof calculator.add).toBe("function");
      expect(typeof calculator.subtract).toBe("function");
      expect(typeof calculator.divide).toBe("function");
      expect(typeof calculator.multiply).toBe("function");
    });
  });

  describe("add", () => {
    test("adds two positive integers", () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test("adds a positive and a negative number", () => {
      expect(calculator.add(5, -3)).toBe(2);
    });

    test("adds two negative numbers", () => {
      expect(calculator.add(-4, -6)).toBe(-10);
    });

    test("adds floats", () => {
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test("adds zero without changing the value", () => {
      expect(calculator.add(7, 0)).toBe(7);
    });

    test("is commutative", () => {
      expect(calculator.add(3, 8)).toBe(calculator.add(8, 3));
    });
  });

  describe("subtract", () => {
    test("subtracts two positive integers", () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test("returns a negative result when the second is larger", () => {
      expect(calculator.subtract(3, 9)).toBe(-6);
    });

    test("subtracts a negative number (adds its absolute value)", () => {
      expect(calculator.subtract(5, -2)).toBe(7);
    });

    test("subtracts zero without changing the value", () => {
      expect(calculator.subtract(7, 0)).toBe(7);
    });

    test("is NOT commutative", () => {
      expect(calculator.subtract(10, 4)).not.toBe(calculator.subtract(4, 10));
    });
  });

  describe("multiply", () => {
    test("multiplies two positive integers", () => {
      expect(calculator.multiply(3, 7)).toBe(21);
    });

    test("multiplies a positive by a negative", () => {
      expect(calculator.multiply(4, -5)).toBe(-20);
    });

    test("multiplies two negatives to a positive", () => {
      expect(calculator.multiply(-3, -4)).toBe(12);
    });

    test("multiplies by zero to zero", () => {
      expect(calculator.multiply(12345, 0)).toBe(0);
    });

    test("multiplies by one without changing the value", () => {
      expect(calculator.multiply(9, 1)).toBe(9);
    });

    test("multiplies floats", () => {
      expect(calculator.multiply(0.5, 4)).toBe(2);
    });

    test("is commutative", () => {
      expect(calculator.multiply(6, 7)).toBe(calculator.multiply(7, 6));
    });
  });

  describe("divide", () => {
    test("divides two positive integers", () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    test("returns a float when the division isn't exact", () => {
      expect(calculator.divide(1, 3)).toBeCloseTo(0.3333, 4);
    });

    test("divides a positive by a negative", () => {
      expect(calculator.divide(10, -2)).toBe(-5);
    });

    test("divides two negatives to a positive", () => {
      expect(calculator.divide(-10, -2)).toBe(5);
    });

    test("divides zero by a number to zero", () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });

    test("dividing by zero returns Infinity (not a throw)", () => {
      expect(calculator.divide(1, 0)).toBe(Infinity);
    });

    test("dividing negative by zero returns -Infinity", () => {
      expect(calculator.divide(-1, 0)).toBe(-Infinity);
    });

    test("dividing zero by zero returns NaN", () => {
      expect(calculator.divide(0, 0)).toBeNaN();
    });
  });

  describe("method independence", () => {
    test("calling add does not affect multiply", () => {
      calculator.add(100, 100);
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test("methods have no shared state between calls", () => {
      expect(calculator.add(1, 1)).toBe(2);
      expect(calculator.add(1, 1)).toBe(2);
    });
  });
});
