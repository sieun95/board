import * as React from 'react';
import { useNavigate } from "react-router-dom"
import { Button, IconButton, Paper, TextField} from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import axios from "axios"

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[200]),
  '&:hover': {
    backgroundColor: grey[200],
  },
}));

const fieldStyle = {border: "none" ,background: "white" , resize : "none", width : "96.04%", marginLeft: "2%", marginTop:"10px", marginBottom:"10px"}

const BoardWrite = () => {

  const navigate = useNavigate()

  const userId = localStorage.getItem("userId")

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(e.target.subject.value)
    const {subject, content} = e.target
    axios.post("http://localhost:9400/board/write",{"subject":subject.value,"content":content.value, "userId":userId})
    navigate("/board/list/1")
  }


	return (
    <Paper component="form" onSubmit={handleSubmit} sx={{ maxWidth: "80%", height:"45rem", margin: "auto" }}>
      <br />
      <Box style={{marginLeft: "2%", fontSize:20, fontWeight: 1000}} >Title</Box>
      <TextField 
        style= {fieldStyle}
        name='subject'
        // onChange={onChange}
        placeholder="Title please"
        // required = "required"
      />
      <TextField 
        style= {fieldStyle}
        name='content'
        multiline
        rows={4}
        // onChange={onChange}
        placeholder="constent please"
        // required = "required"
      />
      <Box sx={{ textAlign: "center", marginTop:2 }}>
        <ColorButton type="submit" >글 저장하기</ColorButton>
      </Box>
    </Paper>
    
	);
};

export default BoardWrite;