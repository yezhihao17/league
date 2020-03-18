import React, { Component } from "react";
import TopNavBarPage from "../../layout/top-nav-page";
import "./index.scss";
import { queryHeroData } from "../../api/methods/hero";

const heroData = {
  name: "卡特琳娜",
  cover: "https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg", // 封面图
  style: ["ADC", "射手"],
  ability: {
    attack: 10, // 攻击
    magic: 3, // 法术
    defence: 3, // 防御
    control: 5 // 操作控制
  },
  essencePrice: 6300, // 精粹价格
  price: 4500, // 卡券
  skill: [
    {
      keyboard: "被动",
      icon: "https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg",
      desc: "被动技能"
    },
    {
      keyboard: "Q",
      icon: "https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg",
      desc: "QQQ这是技能描述这是技能描述这是技能描述这是技能描述这是技能描述"
    },
    {
      keyboard: "W",
      icon: "https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg",
      desc: "WWWW这是技能描述这是技能描述这是技能描述这是技能描述这是技能描述"
    },
    {
      keyboard: "E",
      icon: "https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg",
      desc: "EEEE这是技能描述这是技能描述这是技能描述这是技能描述这是技能描述"
    },
    {
      keyboard: "R",
      icon: "https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg",
      desc: "RRRRRR这是技能描述这是技能描述这是技能描述这是技能描述这是技能描述"
    }
  ], // 技能
  skin: [
    {
      image: "https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg",
      name: "按时地方囧",
      price: 9900
    },
    {
      image: "https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg",
      name: "按时地方囧",
      price: 9900
    }
  ] // 皮肤
};

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: heroData?.name ?? "标题",
      heroData: heroData,
      skillTabAct: 0
    };
  }

  // 获取数据
  async queryHeroData(id) {
    let data = await queryHeroData({ id });
    console.log(data);
  }

  // 点击tab切换
  changeTab(index) {
    this.setState({ skillTabAct: index });
  }

  componentDidMount() {
    const { id } = this.props.location.state;
    this.queryHeroData(id);
  }

  UNSAFE_componentWillMount() {}

  render() {
    const { heroData } = this.state;
    return (
      <TopNavBarPage title={this.state.title}>
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
              {heroData.skill.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={
                      "tab" +
                      (this.state.skillTabAct === index ? " active" : "")
                    }
                    onClick={this.changeTab.bind(this, index)}
                  >
                    <img src={item.icon} alt="" className="skill-icon" />
                  </li>
                );
              })}
            </ul>
            <div className="skill-desc">
              {heroData.skill[this.state.skillTabAct].desc}
            </div>
          </div>
          <div className="skin section">
            <p className="title">皮肤</p>
            <div className="skin-wrapper test">开发中...</div>
          </div>
          <div className="story section">
            <p className="title">英雄背景故事</p>
            <div className="story-wrapper test">开发中...</div>
          </div>
        </div>
      </TopNavBarPage>
    );
  }
}

export default Detail;
