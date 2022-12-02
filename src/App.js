import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestComponent from './components/TestComponent';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/employeeList' element={<EmployeeList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
