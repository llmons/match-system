import {Box, Grid2 as Grid, Input, MenuItem, Select, Stack} from "@mui/material";
import ProjCard from "../../../components/ProjCard.jsx";
import {useEffect, useState} from "react";

const apiArr = [
    'http://127.0.0.1:4523/m1/5504325-5180481-default/IEProj/findByStatus',
    'http://127.0.0.1:4523/m1/5504325-5180481-default/CompetitionProj/findByStatus',
    'http://127.0.0.1:4523/m1/5504325-5180481-default/GraduationProj/findByStatus']

const Search = () => {
    const [category, setCategory] = useState("IE");

    return (
        <Box width="100%" borderRadius="10px" p={3}>
            <Stack direction="row" spacing={2}>
                <Select variant='outlined' value={category} onChange={(e) => setCategory(e.target.value)}>
                    <MenuItem value="IE">大创项目</MenuItem>
                    <MenuItem value="Competition">竞赛项目</MenuItem>
                    <MenuItem value="Graduation">毕设项目</MenuItem>
                </Select>
                <Input placeholder="搜索..." fullWidth></Input>
            </Stack>
        </Box>
    )
}

const ProjBoard = () => {
    const [projList, setProjList] = useState([])

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
        <Stack direction="column" spacing={2}>
            <Search/>
            <Grid container spacing={2}>
                {projList.map((item, idx) => (
                    <Grid size={4} key={idx}>
                        <ProjCard
                            key={idx} name={item.name} count={item.count} sum={item.sum} meg={item.message}/>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    )
}

export default ProjBoard;