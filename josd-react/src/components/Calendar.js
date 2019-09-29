import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default class Calendar extends Component {
    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    validateForm() {
        return this.state.startDate.length > 0 && this.state.password.length > 0
    }

    render() {
        return (
            <div className='container' style={style}>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    inline
                />
                {/* {this.state.startDate} */}
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="selDate" className='Loginform'>
                        <Form.Label>Selected Date</Form.Label>
                        <Form.Control autoFocus value={this.state.startDate} onChange={this.handleChange} />
                    </Form.Group>
                    <Button size='lg' className='btn1 Login' type="submit" onClick={this.chkUser}>Apply</Button>
                </Form>
            </div>
        )
    }
}

const style = {
    margin: '10px auto',
    padding : '0px 60px 0px',
    width: '95%'
};

