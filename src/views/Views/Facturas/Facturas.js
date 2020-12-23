import React, { useEffect } from 'react';
import {Table, Container, Card, Button, Col, FormGroup, Input, Label } from 'reactstrap';
// import { Link } from 'react-router-dom';
import '../InformacionProfesor/InformacionProfesor.css';
import axios from 'axios'
import { toast } from 'react-toastify';
import jsPDF from 'jspdf';

const Bill = (props) => {
  const [data, setData] = React.useState ({
    datosTabla: null,
    Description: '',
    Monto:'',
    State: '',
    Time: '',
    selectedState: '',
    table_real1: false,
    table_real2: false,
    table_real3: false,
  });

  const billTable = () => {
      const url = `https://admin.apruebaexamenes.com/All-Bill`
  
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
  
  const setFilter = (e) => {
    //console.log(e.target.value, "filtro")
    if (e.target.value === "1") {
      setData({
        ...data,
        selectedState: parseInt(e.target.value),
        table_real1: true,
        table_real2: false,
        table_real3: false
      });
      setTable1();
    } else if(e.target.value === "2"){
      setData({
        ...data,
        selectedState: parseInt(e.target.value),
        table_real2: true,
        table_real1: false,
        table_real3: false
      });
      setTable()
    } else if(e.target.value === "3"){
      setData({
        ...data,
        selectedState: parseInt(e.target.value),
        table_real3: true,
        table_real2: false,
        table_real1: false
      });
      setTable()
    }
  }

const facturaModal = (i) =>{
  //console.log(i, "facturamodal funcion");// aqui llega los datos
    setData({
      ...data,
      Description: i.Title,
      Monto: i.Monto,
      State: i.State,
      Time: i.Time,
    })
    pdfGenerator(i.Title, i.Monto, i.State, i.Time)  
}
 

const setTable = () => {
  // console.log(data.datosTabla);
  return data.datosTabla.map((datax, i) => {
    if (datax.State === 2) {
      return (
        <tr key={i} className="tablas-tr">
            <td>{datax.Title}</td>
            <td>{datax.Monto}</td>
            <td>{datax.Nameteacher}</td>
            <td>{datax.Time}</td>
            <td>{datax.Hours}</td>
            <td>
               {datax.State === 1 ? "Pagado" : null} &nbsp;
               {datax.State === 2 ? "Pendiente por pagar" : null}
            </td>
            <td><Button onClick={() => facturaModal(datax)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-cloud-upload"  style={{color: "orange"}}></i></Button></td>
        </tr>
      )   
    } else {
      return (null)
    }
  }) 
}
const setTable1 = () => {
  // console.log(data.datosTabla);
  return data.datosTabla.map((datax, i) => {
    if (datax.State === 1) {
      return (
        <tr key={i} className="tablas-tr">
            <td>{datax.Title}</td>
            <td>{datax.Monto}</td>
            <td>{datax.Nameteacher}</td>
            <td>{datax.Time}</td>
            <td>{datax.Hours}</td>
            <td>
               {datax.State === 1 ? "Pagado" : null} &nbsp;
               {datax.State === 2 ? "Pendiente por pagar" : null}
            </td>
            <td><Button onClick={() => facturaModal(datax)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-cloud-upload"  style={{color: "orange"}}></i></Button></td>
        </tr>
      )   
    } else {
      return (null)
    }
  }) 
}
const setTable2 = () => {
  // console.log(data.datosTabla);
  return data.datosTabla.map((datax, i) => {
    return (
      <tr key={i} className="tablas-tr">
          <td>{datax.Title}</td>
          <td>{datax.Monto}</td>
          <td>{datax.Nameteacher}</td>
          <td>{datax.Time}</td>
          <td>{datax.Hours}</td>
          <td>
             {datax.State === 1 ? "Pagado" : null} &nbsp;
             {datax.State === 2 ? "Pendiente por pagar" : null}
          </td>
          <td><Button onClick={() => facturaModal(datax)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}><i className="fa fa-cloud-upload"  style={{color: "orange"}}></i></Button></td>
      </tr>
    )   
  }) 
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

  useEffect(() => {
    billTable()
  }, [])

  const randomLocator = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const pdfGenerator = (titulo, monto, state, time) => {
    var doc = new jsPDF()
    var imgData = require('../../../assets/apruebaexamenes.png')
    var invoice = randomLocator(8)

    doc.addImage(imgData, 'PNG', 35, 40, 150, 35)

    doc.setFontSize(16)
    doc.text(35, 85, `Factura: ORD-${invoice}-FN`)
    doc.text(35, 95, `Monto: ${monto ? monto : ''}$`)
    doc.text(35, 105, `Estado: ${ state === 1 ? "Pagado" : ''} ${ state === 2 ? "Pendiente por pagar" : ''}`)
    doc.text(35, 115, `Fecha: ${time ? parseDateBill(time) : ''}`)
    doc.text(35, 125, `Descripcion: ${titulo ? titulo : ''}`)
    
    doc.save(`Factura ORD-${invoice}-FN.pdf`)
  }

  return (
    <>
        <Container  fluid>
          <Card body outline color="primary">
            <FormGroup row>
                <Label sm={2} for="rol" style={{fontSize: 15, fontWeight: 'bold', textAlign: 'left'}}>Filtro de estados:</Label>
                <Col xs="10" sm="10" md="10" lg="10" xl="10">
                  <Input
                    type="select" 
                    id="facturaState" 
                    placeholder="Estado" 
                    onChange={setFilter}
                    value={data.selectedState}
                    required
                  >
                      <option value="" disabled>Seleccione el estado de la factura</option>
                      <option value="1">Pagado</option>
                      <option value="2">Pendiente</option>
                      <option value="3">Todas</option>
                  </Input>
                </Col>
            </FormGroup>
          </Card>
            <br></br>
            <br></br>
            <Table className="Tablas" hover responsive={true}>
                <thead>
                <tr>
                    <th>Proyecto</th>
                    <th>Monto</th>
                    <th>Profesor</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Estado</th>
                    <th>Factura</th>
                </tr>
                </thead>
                <tbody>
                {data.datosTabla !== null && data.table_real2 === true ?
                    setTable()
                    :
                    null
                }
                {data.datosTabla !== null && data.table_real1 === true ?
                    setTable1()
                    :
                    null
                }
                {data.datosTabla !== null && data.table_real3 === true ?
                    setTable2()
                    :
                    null
                }
                </tbody>
            </Table>
        </Container>
    </>
  );
}
export default Bill;