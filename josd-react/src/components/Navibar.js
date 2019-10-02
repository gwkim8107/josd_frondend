import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'
import styled from 'styled-components'
import { ButtonContainer } from "./Button"
import {Container, Row, Col} from 'react-bootstrap'
import {getCurrentDate} from '../components/Util'
import Login from '../components/Login'

const Label = styled.div`
    font-size: 2.5rem;
    color: #FFFFFF;
    text-align: left;
`;

const Smlabel = styled.div`
    font-size: 1.0rem;
    color: #FFFFFF;
    text-align: center;
    margin: 10px 10px 10px 30px;
`;


export default class Navibar extends Component {

    constructor(props){
        super(props);
        this.state = {
            user_id:"",
            rec_dt: ""
        };
        this.today = this.today.bind(this);   
    }

    callbackUserInfo = (_childUser_id, _childRec_dt) => {
        this.setState({ user_id:_childUser_id, rec_dt:_childRec_dt });
    }

    today = () =>{
        if(this.state.rec_dt === "" ){
            this.setState({
                rec_dt: getCurrentDate()
            })
            console.log("date = "+this.state.rec_dt);
        }else if(this.state.rec_dt !== "" ){
            this.setState({
                rec_dt: window.localStorage.getItem("local_rec_dt")
            })
        }
        setTimeout(this.today, 10000);
    }

    componentDidMount() {
        this.today();
        let user_id = this.state.user_id;
        let local_user_id = window.localStorage.getItem("local_user_id")
        if(user_id === ""){
            console.log("this state user_id is "+ user_id);
            if(local_user_id !== ""){
                this.setState({user_id: local_user_id});
                console.log("get local_user_id done.");
                console.log("this state user_id is now "+ user_id);
            }
        }
    }

    render() {
        
        return (
            <div>
                <NavWrpper className="navbar navbar-expand-sm navbar-dark-px-sm-10">
                    <Label><Link to={`/home/${this.state.user_id}/${this.state.rec_dt}`} className="nav-link">JOSD</Link></Label>
                    <Smlabel>  {  this.state.rec_dt}</Smlabel>
                    <ul className="navbar-nav align-items-right">
                        <li className="nav-item ml-5">
                            <Link to="/calendar/" className="nav-link"><i className="far fa-clock fa-2x"></i></Link>
                        </li>
                    </ul>
                </NavWrpper>
                {/* <Login callbackFromParent={this.callbackUserInfo}></Login> */}
            </div>
        )
    }
}

const NavWrpper = styled.nav`
    background: var(--blueViolet);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
    .navbar{
        margin: 0.5rem auto !important;
    }
`

