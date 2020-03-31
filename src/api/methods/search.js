import apiUrl from "../url";
import fetch from "../fetch";

// 搜索接口
export const search = (value, type = 0) =>
  fetch(`${apiUrl.search}?value=${value}&type=${type}`);
