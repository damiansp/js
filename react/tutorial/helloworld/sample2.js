function formatName(user) {
  return user.firstName + ' ' + user.surname;
}

const user = {firstName: 'Damian',
              surname: 'Phillips'};
const greeting = <h1>Hello, {formatName(user)}!</h1>;

function getGreeting(user) {
  if (user) { return <h1>Hello, {formatName(user)}!</h1>; }
  return <h1>Howdy, Stranger.</h1>;
}

const element = <div tabIndex='0'></div>;
const avatarImg = <img src={user.avatarURL} />;
const embedded = (
  <div>
    <h1>Hello!</h1>
    <h2>So nice to see you!</h2>
  </div>
);

// No worries about injection attacks
const userInput = response.potentiallyMaliciousInput;
const userData = <h1>{userInput}</h1>; // safe to do

ReactDOM.render(greeting, document.getElementById('root'));
