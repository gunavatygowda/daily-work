// function add(a,b) {
//     console.log(arguments);
//     let total=0;
//     for(let i=0;i<arguments.length;i++){
//         total = total + arguments[i];
//     }
//     return total;
// }
// const result = add(3,4,6,6);

// console.log(result);


function addAsArrow(numbers){
    let total =0;
    for(let i=0;i<numbers.length;i++){
        total+=numbers[i];
        return numbers;
    }
}




const result = addAsArrow([3,4,6,6]);
console.log(result);