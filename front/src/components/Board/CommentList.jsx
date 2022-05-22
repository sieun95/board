import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CommentList = ({comments})=>{
    return(
        <>
        <TableContainer component={Paper}>
        <Table sx={{ maxWidth:"80%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>작성자</TableCell>
              <TableCell align="right">내용</TableCell>
              <TableCell align="right">삭제버튼자리</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {comments.map((comment) => (
              <TableRow
                key={comment.idx}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                {comment.cUser}
                </TableCell>
                <TableCell align="right">{comment.cContent}</TableCell>
                <TableCell align="right">삭제버튼</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </>
    )
}

export default CommentList;