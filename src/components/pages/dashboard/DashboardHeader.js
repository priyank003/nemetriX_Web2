import React from "react";
import classes from "./DashboardHeader.module.css";
import search from "../../../assets/logos/search_black_24dp.svg";
import calendarIcon from "../../../assets/logos/today_black_24dp.svg";
import bellIcon from "../../../assets/logos/bell.png";
import userImg from "../../../assets/images/user/cheerful-curly-business-girl-wearing-glasses.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import hamMenu from "../../../assets/logos/menu_black_24dp.svg";
import createPost from "../../../assets/logos/add_circle_black_24dp.svg";
import { useDispatch, useSelector } from "react-redux";
import { sideNavActions } from "../../store/sideNav-slice";
import CreatePost from "./admin/CreatePost";

const DashboardHeader = () => {
  //getting browser size

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }
  const { width } = useWindowDimensions();

  const [searchBottom, setSearchBottom] = useState(false);

  useEffect(() => {
    setSearchBottom(() => {
      return width < 460 ? true : false;
    });
  }, [width]);

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

  return (
    <div className={classes["dashboard-main-header"]}>
      <div className={classes["header-top"]}>
        <div className={classes["dashboard-search"]}>
          <div className={classes["dashboard-ham-menu"]}>
            <img src={hamMenu} alt="hammenu" onClick={hamMenuHandler} />
          </div>
          <span>Dashboard</span>

          {!searchBottom && (
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
            <span> 24 sept, 2021</span>
          </div>

          <div className={classes["user-notifications"]}>
            <img src={bellIcon} alt="" />
            <span> 3 </span>
          </div>
          <div className={classes["user-profile"]}>
            <Link to="/dashboard/account">
              <img src={userImg} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className={classes["header-bottom"]}>
        {searchBottom && (
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
