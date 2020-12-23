import React, { Component } from 'react'
import '../Proyectos/EntregasProfesor.css'
import {
  Container,
  Table,
  Form,
  Card,
  Button,
  Col,
  Input,
  Label,
  FormGroup,
  Modal,
  ModalBody
} from 'reactstrap';

import axios from 'axios';
import { toast } from 'react-toastify';
//const path = require('path');
//const fs = require('fs');

export default class registroUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      entrega: '',
      projects: null,
      projects2: null,
      projectsAdm: null,
      archivos: null,
      profesores: null,
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
    .then((response) => {
      this.setState({
        projects: response.data
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

  getProjectsAdm = () => {
  //Data a enviar con el axios
  const url = `https://admin.apruebaexamenes.com/View-table-Teacher-Assigned`
  //ejecutando la funcion axios
  axios({
    method: 'post', 
    url: url,
    headers: {'Content-Type':'application/json'},
    
  })
  .then((response) => {
    // console.log(response.data);
    this.setState({
      projects2: response.data
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

getFiles = (e) => {
  //Data a enviar con el axios
  const url = `https://admin.apruebaexamenes.com/Consult-arch`
  //ejecutando la funcion axios
  let projects = {
    Proyectid: parseInt(e),
  }

  axios({
    method: 'post', 
    url: url,
    data: projects,
    headers: {'Content-Type':'application/json'},
    
  })
  .then((data) => {
    this.setState({
      archivos: data.data
    });
    // console.log(data)
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
    // console.log(e.target.files[0]);
    var file = e.target.files[0];
      this.setState({
        file: file
      })
  }
  setEntrega = (e) => {
    // console.log(e.target.value);
    this.setState({
      entrega: e.target.value
    })
  }

  dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
        
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    // console.log( new File([u8arr], filename, {type:mime}));
    const url = window.URL.createObjectURL(new File([u8arr], {type:mime}))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', filename)
    document.body.appendChild(link)
    link.click()
  }


  onFileDownload = (id_file, id_project, project_name) => { 
    this.setState({
      modal: true
    })
    // console.log(id_file, id_project);

    //progressbar
    const optionsUpload = {
      onDownloadProgress: (ProgressEvent) => {
        const percentage = Math.round(
          (ProgressEvent.loaded * 100) / ProgressEvent.total
        );
        // console.log(ProgressEvent);
        this.setState({
          ...this.state,
          porcentaje: percentage
        })
      }
    }

    //aqui iria el axios que guarda el archivo, falta encriptarlo por btoa
    axios.post('https://admin.apruebaexamenes.com/Consult-File',{
          Projectid: id_project,
          Idfile: id_file,
    }, optionsUpload) 
    .then(res => {
      // console.log(res);
      this.setState({ porcentaje: 100 }, () => {
        setTimeout(() => {
          // console.log(res.data.File);
          this.dataURLtoFile(res.data.File, project_name)
          this.setState({ porcentaje: 0, modal: false, file: null })
        }, 500);
        toast.success(`✕ - ${res.data.mensaje}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
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
  onEventProfesores = (e) => {
    let data = e.target.value 
    let [TCode, TIdProject,] = data.split('-')
    this.setState({
      codProject: TCode,
      Idproject: TIdProject,
      allSelected: data
    })
    // console.log(e.target.value)
    this.getFiles(TIdProject)
  }

  componentDidMount() {
    this.state.data_cliente.rol_id === '1' ? this.getProjectsAdm() : this.getProjects()
    //console.log(this.props.datacliente.rol_id,'cliente');
  }

  componentWillUnmount() {
    this.state.data_cliente.rol_id === '1' ? this.getProjectsAdm() : this.getProjects()
  }

  handleEventClick = async ({ event, el }) => {
    this.toggle();
    await this.setState({ dataToSend: event });
  };

  parseDate(e){
    var data = e
    // console.log(data);
    var [fecha, hora] = data.split(' ')
    this.setState({
      aux: hora
    });
    return fecha;
    
  };

  parseHour(e){
    
    var data = e
    // console.log(data);
    var [fecha, hora] = data.split(' ')
    var [hora2, minutos, segundos] = hora.split(':')
    this.setState({
      aux: fecha,
      aux2: segundos
   });
    return `${hora2}:${minutos}`;
  }

  setProjectsAdm = () => {
    if(this.state.projects2 !== null) {
      //console.log(this.state.projects2, "titulo")
      return this.state.projects2.map((e, i) => {
        //console.log("selected admin", e);
        return <option key={i} value={`${e.Code}-${e.Idproj}-${e.Tittle}`}>Código: {e.Code} - {e.Tittle}</option>
        
      }) 
    }else{
      // console.log("error")
    }
  }

  setProjects = () => {
    if(this.state.projects !== null) {
      return this.state.projects.map((e, i) => {
        return <option key={i} value={`${e.Code}-${e.Idproj}-${e.Tittle}`}>Código: {e.Code} - {e.Tittle}</option>
      }) 
    }else{
      // console.log("error")
    }
  }
  setTable = () => {
    return this.state.archivos.map((datax, i) => {
      return (
        <tr key={i} className="tablas-tr">
          <td>{datax.Title}</td>
          <td>{this.parseDate(datax.File_datetime)}</td>
          <td>{this.parseHour(datax.File_datetime)}</td>
          <td><Button onClick={() => this.onFileDownload(datax.Idfile, datax.Id_project, datax.Title)}  color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-download"  style={{color: "blue"}}></i></Button></td>
        </tr>
        )
    }) 
}
  
  render() {
    return (
      <div>
        <Card body> 
          <Form className="ml-1">
            <FormGroup row>
              <Label xs="2" sm="2" md="2" lg="2" xl="2" for="rol" style={{fontSize: 15, fontWeight: 'bold', textAlign: 'left'}}>Proyecto:</Label>
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
                  {this.state.data_cliente.rol_id === '1' ? this.setProjectsAdm() : this.setProjects()
                  }
                </Input>
              </Col>
            </FormGroup>
          </Form>
        </Card>
        <Container  fluid xs="12" sm="12" md="12" lg="12" xl="12" style={{verticalAlign:"middle"}}>
            <Table className="Tablas" hover responsive={true}>
                <thead style={{verticalAlign: "baseline"}}>
                <tr>
                    <th>Título</th>
                    <th>Fecha de subida</th>
                    <th>Hora</th>
                    <th>Descargar</th>
                </tr>
                </thead>
                <tbody>
                  {this.state.archivos !== null ?
                    this.setTable()
                    :
                    null
                  }
                </tbody>
            </Table>
        </Container>
        <Modal isOpen={this.state.modal} >
          <ModalBody style={{textAlign: 'center'}}>
            {/* {this.state.porcentaje > 0 ?  
              <Progress animated value={this.state.porcentaje}>
                {this.state.porcentaje}%
              </Progress>
              :
              <Progress animated value="0">
                0%
              </Progress>
            } */}
                <h4>Su archivo esta siendo descargado, por favor espere...</h4>
                <div className="mt-3 spinner-border spinner-border-sm white-text" role="status" color="white" style={{width: '35px', height: '35px'}}>
                  <span className="sr-only">Loading...</span>
                </div>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
