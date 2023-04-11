
export const postColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'author', headerName: 'AUTHOR', width: 300},
    { field: 'title', headerName: 'TITLE', width: 300},
    { field: 'text', headerName: 'TEXT', width: 700},
]

export const postRows = [
    {
        id: 1,
        author: "Admin",
        title: "Lorem Ipsum text",
    },
    {
        id: 2,
        author: "Ben",
        title: "Who wants free dinner?"
    },
]

export const postsText = [
    {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis quam blandit, congue augue nec, suscipit tortor. In ornare fermentum tellus nec lacinia. Aenean mollis vehicula tempus. Aliquam venenatis non risus et bibendum. Pellentesque tortor mi, tincidunt vel mauris vel, fringilla molestie nisi. Nunc sit amet gravida augue, sit amet aliquam mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras nunc velit, tincidunt id turpis eu, fermentum vulputate nisi. Ut leo lacus, scelerisque at nibh nec, venenatis dictum sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere, augue in laoreet ullamcorper, nibh libero pellentesque magna, in tristique massa enim id enim. Duis fermentum elit eu augue lobortis condimentum. Integer odio lacus, dignissim vitae magna vitae, varius molestie leo. Vivamus posuere ultrices leo sed fringilla. Nulla porta eleifend elit non posuere. Vivamus id dignissim nisl. Mauris sapien sapien, fermentum at varius nec, consequat vitae metus. Phasellus ultrices sit amet magna ac commodo. Nam at urna nec lectus dictum placerat at et est. Proin nunc dolor, iaculis eu scelerisque quis, sollicitudin dictum ligula. Curabitur bibendum lorem dolor. Morbi mollis aliquet nisl, ac elementum ante pretium sed. In eu nulla sit amet lorem malesuada pellentesque. Nulla ac magna iaculis, consequat dui ac, euismod quam. Cras scelerisque rhoncus est, id porttitor eros scelerisque vitae. Etiam sed massa ornare, malesuada ante id, egestas nisi. Duis vitae elit et ipsum cursus ultricies. Sed in nulla ut ex accumsan mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sed diam vel arcu lacinia placerat. Donec tincidunt porttitor nisi, nec placerat ipsum pulvinar eu. Aliquam erat volutpat. Aliquam aliquet massa at magna placerat ornare. Integer eget facilisis nunc, commodo fringilla ligula. Etiam hendrerit fermentum lorem at tincidunt. Ut tristique risus ac laoreet feugiat. Vestibulum congue dui nec purus ultrices efficitur. Praesent at vestibulum justo.",
    },
    { 
        id: 2,
        text: "This is the extended text attached to the post, so that it shows more text when you click on it."
    }
]



/* import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat) {
    return { name, calories, fat};
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Eclair', 262, 16.0),
    createData('Cupcake', 305, 3.7),
    createData('Gingerbread', 356, 16.0),
  ];

<TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Author</TableCell>
                <TableCell align="right">Title</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row) => (
                <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
</TableContainer> */