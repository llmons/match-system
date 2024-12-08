import {alpha, Box, Container, Stack, useTheme} from "@mui/material";
import Welcome from "./Welcome/Welcome.jsx";
import CardStack from "./CardStack/CardStack.jsx";
import Introduction from "./Introduction/Introduction.jsx";

export const getRandomProj = async () => {
    const apiArr = [
        "http://127.0.0.1:4523/m1/5504325-5180481-default/IEProj/get/",
        "http://127.0.0.1:4523/m1/5504325-5180481-default/CompetitionProj/get/",
        "http://127.0.0.1:4523/m1/5504325-5180481-default/GraduationProj/get/"
    ]
    const [min, max] = [1, 1000]
    const randomIdx = Math.floor(Math.random() * 10) % 3;
    const randomId = Math.floor(Math.random() * (max - min + 1)) + min

    return await fetch(`${apiArr[randomIdx]}${randomId}`)
        .then(res => res.json())
        .then(json => json.data)
        .catch(err => console.log(err))
}

export default function Home() {
    const theme = useTheme()

    return (
        <Box
            sx={{
                background: `linear-gradient(
                 to right,white 0%,
                 ${alpha(theme.palette.info.light, 0.1)} 30%,
                 ${alpha(theme.palette.info.light, 0.1)} 70%,
                 white 100%)`,
            }}>

            <Container>
                <Stack direction="column"
                       spacing={20}
                       sx={{pt: 15}}>

                    <Stack direction="row"
                           justifyContent="space-around"
                           spacing={2}>
                        <Welcome/>
                        <CardStack/>
                    </Stack>

                    <Introduction/>
                </Stack>
            </Container>
        </Box>

    )
}
