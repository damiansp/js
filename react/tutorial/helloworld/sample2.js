function formatName(user) {
  return user.firstName + ' ' + user.surname;
}


const user = {firstName: 'Damian',
              surname: 'Phillips'};
const greeting = <h1>Hello, {formatName(user)}!</h1>;


ReactDOM.render(greeting, document.getElementById('root'));
