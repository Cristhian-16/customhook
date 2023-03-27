import { Outlet } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { UserProvider } from "./context/userProvider"

export const MainApp = () => {


    return (
        <UserProvider>
            <NavBar />
            <hr />
            <Outlet />
        </UserProvider>
    )
}
