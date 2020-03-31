import actionCreator from "../actionCreator";
import * as User from "./type";

// 登录
export const login = data => {
  return dispath => {
    dispath(actionCreator(User.LOGIN, data));
  };
};

// 登出
export const logout = data => {
  return dispath => {
    dispath(actionCreator(User.LOGOUT, data));
  };
};

// 修改用户昵称
export const setNickName = data => {
  return dispath => {
    dispath(actionCreator(User.SET_NICKNAME, data));
  };
};
