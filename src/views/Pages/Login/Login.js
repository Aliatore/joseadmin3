import React, { Component } from 'react';
import './index.css'
import { 
  Button, 
  Card, 
  CardBody, 
  CardGroup, 
  Col, 
  Container, 
  Form, 
  Input, 
  InputGroup, 
  InputGroupAddon, 
  InputGroupText,
  CardImg,
  Row,
} from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      mantenimiento: false,
    }
  }

  // componentDidMount(){}
  

  render() {
    if (this.state.mantenimiento) {
      return (
        <div className="app flex-row align-items-center fondo">
            <Container className="">
            <Row className="justify-content-center">
              <Col md="5">
                <CardGroup className="mb-5 rounded">
                  <Card className="p-4">
                    <Row >
                      <Col xs="12" md={{ size: 7, offset: 3 }} lg={{ size: 6, offset: 3}} >
                        <CardImg top src={require('../../../assets/apruebaexamenes.png')} width="100%" alt="apruebaexamenes"/>
                      </Col>
                    </Row> 
                    <CardBody>
                      <Form>
                        <Row >
                          <Col md="12" >
                              <span style={{color: 'black', fontWeight: 'bold', fontSize: '16px' }}>Nos encontramos en labores de mantenimiento.</span> <br />
                              <span style={{color: 'black', fontWeight: '500', fontSize: '15px' }}>En breve regresamos.</span>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>
      )
    } else {
      return (
        <div className="app flex-row align-items-center fondo">
          <Container className="">
            <Row className="justify-content-center">
              <Col md="5">
                <CardGroup className="mb-5 rounded">
                  <Card className="p-4">
                    <Row >
                      <Col xs="12" md={{ size: 7, offset: 3 }} lg={{ size: 6, offset: 3}} >
                        <CardImg top src={require('../../../assets/apruebaexamenes.png')} width="100%" alt="aelogo"/>
                      </Col>
                    </Row> 
                    <CardBody>
                      <Form onSubmit={this.props.onlogin}>
                        <Row >
                          <Col md="12" >
                            <InputGroup className="mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="icon-user"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input 
                                type="text" 
                                placeholder="Usuario" 
                                autoComplete="username" 
                                onChange={this.props.username}
                                // pattern="[A-Za-z]+"
                                required
                                />
                            </InputGroup>
                            <InputGroup className="mb-4">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="icon-lock"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input 
                                type="password" 
                                placeholder="Contraseña" 
                                autoComplete="current-password"
                                onChange={this.props.password}
                                required
                                />
                            </InputGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Button style={{backgroundColor: 'rgba(1, 155, 242, 1)', fontWeight: 'bold', color: '#fff'}} className="px-4 btn-fondo" block>Ingresar</Button>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
    
  }
}

export default Login;
