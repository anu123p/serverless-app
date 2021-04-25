import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { username, firstname,lastname,email } = this.state;




    const api = 'https://16jf7g3elc.execute-api.us-east-1.amazonaws.com/default/addbooks';

    const response = await fetch(api, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc
      body: JSON.stringify({"title":"test","author":"test"}) // body data type must match "Content-Type" header
    }).then(function(data){console.log(data);});


    // const data = JSON.stringify({ "title":"test",
    //   //"author":`test`,
    //   //"key3":`test`,
    //   "author":["test"] });
    // axios
    //     .post(api)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
  }

  render() {
    console.log("Reached here"+ this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
          />

          <label>firstname:</label>
          <input
            type="text"
            name="firstname"
            onChange={this.handleChange}
            value={this.state.firstname}
          />

          <label>Lastname:</label>
          <input
              type="text"
              name="lastname"
              onChange={this.handleChange}
              value={this.state.lastname}
          />

          <label>Email:</label>
          <input
              type="text"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
          />

          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
