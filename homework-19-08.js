1. 
https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/solutions/javascript

function stringToArray(string){
  return string.split(' ');
}

2.
https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
let letterT = /T/g
  return dna.replace(letterT , āUā);
}

3.
https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function(list){


    return Math.min(...list);
}

var max = function(list){

    return Math.max(...list);
}
4. 
https://www.codewars.com/kata/544a54fd18b8e06d240005c0/solutions

const min = (arr, toReturn) => toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));

5.
https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(queue) {
  queue.reverse();
  for (let i = 0; i < queue.length; i++) {
    if (queue[0] === "wolf") {
      return "Pls go away and stop eating my sheep";
    }
    if (queue[i] !== "sheep") {
      return "Oi! Sheep number " + i + "! You are about to be eaten by a wolf!";
    }
  }
} 

6. 
https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

function maps(x){
  return x.map (num => num * 2) 
}

7. 
https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] + 1 !== arr[i]) return arr[i];
    }
    return null;
} 
