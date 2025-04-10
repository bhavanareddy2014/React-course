import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
    const [btnname,setBtnName] = useState("LogIn");
    return (
        <div className='header'>
            <img src={LOGO_URL} width={200} height={200} />
            <ul className='nav-items'>
                <li>
                    Home
                </li>
                <li>
                    About us
                </li>
                <li>
                    Contact Us
                </li>
                <li className="login" onClick={() => {
                 btnname === "LogIn" ? setBtnName("Logout") : setBtnName("LogIn")
                }}>{btnname}</li>
            </ul>
        </div>
    )
}

export default Header;