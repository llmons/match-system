import {Box, Grid2} from "@mui/material";
import {useEffect, useState} from "react";
import Bars from "./Bars.jsx";
import Pies from "./Pies.jsx";

const api = "http://127.0.0.1:4523/m1/5504325-5180481-default/Project/getData";

const DashBoard = () => {
    const [projDataList, setProjDataList] = useState([
        {
            name: '大创',
            valid: 0,
            sum: 0,
        },
        {
            name: '竞赛',
            valid: 0,
            sum: 0,
        },
        {
            name: '毕设',
            valid: 0,
            sum: 0,
        }
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(api)
                .then(res => res.json())
                .then(json => json.data);
            setProjDataList((prev) => [
                {
                    ...prev[0],
                    ...data.ieProj
                },
                {
                    ...prev[1],
                    ...data.competitionProj,
                },
                {
                    ...prev[2],
                    ...data.graduationProj,
                }
            ]);
        }
        fetchData().then(null);
    }, [])

    return (
        <Box flex={4} sx={{padding: '10%'}}>
            <Grid2 container spacing={2}>
                <Bars projDataList={projDataList}/>
                <Pies projDataList={projDataList}/>
            </Grid2>
        </Box>
    )
}

export default DashBoard;