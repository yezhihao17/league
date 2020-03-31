import { SET_HOME_LIST } from "./type";

let defaultState = {
  homeList: [] // 首页列表
};

export const homeData = (state = defaultState, action) => {
  switch (action.type) {
    case SET_HOME_LIST:
      return {
        ...state,
        homeList: [...state.homeList, ...action.data]
      };
    default:
      return state;
  }
};
