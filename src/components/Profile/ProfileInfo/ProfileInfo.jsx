import React from "react";
import Preloader from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus.jsx/ProfileStatus";
import defaultAvatar from "../../../assets/img/users-img.png";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      {/* <div>
        <img
          src="https://moodle.hromady.org/theme/image.php/campus/theme/1582637915/background"
          alt="content-img"
        />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large || defaultAvatar} alt="avatar" />
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
