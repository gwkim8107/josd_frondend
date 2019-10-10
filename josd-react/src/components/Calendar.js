import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {formatDate} from './Util'
import '../css/Calendar.css';


export default class Calendar extends Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.updateDate = this.updateDate.bind(this);
    }

    handleChange = date => {
        // let strDate = formatDate(date);
        this.setState({
            startDate: date
        });
        // strDate = this.state.startDate;
        // console.log("date = "+formatDate(date))
        // console.log("startDate = " + this.state.startDate);
        // console.log("strDate = "+ strDate)
    };

    validateForm() {
        return this.state.startDate.length > 0
    }

    updateDate= (e) =>{
        e.preventDefault();
        // console.log("startDate2 = " + this.state.startDate );
        window.localStorage.setItem("local_rec_dt",formatDate(this.state.startDate));
        let local_user_id = window.localStorage.getItem("local_user_id")
        this.props.history.push(`/home/${local_user_id}/${formatDate(this.state.startDate)}`);
    }

    render() {
        
        return (
            <div className='container' style={style}>
                <DatePicker
                    maxDate={this.state.startDate}
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    inline
                />
                {/* {this.state.startDate} */}
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="selDate" className='Loginform'>
                        <Form.Label>Selected Date</Form.Label>
                        <Form.Control autoFocus value={formatDate(this.state.startDate)} onChange={this.handleChange} />
                    </Form.Group>
                </Form>
                <Button size='lg' className='btn2 Login3' type="submit" onClick={this.updateDate}>Apply</Button>
            </div>
        )
    }
}

const style = {
    margin: '10px auto',
    padding : '0px 60px 0px',
    width: '95%'
};

