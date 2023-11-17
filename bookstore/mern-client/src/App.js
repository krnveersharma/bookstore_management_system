import logo from './logo.svg';
import './App.css';
import CreateBook from './component/CreateBook';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AllBook from './component/AllBook'
import UpdateBooks from './component/UpdateBooks';
 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<CreateBook/>}/>
        <Route exact path='/books' element={<AllBook/>}/>
        <Route exact path='/updatebook/:bid' element={<UpdateBooks/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
