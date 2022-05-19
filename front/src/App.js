import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from "./component/Main"
import LogIn from './component/LogIn';
import SignUp from './component/SignUp';



function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    </>
  );
}

export default App;
