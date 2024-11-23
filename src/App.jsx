import './App.css'
import {Box, Button, Container} from "@mui/material";
import {useState} from "react";

function App() {
    const [json, setJson] = useState({})
    return (
        <>
            <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Box>{JSON.stringify(json, null, 2)}</Box>
                <Button variant="contained" color="primary" onClick={() => {
                    fetch('http://127.0.0.1:4523/m1/5504325-5180481-default/project/findByCategory')
                        .then(res => res.json())
                        .then(json => setJson(json))
                        .catch(e => console.log(e));
                }}>1</Button>
            </Container>
        </>
    )
}

export default App
