import {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom"
import { Button, IconButton, Paper, TextField} from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import axios from "axios"
import CommentList from './CommentList';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[200]),
  '&:hover': {
    backgroundColor: grey[200],
  },
}));


const Comment = ({viewIdx, cUser})=>{

    const [comments,setComments] = useState([]);


    const callApi = async ()=>{
        const result = await axios.get(`http://localhost:9400/board/comment/${viewIdx}`)
        setComments(result.data)
    }

    useEffect(()=>{
        callApi();
    },[])

    const commentSubmit = async (e)=>{
        e.preventDefault();
        const input = e.target.cContent
        const cContent = input.value
        const result = await axios.post("http://localhost:9400/board/comment",{cUser,"boardIdx":viewIdx,"cContent":cContent})
        setComments([...comments,{cUser, cContent:cContent, cLike:0}] )
        input.value = ""
    }




    const fieldStyle = {border: "none" ,background: "white" , resize : "none", width : "70%", marginLeft: "2%", marginTop:"10px", marginBottom:"10px"}


    return (
        <>
        <Box onSubmit={commentSubmit} component="form">
        <TextField 
        style= {fieldStyle}
        name='cContent'
        // onChange={onChange}
        placeholder="Title please"
        required
        />
        <ColorButton sx={{marginTop:2, marginLeft:2}} type="submit" >글 저장하기</ColorButton>
        </Box>
        <CommentList comments={comments} />
        </>
    )
}


export default Comment

