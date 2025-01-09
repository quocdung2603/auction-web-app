import { Link } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IconGoogle, IconFacebook } from "../../Common/Icon/Icon";
import { User } from "../../Type/Account/User";

type FormData = {
  email: string;
  password: string;
};
const loginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="flex flex-col space-y-5 p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-[40px]">Hii! Welcome Back</h1>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Data is invalid.",
            },
            minLength: {
              value: 10,
              message: "Email must contain at least 10 characters.",
            },
            maxLength: {
              value: 36,
              message: "Email must not exceed 36 characters.",
            },
          }}
          render={({ field }) => (
            <input
              type="email"
              id="email"
              {...field}
              placeholder="EMAIL"
              className="p-2 w-full border rounded"
            />
          )}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must contain at least 8 characters.",
            },
            maxLength: {
              value: 255,
              message: "Password must not exceed 255 characters.",
            },
            pattern: {
              value: /^[0-9a-zA-Z!@#$%*]+$/,
              message:
                "Password must only contain the characters 0-9, a-z, A-Z, ! @ # $ % *.",
            },
          }}
          render={({ field }) => (
            <input
              type="password"
              id="password"
              {...field}
              placeholder="PASSWORD"
              className="p-2 w-full border rounded"
            />
          )}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
        <Link to="/forgot-password" className="text-left text-[red]">
          Forgot Password?
        </Link>
        <div className="flex flex-row justify-center">
          <button className="bg-primary text-white py-2 px-10 rounded w-fit">
            Login
          </button>
        </div>
        <p className="text-center text-[24px]">Or</p>
        <div className="flex flex-row">
          <Link to={""} className="w-1/2 flex justify-center">
            <IconGoogle />
          </Link>
          <Link to={""} className="w-1/2 flex justify-center">
            <IconFacebook />
          </Link>
        </div>
        <div className="flex flex-row justify-center space-x-3">
          <p>New to Auction Table?</p>
          <Link to={""}>Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default loginForm;
