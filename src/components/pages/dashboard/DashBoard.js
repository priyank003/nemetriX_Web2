import React, { useEffect } from "react";
import classes from "./DashBoard.module.css";
import DashBoardNav from "./DashBoardNav";

import DashBoardCalendar from "./DashBoardCalendar";
import rocketicon from "../../../assets/logos/rocket.svg";
import interview from "../../../assets/logos/interview.svg";

import DashBoardPages from "./DashBoardPages";

import DashboardHeader from "./DashboardHeader";
import Drawer from "@mui/material/Drawer";
import useWindowDimensions from "../../../hooks/use-windowSize";
import { styled, useTheme } from '@mui/material/styles';

const drawerWidth = 340;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);



const DashBoard = () => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width < 1200) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [width]);
  return (
    <div className={classes.dashboard}>
      <div className={classes["dashboard-container"]}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant={width>1200 ? "persistent":""}
          anchor="left"
          open={open}
          onClose={handleDrawerClose}
        >
          <DashBoardNav
            onDrawerOpen={handleDrawerOpen}
            onDrawerClose={handleDrawerClose}
            open={open}
          />
        </Drawer>
          {/* <Main open={open}> */}
        <div className={classes["dashboard-main"]}>
          <DashboardHeader
            onDrawerOpen={handleDrawerOpen}
            onDrawerClose={handleDrawerClose}
            open={open}
          />
          <div className={classes["dashboard-main-container"]}>
            <div className={classes["main-left"]}>
              <DashBoardPages />
            </div>
            <div className={classes["main-right"]}>
              <DashBoardCalendar />

              {/* <div className={classes["dashboard-stats"]}>
                <div className={classes["dashboard-jobs"]}>
                <div className={classes["dashboard-stats-container"]}>
                  <div className={classes["dashboard-job-icon"]}>
                    <img src={rocketicon} alt="" />
                  </div>

                  <h2>300 vacancies</h2>
                  </div>
                </div>
                <div className={classes["dashboard-jobs-selections"]}>
                <div className={classes["dashboard-stats-container"]}>
  
                  <div className={classes["job-selection-icon"]}>
                    <img src={interview} alt="" />
                  </div>
                  <h2>150 Selected</h2>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* </Main> */}
      </div>
    </div>
  );
};

export default DashBoard;
