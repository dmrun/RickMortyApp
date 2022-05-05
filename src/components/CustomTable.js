import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

const theme = {
  spacing: [0, 2, 3, 5, 8],
};

export const CustomTable = ({ notes, handleDelete }) => {
  return (
    <TableContainer component={Paper} className="tableCss" sx={{ m: 2 }}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Details</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notes.map((note) => (
            <TableRow
              key={note.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {note.title}
              </TableCell>
              <TableCell align="right">{note.details}</TableCell>
              <TableCell align="right">{note.category}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => handleDelete(note.id)}>
                  <DeleteOutline />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
