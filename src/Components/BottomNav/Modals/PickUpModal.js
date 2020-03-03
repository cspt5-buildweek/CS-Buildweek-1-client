import React from "react";

<<<<<<< HEAD
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    boxSizing: "border-box",
    // border: "1px solid red",
    height: "50vh",
    textAlign: "center"
  },
  itemContainer: {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
  },
  roomItemsPickUp: {
      textTransform: "capitalize"
  }
});

let items = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item8",
];

function PickUpModal() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Choose an Item to Pick Up</h1>
      <div className={classes.itemContainer}>
        {items.map((value, index) => {
          return (
            <Button
              variant="contained"
              size="medium"
              className={classes.roomItemsPickUp}
              key={index}
            >
              {value}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default PickUpModal;
