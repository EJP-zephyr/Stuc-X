import { Routes, Route } from "react-router-dom";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Chat from "./Pages/Chat";
import Camera from "./Pages/Camera";

const Routing = () => {
    return (
        <Routes>
            <Route path='/cam' element={<Camera />} />
            <Route exact path='/' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/chat' element={<Chat />} />
        </Routes>
    )
}
export default Routing;