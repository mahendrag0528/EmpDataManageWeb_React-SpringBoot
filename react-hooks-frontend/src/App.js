import './App.css';

import ListEmployeeComponent from './Component/ListEmployeeComponent';
import HeaderComponent from './Component/HeaderComponent';
import FootrComponent from './Component/FootrComponent';
function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <ListEmployeeComponent />
      <FootrComponent />
    </div>
  );
}

export default App;
