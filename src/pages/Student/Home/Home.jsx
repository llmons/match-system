import {alpha, Box, Input, Stack, Typography, useTheme} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <Box width="50%" height="10%" backgroundColor="white" borderRadius="10px" display="flex"
             justifyContent="center" alignItems="center" pl={2} pr={2}>
            <SearchIcon/>
            <Input placeholder="搜索..." disableUnderline fullWidth sx={{margin: '10px'}}/>
        </Box>
    )
}

const Home = () => {
    const theme = useTheme()

    return (
        <Box>
            <Box height="70vh" display="flex" justifyContent="center"
                 alignItems="center"
                 sx={{
                     background: `linear-gradient(
                 to right,white 0%,
                 ${alpha(theme.palette.info.light, 0.1)} 30%,
                 ${alpha(theme.palette.info.light, 0.1)} 70%,
                 white 100%)`
                 }}>
                <Stack direction="column" justifyContent="center" alignItems="center" spacing={5} width="100%"
                       height="100%">
                    <Typography variant="h2" color="textSecondary">寻找合适的项目</Typography>
                    <Search/>
                </Stack>
            </Box>
        </Box>
    )
}

export default Home