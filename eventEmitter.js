let event = require('events');

event = new event.EventEmitter()

function listener(msg) {
    console.log(msg);
}
event.on('greetings', listener);
event.on('greetingsnew', listener);


event.emit('greetings', "hey what's going on");
event.emit('greetingsnew',"hiiiiiiiiii");
// removing a listener
// event.removeListener('greetings', listener)

// count listener
console.log(event.listenerCount('greetings'))

// event names
console.log(event.eventNames())
// #######################################
// Using the eventEmitter.once() method, it is possible to register a listener that is 
// called at most once for a particular event. Once the event is emitted, the listener 
// is unregistered and then called.
// myEmitter.once('event', () => {
//     console.log(++m);
// });
