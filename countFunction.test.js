class SkylabArray {
  constructor(index0, index1, index2) {
    this.index0 = index0;
    this.index1 = index1;
    this.index2 = index2;
  }
}

let exampleVariable = new SkylabArray(2, 4, 6);

describe("Given a new variable", () => {
  describe("When receives the SkylabArray class with 2, 4 and 6 values and we call the index2", () => {
    test("Then it result is 6", () => {
      exampleVariable = new SkylabArray(2, 4, 6);
      const expectedResult = 6;

      const result = exampleVariable.index2;
      expect(result).toBe(expectedResult);
    });
  });
});
