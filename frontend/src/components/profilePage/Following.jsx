import React from "react";
import SingleUser from "../UserPage/SingleUsers";
import NoFollowing from "./ProfileSection/NotFollowing";
const Following = ({ followings }) => {
  let content;
  if (followings?.length === 0) {
    content = <NoFollowing />;
  }
  if (followings?.length > 0) {
    content = followings?.map((user) => (
      <SingleUser userId={user._id} key={user._id} />
    ));
  }
  return <section className="profile-section-tab-content">{content}</section>;
};

export default Following;
