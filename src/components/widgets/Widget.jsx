import "./widget.scss"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Widget = ({ type }) => {
    let data;   

    //temp amnt
    const amountM = 100;
    const perc = 50;

    switch(type) {
        case "user":
            data={
                title : "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <PersonOutlineOutlinedIcon className="icon" style={{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0, 0, 0.2)",
                    }}/>
                )
            };
            break;
        case "order":
            data={
                title : "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: (
                    <PersonOutlineOutlinedIcon className="icon" style={{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0, 0, 0.2)",
                    }}/>
                )
            };
            break;
        case "earnings":
            data={
                title : "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: (
                    <PersonOutlineOutlinedIcon className="icon" style={{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0, 0, 0.2)",
                    }}/>
                )
            };
            break;
        case "balance":
            data={
                title : "BALANCE",
                isMoney: true,
                link: "See details",
                icon: (
                    <PersonOutlineOutlinedIcon className="icon" style={{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0, 0, 0.2)",
                    }}/>
                )
            };
            break;
            default:
                break;
    }



    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amountM}</span>
                <span className="link">{data.link} </span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ArrowDropUpIcon />
                    {perc} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget;