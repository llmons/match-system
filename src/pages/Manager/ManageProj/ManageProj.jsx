import {Box, Grid2 as Grid, Stack} from "@mui/material";
import {useEffect, useState} from "react";
import ProjCard from "../../../components/ProjCard.jsx";
import Filter from "./Filter.jsx";

const ManageProj = () => {
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
        <Box flex={5} p={20}>
            <Stack direction="column" spacing={2}>
                <Filter/>
                <Grid container spacing={2}>
                    {projList.map((item, idx) => (
                        <Grid size={3} key={idx}>
                            <ProjCard
                                key={idx} name={item.name} count={item.count} sum={item.sum} meg={item.message}/>
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </Box>
    )
}

export default ManageProj;