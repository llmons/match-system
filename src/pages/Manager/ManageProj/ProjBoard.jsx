import {Box, Button, Grid2 as Grid, Input, MenuItem, Pagination, Select, Stack} from "@mui/material";
import ProjCard from "../../../components/ProjCard.jsx";
import {useEffect, useMemo, useState} from "react";
import {useNavigate} from "react-router";

const apiArr = [
    'http://127.0.0.1:4523/m1/5504325-5180481-default/IEProj/findByStatus',
    'http://127.0.0.1:4523/m1/5504325-5180481-default/CompetitionProj/findByStatus',
    'http://127.0.0.1:4523/m1/5504325-5180481-default/GraduationProj/findByStatus']

const Search = () => {
    const [category, setCategory] = useState("IE");
    const navigate = useNavigate();

    return (
        <Box width="100%" borderRadius="10px" p={3}>
            <Stack direction="row" spacing={2}>
                <Button onClick={() => {
                    navigate('/manager/ProjDetail')
                }}>
                    Debug
                </Button>
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
    const [page, setPage] = useState(1);
    const pageSize = 9

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Promise.all(
                    apiArr.map(api =>
                        fetch(api)
                            .then(res => res.json())
                            .then(json => json.data)
                    )
                )
                setProjList(data.flat())
            } catch (e) {
                console.log(e)
            }
        }

        fetchData().then(null);
    }, [])

    const paginatedProj = useMemo(() => projList.slice((page - 1) * pageSize, page * pageSize), [projList, page, pageSize]);

    return (
        <Stack direction="column" spacing={2}>
            <Search/>
            <Grid container spacing={2}>
                {paginatedProj.map((item, idx) => (
                    <Grid size={4} key={idx}>
                        <ProjCard
                            key={idx}
                            name={item.name}
                            count={item.count}
                            sum={item.sum}
                            meg={item.message}/>
                    </Grid>
                ))}
            </Grid>
            <Pagination
                page={page}
                count={Math.ceil(projList.length / pageSize)}
                onChange={(_, p) => {
                    setPage(p)
                }}
                color="primary"
                sx={{
                    position: "fixed",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bottom: "7%",
                    left: "45%"
                }}
            />
        </Stack>
    )
}

export default ProjBoard;