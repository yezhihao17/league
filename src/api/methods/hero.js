import fetch from "../fetch";
import apiUrl from "../url";

// // 获取英雄数据
// export const queryHeroData = params =>
//   fetch(`/api/images/lol/act/img/js/hero/${params.id}.js`);

// 获取英雄列表数据
export const queryHeroList = () => fetch(apiUrl.heroList);

// 获取英雄详情数据
export const queryHero = id => fetch(`${apiUrl.hero}?id=${id}`);
