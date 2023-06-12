import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout/MainLayout.jsx";
import { Board } from "../pages/Tasks/Board.jsx";
import { EditBoard } from "../pages/EditBoard/EditBoard.jsx";
import { Employees } from "../pages/Employees/Employee.jsx";
import { EditEmployee } from "../pages/EditEmployee/EditEmployee.jsx";
import { Contacts } from "../pages/Contacts/Contacts.jsx";
import { Tariffs } from "../pages/Tariffs/Tariffs.jsx";
import { LoginLayout } from "../layouts/LoginLayout/LoginLayout.jsx";
import { Login } from "../pages/Login/Login.jsx";
import { AuthProvider } from "../hoc/AuthProvider.jsx";
import RequireAuth from "../hoc/RequireAuth.jsx";
import Projects from "../pages/Projects/Projects.jsx";

const layouts = [
  {
    path: '/',
    component: <MainLayout />,
    routes: [
      {
        path: '/',
        component: <Projects />
      },
      {
        path: '/employees',
        component: <Employees />
      },
      {
        path: '/edit-employee',
        component: <EditEmployee />
      },
      {
        path: '/projects/:id',
        component: <Board />
      },
      {
        path: '/edit-board',
        component: <EditBoard />
      },
      {
        path: '/contacts',
        component: <Contacts />
      },
      {
        path: '/tariffs',
        component: <Tariffs />
      },
      {
        path: '/projects',
        component: <Projects/>
      }
    ]
  }
  // ,{
  //   path: '/login',
  //   component: <LoginLayout />,
  //   routes: [
  //     {
  //       path: '/login',
  //       component: <Login />
  //     },
  //   ],
  // }
]

export const AppRouter = () => {
  return (
    <AuthProvider>
      <Routes>
        {
          Object.entries(layouts).map(([, value]) => (
            <Route
              key={value.path}
              path={value.path}
              element={value.component}
            >
              {value.routes.map((route) => <Route key={route.path} path={route.path} element={<RequireAuth>{route.component}</RequireAuth>} />)}
            </Route>
          ))
        }
          <Route key={'/login'} path={'/login'} element={<LoginLayout/>}>
          <Route key={'/login'} path={'/login'} element={<Login/>}></Route>
          </Route>
        {/* <Route path="/board" element={<RequireAuth></RequireAuth>}></Route> */}
      </Routes>
    </AuthProvider>
  );
};

