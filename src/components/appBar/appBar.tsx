import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';

export default function HeaderBar() {
  const matches = useMediaQuery('(min-width:1200px)');

  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: '#212121' }}>
          {matches ? (
            'VEV'
          ) : (
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          )}

          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
            <Button color="inherit" sx={{ fontSize: 24 }}>
              Posts
            </Button>
            <Button color="inherit" variant="text" style={{ marginLeft: 16, fontSize: 24 }}>
              Events
            </Button>
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
