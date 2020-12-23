import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import super_navigation from '../../nav_test/_nav';
import admin_navigation from '../../nav_test/_nav_admin';
import profesor_navigation from '../../nav_test/_nav_prof';
import estudiante_navigation from '../../nav_test/_nav_estudiante';
import profesor_vip_navigation from '../../nav_test/_nav_prof_vip';
// routes config
import routes from '../../routes';
import '../../index.css'

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  constructor(props){
    super(props)
    // this.datoEmpresa = this.props.empresa
    this.datologged = this.props.islogged
    this.datoUsuario = this.props.actualuser
    this.state = {
      data_client: this.props.dataclient,
      rol_id: this.props.roliduser,
    }
    // this.VerifyLogged = this.VerifyLogged.bind(this)
  }

  VerifyLogged = () => {
    if(this.datologged === "false"){
      this.props.history.push('/login')
    }
  }
  
  componentDidMount(){
    this.VerifyLogged()
  }


  
  signOut = (e) => {
    this.props.history.push('/login')
    // this.onLogout(e)
  }
  
  
  // onLogout = (e) => {
  //   this.props.datologout(e)
  // }
  
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader 
              // onLogout={() => this.signOut('false')} 
            />
          </Suspense>
        </AppHeader>
        <div className="app-body" >
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense >
            {/* aqui es la condicion de las vistas segun el rol */}
              {/* {this.state.rol_id === "" ? 
                <AppSidebarNav  navConfig={super_navigation} {...this.props} router={router} />
                : null
              } */}
              {this.state.rol_id === "1" ? 
                <AppSidebarNav  navConfig={super_navigation} {...this.props} router={router} />
                : null
              }
              {this.state.rol_id === "2" ? 
                <AppSidebarNav  navConfig={admin_navigation} {...this.props} router={router} />
                : null
              }
              {this.state.rol_id === "3" ? 
                <AppSidebarNav  navConfig={profesor_navigation} {...this.props} router={router} />
                : null
              }
              {this.state.rol_id === "4" ? 
                <AppSidebarNav  navConfig={estudiante_navigation} {...this.props} router={router} />
                : null
              }
              {this.state.rol_id === "5" ? 
                <AppSidebarNav  navConfig={profesor_vip_navigation} {...this.props} router={router} />
                : null
              }
              {/* backgroundColor: "#676767" */}
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router}/>
            <Container fluid>
              <Suspense fallback={this.loading()} >
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component
                             datacliente = {this.state.data_client}
                          {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/admin/dashboard" style={{ backgroundColor: '#0041f6'}}/>
                </Switch>
              </Suspense>
            </Container>
          </main>
          {/* <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside> */}
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
