// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function() {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      connection.write("Move: up");
    }
    if (key === 'a') {
      connection.write("Move: left");
    }
    if (key === 's') {
      connection.write("Move: down");
    }
    if (key === 'd') {
      connection.write("Move: right");
    }
    if (key === 'j') {
      connection.write("Say: You snooze you lose!")
    }
    if (key === 'k') {
      connection.write("Say: I'm faster than you!")
    }
    if (key === 'h') {
      connection.write("Say: I am the best snek!!")
    }
  });
};

module.exports = {
  setupInput,
};