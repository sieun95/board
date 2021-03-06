import { useEffect, useState } from "react";
import {useNavigate, useParams, Link} from "react-router-dom"
import axios from "axios";
import * as React from 'react';
import {Table ,TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, IconButton, Paper} from '@mui/material';
import './Paging.css'; 
import Pagination from "react-js-pagination";
import NativeSelect from '@mui/material/NativeSelect';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';

const StyledTableRow = styled(TableRow)(({theme}) => ({
    height: "3.12rem",
    '&:hover': {
      backgroundColor: grey[300],
   },
}));

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[200]),
  '&:hover': {
    backgroundColor: grey[200],
  },
}));

const ColorTableCell = styled(TableCell)(({ theme }) => ({
  // color: theme.palette.common.white,
  fontSize: 20
}));



export default function BoardList() {
  const navigate = useNavigate(); 
  
  let params = useParams();
  const pagenum = parseInt(params.page)

  const userId = localStorage.getItem("userId")

  const [loading,setLoading] = useState(true)

  const [inputData, setInputData] = useState([]);


  const callApi = async() => {
    const response = await axios.get("http://localhost:9400/board/list");
    setInputData(response.data.reverse())
    // const {data} = await axios.get("http://localhost:9400/like");
    // data.forEach((likes)=>{
    //   if(likes.includes(``))
    // })

    setLoading(false)
  }
  
  useEffect(() => {
    callApi();
  },[loading]);

  const Paging = () => {
    const [page, setPage] = useState(parseInt(params.page));
    const handlePageChange = (page) => { 
      setPage(page); 
      navigate(`/board/list/${page}`);
    };
    return (
      <Pagination 
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={inputData.length}
      pageRangeDisplayed={10}
      prevPageText={"???"}
      nextPageText={"???"}
      onChange={handlePageChange} 
      />
    ); 
  }; 


  const onSearch = (e) => {
    e.preventDefault();
    // const searchcat = e.target.category.value
    // const searchvalue = e.target.search.value
    // console.log(`searching ${searchcat} is ${searchvalue}`)
    // navigate(`/board/search`,{state:
    //   {
    //     searchcat:searchcat,
    //     searchvalue:searchvalue
    //   }
    // })
  }

  const pagelist = inputData.slice((pagenum-1)*10,pagenum*10)
  
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
    <>
    <Paper sx={{  maxWidth: "80%", margin: "auto" }}>
      <br />
      <TableContainer sx={{ minHeight: "35rem", maxWidth: "98%", margin: "auto" }}>
        <Table size="small" sx={{ maxWidth: "98%", margin: "auto"}} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "white" }}>
            <TableRow >
              <TableCell sx={{ fontWeight:1000 , fontSize: 15 }}>??????</TableCell>
              <TableCell sx={{ fontWeight:1000 , fontSize: 15 }} width="15%" align="center">?????????</TableCell>
              <TableCell sx={{ fontWeight:1000 , fontSize: 15 }} width="10%" align="center">?????????</TableCell>
              <TableCell sx={{ fontWeight:1000 , fontSize: 15 }} width="15%" align="center">????????? ??????</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {pagelist.map((row) => (
              
              <StyledTableRow
                id={row.idx} 
                onClick={()=>{
                  navigate(`/board/view/${row.idx}`)
                  axios.post("http://localhost:9400/board/hit",{idx:row.idx})
                }}
                key={row.idx}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor:"pointer" }}
              >
                <ColorTableCell>{row.subject}</ColorTableCell>
                <ColorTableCell component="th" scope="row" align="center">
                  {row.userId}
                </ColorTableCell>
                <ColorTableCell align="center">{row.hit}</ColorTableCell>
                <ColorTableCell align="center">{row.date}</ColorTableCell>
              </StyledTableRow>
            ))}

          </TableBody>
        </Table>
        
      </TableContainer>
       <Box sx={{ display:"inline-block", margin:1 }}>
          <form onSubmit={onSearch}>
            <NativeSelect
              inputProps={{
                name: 'category'
              }}
            >
              <option value="userId"> ?????????</option>
              <option value="subject"> ??????</option>
            </NativeSelect>
            <TextField size="small" name ="search" type="text"  />
            <IconButton><SearchIcon /></IconButton>
          </form>
        </Box>
        {userId && userId !==undefined
        ? <Box sx={{ display:"inline-block", float:"right", margin:1 }}>
        <ColorButton sx={{ fontWeight:1000 , fontSize: 15 }} variant="text" component={Link} to="/board/write">??? ??????</ColorButton>
      </Box>
      : null
      }
    </Paper>
    <Paging />
    </>}
    </>
  );
}
