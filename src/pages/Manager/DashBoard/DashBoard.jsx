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
        fetch(api)
            .then(res => res.json())
            .then(json => {
                const data = json.data;
                setProjDataList(projDataList => [
                    {
                        ...projDataList[0],
                        sum: data.ieProj_sum,
                        valid: data.ieProj_valid
                    },
                    {
                        ...projDataList[1],
                        sum: data.competitionProj_sum,
                        valid: data.competitionProj_valid
                    },
                    {
                        ...projDataList[2],
                        sum: data.graduationProj_sum,
                        valid: data.graduationProj_valid
                    }
                ]);
            })
            .catch(err => console.log(err));
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