import React from "react";
import { useSelector } from "react-redux";
import CreateTweetCard from "../components/FeedPage/CreateTweetCard";
import SingleTweet from "../components/FeedPage/SingleTweets";
import TweetLoadingSkeleton from "../components/Loading/TweetLoadingsSkeleton";
import TweetModal from "../components/Modals/TweetModals";
import LogoText from "../components/NavBar/LogoText";
import NoTweets from "../components/ProfilePage/ProfileSection/NoTweets";
import Socials from "../components/Socials";
import {
  useGetAllSavedTweetsQuery,
  useGetFeedTweetsQuery,
  useSaveTweetMutation,
} from "../features/api/tweetsApiSlice";
import {
  getSavedTweets,
  getShowTweetModal,
} from "../features/slice/tweetsSlice";

const FeedPage = () => {
  const showTweetModal = useSelector(getShowTweetModal);
  const [saveTweet] = useSaveTweetMutation();
  const savedTweets = useSelector(getSavedTweets);

  const {
    data: tweets,
    isSuccess,
    isLoading,
  } = useGetFeedTweetsQuery(undefined, {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  const handleSaveTweet = async (tweetId) => {
    try {
      const result = await saveTweet({ tweetId });
    } catch (error) {
      console.log({ error });
    }
  };

  let content;
  if (tweets?.ids.length === 0) {
    content = <NoTweets />;
  }
  if (isLoading) content = <TweetLoadingSkeleton />;
  if (isSuccess && tweets?.ids?.length > 0) {
    const { ids } = tweets;
    content = ids.map((tweetId) => (
      <SingleTweet
        tweetId={tweetId}
        key={tweetId}
        handleSaveTweet={handleSaveTweet}
        isSaved={savedTweets?.includes(tweetId)}
      />
    ));
  }

  return (
    <div className="flex flex-col gap-y-8 items-start justify-start w-full">
      <div className="md:hidden flex w-full items-center justify-between">
        <LogoText />
        <Socials />
      </div>
      {showTweetModal ? <TweetModal /> : ""}
      <section className="w-full flex flex-col gap-y-4">
        <CreateTweetCard />
        {content}
      </section>
    </div>
  );
};

export default FeedPage;
