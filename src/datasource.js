export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: "user", headerName:"User", width: 230, renderCell: (params)=>{
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field: "email", headerName:"Email", width: 230
    },
    {
        field: "age", headerName:"Age", width: 100
    },
    {
        field: "status", headerName:"Status", width: 230, 
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
]

export const userRows = [
    {   
        id: 1, 
        username: 'Snow',
        img: 'https://cdn.discordapp.com/avatars/289082640844193794/3a46bb1284e28c835b7dd655d7cfe489.png?size=4096',
        status: 'active', 
        email: "somesnow@gmail.com",
        age: 35,
    },
    {   
        id: 2, 
        username: 'One',
        img: 'https://cdn.discordapp.com/avatars/289082640844193794/3a46bb1284e28c835b7dd655d7cfe489.png?size=4096',
        status: 'active', 
        email: "someone@gmail.com",
        age: 19,
    },
    {   
        id: 3, 
        username: 'Ein',
        img: 'https://cdn.discordapp.com/avatars/289082640844193794/3a46bb1284e28c835b7dd655d7cfe489.png?size=4096',
        status: 'active', 
        email: "someein@gmail.com",
        age: 29,
    },
    {   
        id: 4, 
        username: 'Zwei',
        img: 'https://cdn.discordapp.com/avatars/289082640844193794/3a46bb1284e28c835b7dd655d7cfe489.png?size=4096',
        status: 'active', 
        email: "somezwei@gmail.com",
        age: 23,
    },
    {   
        id: 5, 
        username: 'Trei',
        img: 'https://cdn.discordapp.com/avatars/289082640844193794/3a46bb1284e28c835b7dd655d7cfe489.png?size=4096',
        status: 'active', 
        email: "sometrei@gmail.com",
        age: 21,
    },
    {   
        id: 6, 
        username: 'Quatro',
        img: 'https://cdn.discordapp.com/avatars/289082640844193794/3a46bb1284e28c835b7dd655d7cfe489.png?size=4096',
        status: 'active', 
        email: "somequatro@gmail.com",
        age: 85,
    },
    {   
        id: 7, 
        username: 'Cinque',
        img: 'https://cdn.discordapp.com/avatars/289082640844193794/3a46bb1284e28c835b7dd655d7cfe489.png?size=4096',
        status: 'passive', 
        email: "somecinque@gmail.com",
        age: 72,
    },
    {   
        id: 8, 
        username: 'Sei',
        img: 'https://cdn.discordapp.com/avatars/289082640844193794/3a46bb1284e28c835b7dd655d7cfe489.png?size=4096',
        status: 'pending', 
        email: "somesei@gmail.com",
        age: 73,
    },
    {   
        id: 9, 
        username: 'Siete',
        img: 'https://cdn.discordapp.com/avatars/289082640844193794/3a46bb1284e28c835b7dd655d7cfe489.png?size=4096',
        status: 'passive', 
        email: "somesiete@gmail.com",
        age: 45,
    },
]