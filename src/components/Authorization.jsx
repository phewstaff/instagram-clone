import React from "react";
import logo from "../assets/images/instagram.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import fakeInstagramApi from "../apis/fakeInstagramApi";
import { ActionTypes } from "../redux/constants/actionTypes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const loginFormSchema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().min(4).max(15).required(),
  })
  .required();

const Authorization = () => {
  const navigate = useNavigate();

  const signIn = (formData) => async (dispatch) => {
    try {
      const response = await fakeInstagramApi.post(`/user/sign-in`, formData);
      if (response.data.token) {
        Cookies.set("token", response.data.token, { expires: 7 });
        navigate("/");
        toast.success("Вы успешно авторизовались");
      }

      dispatch({ type: ActionTypes.SIGN_IN, payload: response.data });
    } catch (error) {
      toast.error("Неверный логин или пароль");
    }
  };

  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmitHandler = (formData) => {
    dispatch(signIn(formData));
    reset();
  };

  return (
    <>
      <ToastContainer position="bottom-right" />
      <div className="auth-container">
        {/* <form onSubmit={handleSubmit(submitForm)} className="auth-form"> */}
        <form onSubmit={handleSubmit(onSubmitHandler)} className="auth-form">
          <div className="auth-title">
            <img src={logo} alt="" />
          </div>
          <div className="auth-form-group">
            <input
              {...register("username")}
              placeholder="Телефон, имя пользователя или эл.адрес"
              type="text"
            />
            <p>{errors.username?.message}</p>
          </div>
          <div className="auth-form-group">
            <input
              {...register("password")}
              placeholder="Пароль"
              type="password"
              name="password"
              required
            />
            <p>{errors.password?.message}</p>
          </div>
          <button type="submit" className="auth-submit-button">
            Войти
          </button>
        </form>
      </div>
    </>
  );
};

export default Authorization;
