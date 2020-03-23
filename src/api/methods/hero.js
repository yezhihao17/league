import fetch from "../fetch";

// 获取英雄数据
export const queryHeroData = params =>
  fetch(`/api/images/lol/act/img/js/hero/${params.id}.js`);

// 获取英雄列表数据
export const queryHeroList = () => fetch("/heroList");

export const queryHero = (id) => fetch("/hero?id=" + id);
