import {useState} from 'react';
import {Box, Button, InputBase, Stack, styled, useTheme} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router";

// 自定义样式的容器，控制边框和布局
const SearchContainer = styled(Box)(({theme, focused}) => ({
    display: 'flex',
    alignItems: 'center',
    borderRadius: 12,
    border: `2px solid ${focused ? theme.palette.primary.light : '#ccc'}`,
    padding: '4px 8px',
    transition: 'border-color 0.3s ease',
    boxShadow: 'inset 1px 1px 2px #bebebe, inset -1px -1px 2px #ffffff',
    backgroundColor: '#fff',
}));

const SearchBar = () => {
    const navigate = useNavigate()
    const [focused, setFocused] = useState(false);
    const theme = useTheme(); // 访问 MUI 主题颜色

    return (
        <Stack direction="row" spacing={2} sx={{pt: 2}} width="500px" height="60px">
            <SearchContainer focused={focused ? 1 : 0} width="100%">
                <SearchIcon sx={{color: focused ? theme.palette.primary.light : '#aaa'}}/>
                <InputBase
                    fullWidth
                    placeholder="搜索项目..."
                    sx={{ml: 1, flex: 1}}
                    onFocus={() => setFocused(true)}  // 聚焦事件
                    onBlur={() => setFocused(false)} // 失焦事件
                />
            </SearchContainer>
            <Button
                variant="contained"
                sx={{
                    width: '25%',
                    borderRadius: 3,
                }}
                onClick={() => {
                    navigate('projPlaza')
                }}>搜索项目</Button>
        </Stack>
    );
};

export default SearchBar;
