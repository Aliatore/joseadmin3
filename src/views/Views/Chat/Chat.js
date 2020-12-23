import React, { Component } from 'react';
import '../Proyectos/EntregasProfesor.css';
import {
  Card,
  Button,
  Row,
  Col,
  CardHeader,
  CardBody,
} from 'reactstrap';
import { MDBIcon} from 'mdbreact';

//import axios from 'axios';
import {  ToastContainer } from 'react-toastify';
// const path = require('path');
// const fs = require('fs');

export default class chat extends Component {

    redirect = () => {
        window.location.href = "https://chat.apruebaexamenes.com:8065/"
    }
  
  render() {
    return (
      <div>
        <Row>
            <Col xs="12" sm="12" md="12" lg="12" xl="12" >
                <Card>
                    <CardHeader>
                    <ToastContainer/>
                      <Row className="ml-4 mt-1 pt-1" style={{textAlign:"center"}}>
                        <Col xs="12" sm="12" md="12" lg="12" xl="12">
                          <MDBIcon className="mt-1" size="2x" icon="info-circle"/> &nbsp;
                          <p style={{fontSize: 25, fontWeight: 'bold'}}>Información:<span style={{fontSize: 25, fontWeight: '300'}}> Presionar el botón para acceder al chat </span></p>
                        </Col>
                      </Row>
                      <Row style={{textAlign:"center"}} className="ml-4 mt-3" xs="12" sm="12" md="12" lg="12" xl="12">
                      </Row>
                    </CardHeader>
                    <CardBody>
                        <Row className="mt-3" style={{justifyContent: 'center'}}>
                            <Button color="primary" onClick={() => this.redirect()} id="toggleFade1" style={{color: '#fff'}}>Ir al chat</Button>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>        
      </div>
    )
  }
}
