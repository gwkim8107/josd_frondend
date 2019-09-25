import React, {Component} from 'react'
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

export default class Main extends Component{

    constructor(props, context) {
        super(props, context)
        this.state = {
            chant_sd1: 0,
            chant_sd2: 0,
            chant_sd3: 0
        }
        this.updateChant = this.updateChant.bind(this);
    }

    updateChant = (e) => {
        e.preventDefault();
        let chantData = { user_id: 'test5', rec_dt: '2019-09-21', bf_8am: this.chantsdvalue1, 
                            btw_8to6pm: this.chantsdvalue2, af_6pm: this.chantsdvalue3 };

        console.log("check data = "+Object.values(chantData));
        ApiService.updateChant(chantData)
        .then(res =>{
            console.log("done");
            this.setState({message: 'Data saved.'});
            window.confirm('Data saved.');
            console.log("result= "+this.state.message);
            //this.props.history.push('/');
        });
    }
    
    handleOnChange = (event) => {
        this.setState({
            chant_sd1: event
        })
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

    scrollToMyRef = () => {
        console.log("ScrollTo => chantRef")
        window.scrollTo(0, this.chantRef.current.offsetTop) 
    }
    

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
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item active" aria-current="page"><h3 className=""><PeopleAlt fontSize='large'/> Chanting </h3></li>
                                    </ol>
                                </nav>
                                <Form.Group controlId="chanting" className='mainform'>
                                    <Col xs={12}> 
                                        <Form.Label >12AM - 7AM : {this.chantsdvalue1} </Form.Label>
                                        <Slider ref={sdlide1 => this.chantsdvalue1 = chant_sd1} value={chant_sd1} orientation="horizontal" onChange={this.handleOnChange}/>
                                    </Col>  
                                    <Col xs={12}> 
                                        <Form.Label>7AM - 6PM : {this.chantsdvalue2} </Form.Label>
                                        <Slider ref={sdlide2 => this.chantsdvalue2 = chant_sd2}  value={chant_sd2} orientation="horizontal" onChange={this.handleOnChange2} />
                                    </Col>
                                    <Col xs={12}> 
                                        <Form.Label>6PM - 12AM : {this.chantsdvalue3} </Form.Label>
                                        <Slider ref={sdlide3 => this.chantsdvalue3 = chant_sd3}  value={chant_sd3} orientation="horizontal" onChange={this.handleOnChange3} />
                                    </Col>                     
                                </Form.Group>
                                <Button size='lg' className='btn1' onClick={this.updateChant} block type="submit">Submit</Button>
                            </Row>
                        </Container>   
                    </Form>
                </div>
                <hr/>
                <div id="reading" className='contents'>
                    <Reading></Reading>
                </div>
                <hr/>
                <div id="listening" className='contents'>
                    <Hearing></Hearing>
                </div>
                <hr/>
                <div>
                    <Services></Services>
                </div>
                <div style={bottom}>
                    <LabelBottomNavigation />  
                </div>
            </div>
        );
    }

}
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
