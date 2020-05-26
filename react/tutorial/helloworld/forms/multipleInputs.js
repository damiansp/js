class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isGoing: true, nGuests: 2};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input name="isGoing"
                 type="checkbox"
                 checked={this.state.isGoing}
                 onChange={this.handleInputChange} />
      </label>
      <br />
      <label>
        Number of Guests:
        <input name="nGuests"
               type="number"
               value={this.state.nGuests}
               onChange={this.handleInputChange} />
      </label>
    </form>);
  }
}


// Controlled input null values
ReactDOM.render(<input value="hi" />, mountNode);

setTimeout(function() {
    ReactDOM.render(<input value={null} />, mountNode);
}, 1000);
