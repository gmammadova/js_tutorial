let states = ["Kansas", "Nebraska", "South Dakota", "North Dakota"];

//Return a url friendly version of a string
function urlify(string) {
  return string.toLowerCase().split(/\s+/g).join("-");
}

//Converting name of states to lwers  case North Dakota -> north-dakota
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

function fullAddress(states) {
  return states.map( state => "https://example.com/" + state);
}
console.log(fullAddress(states));

//Functional singles
function functionalSingles(elements) {
  return elements.filter( element => element.split(/\s+/g).length === 1);
}
console.log(functionalSingles(states));

//checking if Dakota in present in array using methon includes()
function returnDakota(elements) {
  return elements.filter( element => element.includes("Dakota"));
}
console.log(returnDakota(states));

//checking the presence of Dakota using regex that test for the length of the split array being 2

function returnDakota(elements) {
  return elements.filter( element => element.split(/\s+/g).length === 2);
}
console.log(returnDakota(states));


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// //sum: Imperative solution
// function imperativeSum(elements) {
//   let total = 0;
//   elements.forEach(function (n) {
//     total = total + n;
//   })
//   return total;
// }
// console.log(imperativeSum(numbers));

//sum: functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n;}, 0);  //0 is initial value. in this case it's 0 and we can not include it
}
console.log("printing the sum of numbers");
console.log(functionalSum(numbers));


function functionalMultiplication(elements) {
   return elements.reduce( (product, n) => {return  product = product * n }, 1);
}
console.log("printing the product of numbers");
console.log(functionalMultiplication(numbers));

//lengths: imperative solution
// function imperativeLengths(elements) {
//   let lengths = {};
//   elements.forEach(function (element) {
//     lengths[element] = element.length;
//   });
//   return lengths;
// }
// console.log(imperativeLengths(states));


//lenghts: functional solution
function functionalLenths(elements) {
  return elements.reduce((lenghts, element) => {
    lenghts[element] = element.length;
    return lenghts;
  }, {})
}
console.log(functionalLenths(states));

//imperative singles
// function imperativeSingles(elements) {
//   let singles = [];
//   elements.forEach(function(element){
//     if (element.split(/\s+/g).length === 1) {
//       singles.push(element);
//     }
//   });
//   return singles;
// }
// console.log(imperativeSingles(states));


// //Classic version (imperative)
//   let myfunc = function(element) {
//     urls.push(element.toLowerCase().split(/\s+/g).join("-"));
//   }
//
//   for (var i = 0; i < elements.length; i++) {
//     let element = elements[i]
//     myfunc(element)
//   }
// //
