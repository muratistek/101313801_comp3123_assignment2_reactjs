import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestComponent from './components/TestComponent';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EmployeeDetails from './components/EmployeeDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/employeeList' element={<EmployeeList />} />
          <Route path='/addEmployee' element={<AddEmployee />} />
          <Route path='/viewEmployee/:empid' element={<EmployeeDetails />} />
          <Route path='/addEmployee/:empid' element={<AddEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
