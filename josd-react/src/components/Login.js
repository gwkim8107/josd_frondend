import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import { CommonContext } from '../contexts/CommonContext';
import '../css/Login.css';
import logo from '../logo.png';
import ApiService from '../services/ApiService';
import { getCurrentDate } from './Util';

export default class Login extends Component {
    // static contextType = CommonContext;
    

    constructor(props){
        super(props);
        this.state = {
            username:"",
            password: "",
            rec_dt: ""
        };
        this.chkUser = this.chkUser.bind(this);
    }




    // login
    chkUser = (e) => {
        e.preventDefault();
        let user_id = this.state.username;
        let user_pw = this.state.password;
        let rec_dt = this.state.rec_dt;
        
        if(rec_dt === ""){
            rec_dt = getCurrentDate();
        }
        console.log("rec_dt = "+ rec_dt);
        // updateAccount(user_id);
        console.log("user_id= " + user_id)

        ApiService.chkUser(user_id, user_pw)
            .then((res) =>{
                console.log("result= "+res.data);
                if (res.data === "Success"){
                    window.localStorage.setItem("local_user_id",user_id);
                    window.localStorage.setItem("local_rec_dt",rec_dt);
                    this.props.history.push(`/home/${user_id}/${rec_dt}`);
                    // return <Link to={`/home`}/>

                }else{
                    console.log(res.data);
                    window.confirm('There is no username. Please try again.');
                }

            });

    }


    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0
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
        // const { updateAccount } = this.context;
        return(
            
            <div className="">
                <Container>
                    <Image src={logo} alt="logo" className='logobox' rounded/>
                </Container>
                
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="username" className='Loginform'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control autoFocus value={this.state.username} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="password" className='Loginform'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={this.state.password} onChange={this.handleChange} type="password"/>
                    </Form.Group>
                    <Container className='Loginform'>
                        <Row>
                            <Col xs={6}>
                                <Form.Check type="checkbox" label="Remember Password" className='Login1 font12'/>
                            </Col>
                            <Col xs={6}>
                                <div className='Login2'>
                                    {/* RESET PASSWORD */}
                                    <a href='./resetpw' className='font12'>Forgot your password?</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Button size='lg' className='btn1 Login'  block disabled={!this.validateForm()} type="submit" onClick={this.chkUser}>Login</Button>
                    {/* <Button size='lg' className='btn1 Login'  block disabled={!this.validateForm()} type="submit" onClick={updateAccount}>test</Button> */}
                </Form>
                <div className='container'>
                    <p className='font12'>Don't have an account? <a href='./reg' className='font12'>Sign Up</a></p>
                </div>

                <Container>
                    <Row>
                        <Col xs={6}>
                            <GoogleLogin
                                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                    render={renderProps => (
                                        <i className="fab fa-google-plus fa-3x" onClick={renderProps.onClick}></i>
                                    )}
                                    icon={true}
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseFail}
                                    cookiePolicy={'single_host_origin'}
                            />
                        </Col>
                        <Col xs={6}>
                            <FacebookLogin
                                appId="1088597931155576"
                                callback={this.responseFacebook}
                                render={renderProps => (
                                    <i className="fab fa-facebook fa-3x" onClick={renderProps.onClick}></i>
                                )}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

Login.contextType = CommonContext;