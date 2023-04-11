import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import WebStoriesOutlinedIcon from '@mui/icons-material/WebStoriesOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';

const Sidebar = () => {

    const { dispatch } = useContext(DarkModeContext)

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none"}}>
                    <span className="logo">Admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                <Link to="/" style={{ textDecoration: "none"}}>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                </Link>
                    <p className="title">LISTS</p>

                <Link to="/users" style={{ textDecoration: "none"}}>
                    <li>
                        <GroupOutlinedIcon className="icon"/>
                        <span>Users</span>
                    </li>
                </ Link>
                <Link to="/products" style={{ textDecoration: "none"}}>
                    <li>
                        <ShoppingBagOutlinedIcon className="icon"/>
                        <span>Products</span>
                    </li>
                </ Link>    
                    <li>
                        <ShoppingCartOutlinedIcon className="icon"/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className="icon"/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <Link to="/posts" style={{ textDecoration: "none"}}>
                        <li>
                            <LocalPostOfficeOutlinedIcon className="icon"/>
                            <span>Posts</span>
                        </li>
                    </ Link>
                    <li>
                        <InsertChartOutlinedOutlinedIcon className="icon"/>
                        <span>Stats</span>
                    </li>
                    <Link to="/todolist" style={{ textDecoration: "none"}}>
                        <li>
                            <NotificationsActiveOutlinedIcon className="icon"/>
                            <span>To-Do-List</span>
                        </li>
                    </Link>
                    <p className="title">SERVICE</p>
                    <li>
                        <MedicalInformationOutlinedIcon className="icon"/>
                        <span>System health</span>
                    </li>
                    <li>
                        <WebStoriesOutlinedIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>    
                    <li>
                        <PersonOutlineOutlinedIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <PowerSettingsNewOutlinedIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>
            </div>
        </div>
    )
}

export default Sidebar;