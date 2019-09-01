import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'
import styled from 'styled-components'
import { ButtonContainer } from "./Button"
import {Container, Row, Col} from 'react-bootstrap'

export default class Navibar extends Component {
    render() {
        return (
            <NavWrpper className="navbar navbar-expand-sm navbar-dark-px-sm-10">
                {/* <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                                
                        </Link> 
                    </li>
                </ul> */}
            </NavWrpper>
        )
    }
}

const NavWrpper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`

