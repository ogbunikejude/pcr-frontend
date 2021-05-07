import 'react-toastify/dist/ReactToastify.css';

import { ChakraProvider, Heading } from '@chakra-ui/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { PrivateRoute } from './Components/auth/PrivateRoute';
import PageWrapper from './Components/layout/PageWrapper';
import { AuthContextProvider } from './Context/auth/provider';
import AppointmentLists from './Pages/Appointment/AppointmentLists';
import EditAppointment from './Pages/Appointment/EditAppointment';
import Login from './Pages/Auth/Login';
import ConsultationList from './Pages/Consultation/ConsultationList';
import AddPatient from './Pages/Patient/AddPatient';
import EditPatient from './Pages/Patient/EditPatient';
import PatientDetails from './Pages/Patient/PatientDetails';
import PatientList from './Pages/Patient/PatientList';
// import AddUser from './Pages/User/AddUser';
import EditUser from './Pages/User/EditUser';
import RegisterUser from './Pages/User/RegisterUser';
import UserDetails from './Pages/User/UserDetails';

function App() {
  const queryClient = new QueryClient();
  return (
    <Router>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <AuthContextProvider>
            <PageWrapper>
              <Switch>
                <Route exact path="/">
                  <Heading> This is the home page</Heading>
                </Route>
                <Route exact path="/user/login">
                  <Login />
                </Route>
                <Route exact path="/user/register">
                  <RegisterUser />
                </Route>
                <PrivateRoute exact path="/user/edit/:id">
                  <EditUser />
                </PrivateRoute>
                <PrivateRoute exact path="/dashboard">
                  <UserDetails />
                </PrivateRoute>

                <PrivateRoute exact path="/patient">
                  <PatientList />
                </PrivateRoute>
                <PrivateRoute exact path="/patient/add">
                  <AddPatient />
                </PrivateRoute>
                <PrivateRoute exact path="/patient/edit/:id">
                  <EditPatient />
                </PrivateRoute>
                <PrivateRoute exact path="/patient/:id">
                  <PatientDetails />
                </PrivateRoute>

                <PrivateRoute exact path="/appointment">
                  <AppointmentLists />
                </PrivateRoute>
                <PrivateRoute exact path="/appointment/edit/:id">
                  <EditAppointment />
                </PrivateRoute>
                <PrivateRoute exact path="/consultation">
                  <ConsultationList />
                </PrivateRoute>
              </Switch>
            </PageWrapper>
          </AuthContextProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </Router>
  );
}

export default App;
