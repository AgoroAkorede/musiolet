import React from "react";
import NavItem from "./NavItem";
import { default as MusicIcon } from "../assets/music.svg";
import { default as RecentIcon } from "../assets/recent.svg";
import { default as ChartIcon } from "../assets/chart.svg";
import { default as NavIcon } from "../assets/nav.svg";
import { default as SearchIcon } from "../assets/search.svg";
import { default as PlayListIcon } from "../assets/playlist.svg";
import classes from "../styles/NavBar.module.scss";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className={classes.container}>
      <p>Musiolet</p>
      <NavIcon className={classes.icon} />
      <SearchBar  icon={<SearchIcon />} search="Search" />
      <NavItem icon={<MusicIcon />} name="My music" />
      <NavItem icon={<RecentIcon />} name="Recent plays" />
      <NavItem icon={<ChartIcon />} name="Now playing" />
      <NavItem icon={<PlayListIcon />} name="Playlist" />
    </div>
  );
}

export default Navbar;
