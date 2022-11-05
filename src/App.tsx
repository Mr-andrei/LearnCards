import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './Redux/store/store';
import RouteFile from './Routes/Routes';
import { customTheme } from './Styles/styles';
import { MainContainer } from './Styles/appStyles';

function App() {
    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <BrowserRouter>
                <MainContainer>
                    <Provider store={store}>
                        <RouteFile />
                    </Provider>
                </MainContainer>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
