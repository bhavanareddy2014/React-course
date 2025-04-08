import { LOGO_URL } from "../utils/constants";
const Header = () => {
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
            </ul>
        </div>
    )
}

export default Header;