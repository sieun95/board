import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from "./component/Main"
import LogIn from './component/LogIn';
import SignUp from './component/SignUp';
import ResponsiveAppBar from './component/ResponsiveAppBar';
import Chat from './components/Chat'



function App() {
  return (
  <>
    <ResponsiveAppBar />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/chat' element={<Chat />} />
    </Routes>
    </>
  );
}

export default App;
