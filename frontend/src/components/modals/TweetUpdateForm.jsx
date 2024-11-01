import React, { useEffect } from "react";
import "react-circular-progressbar/dist/styles.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import TextAreaAutosize from "react-textarea-autosize";
import { useUpdateTweetMutation } from "../../features/api/tweetsApiSlice";
import {
  getIsTweetUpdating,
  getShowTweetModal,
  getTweetToUpdate,
  toggleShowModal,
} from "../../features/slice/tweetsSlice";
import CstmCircularProgressBar from "../../components/CustomComponents/CstmCircularProgressBar";
import FormRow from "../FormComponents/FormRows";
import FormSubmitButton from "../FormComponents/FormSubmitButtons";
import TweetModalDate from "./TweetModalDate";

const TweetUpdateForm = () => {
  const tweetToUpdate = useSelector(getTweetToUpdate);
  const showTweetModal = useSelector(getShowTweetModal);
  const isUpdating = useSelector(getIsTweetUpdating);
  const [updateTweet, { isLoading, isSuccess }] = useUpdateTweetMutation();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    reValidateMode: "onChange",
  });

  const wordCount = watch("content");

  const onTweetSubmit = async (data) => {
    try {
      if (tweetToUpdate?.content === data?.content) {
        dispatch(toggleShowModal());
        return;
      }
      const response = await updateTweet({
        tweetId: tweetToUpdate?._id,
        content: data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onError = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (isUpdating) setValue("content", tweetToUpdate?.content);
    if (isSuccess) dispatch(toggleShowModal());
  }, [showTweetModal, isSuccess]);

  return (
    <form onSubmit={handleSubmit(onTweetSubmit, onError)} className="w-full">
      <FormRow
        error={
          errors?.content?.message ||
          (wordCount?.length === 210
            ? "Maximum character limit reached!!!"
            : "")
        }
      >
        <TextAreaAutosize
          name="tweetContent"
          id="tweetContent"
          minRows={5}
          maxRows={10}
          className="resize-none w-full bg-transparent outline-none border-none text-sm md:text-base"
          autoFocus
          {...register("content", {
            required: "Tweet cannot be empty",
          })}
          maxLength={210}
        />
      </FormRow>

      <div className="flex items-center justify-between">
        <CstmCircularProgressBar wordCount={wordCount} />
        <TweetModalDate
          createdAt={tweetToUpdate?.createdAt}
          updatedAt={tweetToUpdate?.updatedAt}
        />
      </div>

      <div className="my-4">
        <FormSubmitButton
          text={!isLoading ? "Update Tweet" : <p className="loader"></p>}
        />
      </div>
    </form>
  );
};

export default TweetUpdateForm;
