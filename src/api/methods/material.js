import fetch from "../fetch";
import apiUrl from "../url";

// 获取类型列表
export const queryMaterialTags = () => fetch(apiUrl.materialTags);

// 获取物品列表
export const queryMaterialList = data => fetch(apiUrl.materialList);

// 获取物品详情
export const queryMaterialDetail = id =>
  fetch(`${apiUrl.materialDetail}?id=${id}`);
