import React, {Component, useContext} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import logo from '../logo.png'
import '../css/main.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ApiService from '../services/ApiService'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import LabelBottomNavigation from './BottomNav'
import Reading from './Reading'
import Hearing from './Hearing'
import Services from './Services'
import { PeopleAlt } from '@material-ui/icons';
import {CommonContext} from '../contexts/CommonContext'

export default class Main extends Component{
    constructor(props, context) {
        super(props, context)
        this.state = {
            chant_sd1: 0,
            chant_sd2: 0,
            chant_sd3: 0,
            message: ""
        }
        this.updateChant = this.updateChant.bind(this);
        // console.log("props.user_id = "+Object.values(this.props.match.params));
        console.log("props.user_id = "+this.props.match.params.user_id);
    }
    
    updateChant = (e) => {
        // e.preventDefault();
        
        let chantData = { user_id: this.props.match.params.user_id, rec_dt: this.props.match.params.rec_dt, bf_8am: this.chantsdvalue1, 
                            btw_8to6pm: this.chantsdvalue2, af_6pm: this.chantsdvalue3 };

        console.log("check data = "+Object.values(chantData));
        ApiService.updateChant(chantData)
        .then(res =>{
            // console.log("done");
            // console.log("res.responseTex= "+res.data);
            this.setState({message: 'Data saved.'});
            // window.confirm('Data saved.');
            // console.log("result= "+this.state.message);
            //this.props.history.push('/');
        });
    }

    componentDidMount(){
        let user_chk = window.localStorage.getItem("local_user_id");
        console.log("user_chk = "+user_chk)
        if(user_chk === ""){
            window.confirm('There is not user information. Please login again.');
            this.props.history.push('/');
        }
    }
    
    handleOnChange = (event) => {
        this.setState({
            chant_sd1: event
        })
        // setTimeout(50000);
        // this.updateChant();
        // console.log("props.user_id = "+Object.values(this.props.match.params));
        // console.log("slider1 value = "+this.chantsdvalue1);
    }

    handleOnChange2 = (event) => {
        this.setState({
            chant_sd2: event
        })
        // console.log("slider2 value = "+this.chantsdvalue2);
    }

    handleOnChange3 = (event) => {
        this.setState({
            chant_sd3: event
        })
        // console.log("slider3 value = "+this.chantsdvalue3);
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    // scrollToMyRef = () => {
    //     console.log("ScrollTo => chantRef")
    //     window.scrollTo(0, this.chantRef.current.offsetTop) 
    // }
    

    render() {

        let { chant_sd1 } = this.state;
        let { chant_sd2 } = this.state;
        let { chant_sd3 } = this.state;
        

        return(
            <div className="contents">
                <div id="top" className="contents"> 
                    <Form onSubmit={this.handleSubmit}>
                        <Container ref={ (ref) => this.chantRef = ref} style={style}>
                            <Row>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item active" aria-current="page"><h3 className=""><PeopleAlt fontSize='large'/> Chanting </h3></li>
                                    </ol>
                                </nav>
                                <Form.Group controlId="chanting" className='mainform'>
                                    <Col xs={12}> 
                                        <Form.Label >12AM - 8AM : {this.chantsdvalue1} </Form.Label>
                                        <Slider ref={sdlide1 => this.chantsdvalue1 = chant_sd1} 
                                                value={chant_sd1} 
                                                orientation="horizontal" 
                                                onChange={this.handleOnChange}
                                                onChangeComplete={this.updateChant}
                                                max="30"
                                        />
                                    </Col>  
                                    <Col xs={12}> 
                                        <Form.Label>8AM - 6PM : {this.chantsdvalue2} </Form.Label>
                                        <Slider ref={sdlide2 => this.chantsdvalue2 = chant_sd2} 
                                                max="30" 
                                                value={chant_sd2} 
                                                orientation="horizontal" 
                                                onChange={this.handleOnChange2}
                                                onChangeComplete={this.updateChant}
                                        />
                                    </Col>
                                    <Col xs={12}> 
                                        <Form.Label>6PM - 12AM : {this.chantsdvalue3} </Form.Label>
                                        <Slider ref={sdlide3 => this.chantsdvalue3 = chant_sd3} 
                                                max="30" value={chant_sd3} 
                                                orientation="horizontal" 
                                                onChange={this.handleOnChange3} 
                                                onChangeComplete={this.updateChant}        
                                        />
                                    </Col>                     
                                </Form.Group>
                                {/* <Button size='lg' className='btn1' onClick={this.updateChant} block type="submit">Submit</Button> */}
                            </Row>
                        </Container>   
                    </Form>
                </div>
                <hr/>
                <div id="reading" className='contents'>
                    <Reading userIdFromMain={this.props.match.params.user_id} recDtFromMain={this.props.match.params.rec_dt}></Reading>
                </div>
                <hr/>
                <div id="listening" className='contents'>
                    <Hearing userIdFromMain={this.props.match.params.user_id} recDtFromMain={this.props.match.params.rec_dt}></Hearing>
                </div>
                <hr/>
                <div>
                    <Services userIdFromMain={this.props.match.params.user_id} recDtFromMain={this.props.match.params.rec_dt}></Services>
                </div>
                <div style={bottom}>
                    <LabelBottomNavigation />  
                </div>
            </div>
        );
    }

}
Main.contextType = CommonContext;
const style = {
    margin: '10px auto',
    width: '95%',
    // position: 'fixed',
    // bottom: 0,
};

const bottom = {
    margin: '10px auto',
    width: '95%',
    position: 'fixed',
    bottom: 0,
};
