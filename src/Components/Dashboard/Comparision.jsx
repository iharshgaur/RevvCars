import React from "react";
import styles from "./Comparision.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
const useStyles = makeStyles({
  table: {
    width: "80%",
    margin: "2% auto",
  },
  Column: {
    width: "20%",
    backgroundColor: "#F8FFFF",
    boxShadow: "10px 10px 10px lightgrey, -10px 15px 10px lightgrey",
    borderTop: 0,
    borderBottom: "1px solid #dddddd",
    textAlign: "center",
  },
  ColumnSecond: {
    width: "20%",

    textAlign: "center",
  },
  Content: {
    fontSize: "18px",
  },
});

function Comparision() {
  const classes = useStyles();
  return (
    <div className={styles.Comparision}>
      <h3 style={{ color: "#888993" }}>
        Compare <b style={{ color: "black" }}> subscription vs buying</b>
      </h3>
      <TableContainer className={classes.table}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "40%" }}></TableCell>
              <TableCell className={classes.Column} align="right">
                <h6>
                  <b>Subscribe</b>
                </h6>
              </TableCell>
              <TableCell className={classes.ColumnSecond} align="right">
                <h6>
                  <b>Buy</b>
                </h6>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={1}>
              <TableCell className={classes.Content} component="th" scope="row">
                Zero down payment & roadtax
              </TableCell>
              <TableCell className={classes.Column}>
                <DoneIcon style={{ color: "#22CA7D" }} />
              </TableCell>
              <TableCell className={classes.ColumnSecond}>
                <CloseIcon style={{ color: "#F15A5A" }} />
              </TableCell>
            </TableRow>
            <TableRow key={2}>
              <TableCell className={classes.Content} component="th" scope="row">
                Annual insurance included
              </TableCell>
              <TableCell className={classes.Column}>
                <DoneIcon style={{ color: "#22CA7D" }} />
              </TableCell>
              <TableCell className={classes.ColumnSecond}>
                <CloseIcon style={{ color: "#F15A5A" }} />
              </TableCell>
            </TableRow>
            <TableRow key={3}>
              <TableCell className={classes.Content} component="th" scope="row">
                Free service & maintenance
              </TableCell>
              <TableCell className={classes.Column}>
                <DoneIcon style={{ color: "#22CA7D" }} />
              </TableCell>
              <TableCell className={classes.ColumnSecond}>
                <CloseIcon style={{ color: "#F15A5A" }} />
              </TableCell>
            </TableRow>
            <TableRow key={4}>
              <TableCell className={classes.Content} component="th" scope="row">
                Return or extend anytime
              </TableCell>
              <TableCell className={classes.Column}>
                <DoneIcon style={{ color: "#22CA7D" }} />
              </TableCell>
              <TableCell className={classes.ColumnSecond}>
                <CloseIcon style={{ color: "#F15A5A" }} />
              </TableCell>
            </TableRow>
            <TableRow key={5}>
              <TableCell className={classes.Content} component="th" scope="row">
                Option to buy-out the car
              </TableCell>
              <TableCell className={classes.Column}>
                <DoneIcon style={{ color: "#22CA7D" }} />
              </TableCell>
              <TableCell className={classes.ColumnSecond}>
                <h6 style={{ color: "#F15A5A" }}>
                  <b>NA</b>
                </h6>
              </TableCell>
            </TableRow>
            <TableRow key={6}>
              <TableCell className={classes.Content} component="th" scope="row">
                No long term commitment
              </TableCell>
              <TableCell className={classes.Column}>
                <DoneIcon style={{ color: "#22CA7D" }} />
              </TableCell>
              <TableCell className={classes.ColumnSecond}>
                <CloseIcon style={{ color: "#F15A5A" }} />
              </TableCell>
            </TableRow>
            <TableRow key={7}>
              <TableCell className={classes.Content} component="th" scope="row">
                Doorstep pick/drop for maintenance & service
              </TableCell>
              <TableCell className={classes.Column}>
                <DoneIcon style={{ color: "#22CA7D" }} />
              </TableCell>
              <TableCell className={classes.ColumnSecond}>
                <CloseIcon style={{ color: "#F15A5A" }} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Comparision;
