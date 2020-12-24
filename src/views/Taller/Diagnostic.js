import React, {useState} from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer, MDBIcon, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn } from 'mdbreact';
import {Button, CardHeader, Col, Row, Label, FormGroup, Input } from 'reactstrap';

const CarPeerClient = () => {
    const [data, setData] = React.useState({

    });
    const [toggleDiagnostico, setToggleDiagnostico] = useState(false)
        return (
        <div>

        
        <MDBContainer fluid xs="12" sm="12" md="12" lg="12" xl="12" style={{verticalAlign:"middle", textAlignLast: "center"}}>
                    <CardHeader className="mt-2 mb-2">
                             <Row className="ml-4 mt-1 pt-1" style={{textAlign:"center"}}>
                               <Col xs="12" sm="12" md="12" lg="12" xl="12">
                                 <MDBIcon className="mt-1" size="2x" icon="info-circle"/> &nbsp;
                                 <p style={{fontSize: 25, fontWeight: 'bold'}}>Información:<span style={{fontSize: 25, fontWeight: '300'}}> Seleccione el botón diagnóstico para visualizar el diagnóstico del vehículo en específico, si no posee uno nuestro sistema le mostrará una lista de mecánicos no ocupados para realizar el mismo.</span></p>
                               </Col>
                             </Row>
                  </CardHeader>
            <MDBTable >
                <MDBTableHead  color="primary-color" textWhite>
                    <tr style={{backgroundColor:"#32338F"}}>
                    <th>Nombre(s)</th>
                    <th>Apellido(s)</th>
                    <th>Cédula</th>
                    <th>Color</th>
                    <th>Placa</th>
                    <th>Refacción</th>
                    <th>Herramientas</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                    <td>José Gregorio</td>
                    <td>Sánchez Valderrama</td>
                    <td>26131991</td>
                    <td>Rojo</td>
                    <td>RAP 44W</td>
                    <td><Button onClick={() => setToggleDiagnostico(true)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-hand-lizard-o fa-lg" style={{color: "green"}}></i></Button></td>
                    <td><Button onClick={() => setToggleDiagnostico(true)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-wrench fa-lg" style={{color: "green"}}></i></Button></td>
                    </tr>
                    <tr>
                    <td>Simón Antonio</td>
                    <td>Rodríguez García</td>
                    <td>27445668</td>
                    <td>Vinotinto</td>
                    <td>AE05CG</td>
                    <td><Button onClick={() => setToggleDiagnostico(true)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-hand-lizard-o fa-lg" style={{color: "green"}}></i></Button></td>
                    <td><Button onClick={() => setToggleDiagnostico(true)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-wrench fa-lg" style={{color: "green"}}></i></Button></td>                  </tr>
                    <tr>
                    <td>Luis Alexander</td>
                    <td>Isturiz Medina</td>
                    <td>25368515</td>
                    <td>Verde</td>
                    <td>RAP 44W</td>
                    <td><Button onClick={() => setToggleDiagnostico(true)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-hand-lizard-o fa-lg" style={{color: "green"}}></i></Button></td>
                    <td><Button onClick={() => setToggleDiagnostico(true)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-wrench fa-lg" style={{color: "green"}}></i></Button></td>                    </tr>
                    <tr>
                    <td>Jesibell Andreina</td>
                    <td>Sánchez Valderrama</td>
                    <td>26131988</td>
                    <td>Morado</td>
                    <td>VCG 77K</td>
                    <td><Button onClick={() => setToggleDiagnostico(true)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-hand-lizard-o fa-lg" style={{color: "green"}}></i></Button></td>
                    <td><Button onClick={() => setToggleDiagnostico(true)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-wrench fa-lg" style={{color: "green"}}></i></Button></td>                   </tr>
                </MDBTableBody>
            </MDBTable>
        </MDBContainer>
        <MDBContainer>
            <MDBModal isOpen={toggleDiagnostico}>
              <MDBModalHeader>Diagnóstico</MDBModalHeader>
                <MDBModalBody>
                        <Row className="mt-2 mb-1" style={{textAlign:"center", placeContent:"center"}}>
                            <Col xs="12" sm="12" md="8" lg="8" xl="8" style={{textAlignLast:"center"}}>
                              <FormGroup>
                                <Label htmlFor="t_user"><MDBIcon className="mt-1" size="lg" icon="user"/> Selecciona un mecánico disponible</Label>
                                <Input
                                  type="select" 
                                  id="t_user" 
                                  placeholder="Selecciona el usuario al que deseas actualizar" 
                                  onChange=""
                                  value=""
                                  required
                                >
                                  <option value="">Mecánico disponibles</option>
                                  <option value="1">26131991 - José Sánchez</option>
                                  <option value="2">27556887 - Emmanuel Zambrano</option>
                                  <option value="3">25445796 - Ángel Vargas</option>
                                </Input>
                              </FormGroup>
                            </Col>
                        </Row>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color='info' style={{color : "white"}}>
                      Aceptar
                    </MDBBtn>
                  <MDBBtn color='danger'  onClick={() => setToggleDiagnostico(false)}>
                  Cerrar
                </MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBContainer>   
        </div>
  );
}

export default CarPeerClient;