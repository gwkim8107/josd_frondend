import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'
import styled from 'styled-components'
import { ButtonContainer } from "./Button"
import {Container, Row, Col} from 'react-bootstrap'

const Label = styled.div`
    font-size: 1rem;
    color: #FFFFFF;
    text-align: left;
`;

export default class Navibar extends Component {
    render() {
        return (
            <NavWrpper className="navbar navbar-expand-sm navbar-dark-px-sm-10">
                <Label><Link to="/home" className="nav-link">JOSD</Link></Label>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <i class="far fa-clock fa-2x"></i>
                    </li>
                </ul>
            </NavWrpper>
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

