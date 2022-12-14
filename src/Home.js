import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Search from "./Search";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about"> About </Link>{" "}
          <Link
            to="/store
        "
          >
            {" "}
            Store{" "}
          </Link>{" "}
        </div>{" "}
        <div className="home__headerRight">
          <Link to="/gmail"> Gmail </Link>{" "}
          <Link
            to="/images
        "
          >
            {" "}
            Images{" "}
          </Link>{" "}
          <AppsIcon />
          {/* <Avatar /> */}
          <Avatar className="header_avatar" alt="Siri" src="Siri.jpeg" />
        </div>{" "}
      </div>{" "}
      <div className="home__body">
        <div className="home__inputContainer">
          <Search />
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Home;
