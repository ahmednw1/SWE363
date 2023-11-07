const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {}
const customEmitter = new CustomEmitter();


customEmitter.on('userLoggedIn', (user) => {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${timestamp}: ${user} logged in`);
});

customEmitter.on('userLoggedOut', (user) => {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${timestamp}: ${user} logged out`);
});


function simulateUserAction() {
  const users = ['User1', 'User2', 'User3', 'User4'];
  const randomUser = users[Math.floor(Math.random() * users.length)];

  if (Math.random() < 0.5) {
    customEmitter.emit('userLoggedIn', randomUser);
  } else {
    customEmitter.emit('userLoggedOut', randomUser);
  }
}

simulateUserAction();
