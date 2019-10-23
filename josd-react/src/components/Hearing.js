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
import HeadsetIcon from '@material-ui/icons/Headset';
import ScaleLoader from 'react-spinners/ScaleLoader';


export default class Hearing extends Component{

    constructor(props, context) {
        super(props, context)
        this.lecture_title = [];// This array is for a lecture tile list to implement autocompletion
        this.state = {
            hearing_sd1: 0,
            hearing_sd2: 0,
            suggestions: [],
            text: '',
            message:"",
            hear_point: 0
        }
        this.updateHearing = this.updateHearing.bind(this);
    }

    componentDidMount(){
        this.initLoading();
    }
    
    initLoading = () => {
        let hearing_point = "0";
        let user_id = this.props.userIdFromMain;
        let rec_dt = this.props.recDtFromMain;
        // toPromise()
        // .then(res => res.json())
        // .then(A => { return A.showList; });
        ApiService.getUserPoint(user_id, rec_dt)
            .then(response =>{
                // response.data.forEach(function(data){
                //     console.log("data = "+data)
                // })

                if(typeof(response.data) == 'undefined' || response.data === ""){
                    hearing_point = "-20"
                }else{
                    // hearing_point = response.data[0].HEARING_POINT;
                }
                console.log("hearing_point = "+hearing_point )
                this.setState({ hear_point : hearing_point });
            });
    }

    updateHearing = (e) => {
        e.preventDefault();
        let hearingData = { user_id: this.props.userIdFromMain, rec_dt: this.props.recDtFromMain, sub_area: 'L', 
                                sub_name: this.state.text, sub_dura: ( this.hearingsdvalue1 + this.hearingsdvalue2 * 60 ), 
                                    user_id_1: this.props.userIdFromMain };

        console.log("check data = "+Object.values(hearingData));
        ApiService.updateHearing(hearingData)
        .then(res =>{
            // console.log("done");
            // console.log("res status in hearing = "+ res.status);
            // console.log("res data in hearing  = "+ res.status);
            // console.log("res statusText in hearing = "+res.statusText);
            this.setState({message: 'Data saved.'});

            console.log("result= "+this.state.message);
            //this.props.history.push('/');
        });
    }
    
    handleOnChange = (event) => {
        this.setState({
            hearing_sd1: event
        })
        // console.log("slider1 value = "+this.chantsdvalue1);
    }

    handleOnChange2 = (event) => {
        this.setState({
            hearing_sd2: event
        })
        // console.log("slider2 value = "+this.chantsdvalue2);
    }


    handleSubmit = event => {
        event.preventDefault();
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    
    onTextChanged = (e) =>{
        // console.log("value "+ e.target.value);
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`^${value}`,'i');
            suggestions = this.lecture_title.sort().filter(v => regex.test(v));
        }
        this.setState( () => ({ suggestions, text:value }));
    }

    suggestionSelected(value){
        this.setState(() =>({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions (){
        const{ suggestions } = this.state;
        if (suggestions.length === 0 ){
            return null;
        }
        return (
            <ul>
                {suggestions.map((lecture_title) => <li onClick={() => this.suggestionSelected(lecture_title)}>{lecture_title}</li>)}
            </ul>
        );
    }

    

    render() {
        let { hearing_sd1 } = this.state;
        let { hearing_sd2 } = this.state;
        let { text } = this.state;

        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Container style={style}>
                        <Row>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item active" aria-current="page"><h3 className="">
                                        {/* <HeadsetIcon fontSize="large"/>  */}
                                        <ScaleLoader
                                            css={spinner}
                                            sizeUnit={"px"}
                                            size={40}
                                            color={'#BF1A2F'}
                                            loading={true}/>  Hearing : {this.state.hear_point}</h3></li>
                                </ol>
                            </nav>
                            <Form.Group controlId="hearing" className='mainform'>
                                <Col xs={12}>
                                    <Form.Label >Lecture Title</Form.Label>
                                    <div className="AutoCompleteText">
                                        <Form.Control placeholder='Type your Lecture Title' value={text} onChange={this.onTextChanged}/>
                                        {this.renderSuggestions()}
                                    </div>
                                </Col>
                                <Col xs={12}> 
                                    <hr/>
                                    <Form.Label style={appComponent}> Hearing Total Time : {this.hearingsdvalue2} hrs {this.hearingsdvalue1} mins </Form.Label>
                                    <br/>
                                    <Form.Label> Mins </Form.Label>
                                    <Slider ref={sdlide1 => this.hearingsdvalue1 = hearing_sd1} 
                                            value={hearing_sd1} 
                                            orientation="horizontal" 
                                            onChange={this.handleOnChange}
                                            onChangeComplete={this.updateHearing}
                                            max="60"        
                                    />
                                </Col>
                                <Col xs={12}> 
                                    <Form.Label> Hours </Form.Label>
                                    <Slider ref={sdlide2 => this.hearingsdvalue2 = hearing_sd2}  
                                            value={hearing_sd2} 
                                            orientation="horizontal" 
                                            onChange={this.handleOnChange2}
                                            onChangeComplete={this.updateHearing}
                                            max="24"
                                    />
                                </Col>                    
                            </Form.Group>
                            {/* <Button size='lg' className='btn1' onClick={this.updateChant} block type="submit">Submit</Button> */}
                        </Row>
                    </Container>
                </Form>
            </div>
        );
    }

}
const style = {
    margin: '20px auto',
    width: '95%',
    // position: 'fixed',
    // bottom: 0,
};

const appComponent = {
    margin: '10px auto',
};

const spinner = {
    display: 'inline-block !important',
    margin: '0 auto',
}