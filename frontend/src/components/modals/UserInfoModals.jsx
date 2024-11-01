import { format } from "date-fns";
import React from "react";
import { LuCalendarDays } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentUser,
  getShowUserModal,
  toggleShowUserModal,
} from "../../features/slice/usersSlice";
import UserAvatar from "../User/UserAvatar";
import UserName from "../User/UserName";
import Modal from "./Modalss";

const UserInfoModals = () => {
  const dispatch = useDispatch();
  const showUserModal = useSelector(getShowUserModal);
  const currentUser = useSelector(getCurrentUser);
  const dateJoined = format(new Date(currentUser?.createdAt), "LLLL yyyy");

  return (
    <Modal showModal={showUserModal} isTweet={false}>
      <article className="bg-neutral-50 rounded w-[50%] max-w-[400px] z-50 flex flex-col items-center">
        <div className="border-b w-full text-center py-3 font-light">
          About your account
        </div>
        <div className="w-24 py-4 flex flex-col items-center gap-4">
          <UserAvatar
            userName={currentUser?.userName || "paarth"}
            className={"avatar"}
          />
          <UserName
            userName={currentUser?.userName || "paarth"}
            className={"font-bold text-neutral-700 text-xl"}
          />
        </div>
        <div className="flex items-center justify-start w-full px-8 gap-2 py-4">
          <span className="text-3xl text-neutral-700">
            <LuCalendarDays />
          </span>
          <span className="flex flex-col leading-4 text-sm">
            <p className="font-medium text-neutral-800">Date joined</p>
            <p className="font-light">{dateJoined}</p>
          </span>
        </div>
        <div className="w-full border-t text-center">
          <button
            onClick={() => dispatch(toggleShowUserModal())}
            className="py-4 w-full"
          >
            Close
          </button>
        </div>
      </article>
    </Modal>
  );
};

export default UserInfoModals;
