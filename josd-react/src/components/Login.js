import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import logo from '../logo.png'
import Image from 'react-bootstrap/Image'
import '../css/Login.css'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Login extends Component {
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
                <Container>
                    <Image src={logo} alt="logo" className='logobox' rounded/>
                </Container>
                
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="email" className='Loginform'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control autoFocus type="email" value={this.state.email} onChange={this.handleChange} />
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
                                    <a href='./' className='font12'>Forgot your password?</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Button size='lg' className='btn1 Login'  block disabled={!this.validateForm()} type="submit">Login</Button>
                </Form>
                <div className='container'>
                    <p className='font12'>Don't have an account? <a href='./register' className='font12'>Sign Up</a></p>
                </div>

                <Container>
                    <Row>
                        <Col xs={6}>
                            <GoogleLogin
                                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                    render={renderProps => (
                                        <i class="fab fa-google-plus fa-3x" onClick={renderProps.onClick}></i>
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
                                    <i class="fab fa-facebook fa-3x" onClick={renderProps.onClick}></i>
                                )}
                            />
                        </Col>
                    </Row>
                </Container>
                

            </div>
        );
    }
}