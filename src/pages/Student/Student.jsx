import {Outlet} from "react-router-dom";
import Footer from "../Common/Footer.jsx";
import {LoadingContext, LoadingProvider} from "../../components/LoadingProvider.jsx";
import FullScreenLoader from "../../components/FullScreenLoader.jsx";
import {useContext} from "react";
import TopBar from "./TopBar.jsx";


const Student = () => {
    return (
        <LoadingProvider>
            <StudentContent/>
        </LoadingProvider>
    );
};

const StudentContent = () => {
    const {isLoading} = useContext(LoadingContext);

    return isLoading ? (
        <FullScreenLoader/>
    ) : (
        <>
            <TopBar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Student;