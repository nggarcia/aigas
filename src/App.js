import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import routes from './config/routes';
import './App.scss';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            <route.layout>
              <route.component />
            </route.layout>
          }
          />
      ))}
    </Routes>
   </BrowserRouter>
  );
}

export default App;

//* codigo anterior al video 54
// import React from 'react';
// import Admin from './pages/Admin';
// import SignIn from './pages/Admin/SignIn';
// import Home from './pages/Home';
// import Contact from './pages/Contact';

// import './App.scss';

// function App() {
//   return (
//     <div>
//       <h1>Estamos en App!</h1>
//       <Admin />
//       <SignIn />
//       <Home />
//       <Contact />
//     </div>
//   );
// }

// export default App;


//* codigo corregido de video 44
// diferencia entre ' ' y "" ninguna, lo que sigue es el codigo de apoyo preguntas
// import React from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import './App.scss';
// //! da error en la compilación y no sale nada en el port:3000, al parecer el Switch ya no se usa, ahora es Routes para v6
// //*ojo donde y como se hacen los comentarios, uno mal realizado da error, es preferible usar ctrl+kc
// function App() {
//   return (
//     <Router>
//       <div className="app">
      
//         <h1>Sistema de Rutas Basico</h1>

//         <Link to="/">Home</Link>
//         <br/>
//         <Link to="/contact">Contact</Link>
//         <br/>
//         <Link to="/users">Users</Link>
                
//        <Routes>
//           <Route exact path ="/" element= {<Home />} />
//           <Route exact path ="/contact" element= {<Contact />} />
//           <Route exact path ="/users" element= {<Users />} />
//           <Route path='*' element= {<Error404/>} />
//        </Routes>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Estamos en el componente Home!</h2>;
// }
// function Contact() {
//   return <h2>Estamos en el componente Contact!...</h2>;
// }
// function Users() {
//   return <h2>Estamos en el componente Users!...</h2>;
// }
// function Error404() {
//   return <h2>Error 404!...</h2>;
// }
// export default App;