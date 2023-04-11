import React from "react";
import "./popup.scss";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function Popup(props) {
    return (props.trigger) ? ( 
        <div className="popup">
            <div className="popupInner">
                <button className="closeButton" onClick={() => props.setTrigger(false)}><CloseOutlinedIcon /></button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default Popup;