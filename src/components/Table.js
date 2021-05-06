import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import stores from "../db/stores";
import categories from "../db/categories";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  modal: {
    width: 500,
  },
});

export default function Tabke({ columns, datas, deleteItem, openModal }) {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell>{column.text}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map((data) => (
              <TableRow>
                {columns.map((column) => (
                  <TableCell component="th">
                    {column.value === "actions" ? (
                      <>
                        <IconButton onClick={() => openModal(data.id)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => deleteItem(data.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </>
                    ) : column.value === "store" ? (
                      stores.find((x) => x.id === data[column.value]).name
                    ) : column.value === "category" ? (
                      categories.find((x) => x.id === data[column.value]).name
                    ) : (
                      data[column.value]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
