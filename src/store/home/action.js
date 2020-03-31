import actionCreator from "../actionCreator";
import * as Home from "./type";

// 设置首页列表数据
export const setHomeList = data => {
  return dispath => {
    dispath(actionCreator(Home.SET_HOME_LIST, data));
  };
};
