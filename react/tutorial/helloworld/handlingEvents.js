// html:
<button onclick="activateLasers()">Activate Lasers</button>;

// react:
<button onClick={activateLasers}>Activate Lasers</button>;

function ActionLink() {
  function handleClick(e) {
    e.preventDefault(); // Necessary in react to prevent default behavior
    console.log('The link was clicked.');
  }
  return <a href="#" onClick={handleClick}>Click Me</a>;
}


class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    // This binding necessary to make `this` work in callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({isToggleOn: !state.isToggleOn}));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>);
  }
}


ReactDOM.render(
  <Toggle />,
  document.getElementById('root'));


class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound to handleClick. (Warning: experimental)
  handleClick = () => { console.log('this is:', this); };

  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

// Alternately
class LogginButton2 extends React.Component {
  handleClick() { console.log('this is:', this); }

  render() {
    // This syntax ensures `this` bound to handleClick:
    return <button onClick={() => this.handleClick()}>Click Me</button>;
  }
}


<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>; // same as
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>;
