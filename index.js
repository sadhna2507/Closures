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




function counter(){
    var count = 1;
    count++;
    console.log(count);

}
// console.log(counter);
counter();// output = 2
counter();// output = 2
counter();// output = 2
counter();// output = 2

// everytime it will give 2 as output

