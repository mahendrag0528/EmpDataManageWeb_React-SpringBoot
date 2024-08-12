import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeeComponent from './Component/ListEmployeeComponent';
import HeaderComponent from './Component/HeaderComponent';
import FootrComponent from './Component/FootrComponent';
import AddEmployeeComponent from './Component/AddEmployeeComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Router>
        <div className='container'>
          <Routes>
          <Route exact path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add-employee" element={<AddEmployeeComponent />} />
            <Route path="/edit-employee/:id" element={<AddEmployeeComponent />} />
          </Routes>
        </div>
      </Router>
      <FootrComponent />
    </div>
  );
}

export default App;
