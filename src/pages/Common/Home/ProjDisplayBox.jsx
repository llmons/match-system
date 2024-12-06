import {useEffect, useState} from "react";
import {Box, Stack, Typography, useTheme} from "@mui/material";
import {getRandomProj} from "./Home.jsx";
import styled from "@emotion/styled";

const PerBox = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid",
    borderColor: theme.palette.info.light,
    borderRadius: 16,
    '&:hover': {
        cursor: "pointer",
    }
}))


export default function ProjDisplayBox() {
    const theme = useTheme()
    const [popularProj, setPopularProj] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const popular = await getRandomProj().then(proj => proj)
            setPopularProj(() => popular)
        }
        fetchData().then(null)
    }, [])

    return (
        <Box>
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={5}>
                <PerBox>
                    <Typography variant="h6">{popularProj.name}</Typography>
                    <Typography variant="body2" color="textSecondary">{popularProj.major}</Typography>
                    <Typography variant="body2" color="textSecondary">{popularProj.instructor}</Typography>
                </PerBox>
            </Stack>
        </Box>
    )
}