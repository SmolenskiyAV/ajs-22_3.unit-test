import sum, {healthIndication, sortArray} from '../basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});

// проверка работы функции индикации здоровья
test('shoud indicate health', () => {
  const result = healthIndication({name:'Байден', health:14});
  expect(result).toBe('Байден: critical');
});

// проверка работы функции сортировки
test('shoud check array sorting', () => {
  let arr = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];
  const result = sortArray(arr);
  expect(result).toEqual(
    [
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
      {name: 'мечник', health: 10},
    ]
  )
});
