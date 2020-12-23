import React, { Component } from 'react';
import '../Login/index.css'
import { 
  Col, 
  Container, 
  Row,
} from 'reactstrap';
import { Redirect } from 'react-router-dom'

class Prelogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ruta: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        ruta: false
      })
    }, 1300);
  }
  
  render() {
    if (this.state.ruta === true) {
      return (
        <div className="app flex-row align-items-center fondo">
          <Container className="">
            <Row className="justify-content-center">
              <Col sm="2" className="text-center">
              {/* <img src={require('../Login/logo.svg')} height="100" width="200" alt="logo"   /> */}
                <div className="sk-fading-circle">
                  <div className="sk-circle1 sk-circle"></div>
                  <div className="sk-circle2 sk-circle"></div>
                  <div className="sk-circle3 sk-circle"></div>
                  <div className="sk-circle4 sk-circle"></div>
                  <div className="sk-circle5 sk-circle"></div>
                  <div className="sk-circle6 sk-circle"></div>
                  <div className="sk-circle7 sk-circle"></div>
                  <div className="sk-circle8 sk-circle"></div>
                  <div className="sk-circle9 sk-circle"></div>
                  <div className="sk-circle10 sk-circle"></div>
                  <div className="sk-circle11 sk-circle"></div>
                  <div className="sk-circle12 sk-circle"></div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else {
      return <Redirect from="/login" to="/admin/dashboard"></Redirect>
    }
  }
}

export default Prelogin;
