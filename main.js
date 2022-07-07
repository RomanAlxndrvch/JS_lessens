const names = [
  'Artur',
  'Bob',
  'Vlad',
  'Alex',
  'Donald',
  '007',
  'alexander',
  'юрій',
];

const numbers = [100, 99, 665, 1000, 2]; // ['007', 'Alex', 'Artur', 'Bob', 'Donald', 'Vlad', 'alexander', 'юрій']

const compFn = (a, b) => {
  return a > b ? -1 : 1;
};

console.log(numbers.sort()); // [100, 1000, 2, 665, 99]
console.log(numbers.sort(compFn)); // [100, 1000, 2, 665, 99]
console.log(numbers.sort((a, b) => a - b)); // [2, 99, 100, 665, 1000]
