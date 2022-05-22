import { useEffect, useState } from 'react';
import {useNavigate, useParams, Link} from "react-router-dom"
import { Button, IconButton, Paper, TextField} from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import axios from 'axios';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[200]),
  '&:hover': {
    backgroundColor: grey[200],
  },
}));




const fieldStyle = {border: "none" ,background: "white" , resize : "none", width : "96.04%", marginLeft: "2%", marginTop:"10px", marginBottom:"10px"}

const BoardModify = () => {
  let params = useParams();
  const modifyIndex = parseInt(params.idx)

  const navigate = useNavigate()

  const [inputData, setInputData] = useState({
    idx:0,
    subject:"",
    content:""
  });

  const callApi = async() => {
    const {data} = await axios.get(`http://localhost:9400/board/view/${modifyIndex}`);
    const [datas] = data
    setInputData(datas)
}

  useEffect(() => {
      callApi();
  },[]);


  const submitHandler = async (e)=>{
    e.preventDefault();
    console.log(inputData)
    await axios.post("http://localhost:9400/board/modify",inputData)
    navigate(-1)
  }

  const onChange = (e)=>{
    const {name,value} = e.target;
    setInputData(
      {...inputData,
      [name]:value
  }
  )}


	return (
    <Paper component="form" onSubmit={submitHandler} sx={{ maxWidth: "80%", height:"45rem", margin: "auto" }}>
      <br />
      <input type="hidden" name="idx" value={modifyIndex} />
      <Box style={{marginLeft: "2%", fontSize:20, fontWeight: 1000}} >Title</Box>
      <TextField 
        style= {fieldStyle}
        name='subject'
        onChange={onChange}
        // required = "required"
        value={inputData.subject}
      />
      <TextField 
        style= {fieldStyle}
        name='content'
        multiline
        rows={4}
        onChange={onChange}
        // required = "required"
        value={inputData.content}
      />
      <Box sx={{ textAlign: "center", marginTop:2 }}>
        <ColorButton type="submit" >수정완료</ColorButton>
      </Box>
    </Paper>
    
	);
};

export default BoardModify;