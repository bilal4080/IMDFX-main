import Homepage from "./Comp/Header/Homepage";
import Login from "./Comp/User Login-Reg/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Reg from "./Comp/User Login-Reg/Registeruser";
import Page404 from "./Comp/page404/Page404";
import OnlineDoc from "./Comp/OnlineDocAva/OnlineDoc";
import Book from "./Comp/Booking/Book";
import DoctorProfile from "./Comp/ProfileDR/DoctorProfile";

function App() {
    return (
        <div className="bg-gray-100">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Reg" element={<Reg />} />
                    <Route path="*" element={<Page404 />} />
                    <Route path="/Homepage" element={<Homepage />} />
                    <Route path="/OnlineDoc" element={<OnlineDoc />} />
                    <Route path="/Book" element={<Book />} />
                    <Route path="DoctorProfile" element={<DoctorProfile />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
