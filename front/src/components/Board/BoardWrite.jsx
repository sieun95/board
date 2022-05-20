// npm install react-quill --legacy-peer-deps 로 설치해야 설치됨

import * as React from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize';
import { Button, IconButton, Paper, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import './Quill.css'; 
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[200]),
  '&:hover': {
    backgroundColor: grey[200],
  },
}));

const AlertDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ColorButton variant="text" onClick={handleClickOpen}>
        글 저장하기
      </ColorButton>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you ready to save?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            After this progress, it's impossible to modify or delete this Words.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{ color:"black" }} onClick={handleClose}>Disagree</Button>
          <Button sx={{ color:"black" }} onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

Quill.register('modules/ImageResize', ImageResize);

const modules = {
	toolbar: [
		//[{ 'font': [] }],
		[{ header: [1, 2, false] }],
		['bold', 'italic', 'underline'],
		// [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
		['link', 'image'],
		[{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
		['clean']
	],

  ImageResize: {
		parchment: Quill.import('parchment')
	}
};

const fieldStyle = {border: "none" ,background: "black" , resize : "none", width : "96.04%", marginLeft: "2%", marginTop:"10px", marginBottom:"10px"}

const TavernWrite = () => {
	return (
    <Paper sx={{ maxWidth: "80%", height:"45rem", margin: "auto" }}>
      <br />
      <Box style={{marginLeft: "2%", fontSize:20, fontWeight: 1000}} >Title</Box>
      <TextField 
        style= {fieldStyle}
        sx={{ input: { color: 'white' } }}
        name='btitle'
        // onChange={onChange}
        placeholder="Title please"
        // required = "required"
      />
      <div>
        <ReactQuill style={{ maxWidth: "96.04%", height: "32rem", margin: "auto", backgroundColor: "black", color:"white" }} theme="snow" modules={modules} />
      </div>
      <Box sx={{ textAlign: "center", marginTop:2 }}>
      <AlertDialog/>
      </Box>
    </Paper>
    
	);
};

export default TavernWrite;