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
import PulseLoader from 'react-spinners/PulseLoader';
import RiseLoader from 'react-spinners/RiseLoader';


export default class Services extends Component{

    constructor(props, context) {
        super(props, context)
        this.state = {
            service_sd1: 0,
            service_sd2: 0,
            mm_service_sd1: 0,
            mm_service_sd2: 0,
            serviceName:"",
            mmServiceName: "",
            message: "",
            extramessage: ""
        }
        this.updateService = this.updateService.bind(this);
        this.updateMMservice = this.updateMMservice.bind(this);
    }

    updateService = (e) => {
        e.preventDefault();
        let serviceData = { user_id: this.props.userIdFromMain, rec_dt: this.props.recDtFromMain, sev_kind: 'S', 
                                sev_name: this.state.serviceName, sev_dura: ( this.servicesdvalue2 * 60 + this.servicesdvalue1 )};
        

        // console.log("check data = "+Object.values(serviceData));
        
        ApiService.updateService(serviceData)
            .then(res =>{
                // console.log("done = "+res.data);
                this.setState({message: 'Data saved.'});
                
                // console.log("result= "+this.state.message);
                //this.props.history.push('/');
            });
    }

    updateMMservice = (e) => {
        let mmServiceData = { user_id: this.props.userIdFromMain, rec_dt: this.props.recDtFromMain, sev_kind: 'M', 
                                sev_name: this.state.mmServiceName, sev_dura: ( this.mmservicesdvalue2 * 60 + this.mmservicesdvalue1 )};

        console.log("check data = "+Object.values(mmServiceData));
        ApiService.updateMMservice(mmServiceData)
            .then(res =>{
                // console.log("done = "+res.data);
                this.setState({extramessage: 'Data saved.'});
                
                // console.log("result= "+this.state.extramessage);
                //this.props.history.push('/');
            });
    } 

    textChange = event => {
        // console.log("event id = "+event.target.id);
        // console.log("event value = "+event.target.value);
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    textChange2 = event => {
        // console.log("event id = "+event.target.id);
        // console.log("event value = "+event.target.value);
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
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item active" aria-current="page"><h3 className="">
                                            {/* <RoomServiceIcon fontSize="large"/>  */}
                                            <PulseLoader
                                                css={spinner}
                                                sizeUnit={"px"}
                                                size={12}
                                                color={'#08A045'}
                                                loading={true}/>  Service</h3></li>
                                    </ol>
                                </nav>
                                <Form.Group controlId="serviceName" className='mainform'>
                                    <Col xs={12}>
                                        <Form.Label>Service Name</Form.Label>
                                        <Form.Control autoFocus value={this.state.serviceName} onChange={this.textChange} />
                                    </Col>
                                    {/* <hr/> */}
                                    <Col xs={12}> 
                                        <Form.Label service={appComponent}>Service Totlal Time: {this.servicesdvalue2} hrs {this.servicesdvalue1} mins </Form.Label>
                                        <br/>
                                        <Form.Label> Mins </Form.Label>
                                        <Slider ref={sdlide1 => this.servicesdvalue1 = service_sd1} 
                                                value={service_sd1} 
                                                orientation="horizontal" 
                                                onChange={this.handleOnChange}
                                                onChangeComplete={this.updateService}
                                                max='60'
                                        />
                                    </Col>  
                                    <Col xs={12}> 
                                        <Form.Label> Hours </Form.Label>
                                        <Slider ref={sdlide2 => this.servicesdvalue2 = service_sd2}  
                                                value={service_sd2} 
                                                orientation="horizontal" 
                                                onChange={this.handleOnChange2}
                                                onChangeComplete={this.updateService}
                                                max="24"
                                        />
                                    </Col>
                                </Form.Group>
                            </Row>
                            <hr/>
                            <Row>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item active" aria-current="page"><h3 className="">
                                            {/* <RoomServiceIcon fontSize="small"/> + <RoomServiceIcon fontSize="small"/>  */}
                                            <RiseLoader
                                                css={spinner}
                                                sizeUnit={"px"}
                                                size={12}
                                                color={'#EFA00B'}
                                                loading={true}/>  Much More Service</h3></li>
                                    </ol>
                                </nav>
                                <Form.Group controlId="mmServiceName" className='mainform'>
                                    <Col xs={12}> 
                                        <Form.Label>Much more Service Name </Form.Label>
                                        <Form.Control autoFocus value={this.state.mmServiceName} onChange={this.textChange2} />
                                        <br/>
                                        <Form.Label service={appComponent}>Service Totlal Time: {this.mmservicesdvalue2} hrs {this.mmservicesdvalue1} mins </Form.Label>
                                        <br/>
                                        <Form.Label> Mins </Form.Label>
                                        <Slider ref={sdlide3 => this.mmservicesdvalue1 = mm_service_sd1}  
                                                value={mm_service_sd1} 
                                                orientation="horizontal" 
                                                onChange={this.handleOnChange3}
                                                onChangeComplete={this.updateMMservice}
                                                max="60"
                                        />
                                        <Form.Label> Hours </Form.Label>
                                        <Slider ref={sdlide4 => this.mmservicesdvalue2 = mm_service_sd2}  
                                                value={mm_service_sd2} 
                                                orientation="horizontal" 
                                                onChange={this.handleOnChange4}
                                                onChangeComplete={this.updateMMservice}
                                                max="24"
                                        />
                                    </Col>                     
                                </Form.Group>
                                {/* <Button size='lg' className='btn1' onClick={this.updateService} block type="submit">Submit</Button> */}
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

const spinner = {
    display: 'inline-block !important',
    margin: '0 auto',
}