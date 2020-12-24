import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Col, Row, Card, CardHeader, CardBody} from 'reactstrap';
import { MDBIcon } from 'mdbreact';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const RegistrarUsuario = () => {

  const [data, setData] = React.useState({
    rol: '',
    name: '',
    last_name: '',
    id_card: '',
    email: '',
    username: '',
    password: '',
    teacher_code: '',
    enabled: '',
    specialty: '',
    city: '',
    postal_code: '',
    prefix: '',
    phone_number: '',
    direction: '',
    inputCodeTeacher: false
  }); 

  const setRol = (e) => {
    if (e.target.value === "3") {
      setData({
        ...data,
        rol: e.target.value,
        inputCodeTeacher: true
      });
    }else{
      setData({
        ...data,
        rol: e.target.value,
        inputCodeTeacher: false
      });
    }
    // console.log(e.target.value, "rol");
  }
  const setName = (e) => {
    setData({
      ...data,
      name: e.target.value
    });
    // console.log(e.target.value, "name");
  }
  const setLastName = (e) => {
    setData({
      ...data,
      last_name: e.target.value
    });
    // console.log(e.target.value, "last_name");
  }
  const setIdCard = (e) => {
    setData({
      ...data,
      id_card: e.target.value
    });
    // console.log(e.target.value, "id_card");
  }
  const setEmail = (e) => {
    setData({
      ...data,
      email: e.target.value
    });
    // console.log(e.target.value, "email");
  }
  const setUsername = (e) => {
    setData({
      ...data,
      username: e.target.value
    });
    // console.log(e.target.value, "username");
  }
  const setPassword = (e) => {
    setData({
      ...data,
      password: e.target.value
    });
    // console.log(e.target.value, "password");
  }
  const setTeacherCode = (e) => {
    setData({
      ...data,
      teacher_code: e.target.value
    });
    // console.log(e.target.value, "teacher_code");
  }
  const setEnabled = (e) => {
    setData({
      ...data,
      enabled: e.target.value
    });
    // console.log(e.target.value, "enabled");
  }
  const setPrefijo = (e) => {
    setData({
      ...data,
      prefix: e.target.value
    });
    // console.log(e.target.value, "enabled");
  }
  const setSpeciality = (e) => {
    setData({
      ...data,
      specialty: e.target.value
    });
    // console.log(e.target.value, "specialty");
  }
  const setCity = (e) => {
    setData({
      ...data,
      city: e.target.value
    });
    // console.log(e.target.value, "specialty");
  }
  const setPostalCode = (e) => {
    setData({
      ...data,
      postal_code: e.target.value
    });
    // console.log(e.target.value, "specialty");
  }
  const setPhoneNumber = (e) => {
    setData({
      ...data,
      phone_number: e.target.value
    });
    // console.log(e.target.value, "specialty");
  }
  const setDirection = (e) => {
    setData({
      ...data,
      direction: e.target.value
    });
    // console.log(e.target.value, "specialty");
  }
  const registerNewUser = (e) => {
    e.preventDefault()
    const url = `https://admin.apruebaexamenes.com/New-Usuario`

    let datosUser

    datosUser = {
      Specialty: parseInt(data.specialty),
      Name: data.name,
      LastName: data.last_name,
      IdCard: data.id_card,
      Email: data.email,
      NameUser: data.username,
      Pass: data.password,
      Rol: parseInt(data.rol),
      TeacherCode: data.teacher_code === '' ? 'N/A' : data.teacher_code,
      State: parseInt(data.enabled),
      City: data.city,
      PostalCode: data.postal_code,
      Phone: `${data.prefix}${data.phone_number}`,
      Direction: data.direction
    }

    axios({
      method: 'post',
      url: url,
      data: datosUser,
      headers: {'Content-Type':'application/json'},
    })
    .then(response => response.data)
    .then((data) => { 
      // console.log(data)
      if (data.code === '000') {
        setData({
          ...data,
          rol: '',
          name: '',
          last_name: '',
          id_card: '',
          email: '',
          username: '',
          password: '',
          teacher_code: '',
          enabled: '',
          specialty: '',
          city: '',
          postal_code: '',
          phone_number: '',
          prefix: '',
          direction: ''
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
          <Col xs="12" sm="12" md="12" lg="12" xl="12" >
            <Card>
              <CardHeader>
              <ToastContainer/>
                <Row className="ml-4 mt-1 pt-1" style={{textAlign:"center"}}>
                  <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <MDBIcon className="mt-1" size="2x" icon="info-circle"/> &nbsp;
                    <p style={{fontSize: 25, fontWeight: 'bold'}}>Información:<span style={{fontSize: 25, fontWeight: '300'}}> para registrar el nuevo vehículo, por favor seleccione el usuario al que pertenece, rellenar los campos y presione registrar.</span></p>
                  </Col>
                </Row>
                <hr />
                <Row className="mt-2 mb-1" style={{textAlign:"center", placeContent:"center"}}>
                    <Col xs="12" sm="12" md="5" lg="5" xl="5" style={{textAlignLast:"center"}}>
                      <FormGroup>
                        <Label htmlFor="t_user"><MDBIcon className="mt-1" size="lg" icon="user"/> Selecciona el usuario al que pertenece el vehículo</Label>
                        <Input
                          type="select" 
                          id="t_user" 
                          placeholder="Selecciona el usuario al que deseas actualizar" 
                          onChange={(e) => setRol(e)}
                          value={data.rol}
                          required
                        >
                          <option value="">Seleccione usuario</option>
                          <option value="1">26131991 - José Sánchez</option>
                          <option value="2">27556887 - Emmanuel Zambrano</option>
                          <option value="3">25445796 - Ángel Vargas</option>
                        </Input>
                      </FormGroup>
                    </Col>
                </Row>
              </CardHeader>
              <CardBody>
              <Container style={{textAlign:"center"}}>
                <h5><MDBIcon className="mt-1" size="lg" icon="user-circle"/> Datos del usuario</h5>
              </Container>
                <Form className="pt-2 ml-3" onSubmit={registerNewUser}>
                  <Row>
                    <Col xs="12" sm="12" md="6" lg="4" xl="4">
                      <FormGroup>
                        <Label htmlFor="t_user"><MDBIcon className="mt-1" size="lg" icon="car"/> Marca</Label>
                        <Input
                          type="select" 
                          id="t_user" 
                          placeholder="Elige la marca del vehículo" 
                          onChange={(e) => setRol(e)}
                          value={data.rol}
                          required
                        >
                          <option value="">Seleccione marca del vehículo</option>
                          <option value="1">Toyota</option>
                          <option value="2">Hyundai</option>
                          <option value="3">Volkswagen</option>
                          <option value="4">Honda</option>
                          <option value="5">Renault</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="4" xl="4">
                      <FormGroup>
                        <Label htmlFor="t_user"><MDBIcon className="mt-1" size="lg" icon="car"/> Modelo</Label>
                        <Input
                          type="select" 
                          id="t_user" 
                          placeholder="Elige la marca del vehículo" 
                          onChange=""
                          value={data.rol}
                          required
                        >
                          <option value="">Seleccione modelo del vehículo</option>
                          <option value="1">Toyota</option>
                          <option value="2">Hyundai</option>
                          <option value="3">Volkswagen</option>
                          <option value="4">Honda</option>
                          <option value="5">Renault</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="4" xl="4">
                      <FormGroup>
                        <Label htmlFor="t_user"><MDBIcon className="mt-1" size="lg" icon="calendar"/> Año</Label>
                        <Input
                          type="select" 
                          id="t_user" 
                          placeholder="Elige el año del vehículo" 
                          onChange={(e) => setRol(e)}
                          value={data.rol}
                          required
                        >
                            <option value="">Seleccione el año del vehículo</option>
                            <option value="2020">2020</option> 
                            <option value="2019">2019</option> 
                            <option value="2018">2018</option> 
                            <option value="2017">2017</option> 
                            <option value="2016">2016</option> 
                            <option value="2015">2015</option> 
                            <option value="2014">2014</option> 
                            <option value="2013">2013</option> 
                            <option value="2012">2012</option> 
                            <option value="2011">2011</option> 
                            <option value="2010">2010</option> 
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                            <option value="1969">1969</option>
                            <option value="1968">1968</option>
                            <option value="1967">1967</option>
                            <option value="1966">1966</option>
                            <option value="1965">1965</option>
                            <option value="1964">1964</option>
                            <option value="1963">1963</option>
                            <option value="1962">1962</option>
                            <option value="1961">1961</option>
                            <option value="1960">1960</option>
                            <option value="1959">1959</option>
                            <option value="1958">1958</option>
                            <option value="1957">1957</option>
                            <option value="1956">1956</option>
                            <option value="1955">1955</option>
                            <option value="1954">1954</option>
                            <option value="1953">1953</option>
                            <option value="1952">1952</option>
                            <option value="1951">1951</option>
                            <option value="1950">1950</option>
                            <option value="1949">1949</option>
                            <option value="1948">1948</option>
                            <option value="1947">1947</option>
                            <option value="1946">1946</option>
                            <option value="1945">1945</option>
                            <option value="1944">1944</option>
                            <option value="1943">1943</option>
                            <option value="1942">1942</option>
                            <option value="1941">1941</option>
                            <option value="1940">1940</option>
                            <option value="1939">1939</option>
                            <option value="1938">1938</option>
                            <option value="1937">1937</option>
                            <option value="1936">1936</option>
                            <option value="1935">1935</option>
                            <option value="1934">1934</option>
                            <option value="1933">1933</option>
                            <option value="1932">1932</option>
                            <option value="1931">1931</option>
                            <option value="1930">1930</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="4" xl="4">
                      <FormGroup>
                        <Label htmlFor="last_name"><MDBIcon className="mt-1" size="lg" icon="delicious"/> Color(es)</Label>
                        <Input
                        type="text" 
                        id="last_name" 
                        placeholder="Color(es)" 
                        value={data.last_name}
                        onChange={(e) => setLastName(e)}
                        required
                        >
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="4" xl="4">
                      <FormGroup>
                        <Label htmlFor="id_card"><MDBIcon className="mt-1" size="lg" icon="list-ol"/> Placa</Label>
                        <Input
                        type="text" 
                        id="id_card" 
                        placeholder="Introduzca placa" 
                        value={data.id_card}
                        onChange={(e) => setIdCard(e)}
                        required
                        >
                        </Input>
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
                        placeholder="Puntos relevantes sobre la falla del vehículo"
                        value={data.comentarios}
                        onChange=""
                        required
                        />
                  </Col>
                </Row>     
                  <hr />
                  <Row className="mt-3 pb-5" style={{justifyContent: 'center'}}>
                    <Button color="success" type="submit" style={{fontWeight: 'bold', width: 150}}>Registrar</Button>
                  </Row>
                  </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
  );
}

export default RegistrarUsuario;