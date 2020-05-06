const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => 2 * n);
console.log(doubled);


// Rendering multiple components
const listItems = numbers.map((n) => <li>{n}</li>);


ReactDOM.render(<ul>{listItems}</ul>, document.getElementById('root'));


// Basic List Component
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((n) => <li key={n.toString()}>{n}</li>);
  return <ul>{listItems}</ul>;
}

ReactDOM.render(<NumberList numbers={numbers} />,
                document.getElementById('root'));

// Keys
const listItems = numbers.map((n) => <li key={n.toString()}>{n}</li>);
const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
// prev. is better, but if there is no stable ID, also ok:
const todoItems = todos.map((todo) => <li key={index}>{todo.text}</li>);
//...if order and items not expected to change


// Extracting components with keys
/* Incorrect usage */
function ListItem(props) {
  const value = props.value;
  // Wrong! NO need for keys here
  return <li key={value.toString()}>{value}</li>;
}


function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((n) =>
    // Wrong! Key should be specified here
    <ListItem value={n} />);
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(<NumberList numbers={numbers} />,
                document.getElementById('root'));

/* Correct Usage */
function ListItem(props) {
  // Correct! No need for key here
  return <li>{props.value}</li>
}


function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((n) =>
    // Correct! Key should be specified inside array
    <ListItem key={n.toString()} value={n} />);
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(<NumberList numbers={numbers} />,
                document.getElementById('root'));


// Keys must only be unique among siblings
