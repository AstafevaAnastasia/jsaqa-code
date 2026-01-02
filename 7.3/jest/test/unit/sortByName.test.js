const { sortByName } = require('../../app');

describe('Books names test suit', () => {
  it('Books names should be sorted in ascending order', () => {
    expect(
      sortByName([
        'Гарри Поттер',
        'Властелин Колец',
        'Волшебник изумрудного города',
      ])
    ).toEqual([
      'Властелин Колец',
      'Волшебник изумрудного города',
      'Гарри Поттер',
    ]);
  });

  it('Returns original array when all names are equal', () => {
    const input = ['Азбука', 'Азбука'];
    const result = sortByName(input);
    expect(result).toEqual(['Азбука', 'Азбука']);

    expect(result).toBe(input);
  });
});