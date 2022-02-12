import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CreateEmployeeForm from './Pages/CreateEmployeeForm/Index';
import ListEmployee from './Pages/ListEmployee';
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path='/' element={<CreateEmployeeForm/>} />
          <Route path='/ListEmployee' element={<ListEmployee/>} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
