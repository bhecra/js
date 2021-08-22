// // const s = 123234;

// const s = process.argv[2];

// let split = s;

// try {
//   split = s.split('').reverse().join('');
// } catch (error) {
//   console.log(error.message);
// } finally {
//   console.log(split);
// }

const EventEmmiter = require('events');

class MyClass extends EventEmmiter {}

const miEmmiter = new MyClass();

miEmmiter.on('event', function (a, b) {
  console.log(a, b, this === miEmmiter);
});

miEmmiter.emit('event', 'a');
