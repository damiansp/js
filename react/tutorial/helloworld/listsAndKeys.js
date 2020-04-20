const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => 2 * n);
console.log(doubled);


// Rendering multiple components
const listItems = numbers.map((n) => <li>{n}</li>);


ReactDOM.render(<ul>{listItems}</ul>, document.getElementById('root'));


// Basic List Component
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((n) => <li key={number.toString()>{n}</li>);
  return <ul>{listItems}</ul>
}

ReactDOM.render(<NumberList numbers={numbers} />,
                document.getElementById('root'));

                
