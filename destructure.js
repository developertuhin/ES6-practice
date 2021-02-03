  
const person = { name: 'Lahad Bapparaj', age: 23, job: 'WebDeveloper', gfName: 'Ema kumkum', address: 'Dhaka', phone: '0179866511', friends: ['Bad Prit', 'Will', 'Smith'] }

const { address, phone, gfName, salary } = person;
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, salary, address);
// console.log(gfName, phone, salary, address);


const friends = ['Salman Khan', 'Tuhin Khan', 'Aamir Khan', 'Shahrukh Khan', 'Ayub Khan'];
const [chotoFriend, ...olderF] = friends;
console.log(olderF)