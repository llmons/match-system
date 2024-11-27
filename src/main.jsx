import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import router from "./router.jsx";

const theme = createTheme({})

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </StrictMode>
)
