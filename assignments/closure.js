// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const club = _ => {
  const manager = "B. Johnson";
  const payTheMan = _ => {
    console.log(`${manager} wants his money. Pay the man.`);
  }
  payTheMan();
}

club();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
// const counter = () => {
//   // Return a function that when invoked increments and returns a counter variable.
// };
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const c = _ => {
  let counter = 0;
  return _ => counter += 1;
}

const nc = c();

for (let i = 0; i < 20; i++) console.log(nc());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// const counterFactory = () => {
//   // Return an object that has two methods called `increment` and `decrement`.
//   // `increment` should increment a counter variable in closure scope and return it.
//   // `decrement` should decrement the counter variable and return it.
// };

const cF = _ => {
  let counter = 0;
  return {
    increment () {
      return counter += 1;
    },
    decrement () {
      return counter -= 1;
    }
  }
}

const nC = cF();

for (let i = 0; i < 10; i++) console.log(nC.increment());

for (let i = 0; i < 5; i++) console.log(nC.decrement());

