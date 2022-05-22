import { useEffect, useState } from 'react';
import {useNavigate, useParams, Link} from "react-router-dom"
import axios from "axios";
import { Button, IconButton, Paper, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[200]),
  '&:hover': {
    backgroundColor: grey[200],
  },
}));


const fieldStyle = {border: "none" ,background: "white" , resize : "none", width : "96.04%", marginLeft: "2%", marginTop:"10px", marginBottom:"10px"}

const BoardView = () => {
    const  navigate = useNavigate(); 
  
    let params = useParams();
    const viewIdx = parseInt(params.idx)

    

    const [inputData, setInputData] = useState({});


    const callApi = async() => {
        const {data} = await axios.get(`http://localhost:9400/board/view/${viewIdx}`);
        // const [datas] = data
        setInputData(data)
    }
    
    useEffect(() => {
        callApi();
    },[]);


	return (
    <Paper sx={{ maxWidth: "80%", height:"45rem", margin: "auto" }}>
      <br />
      <Box style={{marginLeft: "2%", fontSize:20, fontWeight: 1000}} >Subject</Box>
      <li>{inputData.subject}</li>
      <Box style={{marginLeft: "2%", fontSize:20, fontWeight: 1000}} >content</Box>
      <li>{inputData.content} </li>
      <Box style={{marginLeft: "2%", fontSize:20, fontWeight: 1000}} >userid</Box>
      <li>{inputData.userId} </li>
      <Box style={{marginLeft: "2%", fontSize:20, fontWeight: 1000}} >date</Box>
      <li>{inputData.date} </li>
      <Box style={{marginLeft: "2%", fontSize:20, fontWeight: 1000}} >hit</Box>
      <li>{inputData.hit} </li>
      <ColorButton onClick={()=>navigate(`/board/modify/${viewIdx}`)} variant="text">
        글 수정하기
      </ColorButton>
      <ColorButton onClick={()=>navigate(`/board/list/1`)} variant="text" >
        목록으로
      </ColorButton>
    </Paper>
    
	);
};

export default BoardView;