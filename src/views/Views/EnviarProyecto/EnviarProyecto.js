import React, { Component } from 'react'
import '../Proyectos/EntregasProfesor.css'
import {
  Form,
  Card,
  CardTitle,
  Button,
  Row,
  Col,
  CardBody,
  Input,
  Label,
  FormGroup,
  Progress,
  Modal,
  ModalBody
} from 'reactstrap';

import axios from 'axios';
import { toast } from 'react-toastify';


export default class registroUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      entrega: '',
      projects: null,
      data_cliente: this.props.datacliente,
      porcentaje: 0,
      modal: false,
      codProject: null,
      Idproject: null,
      allSelected: ''
    }
  }

  getProjects = () => {
    //Data a enviar con el axios
    const url = `https://admin.apruebaexamenes.com/Project-Teacher`
    //ejecutando la funcion axios
    let projects = {
      TeacherCode: parseInt(this.state.data_cliente.teacher_code)
    }
    axios({
      method: 'post', 
      url: url,
      data: projects,
      headers: {'Content-Type':'application/json'},
      
    })
    .then((data) => {
      this.setState({
        projects: data.data
      });
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
  
  setData = (e) => {
    //console.log(e.target.files[0]);
    var file = e.target.files[0];
      this.setState({
        file: file
      })
  }
  setEntrega = (e) => {
    //console.log(e.target.value);
    this.setState({
      entrega: e.target.value
    })
  }

  toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>  resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  onFileUpload = async () => { 
    if (this.state.file === null) {
      toast.error(`✕ - Los campos no deben estar vacios`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }else{
      this.setState({
        modal: true
      })
      //let real_date = new Date().toLocaleString()
      //console.log(real_date);
      const result = await this.toBase64(this.state.file).catch(e => Error(e));
      //console.log(result)
  
      //progressbar
      const optionsUpload = {
        onUploadProgress: (ProgressEvent) => {
          const {loaded, total} = ProgressEvent;
          let percent = Math.floor( loaded * 100 / total )
          //console.log(`cargados ${loaded}kb de ${total}kb | ${percent}% `);
  
          if (percent < 100) {
            this.setState({ porcentaje: percent })
          }
  
        }
      }
  
      //aqui iria el axios que guarda el archivo, falta encriptarlo por btoa
      axios.post('https://admin.apruebaexamenes.com/Insert-arch',{
          Idproject: parseInt(this.state.Idproject),
          File: result,
          title: this.state.file.name,
      }, optionsUpload) 
      .then(res => {
        //console.log(res.data);
        if (res.data.code === "00") {
          this.setState({ porcentaje: 100 }, () => {
            setTimeout(() => {
              this.setState({ porcentaje: 0, modal: false, file: null })
            }, 500);
            toast.success(`✕ - Archivo cargado satisfactoriamente`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          })
        } else {
          this.setState({ porcentaje: 0, modal: false, file: null })
          toast.success(`✕ - ${res.data.mensaje}`, {
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
        toast.error(`✕ - Error al subir el archivo`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        this.setState({ porcentaje: 0, modal: false, file: null })
      }) 
    }

  }


  componentDidMount() {
    this.getProjects()
    //console.log(this.props.datacliente,'cliente');
    //console.log(this.props.datacliente.teacher_code,'teachercode')
  }

  componentWillUnmount() {
    this.getProjects()
  }

  handleEventClick = async ({ event, el }) => {
    this.toggle();
    await this.setState({ dataToSend: event });
  };

  onEventProfesores = (e) => {
    let data = e.target.value 
    let [TCode, TIdProject] = data.split('-')
    this.setState({
      codProject: TCode,
      Idproject: TIdProject,
      allSelected: data
    })
    //console.log(e.target.value)
    //this.consultaCalendario(TCode)
  }

  setProjects = () => {
    if(this.state.projects !== null) {
      return this.state.projects.map((e, i) => {
        return <option key={i} value={`${e.Code}-${e.Idproj}-${e.Tittle}`}>Código: {e.Code} - {e.Tittle}</option>
      }) 
    }else{
      //console.log("error")
    }
  }
  
  render() {

    return (
      <div>
        <Card body> 
          <Form className="ml-1">
            <FormGroup row>
              <Label sm={2} for="rol" style={{fontSize: 15, fontWeight: 'bold', textAlign: 'left'}}>Proyecto:</Label>
              <Col xs="10" sm="10" md="10" lg="10" xl="10">
                  <Input 
                    type="select" 
                    name="rol" 
                    id="rol"
                    value={this.state.allSelected}
                    onChange={this.onEventProfesores}
                    required
                  >
                    <option value="">Seleccione el proyecto</option>
                    {this.state.projects !== null ? 
                      this.setProjects()
                      : null
                    }
                  </Input>
                </Col>
            </FormGroup>
          </Form>
        </Card>
        <Row>
          <Col xs="12" sm="" md="12" lg="12" xl="12">
            <Card body> 
              <form onSubmit={this.handleSubmit}>
                <CardTitle className="h4"></CardTitle>
                <CardBody>
                <FormGroup row>
                    <Col md="12">
                      <Label htmlFor="file-input">Adjuntar archivo:</Label>
                    </Col>
                    <Col xs="12" md="12">
                      <Input 
                        type="file" 
                        id="file-input" 
                        name="file-input" 
                        onChange={this.setData}
                      />
                    </Col>
                  </FormGroup>
                </CardBody>
                <Button 
                  style={{backgroundColor: '#0041f6', fontWeight: 'bold', color: '#fff'}} 
                  className="px-4 btn1-fondo" 
                  block
                  onClick={() => this.onFileUpload()}
                >
                Ingresar
                </Button>
              </form>
            </Card>
          </Col>
        </Row>
        <Modal isOpen={this.state.modal} >
          <ModalBody>
            {this.state.porcentaje > 0 ?  
              <Progress animated value={this.state.porcentaje}>
                {this.state.porcentaje}%
              </Progress>
              :
              <Progress animated value="0">
                0%
              </Progress>
            }
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
