import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import logo from '../logo.png'
import Image from 'react-bootstrap/Image'
import '../css/Login.css'
import GoogleLogin from 'react-google-login'
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

    render() {
        return(
            <div className="Login">
                <div className='container'>
                    <Image src={logo} alt="logo" fluid={false}/>
                </div>
                
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="email" className=''>
                        <Form.Label>Email</Form.Label>
                        <Form.Control autoFocus type="email" value={this.state.email} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={this.state.password} onChange={this.handleChange} type="password"/>
                    </Form.Group>
                    <div className='row'>
                        <div className='col-7 text-sm-left'>
                            <Form.Check type="checkbox" label="Remember Password" className='text-sm-left'/>
                        </div>
                        <div className='col-5'>
                            <a href='./' fontsize='12' className='text-sm-left'>Forgot your password?</a>
                        </div>
                    </div>
                    <Button size='lg' block disabled={!this.validateForm()} type="submit">Login</Button>
                </Form>
                <div className='container'>
                    <p>Don't have an account? <a href='./' fontsize='12' className='text-sm-left'>Sign Up</a></p>
                </div>

                <Container>
                    <Row>
                        <Col xs='6'>
                            <GoogleLogin
                                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                    className=''
                                    render={renderProps => (
                                        <i class="fab fa-google-plus fa-3x" onClick={renderProps.onClick}></i>
                                    )}
                                    icon={true}
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseFail}
                                    cookiePolicy={'single_host_origin'}
                            />
                        </Col>
                        <Col xs='6'>
                            {/* Facebook login */}
                            Facebook

                        </Col>
                    </Row>
                </Container>
                

            </div>
        );
    }
}