// Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic"

// Admin Pages
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";
import AdminEmpleados from "../pages/Admin/Empleados";
import AdminMatriculados from "../pages/Admin/Matriculados";
import AdminMedidores from "../pages/Admin/Medidores";
import AdminTramites from "../pages/Admin/Tramites";
import AdminReportes from "../pages/Admin/Reportes";
import AdminCapacitacion from "../pages/Admin/Capacitacion";
import AdminEventos from "../pages/Admin/Eventos";
import AdminRecorridos from "../pages/Admin/Recorridos";
import AdminIniciosesion from "../pages/Admin/Iniciosesion";


// Client Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import ventanaMision from "../components/Web/Mision";
import ventanaEventos from "../components/Web/Eventos";
import ventanaNormativas from "../components/Web/Normativas";
import ventanaCapacitaciones from "../components/Web/Capacitaciones";
import ventanaNoticias from "../components/Web/Noticias";
import ventanaMatriculados from "../components/Web/Matriculados";

// Other
import Error404 from "../pages/Error404";

// actualizado a v6
const routesAdmin = [
  {
    path: "/admin",
    layout: LayoutAdmin,
    component: AdminHome,
  },
  {
    path: "/admin/login",
    layout: LayoutAdmin,
    component: AdminSignIn,
  },
  {
    path: "/admin/iniciosesion",
    layout: LayoutAdmin,
    component: AdminIniciosesion,
  },
  {
    path: "/admin/empleados",
    layout: LayoutAdmin,
    component: AdminEmpleados,
  },
  {
    path: "/admin/matriculados",
    layout: LayoutAdmin,
    component: AdminMatriculados,
  },
  {
    path: "/admin/medidores",
    layout: LayoutAdmin,
    component: AdminMedidores,
  },
  {
    path: "/admin/tramites",
    layout: LayoutAdmin,
    component: AdminTramites,
  },
  {
    path: "/admin/reportes",
    layout: LayoutAdmin,
    component: AdminReportes,
  },
  {
    path: "/admin/capacitacion",
    layout: LayoutAdmin,
    component: AdminCapacitacion,
  },
  {
    path: "/admin/eventos",
    layout: LayoutAdmin,
    component: AdminEventos,
  },
  {
    path: "/admin/recorridos",
    layout: LayoutAdmin,
    component: AdminRecorridos,
  },  
  {
    path: "*",
    layout: LayoutAdmin,
    component: Error404,
  },
];

const routesClient = [
  {
    path: "/",
    layout: LayoutBasic,
    component: Home,
  },
  {
    path: "/Contact",
    layout: LayoutBasic,
    component: Contact,
  },
  { 
    path: "/mision",
    layout: LayoutBasic,
    component: ventanaMision,
  },
  { 
    path: "/eventos",
    layout: LayoutBasic,
    component: ventanaEventos,
  },
  { 
    path: "/normativas",
    layout: LayoutBasic,
    component: ventanaNormativas,
  },
  { 
    path: "/capacitaciones",
    layout: LayoutBasic,
    component: ventanaCapacitaciones,
  },
  { 
    path: "/noticias",
    layout: LayoutBasic,
    component: ventanaNoticias,
  },
  { 
    path: "/matriculados",
    layout: LayoutBasic,
    component: ventanaMatriculados,
  },
  {
    path: "*",
    layout: LayoutBasic,
    component: Error404,
  },
];
// por ahora este array esta demas pero puede usarse para otra pagina de Error
// const routesError = [
//   {
//     path: "*",
//     layout: LayoutBasic,
//     component: Error404,
//   }
// ];

const routes = [...routesAdmin, ...routesClient ]
// const routes = [...routesAdmin, ...routesClient, ...routesError]

export default routes;

//v5 react-router-dom trabaja con subniveles
// const routes = [
//   {
//     path: "/admin",
//     component: LayoutAdmin,
//     exact: false,
//     routes: [
//       {
//         path: "/admin",
//         component: AdminHome,
//         exact: true,
//       },
//       {
//         path: "/admin/login",
//         component: AdminSignIn,
//         exact: true,
//       },
//     ],
//   },
// ];