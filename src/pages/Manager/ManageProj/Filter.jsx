import {Box, Input, MenuItem, Select, Stack} from "@mui/material";
import {useState} from "react";

const Search = () => {
    const [category, setCategory] = useState("IE");
    const [way, setWay] = useState("byName");

    return (
        <Box width="100%" borderRadius="10px" p={3}>
            <Stack direction="row" spacing={2}>
                <Select variant='outlined' value={category} onChange={(e) => setCategory(e.target.value)}>
                    <MenuItem value="IE">大创</MenuItem>
                    <MenuItem value="Competition">竞赛</MenuItem>
                    <MenuItem value="Graduation">毕设</MenuItem>
                </Select>
                <Select variant='outlined' value={way} onChange={(e) => setWay(e.target.value)}>
                    <MenuItem value="byName">按名字</MenuItem>
                    <MenuItem value="byId">按id</MenuItem>
                </Select>
                <Input placeholder="搜索..." fullWidth></Input>
            </Stack>
        </Box>
    )
}

const Filter = () => {
    return (
        <Box width="100%">
            <Search/>
        </Box>
    )
}

export default Filter