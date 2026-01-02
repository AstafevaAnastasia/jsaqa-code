const { sortByName } = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ]),
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("Returns original array when all names are equal", () => {
    const input = ["Азбука", "Азбука"];
    const result = sortByName(input);
    expect(result).toEqual(["Азбука", "Азбука"]);
    expect(result).toBe(input);
  });

  it("Sorts array with identical names", () => {
    const input = ["Книга A", "Книга A", "Книга A"];
    const result = sortByName(input);
    expect(result).toEqual(["Книга A", "Книга A", "Книга A"]);
    expect(result).toBe(input);
  });

  it("Sorts array with one element", () => {
    const input = ["Одна книга"];
    const result = sortByName(input);
    expect(result).toEqual(["Одна книга"]);
    expect(result).toBe(input);
  });

  it("Returns empty array when input is empty", () => {
    const input = [];
    const result = sortByName(input);
    expect(result).toEqual([]);
    expect(result).toBe(input);
  });

  it("Sorts array with mixed order correctly", () => {
    const input = ["Яблоко", "Апельсин", "Банан"];
    const result = sortByName(input);
    expect(result).toEqual(["Апельсин", "Банан", "Яблоко"]);
  });

  it("Maintains stable sort for equal elements", () => {
    const input = [
      { name: "Книга 1" },
      { name: "Книга 2" },
      { name: "Книга 1" },
    ];

    const result = sortByName(input);
    expect(result).toEqual([
      { name: "Книга 1" },
      { name: "Книга 1" },
      { name: "Книга 2" },
    ]);
  });
});
