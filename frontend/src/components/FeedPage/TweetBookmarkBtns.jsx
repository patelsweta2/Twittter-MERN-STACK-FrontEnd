import React, { useState } from "react";
import toast from "react-hot-toast";
import { GoBookmark, GoBookmarkFill } from "react-icons/go";
import { useSelector } from "react-redux";
import { useSaveTweetMutation } from "../../features/api/tweetsApiSlice";
import { getSavedTweets } from "../../features/slice/tweetsSlice";
import AddToBookmark from "../ToastComponent/AddToBookMarks";
import RemoveFromBookmark from "../ToastComponent/RemoveFromBookmark";

const TweetBookmarkBtns = ({ tweetId }) => {
  const [saveTweet] = useSaveTweetMutation();
  const savedTweets = useSelector(getSavedTweets);
  const [isTweetSaved, setIsTweetSaved] = useState(
    savedTweets?.includes(tweetId)
  );

  const handleBookMarkTweet = async () => {
    try {
      setIsTweetSaved((prev) => !prev);
      const result = await saveTweet({ tweetId });
      isTweetSaved
        ? toast.custom(<RemoveFromBookmark />)
        : toast.custom((t) => <AddToBookmark t={t} />);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="text-neutral-500 hover:text-neutral-700 p-1 rounded-full">
      <button
        onClick={handleBookMarkTweet}
        className="hover:bg-green-100 hover:text-green-500 p-2 rounded-full transition-colors duration-200 ease-in-out"
      >
        {isTweetSaved ? (
          <GoBookmarkFill className="text-green-400" />
        ) : (
          <GoBookmark />
        )}
      </button>
    </div>
  );
};

export default TweetBookmarkBtns;
