import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useLikeTweetMutation } from "../../features/api/tweetsApiSlice";
import { getCurrentUserId } from "../../features/slice/authSlice";
import { useSelector } from "react-redux";

const TweetLikeBtn = ({ tweetId, likedBy }) => {
  const [likeTweet] = useLikeTweetMutation();
  const currentUserId = useSelector(getCurrentUserId);

  const [isLiked, setIsLiked] = useState(likedBy?.includes(currentUserId));

  const handleClick = async () => {
    try {
      setIsLiked((prev) => !prev);
      await likeTweet({ tweetId });
    } catch (error) {
      console.log(error);
    }
  };

  let formatter = Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: "1",
  });

  let likes = formatter.format(likedBy?.length);

  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={handleClick}
        className=" text-neutral-400 hover:text-red-500 hover:bg-red-100 transition-colors ease-in-out duration-100 p-2 rounded-full text-base"
      >
        {isLiked ? (
          <FaHeart className=" text-red-600 flex justify-start" />
        ) : (
          <FaRegHeart />
        )}
      </button>
      <span className="text-neutral-500 text-sm">
        {likedBy?.length != 0 && likes}
      </span>
    </div>
  );
};

export default TweetLikeBtn;
