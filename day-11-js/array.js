function printPyramid(){
    for(let i=1;i<=5;i++){
        for(let j=5;j>=i;j--){
            console.log("*");
        }
        console.log("\n");
    }
}
printPyramid()



/*function filterDemo1(){
    let numbers = [1,2,3,4,5];
    const incremented = numbers.filter((value)=> value%2==0);
    console.log(incremented);
    console.log(numbers);
}
filterDemo1()
*/



/* const callback = (value,index) => {
        console.log(value,index);
        return value+1;
    } 
    
    
    function demo1(){
    let numbers = [1,2,3,4,5];
    const incremented = numbers.map(callback);
    console.log(incremented);
    console.log(numbers);
}
demo1();
*/