import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Navbar from '../components/Navibar';
import styled from 'styled-components'
import '../css/Login.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


export default class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            email:"",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
    }
    // Google Login
    responseGoogle = (res) => {
        console.log(res);
    }

    //Login Fail
    responseFail = (err) => {
        console.error(err)
    }

    // Facebook Login
    responseFacebook = (response) => {
        console.log(response);
    }

    render() {
        return(
            <div className="">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="fname" className='Loginform'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder='type your first name' />
                    </Form.Group>
                    <Form.Group controlId="lname" className='Loginform'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder='type your last name' />
                    </Form.Group>
                    <Form.Group controlId="lname" className='Loginform'>
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control placeholder='type your mobile number'/>
                    </Form.Group>
                    <Form.Group controlId="email" className='Loginform'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control autoFocus type="email" value={this.state.email} onChange={this.handleChange} placeholder='type your email'/>
                    </Form.Group>
                    <Form.Group controlId="password" className='Loginform'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={this.state.password} onChange={this.handleChange} type="password" placeholder='password'/>
                    </Form.Group>
                    <Form.Group controlId="password" className='Loginform'>
                        <Form.Label>Verify Password</Form.Label>
                        <Form.Control value={this.state.password} onChange={this.handleChange} type="password" placeholder='verify password'/>
                    </Form.Group>
                    
                    <Button size='lg' className='btn1 Login'  block disabled={!this.validateForm()} type="submit">Register</Button>
                </Form>
            </div>
        );
    }
}