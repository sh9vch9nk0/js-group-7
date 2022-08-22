1. https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
 findSmallestInt(args) {
    return Math.min(...args)
  }
}

2. https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

function circleCircumference(circle) {
 return (circle.radius * 2 * Math.PI );
}

3. https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj){
  let arr = [];
  for (let key in obj) {
    if(obj.hasOwnProperty(key)) {
        if (key.length === 5) arr.push(key);
      if (obj[key].length === 5) arr.push(obj[key]);
    }
  }
  return arr;
}

4. https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(n){
  let fun = [];
    for (let i = 0; i< n; i++){
        fun.push(() => i);
    }
    return fun;
}

5. https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return super.introduce() + "  Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return Hello ${this.master};
  }
}
