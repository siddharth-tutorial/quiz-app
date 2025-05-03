// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/quiz' element={<Quiz/>}/>
      <Route path='/result' element={<Result/>}/>
     </Routes>
    </div>
  );
}

export default App;
