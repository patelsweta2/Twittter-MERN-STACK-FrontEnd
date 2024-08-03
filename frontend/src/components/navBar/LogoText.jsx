import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAccessToken } from "../../features/slice/authSlice";

const LogoText = () => {
  const currentAccessToken = useSelector(getAccessToken);
  return currentAccessToken ? (
    <Link className="font-bold text-green-400 text-2xl" to="/">
      BuzzBlab
    </Link>
  ) : (
    <Link className="font-bold text-green-400 text-2xl" to="/auth/login">
      BuzzBlab
    </Link>
  );
};

export default LogoText;
