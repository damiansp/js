function UserGreeting(props) {
  return <h1>Welcome Back!</h1>
}


function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}


function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) { return <User Greeting />; }

  return <Guest Greeting />;
}


ReactDOM.render(<Greeting isLoggedIn={false} />,
                document.getElementById('root'));



// Element Variables
function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}


function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}


class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() { this.setState({isLoggedIn: true}); }

  handleLogoutClick() { this.setState({isLoggedIn: false}); }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LogingButton onClick={this.handleLoginClick} />;
    }
    return <div><Greeting isLoggedIn={isLoggedIn} />{button}</div>;
  }
}


// Conditional rendering with ? :
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>The user is<b>{isLoggedIn ? 'currently' : 'not'}</b> logged in</div>);
}


render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} />
       : <LoginButton onClick={ths.handleLoginClick} />}
    </div>);
}


ReactDOM.render(<LoginControl />, document.getElementById('root'));


// Prevent component from rendering
function WarningBanner(props) {
  if (!props.warn) { return null; } /* voila! */
  return <div className="warning">Warning!</div>
}


class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({ showWarning: !state.showWarning }))
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>);
  }
}


ReactDOM.render(<Page />, document.getElementById('root'));
