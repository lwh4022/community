import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
import HtmlEditor from '../components/htmlEditor/htmlEditor';

function PostWriter() {
  return (
    <Box component="div" sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, height: '100%' }}>
      <TextField
        placeholder="Input your title"
        variant="standard"
        size="medium"
        fullWidth
        style={{ marginBottom: 16 }}
        inputProps={{
          style: {
            fontSize: '32px',
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: '32px',
          },
        }}
      />
      <HtmlEditor />
      <Box sx={{ height: 16 }} />
      <Box component="div" sx={{ display: 'flex', justifyContent: 'end' }}>
        <Button startIcon={<SaveIcon />} variant="contained">
          Save
        </Button>
      </Box>
      <Box sx={{ height: 16 }} />
    </Box>
  );
}

export default PostWriter;
