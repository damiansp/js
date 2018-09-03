function printableMessage() {
  var message = 'hello';

  function setMessage(newMessage) {
    if (!newMessage) { throw new Erro('Cannot set empty message'); }
    message = newMessage;
  }

  function getMessage() { return message; }

  function printMessage() { console.log(message); }

  return {
    setMessage: setMessage, getMessage: getMessage, printMessage: printMessage};
}

var neat1 = printableMessage();
neat1.printMessage();

var neat2 = printableMessage();
neat2.setMessage('Hi!');
neat2.printMessage();
neat1.printMessage();
