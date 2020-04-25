const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((n) => <li key={n.toString()}>{n}</li>);
const toDoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
const doneItems = dones.map((dones, index) =>
  // Only if items don't have a more stable ID
  <li key={index}>{dones.text}</li>);


// Extracting components with keys
/* Incorrect Usage Example */
function ListItem(props) {
  const value = props.value;
  return (
    // WRONG! No need to specify a key here
    <li key={value.toString()}>{value}</li>);
}


function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((n) =>
    // WRONG! Key should be specified here
    <ListItem value={n} />);
  return <ul>{listItems}</ul>;
}


const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(<NumberList numbers={numbers} />,
                document.getElementById('root'));
