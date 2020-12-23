import React from 'react';
import 'react-datez/dist/css/react-datez.css';
import axios from 'axios'
import { toast } from 'react-toastify';
import {MDBIcon} from 'mdbreact'

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  Form,
  Button,
  Container
} from 'reactstrap';

const Trabajo = (props) => {
  const [data, setData] = React.useState({
    collapse: true,
    fadeIn: true,
    timeout: 300,
    pais: '',
    profesion: '',
    fechaInicio: '',
    horaInicio: '',
    numRefBibliograficas: '',
    nivelEducativo: '',
    tipoMetodologia: '',
    numPalabras: '',
    fechaFinal: '',
    horaFinal: '',
    estiloDeCitas: '',
    universidad: '',
    tipoTrabajo: '',
    numPaginas: '',
    fechaParcial: '',
    horaParcial: '',
    tutoria: '',
    whatsapp: '',
    correo: '',
    metodoPago: '',
    //file: null,
    comentarios: '',
    codigo: '',
    studentBudget: '',
    teacherBudget: ''
  });

  const setPais = (e) => {
    setData({
      ...data,
      pais: e.target.value
    });
    //console.log(e.target.value, "pais");
  }
  const setTitulo = (e) => {
    setData({
      ...data,
      titulo: e.target.value
    });
    //console.log(e.target.value, "titulo");
  }
  const setProfesion = (e) => {
    setData({
      ...data,
      profesion: e.target.value
    });
    //console.log(e.target.value, "profesion");
  }
  const setFechaInicio = (e) => {
    setData({
      ...data,
      fechaInicio: e.target.value
    });
    //console.log(e.target.value, "fechaInicio");
  }
  const setHoraInicio = (e) => {
    setData({
      ...data,
      horaInicio: e.target.value
    });
    //console.log(e.target.value, 'horaInicio')
  }
  const setNumRefBibliograficas = (e) => {
    setData({
      ...data,
      numRefBibliograficas: e.target.value
    });
    //console.log(e.target.value, "numRefBibliograficas");
  }
  const setNivelEducativo = (e) => {
    setData({
      ...data,
      nivelEducativo: e.target.value
    });
    //console.log(e.target.value, "nivelU");
  }
  const setTipoMetodologia= (e) => {
    setData({
      ...data,
      tipoMetodologia: e.target.value
    });
    //console.log(e.target.value, "Tipo de metodologia");
  }
  const setNumPalabras = (e) => {
    setData({
      ...data,
      numPalabras: e.target.value
    });
    //console.log(e.target.value, "NumPalabras");
  }
  const setFechaFinal = (e) => {
    setData({
      ...data,
      fechaFinal: e.target.value
    });
    //console.log(e.target.value, "fechaFinal");
  }
  const setHoraFinal = (e) => {
    setData({
      ...data,
      horaFinal: e.target.value
    });
    //console.log(e.target.value, "horaFinal");
  }
  const setEstilodeCitas = (e) => {
    setData({
      ...data,
      estiloDeCitas: e.target.value
    });
    //console.log(e.target.value, "estiloDeCitas");
  }
  const setUniversidad = (e) => {
    setData({
      ...data,
      universidad: e.target.value
    });
    //console.log(e.target.value, "Universidad");
  }
  const setTipoTrabajo = (e) => {
    setData({
      ...data,
      tipoTrabajo: e.target.value
    });
    //console.log(e.target.value, "tipoTrabajo");
  }
  const setNumPaginas = (e) => {
    setData({
      ...data,
      numPaginas: e.target.value
    });
    //console.log(e.target.value, "numPaginas");
  }
  const setFechaParcial = (e) => {
    setData({
      ...data,
      fechaParcial: e.target.value
    });
    //console.log(e.target.value, "fechaParcial");
  }
  const setHoraParcial = (e) => {
    setData({
      ...data,
      horaParcial: e.target.value
    });
    //console.log(e.target.value, 'horaParcial')
  }
  const setTutoria = (e) => {
    setData({
      ...data,
      tutoria: e.target.value
    });
    //console.log(e.target.value, "tutoria");
  }
  const setWhatsapp = (e) => {
    setData({
      ...data,
      whatsapp: e.target.value
    });
    //console.log(e.target.value, "Whatsapp");
  }
  const setCorreo= (e) => {
    setData({
      ...data,
      correo: e.target.value
    });
    //console.log(e.target.value, "Correo");
  }
  const setMetodoDePago= (e) => {
    setData({
      ...data,
      metodoPago: e.target.value
    });
    //console.log(e.target.value, "MetodoPago");
  }
  const setComentarios = (e) => {
    setData({
      ...data,
      comentarios: e.target.value
    });
    //console.log(e.target.value, "Comentarios");
  }
  const setCodigo = (e) => {
    setData({
      ...data,
      codigo: e.target.value
    })
  }
  const setStudentBudget = (e) => {
    setData({
      ...data,
      studentBudget: e.target.value
    });
    //console.log(e.target.value, "presupuesto estudiante");
  }

  const setTeacherBudget = (e) => {
    setData({
      ...data,
      teacherBudget: e.target.value
    });
    //console.log(e.target.value, "presupuesto profesor");
  }
//   const setFechaHora = (e) => {

//     var fecha_inicial = e;
//     var [fecha, hora] = fecha_inicial.split("T");
//     var [hora_real, zona_horaria] = hora.split("-");
//     console.log(fecha);
//     console.log(hora);
//     console.log(hora_real);
//     console.log(zona_horaria);

//     setData({
//       ...data,
//       fechaHora: e
//     });
//     console.log(e);
// }
  const registerNewTrabajo = (e) => {
  e.preventDefault()
  const url = `https://admin.apruebaexamenes.com/Ingresar-Trabajo`

  let datosNewTrabajo

  datosNewTrabajo = {
    Userid: parseInt(props.dataclient.iduser),
    Pais: data.pais,
    TituloTrabajo: data.titulo,
    Profesion: data.profesion,
    FechaIni:  `${data.fechaInicio} ${data.horaInicio}`,
    NumReferenBiblio: data.numRefBibliograficas,
    NivelUni: data.nivelEducativo,
    Metodologia: data.tipoMetodologia,
    NumPalabra: data.numPalabras,
    FechaFinal: `${data.fechaFinal} ${data.horaFinal}`,
    EstilCitas: data.estiloDeCitas,
    Universidad: data.universidad,
    TipoTrabajo: data.tipoTrabajo,
    NumPaginas: data.numPaginas,
    FechaParci: `${data.fechaParcial} ${data.horaParcial}`,
    Tutoria: parseInt(data.tutoria),
    NumWs: data.whatsapp,
    Email: data.correo,
    MetodoPago: data.metodoPago,
    Comentario: data.comentarios,
    StudentBug: data.studentBudget,
    TeacherBug: data.teacherBudget,
    Code: data.codigo
  }

  axios({
    method: 'post',
    url: url,
    data: datosNewTrabajo,
    headers: {'Content-Type':'application/json'},
  })
  .then(response => response.data)
  .then((data) => { 
    // console.log(data)
    if (data.code === '000') {
      setData({
        ...data,
        pais: '',
    titulo: '',
    profesion: '',
    fechaInicio: '',
    horaInicio:'',
    numRefBibliograficas: '',
    nivelEducativo: '',
    tipoMetodologia: '',
    numPalabras: '',
    fechaFinal: '',
    horaFinal:'',
    estiloDeCitas: '',
    universidad: '',
    tipoTrabajo: '',
    numPaginas: '',
    fechaParcial: '',
    horaParcial: '',
    tutoria: '',
    whatsapp: '',
    correo: '',
    metodoPago: '',
    //file: '',
    comentarios: '',
    codigo: ''
      });
      toast.success(`✓ - Registrado satisfactoriamente.`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(`✕ - ${data.mensaje}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  })
  .catch((error) => {
    toast.error(`✕ - ${error}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  })
  }
    return (
      <div className="animated fadeIn">
        <Row>
        <Form onSubmit={registerNewTrabajo}>
          <Col xs="12">
            <Card>
              <CardHeader>
                <Row className="ml-4 mt-1 pt-1" style={{textAlign:"center"}}>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <p style={{fontSize: 25, fontWeight: 'bold'}}> <MDBIcon className="mt-1" size="2x" icon="info-circle"/> &nbsp;Información:<span style={{fontSize: 25, fontWeight: '300'}}> para registrar el nuevo proyecto, por favor rellenar los campos y presione registrar.</span></p>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Container className="mt-2 mb-4" xs="12" sm="12" md="12" lg="12" xl="12" style={{textAlign:"center",}}>
                  <h5><MDBIcon className="mt-1" size="lg" icon="book"/>  Datos del proyecto</h5>
                </Container>
                <Row>
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                      <FormGroup>
                      <Label htmlFor="pais"><i className="fa fa-globe fa-lg" aria-hidden="true"></i> País</Label>
                        <Input 
                          type="text"
                          name="pais" 
                          id="pais" 
                          value={data.pais}
                          placeholder="País en el qué reside" 
                          onChange={(e) => setPais(e)}
                          required
                        />
                      </FormGroup>
                  </Col>
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                    <FormGroup>
                    <Label htmlFor="n_educativo"><i className="fa fa-level-up fa-lg" aria-hidden="true"></i> Nivel educativo</Label>
                      <Input 
                        type="text"
                        name="NivelE" 
                        id="NivelE" 
                        value={data.nivelEducativo}
                        placeholder="Nivel educativo del proyecto" 
                        onChange={(e) => setNivelEducativo(e)}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                    <FormGroup>
                    <Label htmlFor="company"><i className="fa fa-university fa-lg" aria-hidden="true"></i> Universidad</Label>
                      <Input 
                        type="text"
                        name="universidad" 
                        id="universidad" 
                        value={data.universidad}
                        placeholder="Universidad a la que asiste" 
                        onChange={(e) => setUniversidad(e)}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                    <FormGroup>
                      <Label htmlFor="company"><i className="fa fa-text-width fa-lg" aria-hidden="true"></i> Título del trabajo</Label>
                      <Input 
                        type="text"
                        name="tituloTrabajo" 
                        id="tituloTrabajo" 
                        value={data.titulo}
                        placeholder="Ingrese el título del proyecto" 
                        onChange={(e) => setTitulo(e)}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                    <FormGroup>
                      <Label htmlFor="company"><i className="fa fa-briefcase fa-lg" aria-hidden="true"></i> Tipo de métodología</Label>
                      <Input 
                        type="text"
                        name="tipoMetodologia" 
                        id="tipoMetodologia" 
                        value={data.tipoMetodologia}
                        placeholder="Metodologia que debe usarse en el proyecto" 
                        onChange={(e) => setTipoMetodologia(e)}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                    <FormGroup>
                      <Label htmlFor="company"><i className="fa fa-file-word-o fa-lg" aria-hidden="true"></i> Tipo de trabajo</Label>
                      <Input 
                      type="text"
                      name="tipoTrabajo" 
                      id="tipoTrabajo" 
                      value={data.tipoTrabajo}
                      placeholder="TFG, TFM, Tésis, PEC, Tarea, ejercicio, etc." 
                      onChange={(e) => setTipoTrabajo(e)}
                      required
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                    <FormGroup>
                      <Label htmlFor="date-input"><i className="fa fa-graduation-cap fa-lg" aria-hidden="true"></i> Profesión</Label>
                      <Input 
                        type="text"
                        name="profesion" 
                        id="profesion" 
                        value={data.profesion}
                        placeholder="ejemplo: Biología" 
                        onChange={(e) => setProfesion(e)}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                    <FormGroup>
                      <Label htmlFor="company"><i className="fa fa-sort-numeric-asc fa-lg" aria-hidden="true"></i> Número de palabras</Label>
                      <Input 
                        type="number"
                        name="numPalabras" 
                        id="numPalabras" 
                        value={data.numPalabras}
                        placeholder="Indique cuantas palabras requiere el proyecto" 
                        onChange={(e) => setNumPalabras(e)}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                      <FormGroup>
                        <Label htmlFor="company"><i className="fa fa-file fa-lg" aria-hidden="true"></i> Número de páginas</Label>
                        <Input 
                          type="number"
                          name="numPaginas" 
                          id="numPaginas" 
                          value={data.numPaginas}
                          placeholder="Indique cuantas páginas requiere el proyecto" 
                          onChange={(e) => setNumPaginas(e)}
                          required
                        />
                      </FormGroup>
                  </Col>
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                        <FormGroup>
                        <label htmlFor="Date"><i className="fa fa-calendar fa-lg" aria-hidden="true"></i> Fecha Inicio</label>
                          <Input
                            hide
                            width="100%"
                            position="center"
                            disableInputIcon={true}
                            type="date"
                            name="fechaInicio" 
                            id="fechaInicio" 
                            value={data.fechaInicio}
                            placeholder="Indique la fecha de inicio del proyecto" 
                            onChange={(e) => setFechaInicio(e)}
                            required
                          />
                        </FormGroup>
                  </Col>
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                      <FormGroup>
                        <Label for="exampleTime"><i className="fa fa-clock-o fa-lg" aria-hidden="true"></i> Hora de inicio</Label>
                        <Input
                          type="time"
                          name="horaInicio" 
                          id="horaInicio" 
                          value={data.horaInicio}
                          placeholder="Indique la fecha de inicio del proyecto" 
                          onChange={(e) => setHoraInicio(e)}
                          required
                        />
                      </FormGroup>
                  </Col>
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                    <FormGroup>
                      <Label for="exampleDate"><i className="fa fa-calendar fa-lg" aria-hidden="true"></i> Fecha parcial</Label>
                      <Input
                        type="date"
                        name="fechaParcial"
                        id="fechaParcial"
                        value={data.fechaParcial}
                        placeholder="Indique la fecha de la primera entrega parcial" 
                        onChange={(e) => setFechaParcial(e)}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                    <FormGroup>
                      <Label for="exampleTime"><i className="fa fa-clock-o fa-lg" aria-hidden="true"></i> Hora de la fecha parcial</Label>
                      <Input
                        type="time"
                        name="horaParcial" 
                        id="horaParcial" 
                        value={data.horaParcial}
                        placeholder="Indique la hora de la primera entrega parcial" 
                        onChange={(e) => setHoraParcial(e)}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                    <FormGroup>
                      <Label for="exampleDate"><i className="fa fa-calendar fa-lg" aria-hidden="true"></i> Fecha de entrega final</Label>
                      <Input
                        type="date"
                        name="fechaFinal"
                        id="fechaFinal"
                        value={data.fechaFinal}
                        placeholder="Indique la fecha de la entrega final" 
                        onChange={(e) => setFechaFinal(e)}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                    <FormGroup>
                      <Label for="exampleTime"><i className="fa fa-clock-o fa-lg" aria-hidden="true"></i> Hora de entrega final</Label>
                      <Input
                        type="time"
                        name="horaFinal"
                        id="horaFinal"
                        value={data.horaFinal}
                        placeholder="Indique la hora de la entrega final" 
                        onChange={(e) => setHoraFinal(e)}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                    <FormGroup>
                      <Label htmlFor="company"><i className="fa fa-sort-numeric-asc fa-lg" aria-hidden="true"></i> Número de referencias bibliograficas:</Label>
                      <Input 
                        type="number"
                        name="numRefBibliograficas"
                        id="numRefBibliograficas"
                        value={data.numRefBibliograficas}
                        placeholder="Indique el número requerido de referencias" 
                        onChange={(e) => setNumRefBibliograficas(e)}
                        required
                      />
                    </FormGroup>
                  </Col>
                  </Row>
                  <Row>
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                    <FormGroup>
                      <Label htmlFor="company"><i className="fa fa-text-width fa-lg" aria-hidden="true"></i> Estilo de citas</Label>
                      <Input 
                      type="text"
                      name="estiloDeCitas"
                      id="estiloDeCitas"
                      value={data.estiloDeCitas}
                      placeholder="Indique el estilo de cita requerido en el proyecto" 
                      onChange={(e) => setEstilodeCitas(e)}
                      required
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                      <FormGroup>
                        <Label htmlFor="t_user"><i className="fa fa-user-md fa-lg" aria-hidden="true"></i> Trabajo tutoriado</Label>
                        <Input
                          type="select" 
                          id="tutoria" 
                          placeholder="Trabajo tutoriado" 
                          onChange={(e) => setTutoria(e)}
                          value={data.tutoria}
                          required
                        >
                          <option>Seleccione una opción</option>
                          <option value="1">Si</option>
                          <option value="2">No</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="3" lg="3" xl="3">
                    <FormGroup>
                      <Label htmlFor="company"><i className="fa fa-mobile fa-lg" aria-hidden="true"></i> Número de Whatsapp</Label>
                      <Input 
                      type="text"
                      name="whatsapp"
                      id="whatsapp"
                      value={data.whatsapp}
                      placeholder="Indique número de celular" 
                      onChange={(e) => setWhatsapp(e)}
                      required
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                    <FormGroup>
                      <Label htmlFor="company"><i className="fa fa-at fa-lg" aria-hidden="true"></i> Correo electrónico</Label>
                      <Input 
                        type="email"
                        name="correo"
                        id="correo"
                        value={data.correo}
                        placeholder="Indique el correo electrónico" 
                        onChange={(e) => setCorreo(e)}
                        required
                      />
                    </FormGroup>
                  </Col>
                  </Row>
                  <br></br>
                  {/* <FormGroup row>
                    <Col xs="12" md="6">
                      <Label htmlFor="file-input">Adjunta el archivo correspondiente a tú exámen:</Label>
                    </Col>
                    <Col xs="12" md="6">
                      <Input type="file" id="file-input" name="file-input" />
                    </Col>
                  </FormGroup>
                  <br></br> */}
                <Row>
                  {/* <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="company">Prefijo</Label>
                      <Input type="text" id="company" placeholder="+58" />
                    </FormGroup>
                  </Col> */}
                  
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                    <FormGroup>
                      <Label htmlFor="company"><i className="fa fa-money fa-lg" aria-hidden="true"></i> Método de pago</Label>
                      <Input 
                      type="text"
                      name="metodoPago"
                      id="metodoPago"
                      value={data.metodoPago}
                      placeholder="Indique el correo electrónico" 
                      onChange={(e) => setMetodoDePago(e)}
                      required
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                      <FormGroup>
                        <Label htmlFor="company"><i className="fa fa-shield fa-lg" aria-hidden="true"></i> Código del proyecto</Label>
                        <Input 
                        type="text"  
                        placeholder="Asigna un código a este proyecto"
                        value={data.codigo}
                        onChange={(e) => setCodigo(e)}
                        required
                        />
                      </FormGroup>
                  </Col>
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                      <FormGroup>
                        <Label htmlFor="company"><i className="fa fa-money fa-lg" aria-hidden="true"></i> Presupuesto del estudiante</Label>
                        <Input 
                        type="text"  
                        placeholder="Asigna el monto"
                        value={data.studentBudget}
                        onChange={(e) => setStudentBudget(e)}
                        required
                        />
                      </FormGroup>
                  </Col>
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                        <FormGroup>
                          <Label htmlFor="company"><i className="fa fa-money fa-lg" aria-hidden="true"></i> Presupuesto del profesor</Label>
                          <Input 
                          type="text"  
                          placeholder="Asigna el monto"
                          value={data.teacherBudget}
                          onChange={(e) => setTeacherBudget(e)}
                          required
                          />
                        </FormGroup>
                  </Col>
                </Row>               
                <Row>
                  <Col className="mt-1 mb-2" xs="12" sm="12" md="12" lg="12" xl="12" style={{textAlign:"left"}}>
                        <Label htmlFor="textarea-input"><i className="fa  fa-commenting-o fa-lg" aria-hidden="true"></i> Comentarios</Label>
                  </Col>
                      <Col xs="12" sm="12" md="12" lg="12" xl="12">
                        <Input 
                        type="textarea" 
                        name="textarea-input" 
                        id="textarea-input" rows="9"
                        placeholder="Puntos relevantes sobre tú exámen"
                        value={data.comentarios}
                        onChange={(e) => setComentarios(e)}
                        required
                        />
                  </Col>
                </Row>     
                <Row className="mt-3" style={{justifyContent: 'center'}}>
                  <Button color="success" type="submit" style={{fontWeight: 'bold', width: 150}}>Registrar</Button>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Form>
      </Row>
    </div>
    );
  }


export default Trabajo;
