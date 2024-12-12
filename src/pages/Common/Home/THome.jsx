import {alpha, Box, Container, Stack, useTheme} from "@mui/material";
import TWelcome from "./Welcome/TWelcome.jsx";
import TCardStack from "./CardStack/TCardStack.jsx";
import TIntroduction from "./Introduction/TIntroduction.jsx";

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

    // 定义一个红色的透明度和不透明度
    const redTransparent = alpha('#FF0000', 0.1); // 10% 透明度的红色

    return (
        <Box
            sx={{
                background: `linear-gradient(
                 to right,white 0%,
                 ${redTransparent} 70%,
                 ${redTransparent} 30%,
                 white 100%)`,
            }}>

            <Container>
                <Stack direction="column"
                       spacing={20}
                       sx={{pt: 15}}>

                    <Stack direction="row"
                           justifyContent="space-around"
                           spacing={20}>
                        <TCardStack/>
                        <TWelcome/>
                    </Stack>
                    <TIntroduction/>
                </Stack>
            </Container>
        </Box>

    )
}
