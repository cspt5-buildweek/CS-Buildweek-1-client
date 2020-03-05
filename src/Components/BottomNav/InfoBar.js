import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import Button from "@material-ui/core/Button";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import Grid from "@material-ui/core/Grid";

import ShopModal from "./Modals/ShopModal";
import PickUpModal from "./Modals/PickUpModal";
import DropModal from "./Modals/DropModal";

let iconStyle = {
  fontSize: "60px"
};

const useStyles = makeStyles(theme => ({
  root: {
    boxSizing: "border-box",
    // width: 500,
    // position: "absolute",
    bottom: "0px",
    // border: "1px solid red",
    height: "300px",
    width: "100%",
    backgroundColor: "#2196f3"
  },
  bottomNavInfo: {
    // border: "1px solid black",
    marginRight: "50px",
    width: "200px"
  },
  bottomNavInfoTitle: {
    textDecoration: "underline",
    color: "#fff"
  },
  directions: {
    // border: "1px solid red",
    // marginLeft: "50px",
    marginTop: "25px",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icons: {
    // border: "1px solid red",
    cursor: "pointer"
  },
  middleIcons: {
    // border: "1px solid black",
    margin: "0 25px"
  },
  infoButtonsContainer: {
    marginTop: "25px"
  },
  infoButtons: {
    margin: "0 5px"
  },
  buttons: {
    // border: "1px solid red"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    width: "50%",
    height: "50vh"
  }
}));

export default function InfoBar({ movePlayer }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState("shop");

  let modalState;

  if (modal === "shop") {
    modalState = <ShopModal />;
  } else if (modal === "pick") {
    modalState = <PickUpModal />;
  } else if (modal === "drop") {
    modalState = <DropModal />;
  }

  const handleOpen = name => {
    setModal(name);
    console.log(name);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Movement
  // const move = (e, direction) => {
  //   // Must be filled in
  // };

  // Buttons
  // const dropItem = () => {};
  // const pickUpItem = () => {};
  // const sellItem = () => {};

  return (
    <BottomNavigation className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <div className={classes.bottomNavInfo}>
            <h2 className={classes.bottomNavInfoTitle}>Inventory</h2>
            {/* Loops through items here */}
            {/* Maybe make a limit on how many displayed and button to show whole inventory */}
            <p>Item 1</p>
            <p>Item 2</p>
            <p>Item 3</p>
          </div>
          <div className={classes.bottomNavInfo}>
            <h2 className={classes.bottomNavInfoTitle}>Items in Room</h2>
            {/* Loop through items here */}
            <p>Sword</p>
            <p>Health Potion</p>
          </div>
          <div className={classes.bottomNavInfo}>
            <h2 className={classes.bottomNavInfoTitle}>Players in Room</h2>
            {/* Loops through players in current room here */}
            <p>Tom</p>
            <p>Annie</p>
            <p>Tonny</p>
          </div>
          <div className={classes.buttons}>
            <div className={classes.infoButtonsContainer}>
              <Button
                variant="contained"
                onClick={() => handleOpen("shop")}
                className={classes.infoButtons}
              >
                Shop
              </Button>
              <Button
                variant="contained"
                onClick={() => handleOpen("pick")}
                className={classes.infoButtons}
              >
                Pick up Item
              </Button>
              <Button
                variant="contained"
                onClick={() => handleOpen("drop")}
                className={classes.infoButtons}
              >
                Drop Item
              </Button>
            </div>
            <div className={classes.directions}>
              <ArrowUpwardIcon
                fontSize="large"
                className={classes.icons}
                style={iconStyle}
                onClick={movePlayer('n')}
              />
              <div>
                <ArrowBackIcon
                  fontSize="large"
                  className={`${classes.middleIcons} ${classes.icons}`}
                  style={iconStyle}
                  onClick={movePlayer('w')}
                />
                <ArrowForwardIcon
                  fontSize="large"
                  className={`${classes.middleIcons} ${classes.icons}`}
                  style={iconStyle}
                  onClick={movePlayer('e')}
                />
              </div>
              <ArrowDownwardIcon
                fontSize="large"
                className={classes.icons}
                style={iconStyle}
                onClick={movePlayer('s')}
              />
            </div>
          </div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>{modalState}</div>
            </Fade>
          </Modal>
        </Grid>
      </Grid>
    </BottomNavigation>
  );
}

// import { makeStyles } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import Button from "@material-ui/core/Button";

// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// // import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles({
// });

// export default function TemporaryDrawer() {
//   //   const classes = useStyles();  Uncomment to use custom styles

//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     bottom: false
//   });

//   const toggleDrawer = (side, open) => event => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setState({ ...state, [side]: open });
//   };

//   return (
//     <div>
//       <Button onClick={toggleDrawer("bottom", true)}>Open Bottom</Button>
//       <Drawer
//         anchor="bottom"
//         open={state.bottom}
//         onClose={toggleDrawer("bottom", false)}
//       >
//           <div className="inventory">
//               <h2>Inventory</h2>
//               <p>Silver Sword</p>
//               <p>Potions</p>
//           </div>
//       </Drawer>
//     </div>
//   );
// }

// import React from "react";

// function InfoBar() {
//   return (
//     <div>
//       <h1>InfoBar</h1>
//     </div>
//   );
// }

// export default InfoBar;
