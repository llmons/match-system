import {Box, Checkbox, FormControl, FormControlLabel, FormLabel, Input, Stack} from "@mui/material";
import React from "react";

const Search = () => {
    return (
        <Box>
            <Input placeholder="搜索..."/>
        </Box>
    )
}

const Sidebar = () => {
    return (
        <Box flex={1}>
            <Stack direction="column" spacing={3}>
                <Search/>
                <FormControl>
                    <FormLabel>类别</FormLabel>
                    <FormControlLabel value='ie' control={<Checkbox defaultChecked/>} label='大创'/>
                    <FormControlLabel value='competition' control={<Checkbox defaultChecked/>} label='竞赛'/>
                    <FormControlLabel value='graduation' control={<Checkbox defaultChecked/>} label='毕设'/>
                </FormControl>
            </Stack>
        </Box>
    )
}

export default Sidebar