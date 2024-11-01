import React from "react";
import { BsBookmarks } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfilePageLoading from "../components/Loading/ProfilePageLoadings";
import TweetModal from "../components/Modals/TweetModals";
import CurrUserInfo from "../components/Modals/UserInfoModals";
import ProfileSection from "../components/ProfilePage/ProfileSection/ProfileSections";
import UserAvatar from "../components/User/UserAvatar";
import UserFullName from "../components/User/UserFullName";
import UserInfo from "../components/User/UserInfos";
import UserName from "../components/User/UserName";
import { useGetCurrUserProfileQuery } from "../features/api/usersApiSlice";
import { getShowTweetModal } from "../features/slice/tweetsSlice";
import {
  getShowUserModal,
  toggleShowUserModal,
} from "../features/slice/usersSlice";

const ProfilePage = () => {
  const { data: currentUser, isLoading } = useGetCurrUserProfileQuery();

  const showTweetModal = useSelector(getShowTweetModal);
  const showUserModal = useSelector(getShowUserModal);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleShowUserModal());
  };

  if (isLoading) {
    return <ProfilePageLoading />;
  }

  return (
    <div className="w-full">
      {showUserModal ? <CurrUserInfo /> : ""}
      {showTweetModal ? <TweetModal /> : ""}
      <div className="flex items-start gap-6 py-2 w-full flex-shrink">
        <div className="w-28">
          <UserAvatar
            className={"avatar border"}
            userName={currentUser?.userName}
          />
        </div>
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col items-start justify-between w-full">
              <button onClick={handleClick}>
                <UserFullName
                  className={"font-extrabold text-2xl text-neutral-800"}
                  fullName={currentUser?.fullName}
                />
              </button>
              <UserName
                userName={currentUser?.userName}
                className={"profile-userName"}
              />
            </div>
            <Link
              className="text-2xl text-neutral-500 hover:text-green-500 transition-colors ease-in-out duration-200 mr-4 p-2"
              to="/saved"
            >
              <button className="relative">
                <BsBookmarks />
              </button>
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <UserInfo
              className={"profile-userInfo"}
              total={currentUser?.tweets?.length}
              text={"tweets"}
              colReverse={true}
            />
            <UserInfo
              className={"profile-userInfo"}
              total={currentUser?.followers?.length}
              text={"followers"}
              colReverse={true}
            />
            <UserInfo
              className={"profile-userInfo"}
              total={currentUser?.followings?.length}
              text={"following"}
              colReverse={true}
            />
          </div>
        </div>
      </div>
      <ProfileSection
        tweets={currentUser?.tweets}
        followers={currentUser?.followers}
        followings={currentUser?.followings}
      />
    </div>
  );
};

export default ProfilePage;
