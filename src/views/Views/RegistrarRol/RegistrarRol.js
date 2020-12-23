import React from 'react';
import { Form, FormGroup, Label, Input, Button, Col, Row, Card, CardHeader, CardBody } from 'reactstrap';
import { MDBIcon } from 'mdbreact';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const RegistrarRol = () => {

  const [data, setData] = React.useState({
    rol: '',
  }); 

  const setRol = (e) => {
    setData({
      ...data,
      rol: e.target.value
    });
    // console.log(e.target.value, "rol");
  }

  const registerNewRol = (e) => {
    e.preventDefault()
    const url = `https://admin.apruebaexamenes.com/New-Rol`

    let datosRol

    datosRol = {
      Rol: data.rol
    }

    axios({
      method: 'post',
      url: url,
      data: datosRol,
      headers: {'Content-Type':'application/json'},
    })
    .then(response => response.data)
    .then((data) => { 
      // console.log(data)
      if (data.code === '000') {
        setData({
          ...data,
          rol: ''
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
                          <p style={{fontSize: 25, fontWeight: 'bold'}}>Información:<span style={{fontSize: 25, fontWeight: '300'}}> para registrar el nuevo rol, por favor rellenar el campo y presione registrar.</span></p>
                        </Col>
                      </Row>
                      <Row style={{textAlign:"center"}} className="ml-4 mt-3" xs="12" sm="12" md="12" lg="12" xl="12">
                      </Row>
                    </CardHeader>
                    <CardBody>
                        <Form className="pt-5" onSubmit={registerNewRol}>
                            <FormGroup>
                                <Row style={{placeContent:"center", }}>
                                    <Col xs="5" sm="5" md="5" lg="5" xl="5">
                                    <FormGroup>
                                      <Label htmlFor="name"><MDBIcon className="mt-1" size="lg" icon="user"/> Nuevo rol</Label>
                                      <Input 
                                      type="text" 
                                      id="name" 
                                      placeholder="Introduzca nuevo rol" 
                                      value={data.rol}
                                      onChange={(e) => setRol(e)}
                                      required
                                    />
                                    </FormGroup>
                                  </Col>
                                </Row>
                            </FormGroup>
                            <Row className="mt-3" style={{justifyContent: 'center'}}>
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

export default RegistrarRol;