import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/img/users-img.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize / 100);
  let pages = [];
  for (let index = 1; index <= pagesCount; index++) {
    pages.push(index);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && s.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div className={s.userPhoto}>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt="img"
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button disabled={props.isFollowingIsProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.noFollow(u.id);
                  }}
                >
                  Nofollow
                </button>
              ) : (
                <button disabled={props.isFollowingIsProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
