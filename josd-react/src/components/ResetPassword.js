import React, { Component } from "react";
import { Link } from "react-router-dom";
import {HelpBlock} from "react-bootstrap";
import Form from 'react-bootstrap/Form'
//import LoaderButton from "../components/LoaderButton";
import "../css/ResetPassword.css";
import Button from 'react-bootstrap/Button'

export default class ResetPassword extends Component {
    
    constructor(props) {
            super(props);
            this.state = {
            code: "",
            email: "",
            password: "",
            codeSent: false,
            confirmed: false,
            confirmPassword: "",
            isConfirming: false,
            isSendingCode: false
        };
}

    validateCodeForm() {
        return this.state.email.length > 0;
    }

    validateResetForm() {
        return (
            this.state.code.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
        );
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSendCodeClick = async event => {
        event.preventDefault();

        this.setState({ isSendingCode: true });

        try {
            //await Auth.forgotPassword(this.state.email);
            this.setState({ codeSent: true });
        } catch (e) {
            alert(e.message);
            this.setState({ isSendingCode: false });
        }
    };

    handleConfirmClick = async event => {
        event.preventDefault();

        this.setState({ isConfirming: true });

        try {
            // await Auth.forgotPasswordSubmit(
            // this.state.email,
            // this.state.code,
            // this.state.password
            // );
            this.setState({ confirmed: true });
        } catch (e) {
            alert(e.message);
            this.setState({ isConfirming: false });
        }
    };

    renderRequestCodeForm() {
        return (
            <form onSubmit={this.handleSendCodeClick}>
            <Form.Group bsSize="large" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                />
            </Form.Group>
            <Button 
                block
                type="submit"
                size="lg"
                isLoading={this.state.isSendingCode}
                disabled={!this.validateCodeForm()}
            >Send Confirmation
            </Button>
            </form>
        );
    }

    renderConfirmationForm() {
    return (
        <form onSubmit={this.handleConfirmClick}>
        <Form.Group bsSize="large" controlId="code">
            <Form.Label>Confirmation Code</Form.Label>
            <Form.Control
            autoFocus
            type="tel"
            value={this.state.code}
            onChange={this.handleChange}
            />
            <p>
                Please check your email ({this.state.email}) for the confirmation
                code.
            </p>
        </Form.Group>
        <hr />
        <Form.Group bsSize="large" controlId="password">
            <Form.Label>New Password</Form.Label>
            <Form.Control
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            />
        </Form.Group>
        <Form.Group bsSize="large" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
            type="password"
            onChange={this.handleChange}
            value={this.state.confirmPassword}
            />
        </Form.Group>
        <Button
            block
            type="submit"
            size="lg"
            loadingText="Confirm…"
            isLoading={this.state.isConfirming}
            disabled={!this.validateResetForm()}>Confirm</Button>
        </form>
    );
    }

    renderSuccessMessage() {
    return (
        <div className="success">
        {/* <Glyphicon glyph="ok" /> */}
        <p>Your password has been reset.</p>
        <p>
            <Link to="/">
                Click here to login with your new credentials.
            </Link>
        </p>
        </div>
    );
    }

    render() {
    return (
        <div className="ResetPassword">
        {!this.state.codeSent
            ? this.renderRequestCodeForm()
            : !this.state.confirmed
            ? this.renderConfirmationForm()
            : this.renderSuccessMessage()}
        </div>
    );
    }
}
