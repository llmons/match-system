import Sidebar from "./Sidebar.jsx";
import {Box, Grid2 as Grid, Stack} from "@mui/material";
import ProjCard from "../../../components/ProjCard.jsx";
import {useEffect, useState} from "react";

const FindProj = () => {
    const [projList, setProjList] = useState([])

    const apiArr = [
        'http://127.0.0.1:4523/m1/5504325-5180481-default/IEProj/findByStatus',
        'http://127.0.0.1:4523/m1/5504325-5180481-default/CompetitionProj/findByStatus',
        'http://127.0.0.1:4523/m1/5504325-5180481-default/GraduationProj/findByStatus']

    useEffect(() => {
        apiArr.forEach((api) => {
            fetch(api)
                .then(res => res.json())
                .then(json => {
                    setProjList((prevProjList) => [...prevProjList, ...json.data]);
                })
                .catch(e => console.log(e));
        })
    }, [])

    return (
        <Stack direction="row" spacing={2} sx={{margin: '10%'}}>
            <Sidebar/>
            <Box flex={4}>
                <Grid container spacing={2}>
                    {projList.map((item, idx) => (
                        <Grid size={4} key={idx}>
                            <ProjCard
                                key={idx} name={item.name} count={item.count} sum={item.sum} meg={item.message}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>

        </Stack>
    )
}

export default FindProj;