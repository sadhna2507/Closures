// [].map(() => {})
// map is higher order function
// inside() that is the function we are calling is callback function


// scopes

// function demo() {
//     var name = 'sadhna';
//     console.log(name); // for this it is working
// }
// demo();
// console.log(name) // for this it is not working

// "var" is a function scope variable means whenever i call a function a new eecution context is created




// function counter(){
//     var count = 1;
//     count++;
//     console.log(count);

// }
// console.log(counter);
// counter();// output = 2
// counter();// output = 2
// counter();// output = 2
// counter();// output = 2

// everytime it will give 2 as output


// var count = 1;

// function counter(){
//     count++;
//     console.log(count);

// }
// console.log(counter);
// counter(); // output =2
// counter(); // output =3
// counter(); // output =4
// counter(); // output =5
// console.log(count);  // output =5 




// var count = 1;

// function counter(){
//     var age = 20;
//     function check(){
//         console.log("inside check", age, count)// here i can also access count because it is present on the top..means in global scope
//     }
//     check();
//     count++;
//     console.log(count);

// }
// counter();
// counter();
// counter();
// // console.log(age);
// // console.log(count);  // output =5


function createCounter(){
    let count = 1;

    function counterIncrement(){
        count++;
        return count;
    }
    return counterIncrement;
}
console.log(createCounter)
