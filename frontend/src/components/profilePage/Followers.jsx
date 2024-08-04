import React from "react";
import SingleUser from "../UserPage/SingleUsers";
import NoFollowers from "./ProfileSection/NotFollowers";
const Followers = ({ followers }) => {
  let content;
  if (followers?.length === 0) {
    content = <NoFollowers />;
  }
  if (followers?.length > 0) {
    content = followers?.map((user) => (
      <SingleUser userId={user._id} key={user._id} />
    ));
  }
  return <section className="profile-section-tab-content">{content}</section>;
};

export default Followers;
