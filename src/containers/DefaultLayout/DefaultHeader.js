import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Nav, 
  NavItem, 
  // DropdownMenu,
  // DropdownItem
} from 'reactstrap';
import PropTypes from 'prop-types';
import { 
   // AppAsideToggler, 
   AppNavbarBrand, 
   AppSidebarToggler 
} from '@coreui/react';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {

  // constructor(props){
  //   super(props)
  //   // this.empresaDesignada = this.props.datoEmpresa
  //   // this.state = {

  //   // }
  // }
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    const LogoEA = require('../../assets/taller.jpg')
    const LogitoEA = require('../../assets/taller.jpg')
    return (
      <React.Fragment style={{backgroundColor:"#32338F"}}>
        <AppSidebarToggler  className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: LogoEA, width: 25, height: 25, alt: 'logoEA' }}
          minimized={{ src: LogitoEA, width: 25, height: 25, alt: 'logoEA' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar >
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" >Inicio</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar >
          {/* <NavItem className="px-3">
            <NavLink><i className="fa fa-lock"></i> Cerrar Sesión</NavLink>
          </NavItem> */}
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
