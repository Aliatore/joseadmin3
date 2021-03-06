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
                    <p style={{fontSize: 25, fontWeight: 'bold'}}>Información:<span style={{fontSize: 25, fontWeight: '300'}}> para registrar el nuevo usuario, por favor rellenar los campos y presione registrar.</span></p>
                  </Col>
                </Row>
                <Row style={{textAlign:"center"}} className="ml-4 mt-3" xs="12" sm="12" md="12" lg="12" xl="12">
                </Row>
              </CardHeader>
              <CardBody>
              <Container>
                <h5><MDBIcon className="mt-1" size="lg" icon="user-circle"/> Datos del usuario</h5>
              </Container>
                <Form className="pt-2 ml-3" onSubmit={registerNewUser}>
                  <Row>
                    <Col xs="12" sm="12" md="6" lg="4" xl="3">
                      <FormGroup>
                        <Label htmlFor="t_user"><MDBIcon className="mt-1" size="lg" icon="user"/> Tipo de usuario</Label>
                        <Input
                          type="select" 
                          id="t_user" 
                          placeholder="Elige el rol del nuevo usuario" 
                          onChange={(e) => setRol(e)}
                          value={data.rol}
                          required
                        >
                          <option value="">Seleccione tipo de usuario</option>
                          <option value="1">Super usuario</option>
                          <option value="2">Administrador</option>
                          <option value="3">Profesor</option>
                          <option value="4">Estudiante</option>
                          <option value="5">Profesor VIP</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="4" xl="3">
                      <FormGroup>
                        <Label htmlFor="name"><MDBIcon className="mt-1" size="lg" icon="user"/> Nombre(s)</Label>
                        <Input 
                        type="text" 
                        id="name" 
                        placeholder="Nombre(s) real(es) del usuario" 
                        value={data.name}
                        onChange={(e) => setName(e)}
                        required
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="4" xl="3">
                      <FormGroup>
                        <Label htmlFor="last_name"><MDBIcon className="mt-1" size="lg" icon="user"/> Apellido(s)</Label>
                        <Input
                        type="text" 
                        id="last_name" 
                        placeholder="Apellido(s) real(es) del usuario" 
                        value={data.last_name}
                        onChange={(e) => setLastName(e)}
                        required
                        >
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="4" xl="3">
                      <FormGroup>
                        <Label htmlFor="id_card"><MDBIcon className="mt-1" size="lg" icon="id-card"/> Cédula o Id card</Label>
                        <Input
                        type="text" 
                        id="id_card" 
                        placeholder="Introduzca cédula o Id card" 
                        value={data.id_card}
                        onChange={(e) => setIdCard(e)}
                        required
                        >
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12" sm="12" md="6" lg="4" xl="3">
                      <FormGroup>
                        <Label htmlFor="email"><MDBIcon className="mt-1" size="lg" icon="at"/> Correo electrónico</Label>
                        <Input
                        type="email" 
                        id="email" 
                        placeholder="Correo electronico del usuario" 
                        onChange={(e) => setEmail(e)}
                        value={data.email}
                        required
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="4" xl="3">
                      <FormGroup>
                        <Label htmlFor="username"><MDBIcon className="mt-1" size="lg" icon="user"/> Usuario</Label>
                        <Input 
                        type="text" 
                        id="username" 
                        placeholder="Credencial de inicio de sesión" 
                        value={data.username}
                        onChange={(e) => setUsername(e)}
                        required
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="4" xl="3">
                      <FormGroup>
                        <Label htmlFor="u_password"><MDBIcon className="mt-1" size="lg" icon="lock"/> Contraseña</Label>
                        <Input
                        type="password" 
                        id="u_password" 
                        placeholder="Contraseña de inicio de sesión" 
                        value={data.password}
                        onChange={(e) => setPassword(e)}
                        required
                        >
                        </Input>
                      </FormGroup>
                    </Col>
                      {data.inputCodeTeacher === true ?
                      <Col xs="12" sm="12" md="6" lg="4" xl="3">
                      <FormGroup>
                      <Label htmlFor="cod_teacher"><MDBIcon className="mt-1" size="lg" icon="graduation-cap"/> Código de profesor</Label>
                      <Input
                        type="text" 
                        id="cod_teacher" 
                        value={data.teacher_code}
                        placeholder="Introduzca código profesor" 
                        onChange={(e) => setTeacherCode(e)}
                        required
                      >
                      </Input>
                      </FormGroup>
                      </Col>
                      : null}

                  </Row>
                  <hr />
                  <Row>
                    <Col xs="12" sm="12" md="6" lg="4" xl="3">
                      <FormGroup>
                        <Label htmlFor="status"><MDBIcon className="mt-1" size="lg" icon="briefcase"/> Estatus del usuario</Label>
                        <Input
                          type="select" 
                          id="status" 
                          placeholder="Elige el estatus del usuario" 
                          onChange={(e) => setEnabled(e)}
                          value={data.enabled}
                          required
                        >
                          <option value="">Seleccione estatus</option>
                          <option value="1">Activo</option>
                          <option value="0">Inactivo</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="4" xl="3">
                      <FormGroup>
                        <Label htmlFor="speciality"><MDBIcon className="mt-1" size="lg" icon="universal-access"/> Especialidad</Label>
                        <Input 
                        type="select" 
                        id="speciality" 
                        placeholder="Credencial de inicio de sesión" 
                        value={data.specialty}
                        onChange={(e) => setSpeciality(e)}
                        required
                        >
                          <option value="">Seleccione su especialidad</option>
                          <option value="1">N/A</option>
                          <option value="2">Ciencias de la salud</option>
                          <option value="3">Biología</option>
                          <option value="4">Farmacia</option>
                          <option value="5">Medicina</option> 
                          <option value="6">Enfermería</option>
                          <option value="7">Salud publica</option> 
                          <option value="8">Fisioterapia</option>
                          <option value="9">Odontología</option>
                          <option value="10">Radiología</option>
                          <option value="11">Gerontología</option>
                          <option value="12">Ingenieria biomédica</option> 
                          <option value="13">Histocitotecnologia</option>
                          <option value="14">Bioquímica</option>
                          <option value="15">Bioanalis</option>
                          <option value="16">Nutrición y dietética</option>
                          <option value="17">Sexología</option>
                          <option value="18">Ciencias aplicadas</option> 
                          <option value="19">Ingenierias</option>
                          <option value="20">Ciencias puras</option> 
                          <option value="21">Matemática</option> 
                          <option value="22">Física</option> 
                          <option value="23">Química</option>
                          <option value="24">Ciencias económicas</option> 
                          <option value="25">Economía</option>
                          <option value="26">Administración</option>
                          <option value="27">Estadística</option>
                          <option value="28">Contaduría</option>
                          <option value="29">Ciencias sociales</option>
                          <option value="30">Antropología</option>
                          <option value="31">Arquitectura</option>
                          <option value="32">Ciencias Políticas</option>
                          <option value="33">Comunicación</option>
                          <option value="34">Contabilidad</option>
                          <option value="35">Criminología</option>
                          <option value="36">Demografía</option>
                          <option value="37">Derecho</option>
                          <option value="38">Didáctica</option>
                          <option value="39">Diseño Gráfico</option> 
                          <option value="40">Diseño Industrial</option> 
                          <option value="41">Educación</option>
                          <option value="42">Geografía</option>
                          <option value="43">Historia</option>
                          <option value="44">Linguística</option>
                          <option value="45">Periodismo</option>
                          <option value="46">Psicología</option>
                          <option value="47">Publicidad</option>
                          <option value="48">Relaciones Internacionales</option> 
                          <option value="49">Relaciones Públicas</option>
                          <option value="50">Marketing</option> 
                          <option value="51">Marketing Digital</option> 
                          <option value="52">Comercio internacional</option>
                          <option value="53">Filosofía</option>
                       </Input>
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="4" xl="3">
                      <FormGroup>
                        <Label htmlFor="user_city"><MDBIcon className="mt-1" size="lg" icon="university"/> Ciudad</Label>
                        <Input
                        type="text" 
                        id="user_city" 
                        placeholder="Ciudad en la qué reside" 
                        value={data.city}
                        onChange={(e) => setCity(e)}
                        required
                        >
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="4" xl="3">
                      <FormGroup>
                        <Label htmlFor="postal_cod"><MDBIcon className="mt-1" size="lg" icon="university"/> Código postal</Label>
                        <Input
                        type="text" 
                        id="postal_cod" 
                        value={data.postal_code}
                        placeholder="Introduzca código profesor" 
                        onChange={(e) => setPostalCode(e)}
                        required
                        >
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12" sm="12" md="6" lg="4" xl="3">
                      <FormGroup>
                        <Label htmlFor="prefix"><MDBIcon className="mt-1" size="lg" icon="mobile"/> Prefijo telefónico</Label>
                        <Input
                          type="select" 
                          id="prefix" 
                          // placeholder="Elige el estatus del usuario" 
                          onChange={(e) => setPrefijo(e)}
                          value={data.prefix}
                          required
                        >
                            <option value="" disabled>Prefijo</option>
                            <option value="+213">Argelia (+213)</option>
                            <option value="+376">Andorra (+376)</option>
                            <option value="+244">Angola (+244)</option>
                            <option value="+1264">Anguila (+1264)</option>
                            <option value="+1268">
                            Antigua & amp; Barbuda (+1268)
                            </option>
                            <option value="+54">Argentina (+54)</option>
                            <option value="+374">Armenia (+374)</option>
                            <option value="+297">Aruba (+297)</option>
                            <option value="+61">Australia (+61)</option>
                            <option value="+43">Austria (+43)</option>
                            <option value="+994">Azerbaiyán (+994)</option>
                            <option value="+1242">Bahamas (+1242)</option>
                            <option value="+973">Bahréin (+973)</option>
                            <option value="+880">Bangladesh (+880)</option>
                            <option value="+1246">Barbados (+1246)</option>
                            <option value="+375">Bielorrusia (+375)</option>
                            <option value="+32">Bélgica (+32)</option>
                            <option value="+501">Belice (+501)</option>
                            <option value="+229">Benin (+229)</option>
                            <option value="+1441">Bermudas (+1441)</option>
                            <option value="+975">Bután (+975)</option>
                            <option value="+591">Bolivia (+591)</option>
                            <option value="+387">Bosnia Herzegovina (+387)</option>
                            <option value="+267">Botswana (+267)</option>
                            <option value="+55">Brasil (+55)</option>
                            <option value="+673">Brunei (+673)</option>
                            <option value="+359">Bulgaria (+359)</option>
                            <option value="+226">Burkina Faso (+226)</option>
                            <option value="+257">Burundi (+257)</option>
                            <option value="+855">Camboya (+855)</option>
                            <option value="+237">Camerún (+237)</option>
                            <option value="+1">Canadá (+1)</option>
                            <option value="+238">Islas de Cabo Verde (+238)</option>
                            <option value="+1345">Islas Caimán (+1345)</option>
                            <option value="+236">
                            República Centroafricana (+236)
                            </option>
                            <option value="+56">Chile (+56)</option>
                            <option value="+86">China (+86)</option>
                            <option value="+57">Colombia (+57)</option>
                            <option value="+269">Comoras (+269)</option>
                            <option value="+242">Congo (+242)</option>
                            <option value="+682">Islas Cook (+682)</option>
                            <option value="+506">Costa Rica (+506)</option>
                            <option value="+385">Croacia (+385)</option>
                            <option value="+53">Cuba (+53)</option>
                            <option value="+90392">Norte de Chipre (+90392)</option>
                            <option value="+357">Sur de Chipre (+357)</option>
                            <option value="+42">República Checa (+42)</option>
                            <option value="+45">Dinamarca (+45)</option>
                            <option value="+253">Djibouti (+253)</option>
                            <option value="+1809">Dominica (+1809)</option>
                            <option value="+1809">República Dominicana (+1809)</option>
                            <option value="+593">Ecuador (+593)</option>
                            <option value="+20">Egipto (+20)</option>
                            <option value="+503">El Salvador (+503)</option>
                            <option value="+240">Guinea Ecuatorial (+240)</option>
                            <option value="+291">Eritrea (+291)</option>
                            <option value="+372">Estonia (+372)</option>
                            <option value="+251">Etiopía (+251)</option>
                            <option value="+500">Islas Malvinas (+500)</option>
                            <option value="+298">Islas Feroe (+298)</option>
                            <option value="+679">Fiji (+679)</option>
                            <option value="+358">Finlandia (+358)</option>
                            <option value="+33">Francia (+33)</option>
                            <option value="+594">Guayana Francesa (+594)</option>
                            <option value="+689">Polinesia Francesa (+689)</option>
                            <option value="+241">Gabón (+241)</option>
                            <option value="+220">Gambia (+220)</option>
                            <option value="+7880">Georgia (+7880)</option>
                            <option value="+49">Alemania (+49)</option>
                            <option value="+233">Ghana (+233)</option>
                            <option value="+350">Gibraltar (+350)</option>
                            <option value="+30">Grecia (+30)</option>
                            <option value="+299">Groenlandia (+299)</option>
                            <option value="+1473">Granada (+1473)</option>
                            <option value="+590">Guadalupe (+590)</option>
                            <option value="+671">Guam (+671)</option>
                            <option value="+502">Guatemala (+502)</option>
                            <option value="+224">Guinea (+224)</option>
                            <option value="+245">Guinea - Bissau (+245)</option>
                            <option value="+592">Guyana (+592)</option>
                            <option value="+509">Haití (+509)</option>
                            <option value="+504">Honduras (+504)</option>
                            <option value="+852">Hong Kong (+852)</option>
                            <option value="+36">Hungría (+36)</option>
                            <option value="+354">Islandia (+354)</option>
                            <option value="+91">India (+91)</option>
                            <option value="+62">Indonesia (+62)</option>
                            <option value="+98">Irán (+98)</option>
                            <option value="+964">Irak (+964)</option>
                            <option value="+353">Irlanda (+353)</option>
                            <option value="+972">Israel (+972)</option>
                            <option value="+39">Italia (+39)</option>
                            <option value="+1876">Jamaica (+1876)</option>
                            <option value="+81">Japón (+81)</option>
                            <option value="+962">Jordania (+962)</option>
                            <option value="+7">Kazajstán (+7)</option>
                            <option value="+254">Kenia (+254)</option>
                            <option value="+686">Kiribati (+686)</option>
                            <option value="+850">Corea del Norte (+850)</option>
                            <option value="+82">Corea del Sur (+82)</option>
                            <option value="+965">Kuwait (+965)</option>
                            <option value="+996">Kirguistán (+996)</option>
                            <option value="+856">Laos (+856)</option>
                            <option value="+371">Letonia (+371)</option>
                            <option value="+961">Líbano (+961)</option>
                            <option value="+266">Lesotho (+266)</option>
                            <option value="+231">Liberia (+231)</option>
                            <option value="+218">Libia (+218)</option>
                            <option value="+417">Liechtenstein (+417)</option>
                            <option value="+370">Lituania (+370)</option>
                            <option value="+352">Luxemburgo (+352)</option>
                            <option value="+853">Macao (+853)</option>
                            <option value="+389">Macedonia (+389)</option>
                            <option value="+261">Madagascar (+261)</option>
                            <option value="+265">Malawi (+265)</option>
                            <option value="+60">Malasia (+60)</option>
                            <option value="+960">Maldivas (+960)</option>
                            <option value="+223">Mali (+223)</option>
                            <option value="+356">Malta (+356)</option>
                            <option value="+692">Islas Marshall (+692)</option>
                            <option value="+596">Martinica (+596)</option>
                            <option value="+222">Mauritania (+222)</option>
                            <option value="+269">Mayotte (+269)</option>
                            <option value="+52">México (+52)</option>
                            <option value="+691">Micronesia (+691)</option>
                            <option value="+373">Moldavia (+373)</option>
                            <option value="+377">Mónaco (+377)</option>
                            <option value="+976">Mongolia (+976)</option>
                            <option value="+1664">Montserrat (+1664)</option>
                            <option value="+212">Marruecos (+212)</option>
                            <option value="+258">Mozambique (+258)</option>
                            <option value="+95">Myanmar (+95)</option>
                            <option value="+264">Namibia (+264)</option>
                            <option value="+674">Nauru (+674)</option>
                            <option value="+977">Nepal (+977)</option>
                            <option value="+31">Holanda (+31)</option>
                            <option value="+687">Nueva Caledonia (+687)</option>
                            <option value="+64">Nueva Zelanda (+64)</option>
                            <option value="+505">Nicaragua (+505)</option>
                            <option value="+227"> Níger (+227) </option>
                            <option value="+234">Nigeria (+234)</option>
                            <option value="+683">Niue (+683)</option>
                            <option value="+672">Islas Norfolk (+672)</option>
                            <option value="+670">Northern Marianas (+670)</option>
                            <option value="+47">Noruega (+47)</option>
                            <option value="+968">Omán (+968)</option>
                            <option value="+680">Palau (+680)</option>
                            <option value="+507">Panamá (+507)</option>
                            <option value="+675">Papua Nueva Guinea (+675)</option>
                            <option value="+595">Paraguay (+595)</option>
                            <option value="+51">Perú (+51)</option>
                            <option value="+63">Filipinas (+63)</option>
                            <option value="+48">Polonia (+48)</option>
                            <option value="+351">Portugal (+351)</option>
                            <option value="+1787">Puerto Rico (+1787)</option>
                            <option value="+974">Qatar (+974)</option>
                            <option value="+262">Reunión (+262)</option>
                            <option value="+40">Rumania (+40)</option>
                            <option value="+7">Rusia (+7)</option>
                            <option value="+250">Ruanda (+250)</option>
                            <option value="+378">San Marino (+378)</option>
                            <option value="+239">
                            Santo Tomé & amp; Principe (+239)
                            </option>
                            <option value="+966">Arabia Saudita (+966)</option>
                            <option value="+221">Senegal (+221)</option>
                            <option value="+381">Serbia (+381)</option>
                            <option value="+248">Seychelles (+248)</option>
                            <option value="+232">Sierra Leona (+232)</option>
                            <option value="+65">Singapur (+65)</option>
                            <option value="+421">República Eslovaca (+421)</option>
                            <option value="+386">Eslovenia (+386)</option>
                            <option value="+677">Islas Salomón (+677)</option>
                            <option value="+252">Somalia (+252)</option>
                            <option value="+27">Sudáfrica (+27)</option>
                            <option value="+34">España (+34)</option>
                            <option value="+94">Sri Lanka (+94)</option>
                            <option value="+290">St. Helena (+290)</option>
                            <option value="+1869">St. Kitts (+1869)</option>
                            <option value="+1758">Santa Lucía (+1758)</option>
                            <option value="+249">Sudán (+249)</option>
                            <option value="+597">Surinam (+597)</option>
                            <option value="+268">Swazilandia (+268)</option>
                            <option value="+46">Suecia (+46)</option>
                            <option value="+41">Suiza (+41)</option>
                            <option value="+963">Siria (+963)</option>
                            <option value="+886">Taiwán (+886)</option>
                            <option value="+7">Tayikistán (+7)</option>
                            <option value="+66">Tailandia (+66)</option>
                            <option value="+228">Togo (+228)</option>
                            <option value="+676">Tonga (+676)</option>
                            <option value="+1868">
                            Trinidad & amp; Tobago (+1868)
                            </option>
                            <option value="+216">Túnez (+216)</option>
                            <option value="+90">Turquía (+90)</option>
                            <option value="+7">Turkmenistán (+7)</option>
                            <option value="+993">Turkmenistán (+993)</option>
                            <option value="+1649">
                            Turcos & amp; Islas Caicos (+1649)
                            </option>
                            <option value="+688">Tuvalu (+688)</option>
                            <option value="+256">Uganda (+256)</option>
                            <option value="+44">Reino Unido (+44)</option>
                            <option value="+380">Ucrania (+380)</option>
                            <option value="+971">Emiratos Árabes Unidos (+971)</option>
                            <option value="+598">Uruguay (+598)</option>
                            <option value="+1">EE. UU. (+1)</option>
                            <option value="+7">Uzbekistán (+7)</option>
                            <option value="+678">Vanuatu (+678)</option>
                            <option value="+379">Ciudad del Vaticano (+379)</option>
                            <option value="+58">Venezuela (+58)</option>
                            <option value="+84">Vietnam (+84)</option>
                            <option value="+84">
                            Islas Vírgenes - Británicas (+1284)
                            </option>
                            <option value="+84">
                            Islas Vírgenes - EE. UU. (+1340)
                            </option>
                            <option value="+681"> Wallis & amp; Futuna (+681) </option>
                            <option value="+969">Yemen (North) (+ 969)</option>
                            <option value="+967">Yemen (Sur) (+ 967)</option>
                            <option value="+260">Zambia (+260)</option>
                            <option value="+263">Zimbabwe (+263)</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="4" xl="3">
                      <FormGroup>
                        <Label htmlFor="phone"><MDBIcon className="mt-1" size="lg" icon="mobile"/> Número celular</Label>
                        <Input
                        type="number" 
                        id="phone" 
                        placeholder="Número celular del usuario" 
                        onChange={(e) => setPhoneNumber(e)}
                        value={data.phone_number}
                        required
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="12" md="6" lg="4" xl="3">
                      <FormGroup>
                        <Label htmlFor="address"><MDBIcon className="mt-1" size="lg" icon="university"/> Dirección</Label>
                        <Input 
                        type="text" 
                        id="address" 
                        placeholder="Dirección del usuario del usuario" 
                        value={data.direction}
                        onChange={(e) => setDirection(e)}
                        required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
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