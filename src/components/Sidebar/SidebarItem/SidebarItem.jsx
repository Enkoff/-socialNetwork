import React from "react";
import s from "./SidebarItem.module.css";

const SidebarItem = (props) => {

  let friendsElement = props.friendsName.map((friend) => {
    return (
      <div>
        <img
          src="https://i.pinimg.com/originals/e2/df/ac/e2dfacb62f8774dfda2e7f7803de0f4e.jpg"
          alt="avatar-friend"
        />
        <span>{friend.name}</span>
      </div>
    ); 
  });

  return (
    <div className={s.sidebarItem}>
     { friendsElement }
    </div>
  );
}

export default SidebarItem;
