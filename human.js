function Human(firstname, lastname, age) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;

  this.speak = function adim(greetings) {
    console.log("I am " + this.firstname + ": " + greetings);
  }

  this.introduce = function() {
    return `I am ${this.firstname} ${this.lastname} and I am ${this.age} years old`;
  }
}


String.prototype.blank = function blank() {
  return !! this.match(/^[\s\t\n]*$/);
}

Array.prototype.last = function last() {
  return this[this.length -1];
}
