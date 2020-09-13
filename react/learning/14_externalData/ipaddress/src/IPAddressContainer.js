import React, { Component } from 'react';
import IPAddress from './IPAddress';


let xhr; // xmlHttpRequest

class IPAddressContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {ipAddress: '...'};
    this.processRequest = this.processRequest.bind(this);
  }

  componentDidMount() {
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ipinfo.io/json', true);
    xhr.send();
    xhr.addEventListener('readystatechange', this.processRequest, false);
  }

  processRequest() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      this.setState({ipAddress: response.ip});
    } else { this.setState({ipAddress: '123.45.67.89'}) };
  }
  
  render () { return <IPAddress ip={this.state.ipAddress} />; }
}


export default IPAddressContainer;
