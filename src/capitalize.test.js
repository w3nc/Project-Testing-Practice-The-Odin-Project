import capitalize from "./capitalize.js";

describe("capitalizeFirst", () => {
  describe("basic capitalization", () => {
    test("capitalizes the first letter of a lowercase word", () => {
      expect(capitalize("hello")).toBe("Hello");
    });

    test("leaves an already-capitalized word unchanged", () => {
      expect(capitalize("Hello")).toBe("Hello");
    });

    test("only touches the first character", () => {
      expect(capitalize("hELLO")).toBe("HELLO");
    });

    test("capitalizes only the first word of a sentence", () => {
      expect(capitalize("hello world")).toBe("Hello world");
    });
  });

  describe("single character input", () => {
    test("capitalizes a single lowercase letter", () => {
      expect(capitalize("a")).toBe("A");
    });

    test("leaves a single uppercase letter unchanged", () => {
      expect(capitalize("A")).toBe("A");
    });
  });

  describe("empty and falsy input", () => {
    test("returns an empty string unchanged", () => {
      expect(capitalize("")).toBe("");
    });

    test("returns null unchanged", () => {
      expect(capitalize(null)).toBe(null);
    });

    test("returns undefined unchanged", () => {
      expect(capitalize(undefined)).toBe(undefined);
    });
  });

  describe("non-letter first character", () => {
    test("leaves a leading space alone", () => {
      expect(capitalize(" hello")).toBe(" hello");
    });

    test("leaves a leading digit alone", () => {
      expect(capitalize("123abc")).toBe("123abc");
    });

    test("leaves leading punctuation alone", () => {
      expect(capitalize("!wow")).toBe("!wow");
    });
  });

  describe("unicode", () => {
    test("capitalizes an accented letter", () => {
      expect(capitalize("émile")).toBe("Émile");
    });

    test("capitalizes a German umlaut", () => {
      expect(capitalize("über")).toBe("Über");
    });

    test("handles a string starting with an emoji without mangling it", () => {
      expect(capitalize("👋hello")).toBe("👋hello");
    });
  });

  describe("purity", () => {
    test("does not mutate the original string", () => {
      const original = "hello";
      capitalize(original);
      expect(original).toBe("hello");
    });

    test("returns a string type", () => {
      expect(typeof capitalize("hello")).toBe("string");
    });
  });
});
