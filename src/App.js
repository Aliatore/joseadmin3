import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Prelogin = React.lazy(() => import('./views/Pages/Prelogin'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));



class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      //boolean to redirect
      redirectTo: false,
      //data for login
      username: "",
      password: "",
      //is logged?
      logged: 'false',
      //toast
      toastOpen: false,
      toastError: '',
      toastMessage: '',
      //user logged
      data_user: '',
      rol_id_user: '',

    }
    this.handleLogged = this.handleLogged.bind(this)
    
  }

  //setters
  setUsername = (e) =>{
    this.setState({
      username: e.target.value
    })
  }
  setPassword = (e) =>{
    this.setState({
      password: e.target.value
    })
  }
  //function to redirect
  redireccion = () => {
    if (this.state.redirectTo){
      return <Redirect from="/login" to="/prelogin"></Redirect>
    }
  }
  //function to login
  loginPruebas = (e) => {
    e.preventDefault()
    this.setState({
      redirectTo: true,
      logged: 'true'
    })
    toast.success(`✓ - Acceso exitoso`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  login = (e) => {
    e.preventDefault()
    const url = `https://admin.apruebaexamenes.com/Authentication`

    let datosLogin

    datosLogin = {
      usuario: this.state.username,
      clave: this.state.password
    }

    axios({
      method: 'post',
      url: url,
      data: datosLogin,
      headers: {'Content-Type':'application/json'},
    })
    .then(response => response.data)
    .then((data) => { 
      //console.log(data, 'data del login')
      if (data.code === '000') {
        this.setState({
          redirectTo: true,
          logged: 'true',
          data_user: data,
          rol_id_user: data.rol_id
        })
        toast.success(`✓ - ${data.mensaje}`, {
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
  //function to set logout
  handleLogged(e){
    //console.log(e);
    this.setState({
      logged: e
    })
  }
  
  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route path="/login" name="Login Page" render={() =>{
                  return <Login
                            username = {this.setUsername}
                            password = {this.setPassword}
                            onlogin = {this.login}
                          />
              }}/> 
              <Route exact path="/prelogin" name="prelogin" render={() =>{return <Prelogin /> }}/> 
              <Route path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => 
                        <DefaultLayout
                            {...props}
                            actualuser = {this.state.username}
                            islogged = {this.state.logged}
                            // datologout = {this.handleLogged}
                            dataclient = {this.state.data_user}
                            roliduser = {this.state.rol_id_user}
                          />
              }/>
            </Switch>
          </React.Suspense>
          {this.redireccion()}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <ToastContainer />
      </BrowserRouter>
    );
  }
}

export default App;
