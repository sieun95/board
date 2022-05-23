import {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';

const pages = ['회원가입', '로그인', '게시판', "채팅"];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const navigate = useNavigate()
  const [userId,setUserId] = useState("")

  
  useEffect(()=>setUserId(localStorage.getItem("userId")),[userId])

  const logOut = ()=>{
    localStorage.removeItem("userId")
    localStorage.removeItem("pwd")
    setUserId("")
    navigate("/")
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {
              (userId === undefined || userId === null) 
              ? 
              <>
              <Button
              onClick={()=>navigate("/signup")}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              회원가입
          </Button>
          <Button
              onClick={()=>navigate("/login")}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              로그인
          </Button>
          </>
          :
          <Button
              onClick={logOut}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              로그아웃
          </Button>
            }
            
            <Button
                onClick={()=>navigate("/chat")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                채팅
            </Button>
            <Button
                onClick={()=>navigate("/board/list/1")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                게시판
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
