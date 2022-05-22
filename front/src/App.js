import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from "./components/Main"
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Chat from './components/Chat'
import BoardWrite from './components/board/BoardWrite';
import BoardList from './components/board/BoardList';
import BoardView from './components/board/BoardView';
import BoardModify from './components/board/BoardModify';


function App() {
  return (
  <>
    <ResponsiveAppBar />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='/board/write' element={<BoardWrite />} />
      <Route path='/board/list/:page' element={<BoardList />} />
      <Route path='/board/view/:idx' element={<BoardView />} />
      <Route path='/board/modify/:idx' element={<BoardModify />} />
    </Routes>
    </>
  );
}

export default App;
