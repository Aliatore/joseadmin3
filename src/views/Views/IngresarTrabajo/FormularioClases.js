import React from 'react';
import 'react-datez/dist/css/react-datez.css';
import { ReactDatez } from 'react-datez'
import axios from 'axios'
import { toast } from 'react-toastify';
import { MDBIcon } from 'mdbreact';

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

const Clases = (props) => {
  const [data, setData] = React.useState({
    collapse: true,
    fadeIn: true,
    timeout: 300,
    pais: null,
    nivelEducativo: null,
    universidad: null,
    fechaHora: null,
    carrera: null,
    cursos: null,
    materia: null,
    temas: null,
    diasDisponibles: null,
    prefijo: null,
    whatsapp: null,
    correo: null,
    metodoPago: null,
    file: null,
    comentarios: null,
    datacliente: props.datacliente,
    codigo: null,
    studentBudget: null,
    teacherBudget: null,
    title: null
  });
  // const [toggle, setToggle] = React.useState(false);
  // const [toggleFade, setToggleFade] = React.useState(false)
  const setPais = (e) => {
    setData({
      ...data,
      pais: e.target.value
    });
    //console.log(e.target.value, "pais");
  }
  const setNivelEducativo = (e) => {
    setData({
      ...data,
      nivelEducativo: e.target.value
    });
    //console.log(e.target.value, "nivelU");
  }
  const setUniversidad = (e) => {
    setData({
      ...data,
      universidad: e.target.value
    });
    //console.log(e.target.value, "Universidad");
  }
  const setCarrera = (e) => {
    setData({
      ...data,
      carrera: e.target.value
    });
    //console.log(e.target.value, "Carrera");
  }
  const setMateria= (e) => {
    setData({
      ...data,
      materia: e.target.value
    });
    //console.log(e.target.value, "Carrera");
  }
  const setCursos = (e) => {
    setData({
      ...data,
      cursos: e.target.value
    });
    //console.log(e.target.value, "Cursos");
  }
  const setTemas = (e) => {
    setData({
      ...data,
      temas: e.target.value
    });
    //console.log(e.target.value, "Temas");
  }
  const setDiasdisponibles = (e) => {
    setData({
      ...data,
      diasDisponibles: e.target.value
    });
    //console.log(e.target.value, "Dias disponibles");
  }
  // const setPrefijo = (e) => {
  //   setData({
  //     ...data,
  //     prefijo: e.target.value
  //   });
  //   console.log(e.target.value, "Prefijo");
  // }
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
  // const setFile = (e) => {
  //   setData({
  //     ...data,
  //     file: e.target.value
  //   });
  //   console.log(e.target.value, "file");
  // }
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
    });
    //console.log(e.target.value, "codigo");
  }
  const setFechaHora = (e) => {

    var fecha_inicial = e;
    var [fecha, hora] = fecha_inicial.split("T");
    var [hora_real, zona_horaria] = hora.split("-");
    //console.log(fecha);
    //console.log(hora);
    //console.log(hora_real);
    //console.log(zona_horaria);

    setData({
      ...data,
      fechaHora: e,
      aux1: fecha,
      aux2: hora_real,
      aux3: zona_horaria
    });
    //console.log(e);
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

  const setTitle = (e) => {
    setData({
      ...data,
      title: e.target.value
    });
    //console.log(e.target.value, "title");
  }

  const registerNewClass = (e) => {
  e.preventDefault()
  const url = `https://admin.apruebaexamenes.com/Ingresar-Class`

  let datosNewClass

  datosNewClass = {
    Userid: parseInt(props.dataclient.iduser),
    Pais: data.pais,
    NivelUni: data.nivelEducativo,
    Universidad: data.universidad,
    FechaFinal: data.fechaHora,
    //FechaFinal: "2020-02-02 01:47:00",
    Carrera: data.carrera,
    CursoMateria: data.cursos,
    Materia: data.materia,
    Temas: data.temas,
    DiasAvil: data.diasDisponibles,
    NumWs: data.whatsapp,
    Email: data.correo,
    MetodoPago: data.metodoPago,
    Comentario: data.comentarios,
    Code: data.codigo,
    StudentBug: data.studentBudget,
    TeacherBug: data.teacherBudget,
    Title: data.title
  }

  axios({
    method: 'post',
    url: url,
    data: datosNewClass,
    headers: {'Content-Type':'application/json'},
  })
  .then(response => response.data)
  .then((data) => { 
    // console.log(data)
    if (data.code === '000') {
      setData({
        ...data,
        pais: '',
        nivelEducativo: '',
        universidad: '',
        fechaHora: '',
        carrera: '',
        cursos: '',
        materia:'',
        temas:'',
        diasDisponibles:'',
        whatsapp:'',
        correo:'',
        metodoPago:'',
        comentarios:'',
        codigo: '',
        studentBudget: '',
        teacherBudget: '',
        title:''
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
      {/* {console.log(props.dataclient)} */}
        <Row>
          <Form onSubmit={registerNewClass}>
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
                        placeholder="País en el qué resides" 
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
                        id="n_educativo" 
                        placeholder="Ejm: Bachillerato, Universidad, Postgrado, Master, Doctorado, Post-Doctorado, proyecto empresarial, otro." 
                        value={data.nivelEducativo}
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
                        id="university" 
                        placeholder="Ingresa el nombre de la universidad a la que asistes" 
                        value={data.universidad}
                        onChange={(e) => setUniversidad(e)}
                        required
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="3" lg="3" xl="3">
                      <FormGroup>
                        <div className="form-group">
                            <label htmlFor="exampleDate2"><i className="fa fa-calendar fa-lg" aria-hidden="true"></i> Fecha</label>
                            <ReactDatez
                            width="100%"
                            position="center"
                            disableInputIcon={true}
                            name="fecha_hora" 
                            handleChange={setFechaHora} 
                            value={data.fechaHora !== null ? data.fechaHora : ""} 
                            />
                        </div>
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="3" lg="3" xl="3">
                      <FormGroup row>
                        <Col md="12">
                          <Label htmlFor="date-input"><i className="fa fa-graduation-cap fa-lg" aria-hidden="true"></i> Carrera</Label>
                        </Col>
                        <Col xs="12" md="12">
                          <Input 
                            type="text" 
                            id="date-input" 
                            name="date-input" 
                            placeholder="Carrera universitaria" 
                            value={data.carrera}
                            onChange={(e) => setCarrera(e)}
                            required
                          />
                        </Col>
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="3" lg="3" xl="3">
                    <FormGroup row>
                      <Col md="12">
                        <Label htmlFor="date-input"><i className="fa fa-newspaper-o fa-lg" aria-hidden="true"></i> Curso</Label>
                      </Col>
                      <Col xs="12" md="12">
                        <Input type="text" 
                        placeholder="Especialidad"
                        value={data.cursos}
                        onChange={(e) => setCursos(e)}
                        required
                        />
                      </Col>
                    </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="3" lg="3" xl="3">
                      <FormGroup>
                        <Label htmlFor="company"><i className="fa fa-server fa-lg" aria-hidden="true"></i> Materia</Label>
                        <Input 
                        type="text" 
                        placeholder="Materia" 
                        value={data.materia}
                        onChange={(e) => setMateria(e)}
                        required
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="3" lg="3" xl="3">
                      <FormGroup>
                        <Label htmlFor="company"><i className="fa fa-sort-amount-asc fa-lg" aria-hidden="true"></i> Temas a tratar</Label>
                        <Input 
                        type="text"  
                        placeholder="Temas evaluados"
                        value={data.temas}
                        onChange={(e) => setTemas(e)}
                        required
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="3" lg="3" xl="3">
                      <FormGroup>
                        <Label htmlFor="company"><i className="fa fa-calendar fa-lg" aria-hidden="true"></i> Días disponibles</Label>
                        <Input 
                        type="text"  
                        placeholder="Lunes, Martes, Miercoles, Jueves, etc"
                        value={data.diasDisponibles}
                        onChange={(e) => setDiasdisponibles(e)}
                        required
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="3" lg="3" xl="3">
                      <FormGroup>
                        <Label htmlFor="company"><i className="fa fa-mobile fa-lg" aria-hidden="true"></i> Número de Whatsapp</Label>
                        <Input 
                        type="text" 
                        id="whats" 
                        placeholder="Whatsapp"
                        value={data.whatsapp}
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
                        id="email" 
                        placeholder="Correo electrónico"
                        value={data.correo}
                        onChange={(e) => setCorreo(e)}
                        required
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="3" lg="3" xl="3">
                      <FormGroup>
                        <Label htmlFor="company"><i className="fa fa-money fa-lg" aria-hidden="true"></i> Método de pago</Label>
                        <Input 
                        type="text" 
                        id="paymentme" 
                        placeholder="Paypal, Zelle, etc."
                        value={data.metodoPago}
                        onChange={(e) => setMetodoDePago(e)}
                        required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                    {/* <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="company">Prefijo</Label>
                        <Input 
                        type="text" 
                        id="company" 
                        placeholder="ejemplo: +58"
                        value={data.prefijo}
                        onChange={(e) => setPrefijo(e)}
                        required
                        />
                      </FormGroup>
                    </Col> */}
                  <Row>
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
                  <Col xs="12" sm="12" md="3" lg="3" xl="3">
                        <FormGroup>
                          <Label htmlFor="company"><i className="fa fa-text-width fa-lg" aria-hidden="true"></i> Título del proyecto</Label>
                          <Input 
                          type="text"  
                          placeholder="Agrega un título"
                          value={data.title}
                          onChange={(e) => setTitle(e)}
                          required
                          />
                        </FormGroup>
                  </Col>
                </Row>
                  {/* <br></br> */}
                  {/* <FormGroup row>
                      <Col xs="12" md="6">
                        <Label htmlFor="file-input">Adjunta el archivo correspondiente al exámen</Label>
                      </Col>
                      <Col xs="12" md="6">
                        <Input 
                        type="file" 
                        id="file-input" 
                        name="file-input"
                        value={data.file}
                        onChange={(e) => setFile(e)}
                        required
                        />
                      </Col>
                    </FormGroup> */}
                    {/* <br></br> */}
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

export default Clases;
