import React from "react";

const UserInfos = ({ text, className, total, colReverse }) => {
  return (
    <span
      className={`flex ${
        colReverse ? "flex-col-reverse" : "flex-col"
      } items-center`}
    >
      <p className="text-neutral-500 capitalize">{text}</p>
      <p className={className}>{total}</p>
    </span>
  );
};

export default UserInfos;
