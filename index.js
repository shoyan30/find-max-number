//Findin max number into two number

// const first = 200;
// const second = 250;
// const third =350;
// if(first>second){
//     console.log("First is begger");
// }else{
//     console.log("Second is begger");
// }

//finding max number into three number

// if(first>second && first>third){
//     console.log("First is begger");
// }
// else if(second>first && second>third){
//     console.log("Second is begger");
// }else{
//     console.log("Third is begger");
// }

//using math function

// const maxNumber=Math.max(first,second,third);
// console.log(maxNumber);


//using Normal Function
function number(first,second,third){
    if(first>second && first>third){
        return first;
    }
    else if(second>first && second>third){
        return second;
    }else{
        return third;
    }
}

const maxNumber=number(250,350,120);
console.log(maxNumber);