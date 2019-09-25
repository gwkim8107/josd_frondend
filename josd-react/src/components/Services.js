import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../css/main.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ApiService from '../services/ApiService'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import RoomServiceIcon from '@material-ui/icons/RoomService';

export default class Services extends Component{

    constructor(props, context) {
        super(props, context)
        this.state = {
            service_sd1: 0,
            service_sd2: 0,
            mm_service_sd1: 0,
            mm_service_sd2: 0,
            serviceName:"",
            mmServiceName: ""
        }
        this.updateService = this.updateService.bind(this);
    }

    updateService = (e) => {
        e.preventDefault();
        let serviceData = { user_id: 'test5', rec_dt: '2019-09-21', bf_8am: this.chantsdvalue1, 
                            btw_8to6pm: this.chantsdvalue2, af_6pm: this.chantsdvalue3 };
        let mmServiceData = {};

        console.log("check data = "+Object.values(serviceData));
        console.log("check data = "+Object.values(mmServiceData));
        // ApiService.updateChant(chantData)
        // .then(res =>{
        //     console.log("done");
        //     this.setState({message: 'Data saved.'});
        //     window.confirm('Data saved.');
        //     console.log("result= "+this.state.message);
        //     //this.props.history.push('/');
        // });
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    
    handleOnChange = (event) => {
        this.setState({
            service_sd1: event
        })
        // console.log("slider1 value = "+this.chantsdvalue1);
    }

    handleOnChange2 = (event) => {
        this.setState({
            service_sd2: event
        })
        // console.log("slider2 value = "+this.chantsdvalue2);
    }

    handleOnChange3 = (event) => {
        this.setState({
            mm_service_sd1: event
        })
        // console.log("slider3 value = "+this.chantsdvalue3);
    }

    handleOnChange4 = (event) => {
        this.setState({
            mm_service_sd2: event
        })
        // console.log("slider3 value = "+this.chantsdvalue3);
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {

        let { service_sd1 } = this.state;
        let { service_sd2 } = this.state;
        let { mm_service_sd1 } = this.state;
        let { mm_service_sd2 } = this.state;

        return(
            <div className="contents" style={lastComponent}>
                <div id="top" className="contents"> 
                    <Form onSubmit={this.handleSubmit}>
                        <Container ref={ (ref) => this.chantRef = ref} style={style}>
                            <Row>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item active" aria-current="page"><h3 className=""><RoomServiceIcon fontSize="large"/> Service</h3></li>
                                    </ol>
                                </nav>
                                <Form.Group controlId="service" className='mainform'>
                                    <Col xs={12}>
                                        <Form.Label>Service Name</Form.Label>
                                        <Form.Control autoFocus value={this.state.serviceName} onChange={this.handleChange} />
                                    </Col>
                                    {/* <hr/> */}
                                    <Col xs={12}> 
                                        <Form.Label service={appComponent}>Service Totlal Time: {this.servicesdvalue1} hrs {this.servicesdvalue2} mins </Form.Label>
                                        <br/>
                                        <Form.Label> Hours </Form.Label>
                                        <Slider ref={sdlide1 => this.servicesdvalue1 = service_sd1} 
                                                value={service_sd1} 
                                                orientation="horizontal" 
                                                onChange={this.handleOnChange}
                                                max="24"
                                        />
                                    </Col>  
                                    <Col xs={12}> 
                                        <Form.Label> Minutes </Form.Label>
                                        <Slider ref={sdlide2 => this.servicesdvalue2 = service_sd2}  
                                                value={service_sd2} 
                                                orientation="horizontal" 
                                                onChange={this.handleOnChange2} 
                                                max="60"
                                        />
                                    </Col>
                                </Form.Group>
                            </Row>
                                    <hr/>
                            <Row>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item active" aria-current="page"><h3 className=""><RoomServiceIcon fontSize="small"/> + <RoomServiceIcon fontSize="small"/> Much More Service</h3></li>
                                    </ol>
                                </nav>
                                <Form.Group controlId="mmservice" className='mainform'>
                                    <Col xs={12}> 
                                        <Form.Label>Much more Service Name </Form.Label>
                                        <Form.Control autoFocus value={this.state.mmServiceName} onChange={this.handleChange} />
                                        <br/>
                                        <Form.Label service={appComponent}>Service Totlal Time: {this.mmservicesdvalue1} hrs {this.mmservicesdvalue2} mins </Form.Label>
                                        <br/>
                                        <Form.Label> Hours </Form.Label>
                                        <Slider ref={sdlide3 => this.mmservicesdvalue1 = mm_service_sd1}  
                                                value={mm_service_sd1} 
                                                orientation="horizontal" 
                                                onChange={this.handleOnChange3} 
                                                max="24"
                                        />
                                        <Form.Label> Mins </Form.Label>
                                        <Slider ref={sdlide4 => this.mmservicesdvalue2 = mm_service_sd2}  
                                                value={mm_service_sd2} 
                                                orientation="horizontal" 
                                                onChange={this.handleOnChange4} 
                                                max="60"
                                        />
                                    </Col>                     
                                </Form.Group>
                                <Button size='lg' className='btn1' onClick={this.updateService} block type="submit">Submit</Button>
                            </Row>
                        </Container>   
                    </Form>
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

const lastComponent = {
    margin: 'auto',
    padding: '0px 0px 80px 0px',
    width: '95%',
};

const appComponent = {
    margin: '10px auto',
};
