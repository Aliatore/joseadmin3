import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <strong>Datos</strong>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="company">Nombre</Label>
                      <Input type="text" id="company" placeholder="Nelson Geraldo" />
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="company">DNI</Label>
                      <Input type="text" id="company" placeholder="NIE 6582216Y" />
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="company">Correo</Label>
                      <Input type="text" id="company" placeholder="nelsongeraldo@gmail.com" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="company">Ciudad</Label>
                      <Input type="text" id="company" placeholder="Valencia" />
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="company">Código Postal</Label>
                      <Input type="text" id="company" placeholder="46950" />
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="company">Número de móvil (Whatsapp)</Label>
                      <Input type="text" id="company" placeholder="04142569012" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="company">Dirección</Label>
                      <Input type="text" id="company" placeholder="Calle ramón y cajal, puerta 13, piso 2 xilveria" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="ccmonth">Forma de pago</Label>
                      <Input type="select" name="ccmonth" id="ccmonth">
                        <option value="1">Paypal</option>
                        <option value="2">Zelle</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="company">Email de Paypal</Label>
                      <Input type="text" id="company" placeholder="nelsongeraldo@gmail.com" />
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="company">Email de Zelle</Label>
                      <Input type="text" id="company" placeholder="nelsongeraldo@gmail.com" />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup row>
                    <Col md="4"><Label>Servicios con los que desea cumplir:</Label></Col>
                    <Col md="8">
                      <FormGroup check className="checkbox">
                        <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                        <Label check className="form-check-label" htmlFor="checkbox1">Clases particulares</Label>
                      </FormGroup>
                      <FormGroup check className="checkbox">
                        <Input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
                        <Label check className="form-check-label" htmlFor="checkbox2">Examenes</Label>
                      </FormGroup>
                      <FormGroup check className="checkbox">
                        <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                        <Label check className="form-check-label" htmlFor="checkbox3">Trabajos escritos</Label>
                      </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md="4"><Label>Materías para clases particulares:</Label></Col>
                    <Col md="8">
                      <FormGroup check className="checkbox">
                        <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                        <Label check className="form-check-label" htmlFor="checkbox1">Estadística</Label>
                      </FormGroup>
                      <FormGroup check className="checkbox">
                        <Input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
                        <Label check className="form-check-label" htmlFor="checkbox2">Biología</Label>
                      </FormGroup>
                      <FormGroup check className="checkbox">
                        <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                        <Label check className="form-check-label" htmlFor="checkbox3">Química</Label>
                      </FormGroup>
                    </Col>
                    <Col md="4"><Label>Materías para los Examenes:</Label></Col>
                    <Col md="8">
                      <FormGroup check className="checkbox">
                        <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                        <Label check className="form-check-label" htmlFor="checkbox1">Estadística</Label>
                      </FormGroup>
                      <FormGroup check className="checkbox">
                        <Input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
                        <Label check className="form-check-label" htmlFor="checkbox2">Biología</Label>
                      </FormGroup>
                      <FormGroup check className="checkbox">
                        <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                        <Label check className="form-check-label" htmlFor="checkbox3">Química</Label>
                      </FormGroup>
                    </Col>
                    <Col md="4"><Label>Materías para trabajos escritos:</Label></Col>
                    <Col md="8">
                      <FormGroup check className="checkbox">
                        <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                        <Label check className="form-check-label" htmlFor="checkbox1">Estadística</Label>
                      </FormGroup>
                      <FormGroup check className="checkbox">
                        <Input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
                        <Label check className="form-check-label" htmlFor="checkbox2">Biología</Label>
                      </FormGroup>
                      <FormGroup check className="checkbox">
                        <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                        <Label check className="form-check-label" htmlFor="checkbox3">Química</Label>
                      </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Áreas de investigación y habilidades que maneja:</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="A cerca del profesor..." />
                    </Col>
                  </FormGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Forms;
