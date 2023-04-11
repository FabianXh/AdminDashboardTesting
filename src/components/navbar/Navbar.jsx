import "./navbar.scss";
import LanguageIcon from '@mui/icons-material/Language';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {

    const { dispatch } = useContext(DarkModeContext)

    return (
        <div className="navBar">
            <div className="wrapper">
                <div className="items">
                    <div className="item">
                        <LanguageIcon className="icon"/>
                        English
                    </div>
                    <div className="item" >
                        <NightlightOutlinedIcon className="icon" onClick={() => dispatch({type:"TOGGLE"})}/>
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <NotificationsActiveOutlinedIcon className="icon"/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <MessageOutlinedIcon className="icon"/>
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <FormatListBulletedOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <img src="https://cdn.discordapp.com/avatars/289082640844193794/3a46bb1284e28c835b7dd655d7cfe489.png?size=4096" alt="" className="avatar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;