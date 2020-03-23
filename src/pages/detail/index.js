import React, { Component } from "react";
import TopNavBarPage from "../../layout/top-nav-page";
import "./index.scss";
import {
  queryHeroData,
  queryHeroList,
  queryHero
} from "../../api/methods/hero";

// const heroData = {
//   name: "卡特琳娜",
//   cover: "https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg", // 封面图
//   style: ["ADC", "射手"],
//   ability: {
//     attack: 10, // 攻击
//     magic: 3, // 法术
//     defence: 3, // 防御
//     control: 5 // 操作控制
//   },
//   essencePrice: 6300, // 精粹价格
//   price: 4500, // 卡券
//   skills: [
//     {
//       keyboard: "被动",
//       abilityIconPath:
//         "https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg",
//       description: "被动技能"
//     },
//     {
//       keyboard: "Q",
//       abilityIconPath:
//         "https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg",
//       description:
//         "QQQ这是技能描述这是技能描述这是技能描述这是技能描述这是技能描述"
//     },
//     {
//       keyboard: "W",
//       abilityIconPath:
//         "https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg",
//       description:
//         "WWWW这是技能描述这是技能描述这是技能描述这是技能描述这是技能描述"
//     },
//     {
//       keyboard: "E",
//       abilityIconPath:
//         "https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg",
//       description:
//         "EEEE这是技能描述这是技能描述这是技能描述这是技能描述这是技能描述"
//     },
//     {
//       keyboard: "R",
//       abilityIconPath:
//         "https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg",
//       description:
//         "RRRRRR这是技能描述这是技能描述这是技能描述这是技能描述这是技能描述"
//     }
//   ], // 技能
//   skins: [
//     {
//       image: "https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg",
//       name: "按时地方囧",
//       price: 9900
//     },
//     {
//       image: "https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg",
//       name: "按时地方囧",
//       price: 9900
//     }
//   ] // 皮肤
// };

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "标题",
      heroData: null,
      skillTabAct: 0,
      content: "<p>内容</p>"
    };
  }

  // 获取数据
  async queryHeroData(id) {
    let data = await queryHeroData({ id });
    console.log(data);
  }

  // 测试请求
  async queryHeroList() {
    let data = await queryHeroList();
    console.log(data);
  }

  // 请求英雄数据
  async queryHero(id) {
    let data = await queryHero(id);
    if (data.code === 1000) {
      const { hero, skins, spells } = data.data;
      let heroData = {
        name: hero.name,
        cover: skins[0].mainImg,
        style: hero.roles,
        ability: {
          attack: hero.attack, // 攻击
          magic: hero.magic, // 法术
          defence: hero.defense, // 防御
          control: hero.difficulty // 操作控制
        },
        essencePrice: 6300,
        price: 4500,
        skills: this.sortSkills(spells),
        skins: skins,
        description: hero.shortBio
      };
      let title = `${hero.name}（${hero.title}）`;
      console.log(title);
      this.setState({
        heroData,
        title
      });
    }
  }

  // 点击tab切换
  changeTab(index) {
    this.setState({ skillTabAct: index });
  }

  // // 过滤快捷键
  // fileterKeyboard(data) {
  //   let keyboard = data.toLocaleUpperCase();
  //   if (data === "passive") {
  //     keyboard = "被动";
  //   }
  //   return <p>快捷键：${keyboard}</p>;
  // }

  // 技能排序
  sortSkills(data) {
    let newList = new Array(5);
    for (let i = 0; i < data.length; i++) {
      let spellKey = data[i].spellKey.toLocaleUpperCase();
      let index = 0;
      if (spellKey === "PASSIVE") {
        index = 0;
      } else if (spellKey === "Q") {
        index = 1;
      } else if (spellKey === "W") {
        index = 2;
      } else if (spellKey === "E") {
        index = 3;
      } else {
        index = 4;
      }
      newList[index] = data[i];
    }
    return newList;
  }

  componentDidMount() {
    const { id } = this.props.location.state;
    // this.queryHeroData(id);
    // this.queryHeroList();

    this.queryHero(id);
  }

  UNSAFE_componentWillMount() {}

  render() {
    const { heroData } = this.state;
    let ele = <h3>加载中</h3>;

    // 过滤快捷键
    let fileterKeyboard = function(data) {
      let keyboard = data.toLocaleUpperCase();
      if (data === "passive") {
        keyboard = "被动";
      }
      return <p>快捷键：{keyboard}</p>;
    };

    if (heroData) {
      ele = (
        <div className="detail-container">
          <div className="hero">
            {/* 图片 */}
            <img src={heroData.cover} alt="" className="cover" />

            {/* 遮罩内容 */}
            <div className="wrapper">
              <h3 className="hero-name">{heroData.name}</h3>
              <p className="hero-style">
                {heroData.style.map((item, index) => {
                  return (
                    <span key={index} className="style">
                      {item}
                    </span>
                  );
                })}
              </p>
              <div className="ability">
                <span className="ability-item">
                  攻 {heroData.ability.attack}
                </span>
                <span className="ability-item">
                  法 {heroData.ability.magic}
                </span>
                <span className="ability-item">
                  防 {heroData.ability.defence}
                </span>
                <span className="ability-item">
                  操 {heroData.ability.control}
                </span>
              </div>
              <div className="price-wrapper">
                <span className="price">精粹：{heroData.essencePrice}</span>
                <span className="price">点券：{heroData.price}</span>
              </div>
            </div>
          </div>
          <div className="skill section">
            <p className="title">技能</p>
            <ul className="tabs">
              {heroData.skills.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={
                      "tab" +
                      (this.state.skillTabAct === index ? " active" : "")
                    }
                    onClick={this.changeTab.bind(this, index)}
                  >
                    <img
                      src={item.abilityIconPath}
                      alt=""
                      className="skill-icon"
                    />
                  </li>
                );
              })}
            </ul>
            <div className="skill-desc">
              {fileterKeyboard(
                heroData.skills[this.state.skillTabAct].spellKey
              )}
              {heroData.skills[this.state.skillTabAct].description}
            </div>
          </div>
          <div className="skin section">
            <p className="title">皮肤</p>
            <div className="skin-wrapper test">开发中...</div>
          </div>
          <div className="story section">
            <p className="title">英雄介绍</p>
            <div
              className="story-wrapper test"
              dangerouslySetInnerHTML={{ __html: heroData.description }}
            ></div>
          </div>
        </div>
      );
    }
    return <TopNavBarPage title={this.state.title}>{ele}</TopNavBarPage>;
  }
}

export default Detail;
