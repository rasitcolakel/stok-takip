import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "../components/Table";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import { v4 as uuidv4 } from "uuid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { IconButton } from "@material-ui/core";
import products from "../db/products";
import Autocomplete from "@material-ui/lab/Autocomplete";
import categories from "../db/categories";
import stores from "../db/stores";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(1.5),
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  },
  card: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Products() {
  const classes = useStyles();
  const columns = [
    { text: "Ürün Adı", value: "name" },
    { text: "Açıklama", value: "description" },
    { text: "Kategori", value: "category" },
    { text: "Depo", value: "store" },
    { text: "Adet", value: "count" },
    {
      text: "İşlemler",
      value: "actions",
    },
  ];

  const [datas, setDatas] = useState(products);

  let deleteItem = (id) => {
    let temp = datas.filter((data) => data.id !== id);
    setDatas(temp);
  };

  const handleChange = (e) => {
    setEditing({
      ...editing,
      [e.target.name]: e.target.value,
    });
  };
  const [open, setOpen] = React.useState(false);
  let params = {
    name: "",
    description: "",
    store: "",
    category: "",
    count: "",
  };
  const [editing, setEditing] = React.useState(params);
  const openModal = (id) => {
    let temp = datas.filter((data) => data.id === id);
    setEditing(temp[0]);
    setOpen(true);
  };

  const closeModal = () => {
    setEditing(params);
    setOpen(false);
  };
  let editItem = (id) => {
    let temp = datas.map((data) => (data.id === id ? editing : data));
    setDatas(temp);
    setEditing(params);
    setOpen(false);
  };

  let newItem = () => {
    let temp = datas;
    temp.push({ ...editing, id: uuidv4() });
    setEditing(params);
    setOpen(false);
  };

  const [catValues, SetCatValues] = React.useState(categories);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Box display="flex" style={{ width: "100%" }} alignItems="center">
          <Box p={1} flexGrow={1}>
            <Typography variant="h6" gutterBottom>
              Ürünler
            </Typography>
          </Box>
          <Box p={1}>
            <IconButton onClick={() => setOpen(true)} color="primary">
              <AddBoxIcon fontSize={"large"} />
            </IconButton>
          </Box>
        </Box>

        <Table
          columns={columns}
          datas={datas}
          deleteItem={deleteItem}
          openModal={openModal}
        />
        {editing && (
          <Dialog
            open={open}
            onClose={closeModal}
            aria-labelledby="form-dialog-title"
            TransitionComponent={Transition}
            classes={classes.modal}
            fullWidth
          >
            <DialogTitle id="form-dialog-title">
              Ürünler {editing.id ? "Düzenle" : "Ekle"}
            </DialogTitle>
            <DialogContent>
              <form autoComplete="off">
                {Object.keys(editing).map((key) => (
                  <>
                    {key !== "id" &&
                      (key === "category" ? (
                        <Autocomplete
                          id="kategori-box-demo"
                          options={categories}
                          value={
                            categories.find((s) => s.id === editing[key]) || ""
                          }
                          getOptionLabel={(option) => option.name}
                          noOptionsText={
                            <Button
                              style={{ width: "100%" }}
                              onMouseDown={() => alert("123")}
                              color="primary"
                            >
                              <AddBoxIcon
                                fontSize={"large"}
                                style={{ margin: "0 10px" }}
                              />
                              Yeni Ekle
                            </Button>
                          }
                          onChange={(event, value) =>
                            setEditing({
                              ...editing,
                              category: value.id,
                            })
                          }
                          renderInput={(params) => (
                            <TextField {...params} label="Kategori" />
                          )}
                        />
                      ) : key === "store" ? (
                        <Autocomplete
                          id="store-box-demo"
                          options={stores}
                          getOptionLabel={(option) => option.name}
                          value={
                            stores.find((s) => s.id === editing[key]) || ""
                          }
                          noOptionsText={
                            <Button
                              style={{ width: "100%" }}
                              onMouseDown={() => alert("123")}
                              color="primary"
                            >
                              <AddBoxIcon
                                fontSize={"large"}
                                style={{ margin: "0 10px" }}
                              />
                              Yeni Ekle
                            </Button>
                          }
                          onChange={(event, value) =>
                            setEditing({
                              ...editing,
                              store: value.id,
                            })
                          }
                          renderInput={(params) => (
                            <TextField {...params} label="Store" />
                          )}
                        />
                      ) : key === "name" ? (
                        <Autocomplete
                          id="name-box-demo"
                          options={datas}
                          getOptionLabel={(option) => option.name}
                          value={
                            editing
                              ? editing
                              : datas.find((s) => s.id === editing[key])
                          }
                          noOptionsText={
                            editing ? (
                              <Button
                                style={{ width: "100%" }}
                                onMouseDown={() =>
                                  setEditing({ ...editing, id: uuidv4() })
                                }
                                color="primary"
                              >
                                Yeni Ekle
                              </Button>
                            ) : (
                              ""
                            )
                          }
                          renderInput={(params) => (
                            <TextField {...params} label="Ad" />
                          )}
                          onChange={(event, value) =>
                            setEditing({
                              ...value,
                            })
                          }
                          onInputChange={(event, newInputValue) => {
                            setEditing({
                              ...editing,
                              name: newInputValue,
                            });
                          }}
                        />
                      ) : (
                        <TextField
                          margin="dense"
                          id={key}
                          name={key}
                          label={columns.map((x) => {
                            if (x.value === key) return x.text;
                          })}
                          value={editing[key]}
                          onChange={handleChange}
                          fullWidth
                        />
                      ))}
                  </>
                ))}
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={closeModal} color="primary">
                Vazgeç
              </Button>
              <Button
                disabled={
                  Object.values(editing).some((x) => x === null || x === "")
                    ? true
                    : false
                }
                onClick={() => (editing.id ? editItem(editing.id) : newItem())}
                color="primary"
              >
                {editing.id ? "Düzenle" : "Ekle"}
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Grid>
    </div>
  );
}
