import reverseString from "./reverseString.js";

describe("reverseString", () => {
  describe("basic reversal", () => {
    test("reverses a simple word", () => {
      expect(reverseString("hello")).toBe("olleh");
    });

    test("reverses a multi-word string", () => {
      expect(reverseString("Hello World")).toBe("dlroW olleH");
    });

    test("reverses numbers and symbols too", () => {
      expect(reverseString("123!?")).toBe("?!321");
    });
  });

  describe("palindromes", () => {
    test("returns a palindrome unchanged", () => {
      expect(reverseString("racecar")).toBe("racecar");
    });

    test("returns a single character unchanged", () => {
      expect(reverseString("a")).toBe("a");
    });
  });

  describe("empty and falsy input", () => {
    test("returns an empty string unchanged", () => {
      expect(reverseString("")).toBe("");
    });

    test("returns null unchanged", () => {
      expect(reverseString(null)).toBe(null);
    });

    test("returns undefined unchanged", () => {
      expect(reverseString(undefined)).toBe(undefined);
    });
  });

  describe("whitespace", () => {
    test("reverses leading spaces to the end", () => {
      expect(reverseString("  abc")).toBe("cba  ");
    });

    test("reverses a string of only spaces", () => {
      expect(reverseString("   ")).toBe("   ");
    });
  });

  describe("unicode", () => {
    test("reverses an accented word", () => {
      expect(reverseString("café")).toBe("éfac");
    });

    test("keeps an emoji intact", () => {
      expect(reverseString("👋hi")).toBe("ih👋");
    });

    test("reverses a string with emojis in the middle", () => {
      expect(reverseString("h👋i")).toBe("i👋h");
    });
  });

  describe("properties", () => {
    test("reversing twice returns the original", () => {
      const original = "The quick brown fox";
      expect(reverseString(reverseString(original))).toBe(original);
    });

    test("does not mutate the original string", () => {
      const original = "hello";
      reverseString(original);
      expect(original).toBe("hello");
    });

    test("returns a string type", () => {
      expect(typeof reverseString("hello")).toBe("string");
    });

    test("returns a string of the same length", () => {
      const input = "hello world";
      expect(reverseString(input)).toHaveLength(input.length);
    });
  });
});
