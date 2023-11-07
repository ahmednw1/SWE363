const predefinedResponses = {
    'hello': 'Hello!',
    'how are you': 'fine',
    'what is your name': 'Ahmed',
    'exit': 'Goodbye!',
  };
  
  function getResponse(input) {
    input = input.toLowerCase();
    return predefinedResponses[input] || "try again";
  }
  
  function chat() {
    process.stdout.write('You: ');
  
    process.stdin.on('data', (data) => {
      const userInput = data.toString().trim();
      
      if (userInput.toLowerCase() === 'exit') {
        console.log(getResponse('exit'));
        process.exit(0);
      } else {
        const response = getResponse(userInput);
        console.log(`Chatbot: ${response}`);
        process.stdout.write('You: ');
      }
    });
  }
  
  console.log('Chatbot: Hello! (Type "exit" or "quit" to end the chat)');
  chat();
  