const Events = new require('../../event-pubsub.js');

const events=new Events;

/**********************************\
 *
 * Demonstrate once
 *
 * ********************************/
 events.once(
     'test.once',
     (data)=>{
       console.log(`got data ${data} from .once`)
     }
 );

 events.on(
     'test.once',
     (data)=>{
       console.log(`got data ${data} from .on with true`)
     },
     true //this sets once to true
 );

/************************************\
 * emit events for testing
 * **********************************/
events.emit(
    'test.once',
    '-TESTING-'
);
