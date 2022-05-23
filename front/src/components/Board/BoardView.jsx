import { useEffect, useState } from 'react';
import {useNavigate, useParams} from "react-router-dom"
import axios from "axios";
import { Button,  Paper} from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import CircularProgress from '@mui/material/CircularProgress';
import Comment from './Comment';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[200]),
  '&:hover': {
    backgroundColor: grey[200],
  },
}));



const BoardView = () => {
    const  navigate = useNavigate(); 
  
    let params = useParams();
    const viewIdx = parseInt(params.idx)

    const userId = localStorage.getItem("userId")
    const pwd = localStorage.getItem("pwd")
    
    const [inputData, setInputData] = useState({});
    const [isbLike, setIsbLike] = useState(false);
    const [loading,setLoading] = useState(true)
    const [likeCnt, setLikeCnt] = useState(0)


    const callApi = async() => {
        const {data} = await axios.get(`http://localhost:9400/board/view/${viewIdx}`);
        setInputData(data)

        // 해당글에 대한 userInfo 좋아요 정보를 이용해서 처음에 표시해줌
        const {data:{bLike}} = await axios.post(`http://localhost:9400/auth/login`,{userId,pwd})
        
        // console.log(typeof bLike[0]) //string
        if(bLike){
          setIsbLike(bLike.includes(`${viewIdx}`))
        }
        const response = await axios.get("http://localhost:9400/board/like");
        let cnt = 0;
        response.data.forEach((likes)=>{
          if(likes.bLike){
            if(likes.bLike.includes(`${viewIdx}`)){
              cnt ++
            }
          }
        })
        setLikeCnt(cnt)
        setLoading(false)
    }
    
    useEffect(() => {
        callApi();
    },[likeCnt,isbLike]);

    const clickLike = async() => {
      await axios.post(`http://localhost:9400/board/view`,{userId,"idx":viewIdx})
      setIsbLike(!isbLike)
      
      // 누를때 마다 상태를 바꿔준다
    }


	return (
    <>
    {loading 
      ?
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <CircularProgress /> 
        </Box>
      :
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
      {!isbLike
        ? <ColorButton onClick={clickLike} variant="text">
          좋아요
        </ColorButton>
        : <ColorButton onClick={clickLike} variant="text">
          좋아요 취소
        </ColorButton>
      }
      <div>{likeCnt}</div>
      

      <Comment viewIdx={viewIdx} cUser={userId} />
      {
        userId && userId !==undefined
        ?
        <ColorButton onClick={()=>navigate(`/board/modify/${viewIdx}`)} variant="text">
          글 수정하기
        </ColorButton>
        : null
      }
      <ColorButton onClick={()=>navigate(`/board/list/1`)} variant="text" >
        목록으로
      </ColorButton>
      </Paper>
    }
    </>
	);
};

export default BoardView;