import { DataGrid } from "@mui/x-data-grid";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./posts.scss";
import React, { useState } from 'react';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Button } from "@mui/material";
import Popup from "../../components/popup/popup";

const empList = [
    { id: 1, title: "Neeraj", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque bibendum augue. Quisque commodo lectus sapien, ac scelerisque nulla tristique sed. Sed semper enim id rutrum tempus. Integer varius risus sed nulla tincidunt ullamcorper. Suspendisse pharetra odio orci, at rhoncus quam facilisis a. Vivamus a nibh semper, eleifend ligula in, luctus metus. Curabitur ornare felis ante, a egestas nunc lacinia et.", delete: <DeleteForeverOutlinedIcon /> },
    { id: 2, title: "Raj", text: "Lorem ipsum" },
    { id: 3, title: "David", text: "I got burgers on my mind" },
    { id: 4, title: "Vikas", text: "Something is not right here" },
]

const Posts = () => {

    const handleDelete = (e, row) => {
        setTableData(tableData.filter((user) => user.id !== row.id))
    }

    const handleView = (e, row) => {
        <Popup trigger={true}>
            {row.title}
            {row.text}
        </Popup>
    }

    const [tableData, setTableData] = useState(empList)
     const columns = [
        { title: "ID", field: "id", headerName: "ID" },
        { field: "title", headerName: "Name" },
        { field: "text", headerName: "Contents", width: 900},
        { field: 'view', headerName: 'Expand', width: 100, renderCell: (params) => {
            return (
            <Button
                onClick={(e) => handleView(e, params.row)}
                variant="contained">View</Button>
            );}
        },
        { field: 'delete', headerName: "Remove", width: 100, renderCell: (params) => {
            return (
            <Button
                onClick={(e) => handleDelete(e, params.row)}
                variant="contained">Delete</Button>
            );
          }},
    ];

    return(
        <div className="posts">
            <Sidebar />
            <div className="postsContainer">
                <Navbar />
                <div className="datatable">
                    <DataGrid className='datagrid'
                        rows={tableData}
                        columns={columns}
                        pageSize={9}
                        rowsPerPageOptions={[9]}
                        disableRowSelectionOnClick='true'
                    />
                </div>
            </div>
        </div>
    )
}

export default Posts;
