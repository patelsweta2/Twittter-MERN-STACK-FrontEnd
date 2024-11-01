import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import FormBody from "../components/FormComponents/FormBodys";
import FormContainer from "../components/FormComponents/FormContainers";
import FormHeader from "../components/FormComponents/FormHeaders";
import FormInput from "../components/FormComponents/FormInputs";
import FormNavigationButton from "../components/FormComponents/FormNavigationButtons";
import FormPasswordInput from "../components/FormComponents/FormPasswordInputs";
import FormRow from "../components/FormComponents/FormRows";
import FormSubmitButton from "../components/FormComponents/FormSubmitButtons";
import { useLoginUserMutation } from "../features/api/authApiSlice";
import { setAccessToken, setCurrentUserId } from "../features/slice/authSlice";
import { setCurrentUserName } from "../features/slice/usersSlice";
import useCustomPersist from "../hooks/useCustomPersist";
import { formValidation } from "../utils/formValidationOptions";

const LoginPage = () => {
  const [persist, setPersist] = useCustomPersist();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const [loginUser, { isLoading, isSuccess }] = useLoginUserMutation();
  const dispatch = useDispatch();

  const onFormSubmit = async (data) => {
    try {
      const result = await loginUser(data).unwrap();
      dispatch(setCurrentUserName(result.userExist._id));
      dispatch(setAccessToken(result.accessToken));
      dispatch(setCurrentUserId(result.userId));
      setPersist((prev) => !prev);
      navigate("/feed", {
        replace: true,
      });
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };

  return (
    <div>
      <FormNavigationButton text={"Create account"} path={"register"} />

      <div className="mt-12">
        <FormContainer>
          <div className="mb-10">
            <FormHeader heading={"Login"} />
          </div>
          <FormBody handleSubmit={handleSubmit} onFormSubmit={onFormSubmit}>
            <FormRow error={errors?.userName?.message}>
              <FormInput
                placeholder={"Email/Username"}
                type={"text"}
                autoFocus={true}
                register={register("userName")}
              />
            </FormRow>
            <FormRow error={errors?.password?.message}>
              <FormPasswordInput
                register={register("password", formValidation.password)}
              />
            </FormRow>
            <footer className="w-full flex justify-between items-center">
              <Link
                to={"/auth/reset"}
                className="text-sm capitalize font-medium text-neutral-600 hover:underline"
              >
                Forgot password?
              </Link>
              <FormSubmitButton
                text={"Login"}
                isLoading={isLoading}
                isSuccess={isSuccess}
              />
            </footer>
          </FormBody>

          <form className="my-3">
            <label htmlFor="persist">
              <input
                type="checkbox"
                id="persist"
                checked={persist}
                onChange={() => setPersist((prev) => !prev)}
              />{" "}
              <span className="text-sm font-semibold text-neutral-700">
                Accept Cookies
              </span>
            </label>
          </form>
        </FormContainer>
      </div>
    </div>
  );
};

export default LoginPage;
