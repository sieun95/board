import { useEffect, useState } from 'react';
import {useNavigate, useParams, Link} from "react-router-dom"
import axios from "axios";
import { Button, IconButton, Paper} from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Comment from './Comment';

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

    const userId = localStorage.getItem("userId")

    const [inputData, setInputData] = useState({});
    const [blike, setBlike] = useState(false);


    const callApi = async() => {
        const {data} = await axios.get(`http://localhost:9400/board/view/${viewIdx}`);
        setInputData(data)

        // 해당글에 대한 userInfo 좋아요 정보를 이용해서 처음에 표시해줌
        // const userBlike = await axios.get(`http://localhost:9400/board/`)
        // userBlike
    }
    
    useEffect(() => {
        callApi();
    },[]);

    const clickLike = async() => {
      const {data} = await axios.post(`http://localhost:9400/board/like/${viewIdx}`,{userId,"idx":viewIdx})
      console.log(data)

      // 누를때 마다 상태를 바꿔준다
    }


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
      {!blike
        ? <ColorButton onClick={clickLike} variant="text">
          좋아요
        </ColorButton>
        : <ColorButton onClick={clickLike} variant="text">
          좋아요 취소
        </ColorButton>
      }
      

      <Comment viewIdx={viewIdx} cUser={userId} />

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