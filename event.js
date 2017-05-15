'use strict';

// inspired by : https://www.youtube.com/watch?v=NtrnaTKqFPQ

const EventEmitter = require('events');
const util = require('util');

class Person extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

let james = new Person('james');

james.on('speak', function (msg){
  console.log(james.name + ' said: ' + msg)
});

james.emit('speak', 'hello');
