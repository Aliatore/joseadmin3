import React, { Component } from 'react'
import './EntregasProfesor.css'
import {
        Card,
        CardTitle,
        Button,
        Row,
        Col,
        CardBody,
        Input,
        Label,
        FormGroup
        } from 'reactstrap'

export default class registroUsuario extends Component {

  render() {
    return (
      <div>
        <Row>
          <Col md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4}}>
            <Card body> 
              <form onSubmit={this.handleSubmit}>
                <CardTitle className="h4"></CardTitle>
                <CardBody>
                <FormGroup row>
                    <Col md="12">
                      <Label htmlFor="file-input">Adjuntar archivo:</Label>
                    </Col>
                    <Col xs="12" md="12">
                      <Input type="file" id="file-input" name="file-input" />
                    </Col>
                  </FormGroup>
                  <Input
                    type="text"
                    className="porcentaje"
                    name="porcentaje"
                    placeholder="Porcentaje (%) correspondiente"
                    required
                  />
                </CardBody>
                <Button style={{backgroundColor: '#0041f6', fontWeight: 'bold', color: '#fff'}} className="px-4 btn1-fondo" block>Ingresar</Button>
              </form>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
