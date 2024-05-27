import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Home from './components/Home';

const THEME = createTheme({
    typography: {
        "fontFamily": `'ZPix', sans-serif`
    }
});

function App() {
    return (
        <ThemeProvider theme={THEME}>
            <div className="App">
                <Home/>
            </div>
        </ThemeProvider>
    );
}

export default App;
