import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const Login = () => {

    const { hola } = useContext(UserContext);
    return (
        <div>
            <h1>Login</h1>
            <p>{hola}</p>
        </div>
    )
}
