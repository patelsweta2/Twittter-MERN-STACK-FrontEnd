import { space } from "postcss/lib/list";
import React from "react";
import { useForm } from "react-hook-form";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";
import { useCreateTweetMutation } from "../../features/api/tweetsApiSlice";
import { getCurrentUser } from "../../features/slice/usersSlice";
import CstmCircularProgressBar from "../CustomComponents/CstmCircularProgressBar";
import UserAvatar from "../User/UserAvatar";

const CreateTweetCard = () => {
  const [createTweet, { isLoading, isSuccess }] = useCreateTweetMutation();

  const currentUser = useSelector(getCurrentUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const wordCount = watch("content");

  const handleCreateTweet = async (data) => {
    try {
      const response = await createTweet(data);
      setValue("content", "");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClearTextInput = () => {
    setValue("content", "");
  };

  let buttonText;
  if (isLoading) {
    buttonText = <span className="loader"></span>;
  }
  if (!isLoading || isSuccess) {
    buttonText = "Tweet";
  }

  return (
    <article className="flex items-center justify-between w-full bg-black shadow-md shadow-neutral-200/50 rounded pl-4 py-4">
      <div className="w-full">
        <div className="w-full flex items-start">
          <div className="flex items-center gap-x-2">
            {!currentUser?.userName ? (
              <p className="w-12 bg-neutral-300 animate-pulse aspect-square rounded-full"></p>
            ) : (
              <UserAvatar
                userName={currentUser?.userName}
                className={"avatar w-14"}
              />
            )}
          </div>

          <form
            className="flex flex-col items-start w-full mx-2"
            onSubmit={handleSubmit(handleCreateTweet)}
          >
            <div
              className={`w-full ${
                wordCount?.length === 210
                  ? "border-red-500"
                  : "border-transparent"
              } border rounded-md px-2`}
            >
              <TextareaAutosize
                maxRows={15}
                minRows={2}
                className="resize-none w-full bg-transparent outline-none border-none placeholder:text-lg placeholder:font-normal text-white font-medium placeholder:max-sm:text-base"
                placeholder="What is happening?!"
                maxLength={210}
                {...register("content", {
                  validate: (value) => value.length <= 200,
                })}
              />
            </div>
            <div
              className={`text-xs text-red-500 font-medium pt-1 ${
                wordCount?.length === 210 ? "block" : "invisible"
              }`}
            >
              Maximum character limit reached!!!
            </div>
            <div className="w-full flex items-center justify-between gap-2">
              <div className={wordCount?.length > 0 ? "visible" : "invisible"}>
                <button
                  className="text-neutral-400 p-2 hover:bg-red-100 hover:text-red-500 text-lg rounded-full transition-colors ease-in-out duration-200"
                  type="button"
                  onClick={handleClearTextInput}
                >
                  <MdDeleteOutline />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <CstmCircularProgressBar wordCount={wordCount} />
                <button
                  type="submit"
                  className="w-24 max-sm:text-sm text-base bg-green-500 px-4 py-1 rounded-full font-medium text-white disabled:bg-green-700 disabled:text-neutral-200 hover:bg-green-600 transition-colors ease-in-out duration-200"
                  disabled={wordCount?.length === 0}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className=" w-[30px] h-[60px] aspect-video rounded-tl-full rounded-bl-full bg-green-500/70 pl-4"></div>
    </article>
  );
};

export default CreateTweetCard;
