import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    // border: "1px solid red",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    boxSizing: "border-box"
  },
  outline: {
    // border: "1px solid blue",
    width: "50%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    height: "50vh"
  },
  shopBorder: {
    borderRight: "1px solid black"
  },
  shopIcon: {
    // border: "1px solid black",
    display: "flex",
    justifyContent: "space-between",
    width: "70%",
    alignSelf: "center",
    alignItems: "center"
  },
  shopIconName: {
    marginLeft: "10px"
  },
  shopIconButtonSell: {
    height: "30px",
    backgroundColor: "#ED2D2D",
    color: "#fff"
  },
  shopIconButtonBuy: {
    height: "30px",
    backgroundColor: "#2CE53D",
    color: "#fff"
  }
});

function ShopModal() {
  const classes = useStyles();
  // Set up state to hold items or get passed down

  const sellItem = () => {

  }

  const buyItem = () => {

  }

  return (
    <div className={classes.root}>
      <div className={`${classes.outline} ${classes.shopBorder}`}>
        <h2>Buy Item</h2>
        <div className={classes.shopIcon}>
          <p className={classes.shopIconName}>Sword</p>
          <Button variant="contained" size="small" className={classes.shopIconButtonBuy}>
            Buy
          </Button>
        </div>
        <div className={classes.shopIcon}>
          <p className={classes.shopIconName}>Potions</p>
          <Button variant="contained" size="small" className={classes.shopIconButtonBuy}>
            Buy
          </Button>
        </div>
        <div className={classes.shopIcon}>
          <p className={classes.shopIconName}>Shield</p>
          <Button variant="contained" size="small" className={classes.shopIconButtonBuy}>
            Buy
          </Button>
        </div>
      </div>
      {/* Could set up right click menu then sell */}
      <div className={classes.outline}>
        <h2>Sell Item</h2>
        <div className={classes.shopIcon}>
          <p className={classes.shopIconName}>Item 1</p>
          <Button variant="contained" size="small" className={classes.shopIconButtonSell}>
            Sell
          </Button>
        </div>
        <div className={classes.shopIcon}>
          <p className={classes.shopIconName}>Item 2</p>
          <Button variant="contained" size="small" className={classes.shopIconButtonSell}>
            Sell
          </Button>
        </div>
        <div className={classes.shopIcon}>
          <p className={classes.shopIconName}>Item 3</p>
          <Button variant="contained" size="small" className={classes.shopIconButtonSell}>
            Sell
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ShopModal;
