import Axios from 'axios';
import React, { Component } from 'react';

export default class NewStudentForm extends Component {
    constructor(){
        super();
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const onKeys = e.target.name
        const onValues = e.target.value
        this.setState({
            [onKeys]:onValues
        })
    }

    async handleSubmit (e) {
        try {
        e.preventDefault();
        const studentInfo = this.state
        const {data:student} = await Axios.post('/api/students', studentInfo)
        this.setState({
            firstName:'',
            lastName:'',
            email:''
        })} catch (err){
            console.log(err)
             }       
    }

  render() {
    return (
      <form>``
        <label>
          First Name:
          <input required type="text" name="firstName" onChange={this.handleChange}/>
        </label>

        <label>
          Last Name:
          <input required type="text" name="lastName" onChange={this.handleChange}/>
        </label>

        <label>
          Email:
          <input required type="email" name="email" onChange={this.handleChange}/>
        </label>

        <button type="submit" onClick={this.handleSubmit}>Submit New Student</button>
      </form>
    );
  }
}
