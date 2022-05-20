import {Outlet, Link} from 'react-router-dom';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[700]),
  '&:hover': {
    backgroundColor: grey[900],
  },
}));

const TavernMain = () => {
  let loginId = '';
  const cookie = window.localStorage.getItem("user")
  if(cookie){
    loginId = JSON.parse(cookie).userid
  }
  return (
    <>
      <nav>
        <ul className='tabs'>
          <Box sx={{ margin:1 }}>
            <ColorButton variant="text" component={Link} to="/tavern/page/1">글 목록</ColorButton>
          </Box>
          {/* {
            loginId &&
            <Box sx={{ margin:1 }}>
              <ColorButton variant="text" component={Link} to="/tavern/write">글 쓰기</ColorButton>
            </Box>
          } */}
        </ul>
      </nav>
      <br />
      <Outlet />
    </>
    );
}

export default TavernMain;