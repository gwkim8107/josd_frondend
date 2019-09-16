import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Navbar from '../components/Navibar';
import styled from 'styled-components'
import '../css/Login.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ApiService from '../services/ApiService'


export default class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            email:"",
            id: "",
            password: "",
            confirmpwd: "",
            fname: "",
            lname: "",
            mnum: "",            
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {user_id: this.state.username, user_pw: this.state.password,
                f_name: this.state.fname, l_name: this.state.lname, user_email: this.state.email,
                user_contNum: this.state.mnum};
        ApiService.addUser(user)
            .then(res =>{
                console.log("done");
                this.setState({message: 'User added successfully.'});
                window.confirm('User added successfully.');
                this.props.history.push('/');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.id]:e.target.value });

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
                        <Form.Control placeholder='type your first name' value={this.state.fname} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="lname" className='Loginform'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder='type your last name' value={this.state.lname} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="mnum" className='Loginform'>
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control placeholder='type your mobile number' value={this.state.mnum} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="email" className='Loginform'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control autoFocus type="email" value={this.state.email} onChange={this.handleChange} placeholder='type your email'/>
                    </Form.Group>
                    <Form.Group controlId="username" className='Loginform'>
                        <Form.Label>UserName</Form.Label>
                        <Form.Control autoFocus value={this.state.username} onChange={this.handleChange} placeholder='Type your username'/>
                    </Form.Group>
                    <Form.Group controlId="password" className='Loginform'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={this.state.password} onChange={this.handleChange} type="password" placeholder='password'/>
                    </Form.Group>
                    <Form.Group controlId="confirmpwd" className='Loginform'>
                        <Form.Label>Verify Password</Form.Label>
                        <Form.Control value={this.state.confirmpwd} onChange={this.handleChange} type="password" placeholder='verify password'/>
                    </Form.Group>
                    <Button size='lg' className='btn1 Login' onClick={this.saveUser} block disabled={!this.validateForm()} type="submit">Register</Button>
                </Form>
            </div>
        );
    }
}