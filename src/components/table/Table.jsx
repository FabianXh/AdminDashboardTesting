import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
        {
            id: 123154,
            product: "Product name",
            img: "https://cdn.discordapp.com/attachments/802940011737120809/1092441824850886746/IMG_1990.png",
            customer: "Elden John",
            date: "7 January",
            amount: 155,
            method: "Payment method",
            status: "Approved",
        },
        {
            id: 612623,
            product: "Product name",
            img: "https://cdn.discordapp.com/attachments/802940011737120809/1092441824850886746/IMG_1990.png",
            customer: "Elden John",
            date: "7 January",
            amount: 155,
            method: "Payment method",
            status: "Pending",
        },
        {
            id: 986211,
            product: "Product name",
            img: "https://cdn.discordapp.com/attachments/802940011737120809/1092441824850886746/IMG_1990.png",
            customer: "Elden John",
            date: "7 January",
            amount: 155,
            method: "Payment method",
            status: "Pending",
        },
        {
            id: 356133,
            product: "Product name",
            img: "https://cdn.discordapp.com/attachments/802940011737120809/1092441824850886746/IMG_1990.png",
            customer: "Elden John",
            date: "7 January",
            amount: 155,
            method: "Payment method",
            status: "Approved",
        },
    ]

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell className="tableCell">Tacking ID</TableCell>
                    <TableCell className="tableCell">Product</TableCell>
                    <TableCell className="tableCell">Customer</TableCell>
                    <TableCell className="tableCell">Date</TableCell>
                    <TableCell className="tableCell">Amount</TableCell>
                    <TableCell className="tableCell">Payment Method</TableCell>
                    <TableCell className="tableCell">Status</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.id} >
                        <TableCell className="tableCell" component="th" scope="row">{row.id}</TableCell>
                        <TableCell className="tableCell">
                            <div className="cellWrapper">
                                <img src={row.image} alt="" className="image" />    
                                {row.product}
                            </div>    
                        </TableCell>
                        <TableCell className="tableCell">{row.customer}</TableCell>
                        <TableCell className="tableCell">{row.date}</TableCell>
                        <TableCell className="tableCell">{row.amount}</TableCell>
                        <TableCell className="tableCell">{row.method}</TableCell>
                        <TableCell className="tableCell">
                            <span className={`status ${row.status}`}>{row.status}</span>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default List;