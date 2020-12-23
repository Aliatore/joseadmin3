import React, { useState,useEffect } from 'react';
import {Table, Container, Card, Button, Input, FormGroup, Label, Col} from 'reactstrap';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol} from 'mdbreact';
// import { Link } from 'react-router-dom';
import './InformacionProfesor.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const InfoTeacher = (props) => {
    
    const [data, setData] = React.useState({
      datosTeacher: null,
      selected_specialty: '',
      City: '',
      Description: '',
      Direction: '',
      Lastname: '',
      Name: '',
      Phone: '',
      Postalcode: '',
      Teachercode: ''
    });
    
    const [toggle1, setToggle1] = useState(false);

    //se ejecuta antes
    useEffect(() => {
      profConsult()
    }, [])

    const profConsult = async () => {
      const url = `https://admin.apruebaexamenes.com/View-Prof-list`

     await axios({
        method: 'post',
        url: url,
        headers: {'Content-Type':'application/json'},
      })
      .then(response => response.data)
      .then((data) => { 
        // console.log(data, "mostrar mas");
        if (data !== null) {
          setData({
            ...data,
            datosTeacher: data
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
          toast.error(`✕ - No hay profesores actualmente registrados.`, {
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
        City: i.City,
        Description: i.Description,
        Direction: i.Direction,
        Lastname: i.Lastname,
        Name: i.Name,
        Phone: i.Phone,
        Postalcode: i.Postalcode,
        Teachercode: i.Teachercode
      })
    } 

    const setTable = () => {
      return data.datosTeacher.map((datax, i) => {
        return (
          <tr key={i} className="tablas-tr">
            <td>{datax.Name}</td>
            <td>{datax.Lastname}</td>
            <td>{datax.Teachercode}</td>
            <td>{datax.Description}</td>
            <td>
              <Button onClick={() => infoModal(datax)} color="primary" style={{backgroundColor: "transparent", borderColor: "transparent"}}
              >
              <i className="fa fa-eye fa-lg" style={{color: "green"}}
              >
              </i>
              </Button>
              </td>
          </tr>
          )
      }) 
    }

    //funciones nuevas
    const specialtyConsult = (e) => {
      const url = `https://admin.apruebaexamenes.com/View-Prof`
      let data = {
        Filtro_ID_especiality: parseInt(e),
        Entero: 1
      }
      axios({
        method: 'post',
        data: data,
        url: url,
        headers: {'Content-Type':'application/json'},
      })
      .then(response => response.data)
      .then((data) => { 
        //console.log("filtro",data);
        if (data !== null) {
          setData({
            ...data,
            datosTeacher: data
          });
        } else {
          toast.error(`✕ - No se encontraron registros`, {
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

    const setSpecialty = (e) => {
      //console.log(e.target.value, "enviando")
      setData({
        ...data,
        selected_specialty: e.target.value
      })
      specialtyConsult(e.target.value)
    }

  return (
    <>
        <Container  fluid>
          <Card body outline color="primary">
            <FormGroup row>
                <Label sm={2} for="rol" style={{fontSize: 15, fontWeight: 'bold', textAlign: 'left'}}>Filtro de profesiones:</Label>
                <Col xs="10" sm="10" md="10" lg="10" xl="10">
                <Input 
                  type="select" 
                  name="rol" 
                  id="rol"
                  value={data.selected_specialty}
                  onChange={setSpecialty}
                  required
            >
                  <option value="">Especialidad</option>
                  <option value="2">Ciencias de la salud</option>
                  <option value="3">Biología</option>
                  <option value="4">Farmacia</option>
                  <option value="5">Medicina</option>
                  <option value="6">Enfermería</option>
                  <option value="7">Salud publica</option>
                  <option value="8">Fisioterapia</option>
                  <option value="9">Odontología</option>
                  <option value="10">Gerontología</option>
                  <option value="11">Ingenieria biomédica</option>
                  <option value="12">Histocitotecnologia</option>
                  <option value="13">Bioquímica</option>
                  <option value="14">Bioanalis</option>
                  <option value="15">Nutrición y dietética</option>
                  <option value="16">Sexología</option>
                  <option value="16">Ciencias aplicadas</option>
                  <option value="17">Ingenierias</option>
                  <option value="18">Ciencias puras</option>
                  <option value="19">Matemática</option>
                  <option value="20">Física</option>
                  <option value="21">Química</option>
                  <option value="22">Ciencias económicas</option>
                  <option value="23">Economía</option>
                  <option value="24">Administración</option>
                  <option value="25">Estadística</option>
                  <option value="26">Contaduría</option>
                  <option value="27">Ciencias sociales</option>
                  <option value="28">Antropología</option>
                  <option value="29">Arquitectura</option>
                  <option value="30">Ciencias Políticas</option>
                  <option value="31">Contabilidad</option>
                  <option value="32">Criminología</option>
                  <option value="33">Demografía</option>
                  <option value="34">Derecho</option>
                  <option value="35">Didáctica</option>
                  <option value="36">Diseño Gráfico</option>
                  <option value="37">Diseño Industrial</option>
                  <option value="38">Educación</option>
                  <option value="39">Geografía</option>
                  <option value="40">Historia</option>
                  <option value="41">Linguística</option>
                  <option value="42">Periodismo</option>
                  <option value="43">Psicología</option>
                  <option value="44">Publicidad</option>
                  <option value="45">Relaciones Internacionales</option>
                  <option value="46">Relaciones Públicas</option>
                  <option value="47">Marketing</option>
                  <option value="48">Marketing Digital</option>
                  <option value="49">Marketing Digital</option>
                  <option value="50">Filosofía</option>
            </Input>
                </Col>
            </FormGroup>
          </Card>
            <Table className="Tablas" hover responsive={true}>
                <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Código Profesor</th>
                  <th>Especialidad</th>
                  <th>Ver más</th>
                </tr>
                </thead>
                <tbody>
                {data.datosTeacher !== null ?
                    setTable()
                    :
                    null
                  }
                </tbody>
            </Table>
        </Container>
        <MDBContainer>
          <MDBModal isOpen={toggle1} size="lg">
            <MDBModalHeader>Información</MDBModalHeader>
              <MDBModalBody>
                <MDBRow>
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                    <label htmlFor="user" className="disabled">Nombre(s)</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-user prefix"></i>
                        </span>
                      </div>
                      <input type="text" id="user" className="form-control" placeholder={data.Name ? data.Name: null} disabled />
                    </div>
                  </MDBCol>
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                    <label htmlFor="lastname" className="disabled">Apellido(s)</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-user prefix"></i>
                        </span>
                      </div>
                      <input type="text" id="lastname" className="form-control" placeholder={data.Lastname ? data.Lastname: null} disabled />
                    </div>
                  </MDBCol>
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                    <label htmlFor="cod_teacher" className="disabled mt-1">Código de profesor:</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-graduation-cap"></i>
                        </span>
                      </div>
                      <input type="text" id="cod_teacher" className="form-control" placeholder={data.Teachercode ? data.Teachercode : null} disabled />
                    </div>
                  </MDBCol>
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                    <label htmlFor="cod_teacher" className="disabled mt-1">Especialidad:</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-graduation-cap"></i>
                        </span>
                      </div>
                      <input type="text" id="cod_teacher" className="form-control" placeholder={data.Description ? data.Description : null} disabled />
                    </div>
                  </MDBCol>
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="phone" className="disabled mt-1">Número célular:</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-phone"></i>
                        </span>
                      </div>
                      <input type="text" id="phone" className="form-control" placeholder={data.Phone ? data.Phone : null} disabled />
                    </div>
                  </MDBCol>
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="city" className="disabled mt-1">Ciudad:</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-university"></i>
                        </span>
                      </div>
                      <input type="text" id="city" className="form-control" placeholder={data.City ? data.City : null} disabled />
                    </div>
                  </MDBCol>
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="address" className="disabled mt-1">Dirección:</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-university"></i>
                        </span>
                      </div>
                      <input type="text" id="address" className="form-control" placeholder={data.Direction ? data.Direction : null} disabled />
                    </div>
                  </MDBCol>
                  <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
                  <label htmlFor="p_code" className="disabled mt-1">Código Postal:</label><br/>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i className="fa fa-university"></i>
                        </span>
                      </div>
                      <input type="text" id="p_code" className="form-control" placeholder={data.Postalcode ? data.Postalcode : null} disabled />
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color='danger' onClick={() => setToggle1(false)}>
                  Cerrar
                </MDBBtn>
              </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
    </>
  );
}
export default InfoTeacher;