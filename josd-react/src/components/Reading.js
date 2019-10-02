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
import MenuBookIcon from '@material-ui/icons/MenuBook';


export default class Reading extends Component{

    constructor(props, context) {
        super(props, context)
        this.book_title = [
            'abc',
            'def',
            'ghi',
            'jkl',
            'mno'
        ];
        console.log("props = "+this.props.userIdFromMain);
        this.state = {
            reading_sd1: 0,
            reading_sd2: 0,
            suggestions: [],
            text: ''
        }
        this.updateReading = this.updateReading.bind(this);
    }

    updateReading = (e) => {
        e.preventDefault();
        let redingData = { user_id: this.props.userIdFromMain, rec_dt: this.props.recDtFromMain, sub_area: 'R', 
                            sub_name: this.state.text, sub_dura: ( this.readingsdvalue1 + this.readingsdvalue2 * 60 ), 
                                user_id_1: this.props.userIdFromMain };

        console.log("check data = "+Object.values(redingData));
        // ApiService.updateReading(redingData)
        // .then(res =>{
        //     console.log("done");
        //     this.setState({message: 'Data saved.'});
        //     window.confirm('Data saved.');
        //     console.log("result= "+this.state.message);
        //     //this.props.history.push('/');
        // });
    }
    
    handleOnChange = (event) => {
        this.setState({
            reading_sd1: event
        })
        console.log("slider1 value = "+this.chantsdvalue1);
        console.log("user_id in reading.js "+this.props.children);
    }

    handleOnChange2 = (event) => {
        this.setState({
            reading_sd2: event
        })
        console.log("slider2 value = "+ ( this.readingsdvalue1 + this.readingsdvalue2 * 60 ));
    }


    handleSubmit = event => {
        event.preventDefault();
    }

    // handleChange = event => {
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     })
    // }
    
    onTextChanged = (e) =>{
        console.log("value "+ e.target.value);
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0){
            // this.state.suggestions = [];
            console.log("value length = "+value.length);
            console.log("object = "+this.book_title)
            const regex = new RegExp(`^${value}`,'i');
            // suggestions = this.book_title.sort().filter( v => regex.test(v));
            suggestions = this.book_title.sort().filter(v => regex.test(v));
            console.log("suggestions = "+suggestions)
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
                {suggestions.map((book_title) => <li onClick={() => this.suggestionSelected(book_title)}>{book_title}</li>)}
            </ul>
        );
    }

    

    render() {
        let { reading_sd1 } = this.state;
        let { reading_sd2 } = this.state;
        let { text } = this.state;

        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Container style={style}>
                        <Row>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item active" aria-current="page"><h3 className=""><MenuBookIcon fontSize="large"/> Reading</h3></li>
                                </ol>
                            </nav>
                            <Form.Group controlId="reading" className='mainform'>
                                <Col xs={12}>
                                    <Form.Label >Book Title</Form.Label>
                                    <div className="AutoCompleteText">
                                        <Form.Control placeholder='type your book title' value={text} onChange={this.onTextChanged}/>
                                        {this.renderSuggestions()}
                                    </div>
                                </Col>
                                <Col xs={12}> 
                                    <hr/>
                                    <Form.Label style={appComponent}> Reading Total Time : {this.readingsdvalue2} hrs {this.readingsdvalue1} minutes </Form.Label>
                                    <br/>
                                    <Form.Label> Mins </Form.Label>
                                    <Slider ref={sdlide1 => this.readingsdvalue1 = reading_sd1} 
                                            value={reading_sd1} 
                                            orientation="horizontal" 
                                            onChange={this.handleOnChange}
                                            onChangeComplete={this.updateReading}
                                            max='60'
                                    />
                                </Col>
                                
                                <Col xs={12}> 
                                    <Form.Label> Hours </Form.Label>
                                    <Slider ref={sdlide2 => this.readingsdvalue2 = reading_sd2}  
                                            value={reading_sd2} 
                                            orientation="horizontal" 
                                            onChange={this.handleOnChange2}
                                            onChangeComplete={this.updateReading}
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
