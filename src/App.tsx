import { ThemeProvider } from '@emotion/react';
import { useTheme } from '@mui/material';
import { RecoilRoot } from 'recoil';
import AdminRouter from './Router';

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <AdminRouter />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
