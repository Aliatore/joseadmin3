import React, {useState} from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer, MDBIcon, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn } from 'mdbreact';
import {Button, CardHeader, Col, Row, Label, FormGroup, Input } from 'reactstrap';

const AsignationToRefact = () => {
    const [data, setData] = React.useState({

    });
    const [toggleRefaccion, setToggleRefaccion] = useState(false)
    const [toggleHerramientas, setToggleHerramientas] = useState(false)
        return (
        <div>
            <MDBContainer fluid xs="12" sm="12" md="12" lg="12" xl="12" style={{verticalAlign:"middle", textAlignLast: "center"}}>
                    <CardHeader className="mt-2 mb-2">
                             <Row className="ml-4 mt-1 pt-1" style={{textAlign:"center"}}>
                               <Col xs="12" sm="12" md="12" lg="12" xl="12">
                                 <MDBIcon className="mt-1" size="2x" icon="info-circle"/> &nbsp;
                                 <p style={{fontSize: 25, fontWeight: 'bold'}}>Información:<span style={{fontSize: 25, fontWeight: '300'}}> Seleccione el botón refacción o herramientas para visualizar las que fueron asignadas al vehículo en específico, si no posee alguno nuestro sistema le ayudará a asignar los mismos.</span></p>
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
                    <td><Button onClick={() => setToggleRefaccion(true)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-hand-lizard-o fa-lg" style={{color: "green"}}></i></Button></td>
                    <td><Button onClick={() => setToggleHerramientas(true)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-wrench fa-lg" style={{color: "green"}}></i></Button></td>
                    </tr>
                    <tr>
                    <td>Simón Antonio</td>
                    <td>Rodríguez García</td>
                    <td>27445668</td>
                    <td>Vinotinto</td>
                    <td>AE05CG</td>
                    <td><Button onClick={() => setToggleRefaccion(true)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-hand-lizard-o fa-lg" style={{color: "green"}}></i></Button></td>
                    <td><Button onClick={() => setToggleHerramientas(true)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-wrench fa-lg" style={{color: "green"}}></i></Button></td>                  </tr>
                    <tr>
                    <td>Luis Alexander</td>
                    <td>Isturiz Medina</td>
                    <td>25368515</td>
                    <td>Verde</td>
                    <td>RAP 44W</td>
                    <td><Button onClick={() => setToggleRefaccion(true)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-hand-lizard-o fa-lg" style={{color: "green"}}></i></Button></td>
                    <td><Button onClick={() => setToggleHerramientas(true)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-wrench fa-lg" style={{color: "green"}}></i></Button></td>                    </tr>
                    <tr>
                    <td>Jesibell Andreina</td>
                    <td>Sánchez Valderrama</td>
                    <td>26131988</td>
                    <td>Morado</td>
                    <td>VCG 77K</td>
                    <td><Button onClick={() => setToggleRefaccion(true)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-hand-lizard-o fa-lg" style={{color: "green"}}></i></Button></td>
                    <td><Button onClick={() => setToggleHerramientas(true)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-wrench fa-lg" style={{color: "green"}}></i></Button></td>                   </tr>
                </MDBTableBody>
            </MDBTable>
        </MDBContainer>
            <MDBContainer>
                <MDBModal isOpen={toggleRefaccion}>
                    <MDBModalHeader style={{justifyContent:"center"}}>
                        <Row>
                            Refacción
                        </Row>
                    </MDBModalHeader>
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
                                      <option value="">Mecánicos disponibles</option>
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
                      <MDBBtn color='danger'  onClick={() => setToggleRefaccion(false)}>
                      Cerrar
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModal>
          </MDBContainer>
          <MDBContainer>
                <MDBModal isOpen={toggleHerramientas}>
                    <MDBModalHeader style={{justifyContent:"center"}}>
                        <Row>
                            Herramientas
                        </Row>
                    </MDBModalHeader>
                    <MDBModalBody>
                            <Row className="mt-2 mb-1" style={{textAlign:"center", placeContent:"center"}}>
                                <Col xs="12" sm="12" md="8" lg="8" xl="8" style={{textAlignLast:"center", fontSize:"12"}}>
                                  <FormGroup style={{fontSize:"12"}}>
                                    <Label style={{fontSize:"12"}} htmlFor="t_user"><MDBIcon className="mt-1" size="lg" icon="wrench"/> Selecciona una herramienta disponible</Label>
                                    <Input
                                      type="select" 
                                      id="t_user" 
                                      placeholder="Selecciona el usuario al que deseas actualizar" 
                                      onChange=""
                                      value=""
                                      required
                                    >
                                      <option value="">Herramientas disponibles</option>
                                      <option value="1">20 - Gatos Hidráulicos</option>
                                      <option value="2">14 - Llaves de cruz</option>
                                      <option value="3">10 - Osciloscopios</option>
                                    </Input>
                                  </FormGroup>
                                </Col>
                                <Col xs="12" sm="12" md="4" lg="4" xl="4" style={{textAlignLast:"center", fontSize:"13"}}>
                                  <FormGroup style={{fontSize:"12"}}>
                                    <Label style={{fontSize:"12"}} htmlFor="t_user"><MDBIcon className="mt-1" size="lg" icon="sort-numeric-up"/> Seleccione cantidad</Label>
                                    <Input
                                      type="select" 
                                      id="t_user" 
                                      placeholder="Selecciona el usuario al que deseas actualizar" 
                                      onChange=""
                                      value=""
                                      required
                                    >
                                      <option value="">cantidad</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                    </Input>
                                  </FormGroup>
                                </Col>
                            </Row>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color='info' style={{color : "white"}}>
                          Aceptar
                        </MDBBtn>
                      <MDBBtn color='danger'  onClick={() => setToggleHerramientas(false)}>
                      Cerrar
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModal>
          </MDBContainer>  
        </div>
  );
}

export default AsignationToRefact;