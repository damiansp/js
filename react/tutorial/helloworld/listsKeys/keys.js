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


/* Keys must only be unique among siblings */
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>{post.title}</li>
      )};
    </ul>);
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>);
  return (
    <div>
      {sidebar}
    <hr />
      {content}
    </div>);
}


const posts = [
  {id: 1, title: 'Hello, World!', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'Installing React from npm.'}];

ReactDOM.render(<Blog posts={posts} />, document.getElementById('root'));


/* pass keys explicitly if need to be shared */
const content = posts.map((post) =>
  <Post key={post.id} id={post.id} title={post.title} />);


/* Embedding map() in JSX */
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()} value={number} />);
  return <ul>{listItems}</ul>;
}


function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((n) =>
        <ListItem key={n.toString()} value={n} />
      )}
    </ul>);
}

