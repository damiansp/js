import React from 'react';
import ReactDOM from 'react-dom';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// also ok:
class Welcome2 extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}


// Composing Components
function App() {
  return (
    <div>
      <Welcome name="Albert" />
      <Welcome name="Betty" />
      <Welcome name="Cindy" />
    </div>
  );
}


// Extracting Components
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}


function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.author} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}


function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}





ReactDOM.render(<App />, document.getElementById('root'));
