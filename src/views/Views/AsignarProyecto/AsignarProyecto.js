import React, { useState } from 'react';
import { Table, Container, Button } from 'reactstrap';
// import { Link } from 'react-router-dom';
import '../InformacionProfesor/InformacionProfesor.css';
import axios from 'axios'
import { toast } from 'react-toastify';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,  } from 'mdbreact';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';

const Lista = (props) => {

  const [data, setData] = React.useState ({
    datosTabla: [],
    datosProfesor: null,
    Idproj: null,
    Userid: null,
    Questions: null,
    Tutory: null,
    State: null,
    Teachercode: null,
    Code: null,
    Studentbudget: null,
    Teacherbudget: null,
    Paymentreceived: null,
    Nextasignation: null,
    Finalasignation: null,
    Asignationdate: null,
    Matter: null,
    Questiontype: null,
    Duration: null,
    Theme: null,
    File: null,
    Description: null,
    Timezone: null,
    Asignationtype: null,
    Tittle: null,
    Pages: null,
    Wordnumber: null,
    Metology: null,
    Refencenumbers: null,
    Bibliographicstyle: null,
    Additional_details: null,
    Monto: null,
    Time: null,
    Content: null,
    Education_level: null,
    Mail: null,
    Payment_method: null,
    codProfesor: '',
    profesorTCode: '',
    profesorName: '',
    profesorLastname: '',
    idUser: '',
    solicitudes: '',
    allRequestProj: [],
    statusR: false
  });
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [idProject, setIdProject] = useState('');
  const [userId, setUserId] = useState('');
  // const [idCodeProject, setIdCodeProject] = useState('');

  const projectTable = () => {
      const url = `https://admin.apruebaexamenes.com/All-Project-Peticion`
  
      axios({
        method: 'post',
        url: url,
        headers: {'Content-Type':'application/json'},
      })
      .then(response => response.data)
      .then((data) => { 
        if (data !== null) {
          setData({
            ...data,
            datosTabla: data
          });
          //console.log(data.datosTabla, "tabla")
        } else {
          toast.error(`✕ - Error al cargar su petición`, {
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
  //funcion para mapear a todos los profesores

  const [data_real, set_data_real] = React.useState()

  const onEventProfesores = (e) => {
    e.preventDefault()
    let data = e.target.value 
    let [TIdproj, TUserid] = data.split('-')
    setIdProject(TIdproj)
    setUserId(TUserid)
    //console.log("onEvent", TIdproj)
    //console.log("onEvent", TUserid)
    //console.log("onEvent", Tid)
  }
  const mostrarSolicitudes = (e) => {
      //Data a enviar con el axios
        const url = `https://admin.apruebaexamenes.com/Consult-All-Peticion-Prof`
    
      let datosSolicitudes
    
      datosSolicitudes = {
        Projectid: e,
      }
  
      axios({
        method: 'post', 
        url: url,
        data: datosSolicitudes,
        headers: {'Content-Type':'application/json'},
      })
      .then((response) => {
        //console.log("todos los profes",response.status);
        if (response.status === 200 || response.status === 201 ) {
          set_data_real(response.data)
          // setToggle2(false)
          setData({
            ...data,
            statusR: true 
          })
          //console.log("allInfo", data);
        }else {
          toast.error(`✕ - Ha ocurrido un error`, {
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
  const asignar = () => {
    //console.log('skere');
    //Data a enviar con el axios
    const url = `https://admin.apruebaexamenes.com/Assigned-teacher`

    let datosLogin

    datosLogin = {
      UserID: parseInt(userId),
      Projectid: parseInt(idProject)
    }

    //ejecutando la funcion axios

    axios({
      method: 'post', 
      url: url,
      data: datosLogin,
      headers: {'Content-Type':'application/json'},
    })
    .then((response) => {
      if (response.data.code === '00') {     
        //DEberia haber un validador qué verifique si está ññegando bien la data o no, revisar registrar usuario.js 
      //console.log(response.data,"respuestaDelApi")
      toast.success(`✓ - Asignado satisfactoriamente`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setToggle2(false)
      projectTable()
      }else {
        toast.error(`✕ - Ha ocurrido un error`, {
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

  const infoModal = (i) =>{
    //console.log(i, "funcion INFO MODAL");// aqui llega los datos
    setToggle1(true) //abrir modal
    setData({
      ...data,
      Idproj: i.Idproj,
      Tutory: i.Tutory,
      State: i.State,
      Teachercode: i.Teachercode,
      Code: i.Code,
      Studentbudget: i.Studentbudget,
      Teacherbudget: i.Teacherbudget,
      Paymentreceived: i.Paymentreceived,
      Nextasignation: i.Next_asignation,
      Finalasignation: i.Final_asignation,
      Asignationdate: i.Asignation_date,
      Matter: i.Matter,
      Questiontype: i.Question_type,
      Duration: i.Duration,
      Theme: i.Theme,
      File: i.File,
      Description: i.Description,
      Timezone: i.Timezone,
      Asignationtype: i.Asignationtype,
      Tittle: i.Tittle,
      Pages: i.Pages,
      Wordnumber: i.Wordnumber,
      Metology: i.Metology,
      Refencenumbers: i.Refencenumbers,
      Bibliographicstyle: i.Bibliographic_style,
      Additional_details: i.Additional_details,
      Available_days: i.Avaible_days,
      Country: i.Country,
      Dating_style: i.Dating_style,
      Payment_method: i.Payment_method,
      Phone_number: i.Phone_number,
      Profession: i.Profession,
      Project_type_id: i.Project_type_id,
      Questions: i.Questions,
      Subjects: i.Subjects,
      University: i.University,
      Userid: i.Userid,
      Content: i.Content,
      Education_level: i.Education_level,
      Mail: i.Mail,
    })
  }

  const parseDateBill = (raw_date) => {
    //console.log("Raw date", raw_date);
    let old_date = raw_date
    let actDate = raw_date
    let newDate = old_date.substring(0,10)
    //console.log(newDate, 'newdate');
    let [year, month, day] = newDate.split('-')
    let [ fecha, hora] = actDate.split(' ')

    setData({
      ...data,
      aux1: fecha,
    });
    //console.log(hora,"hora")
    //console.log(year,'year');
    //console.log(month, 'month');
    //console.log(day, 'day');
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

    return `${day} de ${mesEspañol} del ${year} a las ${hora}`

    //return newDate

  }
  const abrirModal = (e) => {
    //console.log("proyecto solicitado", e);
    setToggle2(true)
    mostrarSolicitudes(e.Idproj)
  }

  const setTable = () => {
    try {
      return data.datosTabla.map((datax, i) => {
        return (
          <tr key={i} className="tablas-tr">
            <td>{datax.Code}</td>
            <td>{datax.Student_budget}</td>
            <td>{datax.Teacher_budget}</td>
            <td>
              <Button 
                onClick={() => infoModal(datax)} 
                color="primary" 
                style={{backgroundColor: "transparent", borderColor: "transparent"}}>
                <i className="fa fa-eye fa-lg" style={{color: "green"}}></i>
              </Button>
            </td>
            <td>
              <Button 
                onClick={() => abrirModal(datax)} 
                color="primary" 
                style={{backgroundColor: "green", borderColor: "green", verticalAlign: "bottom", color:"snow"}}>
                Asignar
              </Button>
            </td>
          </tr>
          )
      }) 
    } catch (error) {
      //console.log(error);
    }
  }

  React.useEffect(() => {
    projectTable() 
  }, [])

  return (
    <>
        <Container  fluid>
        <Table className="Tablas" hover responsive={true}>
                <thead>
                <tr>
                    <th>Código</th>
                    <th>Presupuesto estudiante</th>
                    <th>Presupuesto profesor</th>
                    <th>Info</th>
                    <th>Asignar</th>
                </tr>
                </thead>
                <tbody>
                {data.datosTabla !== null ?
                    setTable()
                    :
                    null
                }
                </tbody>
            </Table>
        </Container>
        <MDBContainer>
            <MDBModal isOpen={toggle1}>
              <MDBModalHeader>Información</MDBModalHeader>
                <MDBModalBody>
                <MDBRow>
                <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                    <label htmlFor="user" className="disabled">Código del proyecto</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-shield fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="user" className="form-control" placeholder={data.Code  ? data.Code : "N/A"} disabled />
                    </div>
                  </MDBCol>
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                    <label htmlFor="cod_teacher" className="disabled mt-1">Código de profesor</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-graduation-cap"></i>
                        </span>
                      </div>
                      <input type="text" id="cod_teacher" className="form-control" placeholder={data.Teachercode ? data.Teachercode : "N/A" } disabled />
                    </div>
                  </MDBCol>
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                    <label htmlFor="cod_teacher" className="disabled mt-1">Nivel Educativo</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-graduation-cap"></i>
                        </span>
                      </div>
                      <input type="text" id="cod_teacher" className="form-control" placeholder={data.Education_level ? data.Education_level : "N/A" } disabled />
                    </div>
                  </MDBCol>
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                    <label htmlFor="cod_teacher" className="disabled mt-1">Presupuesto del estudiante</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                        <i className="fa fa-money fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="cod_teacher" className="form-control" placeholder={'$'+data.Studentbudget ? '$'+data.Studentbudget : "N/A"} disabled />
                    </div>
                  </MDBCol>
                  {data.Paymentreceived ? 
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                    <label htmlFor="cod_teacher" className="disabled mt-1">Pago recibido</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                        <i className="fa fa-money fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="cod_teacher" className="form-control" placeholder={'$'+data.Paymentreceived === "n/a" ? "N/A" : "N/A"} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Asignationdate ?
                  <MDBCol xs="12" sm="12" md="12" lg="12" xl="12">
                  <label htmlFor="phone" className="disabled mt-1">Inicio del proyecto</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-clock-o fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="phone" className="form-control" placeholder={data.Asignationdate ? parseDateBill(data.Asignationdate) : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Nextasignation ? 
                  <MDBCol xs="12" sm="12" md="12" lg="12" xl="12">
                  <label htmlFor="city" className="disabled mt-1">Próxima entrega</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-clock-o fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="city" className="form-control" placeholder={data.Nextasignation ? parseDateBill(data.Nextasignation) : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Finalasignation ?
                  <MDBCol xs="12" sm="12" md="12" lg="12" xl="12">
                  <label htmlFor="address" className="disabled mt-1">Fecha asignada</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-clock-o fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="address" className="form-control" placeholder={data.Finalasignation ? parseDateBill(data.Finalasignation) : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Tutory ?
                    <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                    <label htmlFor="p_code" className="disabled mt-1">Servicio de tutoría</label><br/>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon">
                            <i className="fa fa-user prefix"></i>
                          </span>
                        </div>
                        <input type="text" id="p_code" className="form-control" placeholder={data.Tutory === 1  ? "Si" : data.Tutory === 2 ? "No" : "No posee"} disabled />
                      </div>
                    </MDBCol>
                    : null
                  }
                  {data.Matter ? 
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Materia</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-server fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Matter ? data.Matter : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Questions ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Número de preguntas</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-question-circle fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Questions ? data.Questions : null} disabled />
                    </div>
                  </MDBCol>
                  : null 
                  }
                  {data.Questiontype ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Tipo de preguntas</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-question-circle fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Questiontype ? data.Questiontype : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Duration ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Duración del exámen</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-clock-o fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Duration ? data.Duration : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Content ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Temas a tratar</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-sort-amount-asc fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Content ? data.Content : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Description ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Descripción</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-sort-amount-asc fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Description ? data.Description : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Timezone ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Zona horaria</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-clock-o fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Timezone ? data.Timezone : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Tittle ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Título del proyecto</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-text-width fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Tittle ? data.Tittle : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Wordnumber ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Número de Palabras</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-sort-numeric-asc fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Wordnumber ? data.Wordnumber : null} disabled />
                    </div>
                  </MDBCol>
                  : null}
                  {data.Metology ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Metodología</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-briefcase fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Metology ? data.Metology : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Refencenumbers ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Número de referencias:</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-sort-numeric-asc fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Refencenumbers ? data.Refencenumbers : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Bibliographicstyle ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Estilo Bibliografico</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-text-width fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Bibliographicstyle ? data.Bibliographicstyle : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.File ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Archivos</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-file-word-o fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.File ? data.File : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Asignationtype ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Tipo de trabajo</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-book fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Asignationtype ? data.Asignationtype : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Pages ? 
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Número de páginas</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-file-o fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Pages ? data.Pages : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Available_days ? 
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Días disponibles</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-calendar fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Available_days ? data.Available_days : null} disabled />
                    </div>
                  </MDBCol>
                 : null
                 }
                 {data.Country ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">País del estudiante</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-globe fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Country ? data.Country : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Dating_style ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Estilo de citas</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-text-width fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Dating_style ? data.Dating_style : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Phone_number ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Whatsapp del estudiante</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-whatsapp fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Phone_number ? data.Phone_number : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Mail ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Correo del estudiante</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-at fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Mail ? data.Mail : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Profession ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Profesión</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-text-width fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Profession ? data.Profession : null} disabled />
                    </div>
                  </MDBCol>
                : null
                }
                {data.Project_type_id ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Tipo de proyecto</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-text-width fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" 
                      placeholder={data.Project_type_id === 1 ? "Exámen" : data.Project_type_id  === 2 ? "Clase" : data.Project_type_id === 3 ? "Trabajo" : "No asignado"} disabled />
                        
                    </div>
                  </MDBCol>
                  : null
                }
                {data.Subjects ? 
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Asignatura</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-server fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Subjects ? data.Subjects : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.University ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Universidad</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-university fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.University ? data.University : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Payment_method ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Método de pago</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-money fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Payment_method ? data.Payment_method : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Tittle ?
                  <MDBCol xs="12" sm="12" md="12" lg="12" xl="12">
                  <label htmlFor="p_code" className="disabled mt-1">Título del proyecto</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-text-width fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <textarea type="text" id="p_code" className="form-control" placeholder={data.Tittle ? data.Tittle : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Additional_details ?
                  <MDBCol xs="12" sm="12" md="12" lg="12" xl="12" style={{textAling:'center'}}>
                    <label htmlFor="cod_teacher" className="disabled mt-1">Comentarios</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">  
                          <i className="fa fa-comments-o" aria-hidden="true"></i>
                        </span>
                      </div>
                      <textarea className="form-control" placeholder={data.Additional_details} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                </MDBRow>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color='danger' onClick={() => setToggle1(false)}>
                  Cerrar
                </MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBContainer>
          <MDBContainer>
            <MDBModal isOpen={toggle2}>
              <MDBModalHeader>Asignar proyecto</MDBModalHeader>
                <MDBModalBody>
                <Form className="pt-2 ml-3">
                  <FormGroup row>
                    <Label sm={2} for="rol" style={{fontSize: 15, fontWeight: 'bold', textAlign: 'left'}}>Profesor:</Label>
                    <Col sm={6}>
                      <Input
                        type="select" 
                        name="rol"
                        value={data.allRequestProj}
                        onChange={e => onEventProfesores(e)}
                        required
                      >
                        <option value="">Solicitudes realizadas a este proyecto</option>
                        {data.statusR === true && data_real.map((e, i) => {
                          return <option 
                          key={i} value={`${e.Idproj}-${e.Userid}-${e.id}-${e.Name}-${e.Lastname}-${e.Teacher_code}`}>Código de profesor: {e.Teacher_code} - {e.Name}</option>
                        })}
                      </Input>
                    </Col>
                  </FormGroup>
                </Form>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color='success' onClick={() => asignar()}>
                  Asignar
                </MDBBtn>
                <MDBBtn color='danger' onClick={() => setToggle2(false)}>
                  Cerrar
                </MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBContainer>
    </>
  );
}
export default Lista;