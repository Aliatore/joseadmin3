import React, {Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol } from 'mdbreact';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

class Calendario extends Component {
  
  constructor(props){
    super(props)
    this.state = {
          modal: false,
          profesores: null,
          dataToSend: null,
          profesorTCode: '',
          profesorName: '',
          profesorLastname: '',
          data_usuario: this.props.datacliente,
    }
  }

  consultaCalendario = (e) => {
        const url = `https://admin.apruebaexamenes.com/Calendar-delivery-dates`
          let datosCalendario = {
            Teachercode: e
          }
        axios({
          method: 'post',
          url: url,
          data: datosCalendario,
          headers: {'Content-Type':'application/json'},
        })
        .then((respuesta) => {
          //  console.log(respuesta,"api calendario")
          if (respuesta.request.status === 200) {
            this.setState({
              fechasCalendario: respuesta.data
            });
          } else {
            //console.log(respuesta, 'error');
            toast.error(`✕ - ${respuesta.mensaje}`, {
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

  getProfesores = () => {
        //Data a enviar con el axios
        const url = `https://admin.apruebaexamenes.com/View-info-table-Prof`
        //ejecutando la funcion axios
        axios({
          method: 'post', 
          url: url,
          headers: {'Content-Type':'application/json'},
        })
        .then((data) => {
          //DEberia haber un validador qué verifique si está ññegando bien la data o no, revisar registrar usuario.js 
          // console.log(data.data,"respuestaDelApi")
          this.setState({
            profesores: data.data
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
  consultaCalendario2 = (e) => {
    const url = `https://admin.apruebaexamenes.com/Calendar-delivery-dates`
      let datosCalendario = {
        Teachercode: this.state.data_usuario.teacher_code
      }
    axios({
      method: 'post',
      url: url,
      data: datosCalendario,
      headers: {'Content-Type':'application/json'},
    })
    .then((respuesta) => {
      //  console.log(respuesta,"api calendario")
      if (respuesta.request.status === 200) {
        this.setState({
          fechasCalendario: respuesta.data
        });
      } else {
        //console.log(respuesta, 'error');
        toast.error(`✕ - ${respuesta.mensaje}`, {
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

  toggle = () => {
          this.setState({
            modal: !this.state.modal
          });
  }

  handleEventClick = async ({ event }) => {
    this.toggle();
    await this.setState({ dataToSend: event });
  };

  componentDidMount() {

    if (this.state.data_usuario !== null && this.state.data_usuario.rol_id === "1") {
      this.getProfesores()
    } else if (this.state.data_usuario !== null && this.state.data_usuario.rol_id === "3") {
      this.consultaCalendario2()
    }
    // console.log('Funcion ejecutada antes del render');
  }


  parseDate = (raw_date) => {
    //console.log("Raw date", raw_date);
    let old_date = raw_date
    let newDate = old_date.substring(0,10)
    //console.log(newDate);
    let [year, month, day] = newDate.split('-')
    //console.log(year);
    //console.log(month);
    //console.log(day);
    let mesEspañol = ''

        if (month === '01') {
      mesEspañol="Enero"
    } else if (month === '02') {
      mesEspañol="Febrero"
    } else if (month === '03') {
      mesEspañol="Marzo"
    } else if (month === '04') {
      mesEspañol="Abril"
    } else if (month === '05') {
      mesEspañol="Mayo"
    } else if (month === '06') {
      mesEspañol="Junio"
    } else if (month === '07') {
      mesEspañol="Julio"
    } else if (month === '08') {
      mesEspañol="Agosto"
    } else if (month === '09') {
      mesEspañol="Septiembre"
    } else if (month === '10') {
      mesEspañol="Octubre"
    } else if (month === '11') {
      mesEspañol="Noviembre"
    } else if (month === '12') {
      mesEspañol="Diciembre"
    }

    return `${day} de ${mesEspañol} del ${year}`

    //return newDate


  }

  onEventProfesores = (e) => {
    let data = e.target.value 
    let [TCode, TName, TLastname] = data.split('-')
    this.setState({
      codProfesor: TCode,
      profesorTCode: TCode,
      profesorName: TName,
      profesorLastname: TLastname,
    })
    //console.log(e.target.value)
    this.consultaCalendario(TCode)
  }

  setProfesores = () => {
    if(this.state.profesores !== null) {
      return this.state.profesores.map((e, i) => {
        return <option key={i} value={`${e.Teachercode}-${e.Name}-${e.Lastname}`}>Nombre: {e.Name} - Código: {e.Teachercode}</option>
      }) 
    }else{
      //console.log("error")
    }
  }

  parseDateInit = (dateX) => {
    let dataFecha = dateX
    let fechaParseada = dataFecha.toString().substring(4,15)
    let [month, day, year] = fechaParseada.split(' ')
    let mesEspañol = ''

    if (month === 'Jan') {
      mesEspañol="Enero"
    } else if (month === 'Feb') {
      mesEspañol="Febrero"
    } else if (month === 'Mar') {
      mesEspañol="Marzo"
    } else if (month === 'Apr') {
      mesEspañol="Abril"
    } else if (month === 'May') {
      mesEspañol="Mayo"
    } else if (month === 'Jun') {
      mesEspañol="Junio"
    } else if (month === 'Jul') {
      mesEspañol="Julio"
    } else if (month === 'Aug') {
      mesEspañol="Agosto"
    } else if (month === 'Sep') {
      mesEspañol="Septiembre"
    } else if (month === 'Oct') {
      mesEspañol="Octubre"
    } else if (month === 'Nov') {
      mesEspañol="Noviembre"
    } else if (month === 'Dec') {
      mesEspañol="Diciembre"
    }

    return `${day} de ${mesEspañol} del ${year}`

  }

  parseDateFinal = (dateX) => {
    let dataFecha = dateX
    console.log(dataFecha);
    let fechaParseada = dataFecha.toString().substring(4,15)
    let [month, day, year] = fechaParseada.split(' ')
    let mesEspañol = ''

    if (month === 'Jan') {
      mesEspañol="Enero"
    } else if (month === 'Feb') {
      mesEspañol="Febrero"
    } else if (month === 'Mar') {
      mesEspañol="Marzo"
    } else if (month === 'Apr') {
      mesEspañol="Abril"
    } else if (month === 'May') {
      mesEspañol="Mayo"
    } else if (month === 'Jun') {
      mesEspañol="Junio"
    } else if (month === 'Jul') {
      mesEspañol="Julio"
    } else if (month === 'Aug') {
      mesEspañol="Agosto"
    } else if (month === 'Sep') {
      mesEspañol="Septiembre"
    } else if (month === 'Oct') {
      mesEspañol="Octubre"
    } else if (month === 'Nov') {
      mesEspañol="Noviembre"
    } else if (month === 'Dec') {
      mesEspañol="Diciembre"
    }

    return `${day} de ${mesEspañol} del ${year}`

  }

  render() {
    
    return (
      <>
        <MDBContainer style={{height: '600px', backgroundColor: 'white'}}>
          {this.state.data_usuario !== null && this.state.data_usuario.rol_id === "1" ?
          <Form className="pt-5 ml-3">
            <FormGroup row>
              <Label sm={2} for="rol" style={{fontSize: 15, fontWeight: 'bold', textAlign: 'left'}}>Profesor:</Label>
              <Col xs={10} sm={8} md={8} lg={8} xl={8}>
                <Input 
                  type="select" 
                  name="rol" 
                  id="rol"
                  value={this.state.teacher_code}
                  onChange={this.onEventProfesores}
                  required
                >
                  <option value="">Seleccione el código de profesor</option>
                  {this.state.profesores !== null ? 
                    this.setProfesores()
                   : null
                  }
                </Input>
              </Col>
            </FormGroup>
          </Form>
          : null
          }
          <FullCalendar
              plugins={[ dayGridPlugin, interactionPlugin ]}
              locale="es"
              height={"400px"}
              aspectRatio={"2"}
              handleWindowResize={true}
              events={this.state.fechasCalendario} 
              eventClick={this.handleEventClick}
          />
        </MDBContainer>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
        <MDBModalHeader toggle={this.toggle}>Asignación pendiente</MDBModalHeader>
        <MDBModalBody>
            <MDBRow>
            {this.state.dataToSend != null ?
                <>
                {this.state.profesorName && this.state.profesorLastname != null ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="user" className="disabled">Profesor asignado:</label><br/>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon">
                        <i className="fa fa-user fa-lg" aria-hidden="true"></i>
                      </span>
                    </div>
                    <input type="text" id="user" className="form-control" placeholder={this.state.profesorName && this.state.profesorLastname != null ? this.state.profesorName +' ' + this.state.profesorLastname : "N/A"} disabled />
                  </div>
                </MDBCol>
                : null}
                {this.state.profesorTCode != null || undefined ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="cod_teacher" className="disabled mt-1">Código de profesor:</label><br/>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon">
                        <i className="fa fa-graduation-cap"></i>
                      </span>
                    </div>
                    <input type="text" id="cod_teacher" className="form-control" placeholder={this.state.profesorTCode != null ? this.state.profesorTCode: "N/A"} disabled />
                  </div>
                </MDBCol>
                : null}
                
                {this.state.dataToSend.title != null ?
                  <MDBCol xs="12" sm="12" md="12" lg="12" xl="12">
                  <label htmlFor="user" className="disabled">Título:</label><br/>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon">
                        <i className="cui-comment-square" aria-hidden="true"></i>
                      </span>
                    </div>
                    <input  className="form-control" type="textarea" name="textarea-input" id="textarea-input" rows="3"
                             placeholder={this.state.dataToSend.title} disabled />
                  </div>
                </MDBCol>
                : null}
                
                {this.state.dataToSend.start != null ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="cod_teacher" className="disabled mt-1">Fecha de inicio:</label><br/>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon">
                        <i className="cui-calendar"></i>
                      </span>
                    </div>
                    <input type="text" id="cod_teacher" className="form-control" placeholder={this.parseDateInit(this.state.dataToSend.start)} disabled/>
                  </div>
                </MDBCol>
                : null}
                
                {this.state.dataToSend.end != null ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="cod_teacher" className="disabled mt-1">Fecha de entrega:</label><br/>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon">
                        <i className="cui-calendar"></i>
                      </span>
                    </div>
                    <input type="text" id="cod_teacher" className="form-control" placeholder={this.parseDateFinal(this.state.dataToSend.end)} disabled/>
                  </div>
                </MDBCol>
                : null}
                </>
                :null
          }
            </MDBRow>
        </MDBModalBody>
        <MDBModalFooter>
            <MDBBtn color="danger" onClick={this.toggle}>Cerrar</MDBBtn>
        </MDBModalFooter>
        </MDBModal>
        </>
    )
  }
}
export default Calendario;