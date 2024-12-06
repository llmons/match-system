import {alpha, Container, useTheme} from "@mui/material";
import Navigator from "../../components/Navigator.jsx";
import {Outlet} from "react-router-dom";

const Student = () => {
    const theme = useTheme()

    return (
        <Container sx={{
            pt: 10,
            pb: 10,
            background: `linear-gradient(
                 to right,white 0%,
                 ${alpha(theme.palette.info.light, 0.1)} 30%,
                 ${alpha(theme.palette.info.light, 0.1)} 70%,
                 white 100%)`,
        }}>
            <Navigator avatarAlpha="S" findProjPath="/student/projPlaza" myProjPath="/student/myProj"/>
            <Outlet/>
        </Container>
    );
};

export default Student;