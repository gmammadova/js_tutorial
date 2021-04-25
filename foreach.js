let a = ["tomato", "pepper", "cucumber", "onion", 65];
a.forEach(function(arrayElements) {
  console.log(arrayElements);
});

//Previous array with fat arrow
a.forEach(arrayElements => {
  console.log(arrayElements);
});

let soliloquy = "To be, or not no be, that is the question:";
  Array.from(soliloquy).forEach(function(element) {
    console.log(element);
  });


let numbers = [3, 65, 23, 74, 1];
numbers.sort(function(a, b) { return a - b });
numbers.forEach(function(nums){
  console.log(nums);
});



let b = "This is a test";
Array.from(b).forEach(function(letters) {
  console.log(letters);
});
