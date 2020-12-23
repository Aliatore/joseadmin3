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

import FormularioExamen from './FormularioExamen';
import FormularioTrabajo from './FormularioTrabajo';
import FormularioClases from './FormularioClases';



class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      formulario: '0',
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  getDataForm = (e) => {
    this.setState({
      formulario: e.target.value
    })
  }
  componentDidMount() {
    //console.log(this.props.datacliente);
  }
  

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" md="12" lg="12" xl="12">
            <Card>
              <CardHeader>
                <strong>Tipo de asignación</strong>
              </CardHeader>
              <CardBody>
                <Row>
                <Col xs="12" sm="12" md="4" lg="4" xl="4">
                    <FormGroup>
                      <Label htmlFor="trabajo">Asignación</Label>
                      <Input onChange={(e) => this.getDataForm(e)} type="select" name="trabajo" id="trabajo">
                        <option value="">Tipo de trabajo</option>
                        <option value="1">Exámenes</option>
                        <option value="2">Clases particulares</option>
                        <option value="3">Trabajos escritos</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
            {this.state.formulario === "1" ? 
              <FormularioExamen
              dataclient={this.props.datacliente}
              
              />
              : null
            }
          {this.state.formulario === "2" ? 
            <FormularioClases 
            dataclient={this.props.datacliente}
            />

            : null
          }
          {this.state.formulario === "3" ? 
            <FormularioTrabajo 
            dataclient={this.props.datacliente}
            />
            : null
          }
      </div>
    );
  }
}

export default Forms;
