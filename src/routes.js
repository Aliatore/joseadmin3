import React from 'react';
import './index.css'


//rutas plantilla
const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const Dashboard = React.lazy(() => import('./views/Views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));

//rutas sidenav

const Proyectos = React.lazy(() => import('./views/Views/Proyectos/Proyectos'));
const ProyectosProf = React.lazy(() => import ('./views/Views/Proyectos/ProyectosProfesor'))
const SinAsignar = React.lazy(() => import('./views/Views/SinAsignar/SinAsignar'));
const IngresarTrabajo = React.lazy(() => import('./views/Views/IngresarTrabajo/IngresarTrabajo'));
const Facturas = React.lazy(() => import('./views/Views/Facturas/Facturas'));
const InformacionProfesor = React.lazy(() => import('./views/Views/InformacionProfesor/InformacionProfesor'));
const CalendarioDeEntregas = React.lazy(() => import('./views/Views/CalendarioDeEntregas/CalendarioDeEntregas'));
const AsignarProyecto = React.lazy(() => import('./views/Views/AsignarProyecto/AsignarProyecto'));
const SolicitarProyecto = React.lazy(() => import('./views/Views/SolicitarProyecto/SolicitarProyecto'))
const RegistrarUsuario = React.lazy(() => import('./views/Views/RegistrarUsuario/RegistrarUsuario'));
const RegistrarRoles = React.lazy(() => import('./views/Views/RegistrarRol/RegistrarRol'));
const EnviarProyecto = React.lazy(() => import('./views/Views/EnviarProyecto/EnviarProyecto'));
const DescargarArchivos = React.lazy(() => import('./views/Views/DescargarArchivos/DescargarArchivos'));
const Chat = React.lazy(() => import('./views/Views/Chat/Chat'));

//rutas vistas-ae-admin
const FormularioProfesor = React.lazy(() => import('./views/Views/InformacionProfesor/FormularioProfesor'));
const EntregasProfesor = React.lazy(() => import('./views/Views/Proyectos/EntregasProfesor'));

//rutas ingresarTrabajo
const FormularioExamen = React.lazy(() => import('./views/Views/IngresarTrabajo/FormularioExamen'));
const FormularioTrabajo = React.lazy(() => import('./views/Views/IngresarTrabajo/FormularioTrabajo'));
const FormularioClases = React.lazy(() => import('./views/Views/IngresarTrabajo/FormularioClases.js'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/admin', exact: true, name: 'Home' },
  { path: '/admin/dashboard', name: 'Escritorio', component: Dashboard },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  //Sidenav paths
  { path: '/proyectosProf', exact: true, name: 'Proyectos Prof', component: ProyectosProf },
  { path: '/proyectos', exact: true, name: 'Proyectos', component: Proyectos},
  { path: '/sin-asignar', exact: true, name: 'Proyectos sin asignar', component: SinAsignar},
  { path: '/ingresar-trabajos', exact: true, name: 'Ingresar proyectos', component: IngresarTrabajo},
  { path: '/facturas', exact: true, name: 'Facturas', component: Facturas},
  { path: '/informacion-de-profesores', exact: true, name: 'Profesores', component: InformacionProfesor},
  { path: '/calendario-de-entregas', exact: true, name: 'Calendario de entregas', component: CalendarioDeEntregas},
  { path: '/registro-usuarios', exact: true, name: 'Registro de usuarios', component: RegistrarUsuario},
  { path: '/registro-roles', exact: true, name: 'Registro de roles', component: RegistrarRoles},
  { path: '/asignar-proyecto', exact: true, name: 'Asignación de proyectos', component: AsignarProyecto},
  { path: '/solicitar-proyecto', exact: true, name: 'Solicitudes de proyectos', component: SolicitarProyecto},
  //Vistas ae-admin paths
  { path: '/formulario-profesor', exact: true, name: 'Formulario del Profesor', component: FormularioProfesor},
  { path: '/entregar-asignacion', exact: true, name: 'Entregas de Asignaciones', component: EntregasProfesor},
  //Vistas formularios-Examen-Trabajos-Clases
  { path: '/ingresar-trabajos-examen', exact: true, name: 'Ingresar exámen nuevo', component: FormularioExamen},
  { path: '/ingresar-trabajos-trabajo', exact: true, name: 'Ingresar trabajo nuevo', component: FormularioTrabajo},
  { path: '/ingresar-trabajos-clases', exact: true, name: 'Ingresar clase nueva', component: FormularioClases},
  //Sidenav EnviarProyecto
  { path: '/enviar-archivo', exact: true, name: 'Enviar archivo', component: EnviarProyecto},
  { path: '/descargar-archivos', exact: true, name: 'Descargar archivo', component: DescargarArchivos},
  { path: '/chat', exact: true, name: 'Chat', component: Chat},
];

export default routes;
