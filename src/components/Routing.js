import { Routes, Route } from "react-router-dom";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Chat from "./Pages/Chat"

const Routing = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/chat' element={<Chat />} />
        </Routes>
    )
}
export default Routing;