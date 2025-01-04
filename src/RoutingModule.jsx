import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { AgeVerification } from "./components/AgeVerification"
import { Login } from "./components/Login"

export const RoutingModule = ({})=>{

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/verify-age" element={<AgeVerification />}/>
                        <Route path="/login" element={<Login />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}