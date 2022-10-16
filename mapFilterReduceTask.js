const users = [
    { firstName: 'John', lastName: 'Doe', age: 26},
    { firstName: 'Rahim', lastName: 'Iqbal', age: 26},
    { firstName: 'Shakib', lastName: 'Al Hasan', age: 33},
    { firstName: 'Lionel', lastName: 'Messi', age: 34},
    { firstName: 'Christiano', lastName: 'Ronaldo', age: 37}
  ];
  
  // Create an array that contains full name of each person who are older than 30
const olderThanThirty = users.filter(user => user.age > 30)
.map(user => user.firstName + ' ' + user.lastName)
console.log("Users older than 30: ", olderThanThirty);

//__________________________________________________________________________________ 
  // create an array of object that contains 
//   acc = {
//     26: 2,
//     33: 1,
//     34: 1,
//     37: 1
//   }

let ageCount = {};

users.filter((user) => {
  if (ageCount.hasOwnProperty(user.age)) {
    ageCount[user.age] ++;
  } else {
    ageCount[user.age] = 1;
  }
})
console.log('Age count:           ', ageCount) 