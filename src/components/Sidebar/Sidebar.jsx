import React from "react";
import s from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";

const Sidebar = (props) => {
  return (
    <div className={s.sidebar}>
      <h3>Friends</h3>
      <SidebarItem friendsName={props.state.friendsName} />
    </div>
  ); 
};

export default Sidebar;
