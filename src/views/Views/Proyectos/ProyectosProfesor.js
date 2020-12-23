import React, { useState, useEffect } from 'react';
import { Table, Container, Button } from 'reactstrap';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
// import { Link } from 'react-router-dom';
import '../InformacionProfesor/InformacionProfesor.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import jsPDF from 'jspdf';

const ProyectosProfesor = (props) => {

  const [data, setData] = React.useState({
    
    datosProyecto: null,
    dataFactura: null,
    data_usuario: props.datacliente,
    Idproj: '',
    Userid: '',
    Questions: '',
    Tutory: '',
    State: '',
    Teachercode: '',
    Code: '',
    Studentbudget: '',
    Teacherbudget: '',
    Paymentreceived: '',
    Nextasignation: '',
    Finalasignation: '',
    Asignationdate: '',
    Matter: '',
    Questiontype: '',
    Duration: '',
    Theme: '',
    File: '',
    Description: '',
    Timezone: '',
    Asignationtype: '',
    Tittle: '',
    Pages: '',
    Wordnumber: '',
    Metology: '',
    Refencenumbers: '',
    Bibliographicstyle: '',
    Monto:'',
    Time: '',
    no_bill: false,
  }); 

  const [toggle1, setToggle1] = useState(false);
  const [togglebill, setToggleBill] = useState(false)


  const projectTable = () => {
    const url = `https://admin.apruebaexamenes.com/View-table-code`
    let dataTable = {
      Codeteacher: data.data_usuario.teacher_code
    }

    axios({
      method: 'post',
      url: url,
      data: dataTable,
      headers: {'Content-Type':'application/json'},
    })
    .then((response) => { 
      if (response.status === 200) {
        console.log(response.data)
        setData({
          ...data,
          datosProyecto: response.data
        });
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
  
  const dataBill = (id_project) => {
    //console.log(id_project);
    const url = `https://admin.apruebaexamenes.com/Consult-bill`
      let dataBill = {
        Projectid: id_project
      }
    axios({
      method: 'post',
      url: url,
      data: dataBill,
      headers: {'Content-Type':'application/json'},
    })
    .then((respuesta) => {
        console.log(respuesta,"billy")
      if (respuesta.status === 200) {
        setData({
          ...data,
          dataFactura: respuesta.data,
        })
        facturaModal(respuesta.data)
      } else {
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

  const infoModal = (i) =>{
    console.log(i, "funcion INFO MODAL");// aqui llega los datos
    setToggle1(true) //abrir modal
    setData({
      ...data,
      Idproj: i.Idproj,
      Userid: i.Userid,
      Questions: i.Questions,
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
      Bibliographicstyle: i.Bibliographicstyle
    })
  } 

  const facturaModal = (i) =>{
    console.log(i, "facturamodal");// aqui llega los datos
    setToggleBill(true) //abrir modal
    if (i.code === "001") {
      setData({
        ...data,
        no_bill: true
      })
    } else {
      setData({
        ...data,
        Description: i.Description,
        Monto: i.Monto,
        State: i.State,
        Time: i.Time,
        no_bill: false
      })  
    }
  } 

  const setTable = () => {
      return data.datosProyecto.map((datax, i) => {
        return (
          <tr key={i} className="tablas-tr">
            <td>{datax.Code}</td>
            <td>{datax.Studentbudget}</td>
            <td>{datax.Teacherbudget}</td>
            <td>{datax.Paymentreceived}</td>
            <td>{(datax.progreso_actual)}</td>
            <td>{parseDate(datax.Asignationdate)}</td>
            <td>{parseDate(datax.Nextasignation)}</td>
            <td>{parseDate(datax.Finalasignation)}</td>
            <td><Button onClick={() => infoModal(datax)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-eye fa-lg" style={{color: "green"}}></i></Button></td>
            <td><Button onClick={() => dataBill(datax.Idproj)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-dollar fa-lg"  style={{color: "green"}}></i></Button></td>
            <td>{datax.Teachercode}</td>
          </tr>
          )
      }) 
  }

  useEffect(() => {
    projectTable()
    return () => {
      projectTable()
    }
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
        <Container  fluid>
            <Table className="Tablas" hover responsive={true}>
                <thead style={{verticalAlign: "baseline"}}>
                <tr>
                    <th>Código</th>
                    <th>Presupuesto estudiante</th>
                    <th>Presupuesto profesor</th>
                    <th>Pago recibido</th>
                    <th>Progreso actual</th>
                    <th>Última entrega</th>
                    <th>Próxima fase</th>
                    <th>Fecha Final</th>
                    <th>Info</th>
                    <th>Factura</th>
                    <th>Código Profesor</th>
                </tr>
                </thead>
                <tbody>
                  {data.datosProyecto !== null ?
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
                  <span style={{fontSize: 17, fontWeight: 'bold'}}> Código de proyecto: &nbsp;
                    <span style={{fontSize: 16, fontWeight: '300'}}>
                      {data.Code ? data.Code : null} &nbsp;
                    </span>
                  </span> <br />
                  <span style={{fontSize: 17, fontWeight: 'bold'}}> Código de profesor: &nbsp;
                    <span style={{fontSize: 16, fontWeight: '300'}}>
                      {data.Teachercode ? data.Teachercode : null} &nbsp;
                    </span>
                  </span> <br />
                  <span style={{fontSize: 17, fontWeight: 'bold'}}> Presupuesto de alumno: &nbsp;
                    <span style={{fontSize: 16, fontWeight: '300'}}>
                      ${data.Studentbudget ? data.Studentbudget : null} &nbsp;
                    </span>
                  </span> <br />
                  <span style={{fontSize: 17, fontWeight: 'bold'}}> Presupuesto de Profesor: &nbsp;
                    <span style={{fontSize: 16, fontWeight: '300'}}>
                      ${data.Teacherbudget ? data.Teacherbudget : null} &nbsp;
                    </span>
                  </span> <br />
                  <span style={{fontSize: 17, fontWeight: 'bold'}}> Pago recibido: &nbsp;
                    <span style={{fontSize: 16, fontWeight: '300'}}>
                      ${data.Paymentreceived ? data.Paymentreceived : null} &nbsp;
                    </span>
                  </span> <br />
                  <span style={{fontSize: 17, fontWeight: 'bold'}}> Inicio del proyecto: &nbsp;
                    <span style={{fontSize: 16, fontWeight: '300'}}>
                      {data.Asignationdate ? parseDate(data.Asignationdate) : null} &nbsp;
                    </span>
                  </span> <br />
                  <span style={{fontSize: 17, fontWeight: 'bold'}}> Próxima entrega: &nbsp;
                    <span style={{fontSize: 16, fontWeight: '300'}}>
                      {data.Nextasignation ? parseDate(data.Nextasignation) : null} &nbsp;
                    </span>
                  </span> <br />
                  <span style={{fontSize: 17, fontWeight: 'bold'}}> Fecha final: &nbsp;
                    <span style={{fontSize: 16, fontWeight: '300'}}>
                      {data.Finalasignation ? parseDate(data.Finalasignation) : null} &nbsp;
                    </span>
                  </span> <br />
                  <span style={{fontSize: 17, fontWeight: 'bold'}}> Servicio de tutoría: &nbsp;
                    <span style={{fontSize: 16, fontWeight: '300'}}>
                      {data.Tutory ? data.Tutory : null} &nbsp;
                    </span>
                  </span> <br />
                  <span style={{fontSize: 17, fontWeight: 'bold'}}> Materia: &nbsp;
                    <span style={{fontSize: 16, fontWeight: '300'}}>
                      {data.Matter ? data.Matter : null} &nbsp;
                    </span>
                  </span> <br />
                  <span style={{fontSize: 17, fontWeight: 'bold'}}> Preguntas: &nbsp;
                    <span style={{fontSize: 16, fontWeight: '300'}}>
                      {data.Questions ? data.Questions : "No posee"} &nbsp;
                    </span>
                  </span> <br />
                  <span style={{fontSize: 17, fontWeight: 'bold'}}> Tipo de preguntas: &nbsp;
                    <span style={{fontSize: 16, fontWeight: '300'}}>
                      {data.Questiontype ? data.Questiontype : null} &nbsp;
                    </span>
                  </span> <br />
                  <span style={{fontSize: 17, fontWeight: 'bold'}}> Duración del Exámen &nbsp;
                    <span style={{fontSize: 16, fontWeight: '300'}}>
                      {data.Duration ? data.Duration : null} &nbsp;
                    </span>
                  </span> <br />
                  <span style={{fontSize: 17, fontWeight: 'bold'}}> Tema: &nbsp;
                    <span style={{fontSize: 16, fontWeight: '300'}}>
                      {data.Theme ? data.Theme : null} &nbsp;
                    </span>
                  </span> <br />
                  <span style={{fontSize: 17, fontWeight: 'bold'}}> Descripción: &nbsp;
                    <span style={{fontSize: 16, fontWeight: '300'}}>
                      {data.Description ? data.Description : null} &nbsp;
                    </span>
                  </span> <br />
                  <span style={{fontSize: 17, fontWeight: 'bold'}}> Zona horaria: &nbsp;
                    <span style={{fontSize: 16, fontWeight: '300'}}>
                      {data.Timezone ? data.Timezone : null} &nbsp;
                    </span>
                  </span> <br />
                  <span style={{fontSize: 17, fontWeight: 'bold'}}> Título del proyecto: &nbsp;
                    <span style={{fontSize: 16, fontWeight: '300'}}>
                      {data.Tittle ? data.Tittle : null} &nbsp;
                    </span>
                  </span> <br />
                  <span style={{fontSize: 17, fontWeight: 'bold'}}> Número de Páginas: &nbsp;
                    <span style={{fontSize: 16, fontWeight: '300'}}>
                      {data.Wordnumber ? data.Wordnumber : null} &nbsp;
                    </span>
                  </span> <br />
                <span style={{fontSize: 17, fontWeight: 'bold'}}> Métodología empleada: &nbsp;
                    <span style={{fontSize: 16, fontWeight: '300'}}>
                      {data.Metology ? data.Metology : null} &nbsp;
                    </span>
                </span> <br />
                <span style={{fontSize: 17, fontWeight: 'bold'}}> Descripción: &nbsp;
                    <span style={{fontSize: 16, fontWeight: '300'}}>
                      {data.Refencenumbers ? data.Refencenumbers : null} &nbsp;
                    </span>
                </span> <br />
                <span style={{fontSize: 17, fontWeight: 'bold'}}> Estilo Bibliografico: &nbsp;
                    <span style={{fontSize: 16, fontWeight: '300'}}>
                      {data.Bibliographicstyle ? data.Bibliographicstyle : null} &nbsp;
                    </span>
                </span> <br />
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
                        <span style={{fontSize: 17, fontWeight: 'bold'}}> Descripción: &nbsp;
                          <span style={{fontSize: 16, fontWeight: '300'}}>
                            {data.Description ? data.Description : null} &nbsp;
                          </span>
                        </span> <br />
                        <span style={{fontSize: 17, fontWeight: 'bold'}}> Monto: &nbsp;
                          <span style={{fontSize: 16, fontWeight: '300'}}>
                            {data.Monto ? data.Monto : null} &nbsp;
                          </span>
                        </span> <br />
                        <span style={{fontSize: 17, fontWeight: 'bold'}}> Fecha: &nbsp;
                          <span style={{fontSize: 16, fontWeight: '300'}}>
                            {data.Time ? parseDateBill(data.Time) : null} &nbsp;
                          </span>
                        </span> <br />
                        <span style={{fontSize: 17, fontWeight: 'bold'}}> Estado: &nbsp;
                          <span style={{fontSize: 16, fontWeight: '300'}}>
                            {data.State === "1" ? "Pagado" : null} &nbsp;
                            {data.State === "2" ? "Pendiente por pagar" : null}
                          </span>
                        </span> <br />
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
export default ProyectosProfesor;