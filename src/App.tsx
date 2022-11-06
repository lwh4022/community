import { ThemeProvider, useTheme } from '@mui/material';
import HeaderBar from './components/appBar/appBar';
import HtmlEditor from './components/htmlEditor/htmlEditor';

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <HeaderBar />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexGrow: 1,
            padding: '8px 8px 0 8px',
          }}
        >
          <div style={{ maxWidth: '1200px', flexGrow: 1 }}>
            <HtmlEditor />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
