import React from "react";
import classes from "./DashboardHeader.module.css";
import search from "../../../assets/logos/search_black_24dp.svg";
import calendarIcon from "../../../assets/logos/today_black_24dp.svg";
import bellIcon from "../../../assets/logos/bell.png";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import hamMenu from "../../../assets/logos/menu_black_24dp.svg";
import createPost from "../../../assets/logos/add_circle_black_24dp.svg";
import { useDispatch, useSelector } from "react-redux";
import { sideNavActions } from "../../store/sideNav-slice";
import CreatePost from "./admin/CreatePost";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import useWindowDimensions from "../../../hooks/use-windowSize";
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import AccountMenu from "./AccountMenu";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    border: `2px solid #b7eeb5 `,
    padding: "0 4px",
    backgroundColor: "#b7eeb5",
    color: "black",
    fontWeight: "600",
  },
}));

const DashboardHeader = ({ onDrawerOpen, onDrawerClose, open }) => {
  const handleDrawerOpen = () => {
    onDrawerOpen();
  };

  const handleDrawerClose = () => {
    onDrawerClose();
  };
  //getting browser size

  const { width } = useWindowDimensions();
  //show side nav
  const dispatch = useDispatch();

  const hamMenuHandler = (e) => {
    e.preventDefault();
    dispatch(sideNavActions.showSideNav());
  };
  // eslint-disable-next-line
  useEffect(() => {
    return width > 460
      ? dispatch(sideNavActions.showSideNav())
      : dispatch(sideNavActions.hideSideNav());
  }, [dispatch, width]);

  //login as student or admin
  const userLogin = useSelector((state) => state.auth.loginAs);

  const [showHover, setShowHover] = useState(false);

  const hoverHandler = () => {
    setShowHover(true);
  };

  //createPost
  const [showCreatePost, setShowCreatePost] = useState(false);

  const createPostHandler = () => {
    setShowCreatePost((prev) => !prev);
  };

  const date = new Date();
  const formattedDate = date
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-");

    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
   
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <div className={classes["dashboard-main-header"]}>
      <div className={classes["header-top"]}>
        <div className={classes["dashboard-search"]}>
          {width < 1200 && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <span>Dashboard</span>

          {width > 800 && (
            <div className={classes["search-input"]}>
              <input type="text" placeholder="Search Jobs" />
              <div className={classes["search-icon"]}>
                <img src={search} alt="" />
              </div>
            </div>
          )}
        </div>
        {userLogin === "admin" ? (
          <div className={classes["admin-create-post"]}>
            <div
              className={classes["svg-wrap"]}
              onMouseEnter={hoverHandler}
              onMouseLeave={() => setShowHover(false)}
            >
              <img
                src={createPost}
                alt="createpost"
                onClick={createPostHandler}
              />
            </div>
            {showHover && (
              <div className={classes["admin-hover-text"]}>
                <span>Create Post</span>
              </div>
            )}
          </div>
        ) : (
          ""
        )}

        {showCreatePost && <CreatePost hideCreatePost={createPostHandler} />}

        <div className={classes["dashboard-user"]}>
          <div className={classes["user-date"]}>
            {" "}
            <img src={calendarIcon} alt="" />
            <span>{formattedDate}</span>
          </div>
          <div className={classes["user-bar"]}>
          <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </StyledBadge>
            </IconButton>
          {/* <div className={classes["user-profile"]}>
        

            <Link to="/dashboard/account">
              <img src={userImg} alt="" />
            </Link>
          </div> */}
          <AccountMenu/>
      
          </div>
        </div>
      </div>
      <div className={classes["header-bottom"]}>
        {width < 800 && (
          <div className={classes["search-input"]}>
            <input type="text" placeholder="Search Jobs" />
            <div className={classes["search-icon"]}>
              <img src={search} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
