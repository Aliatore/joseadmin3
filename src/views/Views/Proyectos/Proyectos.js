import React, { useState, useEffect } from 'react';
import { Table, Container, Button } from 'reactstrap';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
// import { Link } from 'react-router-dom';
import '../InformacionProfesor/InformacionProfesor.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import jsPDF from 'jspdf';

const Proyectos = (props) => {

  const [data, setData] = React.useState({
    data_cliente: props.datacliente,
    // datosProyecto: null,
    dataFactura: null,
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
    Education_level: null,
    Payment_method: null,
    Mail: null,
    Monto: null,
    Time: null,
    no_bill: false,
  }); 

  const [toggle1, setToggle1] = useState(false);
  const [togglebill, setToggleBill] = useState(false)


  const projectTable = () => {
    const url = `https://admin.apruebaexamenes.com/View-table`

    axios({
      method: 'post',
      url: url,
      headers: {'Content-Type':'application/json'},
    })
    .then(response => response.data)
    .then((data) => { 
      //console.log(data)
      if (data !== null) {
        setData({
          ...data,
          datosProyecto: data
        });
        // toast.success(`✓ - Registrado satisfactoriamente.`, {
        //   position: "top-right",
        //   autoClose: 2000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
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

  const projectTableAssigned = () => {
    const url = `https://admin.apruebaexamenes.com/Project-Teacher`
    let projects = {
      TeacherCode: parseInt(data.data_cliente.teacher_code)
    }
    axios({
      method: 'post', 
      url: url,
      data: projects,
      headers: {'Content-Type':'application/json'},
      
    })
    .then(response => response.data)
    .then((data) => { 
      console.log(data)
      if (data !== null) {
        setData({
          ...data,
          datosProyecto: data
        });
        // toast.success(`✓ - Registrado satisfactoriamente.`, {
        //   position: "top-right",
        //   autoClose: 2000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
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
  
//   const dataBill = (id_project) => {
//     //console.log(id_project);
//     const url = `https://admin.apruebaexamenes.com/Consult-bill`
//       let dataBill = {
//         Projectid: id_project
//       }
//     axios({
//       method: 'post',
//       url: url,
//       data: dataBill,
//       headers: {'Content-Type':'application/json'},
//     })
//     .then((respuesta) => {
//         console.log(respuesta,"billy")
//       if (respuesta.status === 200) {
//         setData({
//           ...data,
//           dataFactura: respuesta.data,
//         })
//         facturaModal(respuesta.data)
//       } else {
//         toast.error(`✕ - ${respuesta.mensaje}`, {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       }  
//     })
//     .catch((error) => {
//       toast.error(`✕ - ${error}`, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     })
// }

  const infoModal = (i) =>{
    //console.log(i, "funcion INFO MODAL");// aqui llega los datos
    setToggle1(true) //abrir modal
    setData({
      ...data,
      Idproj: i.Idproj,
      Userid: i.Userid,
      Tutory: i.Tutory,
      State: i.State,
      Teachercode: i.Teachercode,
      Code: i.Code,
      Studentbudget: i.Studentbudget,
      Teacherbudget: i.Teacherbudget,
      Paymentreceived: i.Paymentreceived,
      Nextasignation: i.Nextasignation,
      Finalasignation: i.Finalasignation,
      Asignationdate: i.Asignationdate,
      Matter: i.Matter,
      Questiontype: i.Questiontype,
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
      Bibliographicstyle: i.Bibliographicstyle,
      Additional_details: i.Additional_details,
      Available_days: i.Available_days,
      Country: i.Country,
      Dating_style: i.Dating_style,
      Payment_method: i.Payment_method,
      Phone_number: i.Phone_number,
      Profession: i.Profession,
      Project_type_id: i.Project_type_id,
      Questions: i.Questions,
      Subjects: i.Subjects,
      University: i.University,
      Education_level: i.Education_level,
      Mail: i.Mail,
    })
  } 

  // const facturaModal = (i) =>{
  //   console.log(i, "facturamodal");// aqui llega los datos
  //   setToggleBill(true) //abrir modal
  //   if (i.code === "001") {
  //     setData({
  //       ...data,
  //       no_bill: true
  //     })
  //   } else {
  //     setData({
  //       ...data,
  //       Description: i.Description,
  //       Monto: i.Monto,
  //       State: i.State,
  //       Time: i.Time,
  //       no_bill: false
  //     })  
  //   }
  // } 

  const setTable = () => {
      return data.datosProyecto.map((datax, i) => {
        return (
          <tr key={i} className="tablas-tr">
            <td>{datax.Code}</td>
            <td>{datax.Studentbudget}</td>
            <td>{datax.Teacherbudget}</td>
            <td>{datax.Paymentreceived != null ? datax.Paymentreceived : "0"}</td>
            {/* <td>{(datax.progreso_actual)}</td> */}
            <td>{datax.Asignationdate === null ?  "N/A" : parseDate(datax.Asignationdate)}</td>
            <td>{datax.Nextasignation === null ?  "N/A" : parseDate(datax.Nextasignation)}</td>
            <td>{datax.Finalasignation === null ?  "N/A" : parseDate(datax.Finalasignation)}</td>
            <td><Button onClick={() => infoModal(datax)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-eye fa-lg" style={{color: "green"}}></i></Button></td>
            {/* <td><Button onClick={() => dataBill(datax.Idproj)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-dollar fa-lg"  style={{color: "green"}}></i></Button></td> */}
            <td>{datax.Teachercode === "n/a" || datax.Teachercode === null ? "N/A" : datax.Teachercode}</td>
          </tr>
          )
      }) 
  }

  useEffect(() => {
    data.data_cliente.rol_id === '1' ? projectTable() : projectTableAssigned()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const parseDate = (raw_date) => {
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

  const randomLocator = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const pdfGenerator = () => {
    var doc = new jsPDF()
    var imgData = require('../../../assets/apruebaexamenes.png')
    var invoice = randomLocator(8)

    doc.addImage(imgData, 'PNG', 35, 40, 150, 35)

    doc.setFontSize(16)
    doc.text(35, 85, `Factura: ORD-${invoice}-FN`)
    doc.text(35, 95, `Monto: ${data.Monto ? data.Monto : ''}$`)
    doc.text(35, 105, `Estado: ${data.State === "1" ? "Pagado" : ''} ${data.State === "2" ? "Pendiente por pagar" : ''}`)
    doc.text(35, 115, `Fecha: ${data.Time ? parseDateBill(data.Time) : ''}`)
    doc.text(35, 125, `Descripcion: ${data.Description ? data.Description : ''}`)
    
    doc.save(`Factura ORD-${invoice}-FN.pdf`)
  }

  return (
    <>
        <Container  fluid xs="12" sm="12" md="12" lg="12" xl="12" style={{verticalAlign:"middle"}}>
            <Table className="Tablas" hover responsive={true}>
                <thead style={{verticalAlign: "baseline"}}>
                <tr>
                    <th>Código</th>
                    <th>Presupuesto estudiante</th>
                    <th>Presupuesto profesor</th>
                    <th>Pago recibido</th>
                    {/* <th>Progreso actual</th> */}
                    <th>Primera entrega</th>
                    <th>Próxima entrega</th>
                    <th>Fecha asignada</th>
                    <th>Info</th>
                    {/* <th>Factura</th> */}
                    <th>Código Profesor</th>
                </tr>
                </thead>
                <tbody>
                  {data.datosProyecto != null ?
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
                    <label htmlFor="codProj" className="disabled">Código del proyecto</label><br/>
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
                    <label htmlFor="codTeacher" className="disabled mt-1">Código de profesor</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-graduation-cap"></i>
                        </span>
                      </div>
                      <input type="text" id="codTeacher" className="form-control" placeholder={data.Teachercode ? data.Teachercode : "N/A" } disabled />
                    </div>
                  </MDBCol>
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                    <label htmlFor="lvlEduc" className="disabled mt-1">Nivel Educativo</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-graduation-cap"></i>
                        </span>
                      </div>
                      <input type="text" id="lvlEduc" className="form-control" placeholder={data.Education_level ? data.Education_level : "N/A" } disabled />
                    </div>
                  </MDBCol>
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                    <label htmlFor="studentBud" className="disabled mt-1">Presupuesto del estudiante</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                        <i className="fa fa-money fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="studentBud" className="form-control" placeholder={'$'+data.Studentbudget ? '$'+data.Studentbudget : "N/A"} disabled />
                    </div>
                  </MDBCol>
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                    <label htmlFor="teacherBud" className="disabled mt-1">Presupuesto del profesor</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                        <i className="fa fa-money fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="teacherBud" className="form-control" placeholder={'$'+data.Teacherbudget ? '$'+data.Teacherbudget : "N/A"} disabled />
                    </div>
                  </MDBCol>
                  {data.Paymentreceived ? 
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                    <label htmlFor="paymentR" className="disabled mt-1">Pago recibido</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                        <i className="fa fa-money fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="paymentR" className="form-control" placeholder={'$'+data.Paymentreceived === "n/a" ? "N/A" : "N/A"} disabled />
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
                  <label htmlFor="tutory" className="disabled mt-1">Servicio de tutoría</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-user prefix"></i>
                        </span>
                      </div>
                      <input type="text" id="tutory" className="form-control" placeholder={data.Tutory === 1  ? "Si" : data.Tutory === 2 ? "No" : "No posee"} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Matter ? 
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="matter" className="disabled mt-1">Materia</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-server fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="matter" className="form-control" placeholder={data.Matter ? data.Matter : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Questions ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="questionsNum" className="disabled mt-1">Número de preguntas</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-question-circle fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="questionsNum" className="form-control" placeholder={data.Questions ? data.Questions : null} disabled />
                    </div>
                  </MDBCol>
                  : null 
                  }
                  {data.Questiontype ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="questionType" className="disabled mt-1">Tipo de preguntas</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-question-circle fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="questionType" className="form-control" placeholder={data.Questiontype ? data.Questiontype : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Duration ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="timeEval" className="disabled mt-1">Duración del exámen</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-clock-o fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="timeEval" className="form-control" placeholder={data.Duration ? data.Duration : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Theme ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="themes" className="disabled mt-1">Temas a tratar</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-sort-amount-asc fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="themes" className="form-control" placeholder={data.Theme ? data.Theme : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Description ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="description" className="disabled mt-1">Descripción</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-sort-amount-asc fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="description" className="form-control" placeholder={data.Description ? data.Description : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Timezone ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="zone" className="disabled mt-1">Zona horaria</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-clock-o fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="zone" className="form-control" placeholder={data.Timezone ? data.Timezone : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Wordnumber ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="wordsNumbers" className="disabled mt-1">Número de Palabras</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-sort-numeric-asc fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="wordsNumbers" className="form-control" placeholder={data.Wordnumber ? data.Wordnumber : null} disabled />
                    </div>
                  </MDBCol>
                  : null}
                  {data.Metology ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="metodology" className="disabled mt-1">Metodología</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-briefcase fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="metodology" className="form-control" placeholder={data.Metology ? data.Metology : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Refencenumbers ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="referenceNum" className="disabled mt-1">Número de referencias:</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-sort-numeric-asc fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="referenceNum" className="form-control" placeholder={data.Refencenumbers ? data.Refencenumbers : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Bibliographicstyle ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="bibliograph" className="disabled mt-1">Estilo Bibliografico</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-text-width fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="bibliograph" className="form-control" placeholder={data.Bibliographicstyle ? data.Bibliographicstyle : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.File ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="files" className="disabled mt-1">Archivos</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-file-word-o fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="files" className="form-control" placeholder={data.File ? data.File : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Asignationtype ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="typeEv" className="disabled mt-1">Tipo de trabajo</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-book fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="typeEv" className="form-control" placeholder={data.Asignationtype ? data.Asignationtype : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Pages ? 
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="pageNum" className="disabled mt-1">Número de páginas</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-file-o fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="pageNum" className="form-control" placeholder={data.Pages ? data.Pages : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Available_days ? 
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="days" className="disabled mt-1">Días disponibles</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-calendar fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="days" className="form-control" placeholder={data.Available_days ? data.Available_days : null} disabled />
                    </div>
                  </MDBCol>
                 : null
                 }
                 {data.Country ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="country" className="disabled mt-1">País del estudiante</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-globe fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="country" className="form-control" placeholder={data.Country ? data.Country : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Dating_style ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="style" className="disabled mt-1">Estilo de citas</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-text-width fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="style" className="form-control" placeholder={data.Dating_style ? data.Dating_style : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Phone_number ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="whats" className="disabled mt-1">Whatsapp del estudiante</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-whatsapp fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="whats" className="form-control" placeholder={data.Phone_number ? data.Phone_number : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Mail ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="emailSt" className="disabled mt-1">Correo del estudiante</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-at fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="emailSt" className="form-control" placeholder={data.Mail ? data.Mail : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Profession ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="profesion" className="disabled mt-1">Profesión</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="profesion" className="form-control" placeholder={data.Profession ? data.Profession : null} disabled />
                    </div>
                  </MDBCol>
                : null
                }
                {data.Project_type_id ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="typeproj" className="disabled mt-1">Tipo de proyecto</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-text-width fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="typeproj" className="form-control" 
                      placeholder={data.Project_type_id === 1 ? "Exámen" : data.Project_type_id  === 2 ? "Clase" : data.Project_type_id === 3 ? "Trabajo" : "No asignado"} disabled />
                        
                    </div>
                  </MDBCol>
                  : null
                }
                {data.Subjects ? 
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="subjects" className="disabled mt-1">Asignatura</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-server fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="subjects" className="form-control" placeholder={data.Subjects ? data.Subjects : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.University ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="university" className="disabled mt-1">Universidad</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-university fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="university" className="form-control" placeholder={data.University ? data.University : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Payment_method ?
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="paymentMet" className="disabled mt-1">Método de pago</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-money fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="paymentMet" className="form-control" placeholder={data.Payment_method ? data.Payment_method : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Tittle ?
                  <MDBCol xs="12" sm="12" md="12" lg="12" xl="12">
                  <label htmlFor="title" className="disabled mt-1">Título del proyecto</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-text-width fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <textarea type="text" id="title" className="form-control" placeholder={data.Tittle ? data.Tittle : null} disabled />
                    </div>
                  </MDBCol>
                  : null
                  }
                  {data.Additional_details ?
                  <MDBCol xs="12" sm="12" md="12" lg="12" xl="12" style={{textAling:'center'}}>
                    <label htmlFor="comment" className="disabled mt-1">Comentarios</label><br/>
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
            <MDBModal isOpen={togglebill}>
              <MDBModalHeader>Factura</MDBModalHeader>
                <MDBModalBody>
                  {data.no_bill === true ? 
                    <span style={{fontSize: 17, fontWeight: 'bold'}}>Este proyecto no posee factura </span>
                    :
                      (
                        <>
                <MDBRow>
                  
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                    <label htmlFor="user" className="disabled">Descripción</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-shield fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="user" className="form-control" placeholder={data.Description ? data.Description : null} disabled />
                    </div>
                  </MDBCol>
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                    <label htmlFor="monto" className="disabled mt-1">Monto</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-money fa-lg" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="monto" className="form-control" placeholder={"$"+data.Monto ? "$"+data.Monto : null} disabled />
                    </div>
                  </MDBCol>
                  <MDBCol xs="12" sm="12" md="12" lg="12" xl="12" style={{textAling:'center'}}>
                    <label htmlFor="date1" className="disabled mt-1">Fecha</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-calendar-o" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="date1" className="form-control" placeholder={data.Time ? parseDateBill(data.Time) : null} disabled />
                    </div>
                  </MDBCol>
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6" style={{textAling:'center'}}>
                    <label htmlFor="state" className="disabled mt-1">Estado</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-check-square" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" id="state" className="form-control" placeholder={data.State === 1 ? 'Pagado' : data.State === 2 ? 'Pendiente por pagar' : 'No posee status'} disabled />
                    </div>
                  </MDBCol>
                </MDBRow>
                        </>
                      )
                }
              </MDBModalBody>
              <MDBModalFooter>
                {data.no_bill === true ? 
                  null 
                  : 
                  <MDBBtn color='info'  onClick={() => pdfGenerator()} style={{color : "white"}}>
                    Descargar en Pdf
                  </MDBBtn>
                }
                <MDBBtn color='danger'  onClick={() => setToggleBill(false)}>
                  Cerrar
                </MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBContainer>
    </>
  );
}
export default Proyectos;