import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "./components/appContext/appContext";
import Conta from "./pages/conta";
import ContaInfo from "./pages/contaInfo";
import Home from "./pages/home";

const MainRoutes = () => {
    const {isLoggedIn} = useContext(AppContext)

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={isLoggedIn ? <Conta /> : <Home/>} />
            <Route path='/info' element={<ContaInfo />} />
        </Routes>
    )
}

export default MainRoutes;