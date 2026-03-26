const users = [
   { id: 1, name: "A", active: true },
   { id: 2, name: "B", active: false },
   { id: 3, name: "C", active: true },
];
console.log(users[0].name);
users.forEach( (user) => {
    user.active = !user.active;
})
console.log(users);

/*function countActive(users) {
    return users.filter( (user, index) => {
        return user.active;
});
}
console.log(countActive(users));
*/




// const user1 ={
//     name : 'Pariwesh',
//     age:18,
//     address : {
//         house: 66,
//         street : 'kayyar',
//         pincode: 560099
//     }
// }
// console.log(user1.name);
// console.log(user1.address.pincode);

