function FancyBorder(props) {
  return (<div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
          </div>);
}


function WelcomeDialogue() {
  return(<FancyBorder color="blue">
           <h1 className="Dialogue-title">Welcome</h1>
           <p className="Dialogue-message">Thanks for visiting!</p>
         </FancyBorder>);
}


function SplitPane(props) {
  return (<div className="SplitPane">
            <div className="SplitPane-left">{props.left}</div>
            <div className="SplitPane-right">{props.right}</div>
          </div>);
}


function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}



// Specialization
function Dialogue(props) {
  return (<FancyBorder color="blue"
            <h1 className="Dialogue-title">{props.title}</h1>
            <p className="Dialogue-message">{props.message}</p>
          </FancyBorder>);
}


function WelcomeDialogue() {
  return <Dialogue title="Welcome" message="Thanks for visiting!" />;
}


function Dialogue(props) {
  return (<FancyBorder color="blue">
            <h1 className="Dialogue-title">{props.title}</h1>
            <p className="Dialogue-message">{props.message}</p>
            {props.children}
          </FancyBorder>);
}


class SignUpDialogue extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (<Dialogue title="Mars Exploration Program"
                      message="How should we refer you?">
              <input value={this.state.login} onChange={this.handleChange} />
              <button onClick={this.handleSignUp}>Sign Me Up!</button>
            </Dialogue>);
  }

  handleChange(e) { this.setState({login: e.target.value}); }

  handleSignUp() { alert(`Welcome aboard, ${this.state.login}!`); }
}
