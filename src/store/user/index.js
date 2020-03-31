import { LOGIN, LOGOUT, SET_NICKNAME } from "./type";

// 默认数据
let defaultState = {
  nickName: "无极剑圣",
  age: 20,
  avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg"
}

export const userInfo = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...action.data
      }
    case LOGOUT:
      return defaultState;
    case SET_NICKNAME:
      return {
        ...state,
        nickName: action.data
      }
    default:
      return state;
  }
}
