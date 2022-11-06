import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
            <Typography variant="h6" component="div" sx={{ marginLeft: 16 }}>
              Posts
            </Typography>
            <Typography variant="h6" component="div" sx={{ marginLeft: 16 }}>
              News
            </Typography>
            <Typography variant="h6" component="div" sx={{ marginLeft: 16 }}>
              News
            </Typography>
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
