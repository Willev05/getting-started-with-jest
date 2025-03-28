const filterByTerm = require("../src/filterByTerm");

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        const input = [
          { id: 1, url: "https://www.url1.dev" },
          { id: 2, url: "https://www.url2.dev" },
          { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [{ id: 3, url: "https://www.link3.dev" }];

        expect(filterByTerm(input, "link")).toEqual(output);
        expect(filterByTerm(input, "LINK")).toEqual(output);
      }),

      test ("it should filter by a search term (url)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
          ];

          const output = [{ id: 1, url: "https://www.url1.dev" }, { id: 2, url: "https://www.url2.dev" }];

          expect(filterByTerm(input, "uRl")).toEqual(output);
      }),

      test ("it should throw when a search term is empty", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
          ];

          expect(() => filterByTerm(input, "")).toThrow("searchTerm cannot be empty");
      });

      test ("it should throw when the input is empty", () => {
        const input = [];

          expect(() => filterByTerm(input, "LINK")).toThrow("inputArr cannot be empty");
      });
  });