import fetch from "../fetch";

// 获取英雄数据
export const queryHeroData = params =>
  fetch(`/api/images/lol/act/img/js/hero/${params.id}.js`);
