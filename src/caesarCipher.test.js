import caesarCipher from "./caesarCipher.js";

describe("caesarCipher", () => {
  describe("basic shifting", () => {
    test("shifts lowercase letters forward", () => {
      expect(caesarCipher("abc", 1)).toBe("bcd");
    });

    test("shifts uppercase letters forward", () => {
      expect(caesarCipher("ABC", 1)).toBe("BCD");
    });

    test("shifts a mixed case string", () => {
      expect(caesarCipher("Hello", 1)).toBe("Ifmmp");
    });
  });

  describe("wrapping", () => {
    test("wraps z back to a", () => {
      expect(caesarCipher("xyz", 3)).toBe("abc");
    });

    test("wraps uppercase Z back to A", () => {
      expect(caesarCipher("XYZ", 3)).toBe("ABC");
    });

    test("wraps both cases in a mixed string", () => {
      expect(caesarCipher("aZ", 1)).toBe("bA");
    });

    test("wrap works for shift larger than 26", () => {
      expect(caesarCipher("abc", 27)).toBe("bcd");
    });
  });

  describe("case preservation", () => {
    test("preserves per-character case", () => {
      expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    });

    test("preserves all-uppercase", () => {
      expect(caesarCipher("HELLO", 3)).toBe("KHOOR");
    });

    test("preserves all-lowercase", () => {
      expect(caesarCipher("hello", 3)).toBe("khoor");
    });
  });

  describe("punctuation and non-letters", () => {
    test("leaves spaces, commas, and exclamation marks untouched", () => {
      expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    });

    test("leaves digits untouched", () => {
      expect(caesarCipher("abc123", 1)).toBe("bcd123");
    });

    test("leaves symbols untouched", () => {
      expect(caesarCipher("a-b_c.d", 1)).toBe("b-c_d.e");
    });

    test("shifts letters but not surrounding punctuation", () => {
      expect(caesarCipher("...xyz...", 3)).toBe("...abc...");
    });
  });

  describe("shift normalization", () => {
    test("shift of 0 leaves the string unchanged", () => {
      expect(caesarCipher("Hello", 0)).toBe("Hello");
    });

    test("shift of 26 leaves the string unchanged", () => {
      expect(caesarCipher("Hello", 26)).toBe("Hello");
    });

    test("shift larger than 26 wraps around", () => {
      expect(caesarCipher("abc", 53)).toBe("bcd"); 
    });

    test("negative shift works", () => {
      expect(caesarCipher("bcd", -1)).toBe("abc");
    });

    test("negative shift wraps backwards across a", () => {
      expect(caesarCipher("abc", -3)).toBe("xyz");
    });
  });

  describe("empty and falsy input", () => {
    test("returns an empty string unchanged", () => {
      expect(caesarCipher("", 5)).toBe("");
    });

    test("returns null unchanged", () => {
      expect(caesarCipher(null, 5)).toBe(null);
    });

    test("returns undefined unchanged", () => {
      expect(caesarCipher(undefined, 5)).toBe(undefined);
    });
  });

  describe("properties", () => {
    test("encrypting then decrypting returns the original", () => {
      const original = "Hello, World!";
      const encrypted = caesarCipher(original, 3);
      expect(caesarCipher(encrypted, -3)).toBe(original);
    });

    test("encrypting with shift N then 26-N returns the original", () => {
      const original = "The Quick Brown Fox";
      const encrypted = caesarCipher(original, 7);
      expect(caesarCipher(encrypted, 19)).toBe(original);
    });

    test("preserves string length", () => {
      const input = "Hello, World! 123";
      expect(caesarCipher(input, 5)).toHaveLength(input.length);
    });

    test("does not mutate the original string", () => {
      const original = "hello";
      caesarCipher(original, 3);
      expect(original).toBe("hello");
    });

    test("returns a string type", () => {
      expect(typeof caesarCipher("hello", 3)).toBe("string");
    });
  });
});
