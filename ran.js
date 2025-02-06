Initializing while declaring
    // Creates an array having elements 10, 20, 30, 40, 50
    var house = new Array(10, 20, 30, 40, 50);
    
    // Creates an array of 5 undefined elements
    var house1 = new Array(5);
    
    // Creates an array with element 1BHK
    var home = new Array("1BHK");
    console.log(house)
    console.log(house1)
    console.log(home)
// String written inside quotes
    var x = "Welcome to GeeksforGeeks!";
    console.log(x);
    
      // Declare an object
    var y = new String("Great Geek");
   console.log(y);
   
   
    let a = "abcdefgh";

    // Finding the first index of the character 'b'
    console.log(a.indexOf('b'));
    //1


    let a2 = "Hello World";

    let arrString = ["Geeks", "for", "Geeks"]

    // Replacing the word 'World' with 'Geeks'
    console.log(a2.replace("World", arrString[0]));
    //hello geeks
let a = 9;
let b = 12;
function fun() {
    return a * b;  // Correct way to return the value
}
console.log(fun()); // Output: 108

for (let i = 1; i <= 5; i++) {
    console.log(`${i} - ${i * i}`);
}

