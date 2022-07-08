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

const students = [
    {
        name: 'Bob',
        isMarried: true,
        scores: 95
    },
    {
        name: 'Alex',
        age: 23,
        scores: 89,
    },
    {
        name: 'Helge',
        age: 21,
        scores: 89
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 121
    },

]

console.log(students.sort((a, b) => b.scores - a.scores))
console.log(students.sort((a, b) => a.scores - b.scores).reverse())
console.log(students.sort((a, b) => a.name.localeCompare(b.name)))
console.log(students.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))

// bubble sort

const nums = [13, 45, 67, 12, 99, 87] // from smaller to bigger

for (let j = 0; j < nums.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < nums.length - 1 - j; i++) {
        if (nums[i] > nums[i + 1]) {
            isSorted = false;
            /* let temp = nums[i]
             nums[i] = nums[i + 1]
              nums[i + 1] = temp*/

            //OR

            [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]]
        }
    }
    if (isSorted) break
}


console.log(nums)