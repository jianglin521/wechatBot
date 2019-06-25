// 配置文件
module.exports = {
    // 基础定时发送功能配置项（必填项）
    NAME: 'Leo_chen', //女朋友备注姓名
    NICKNAME: 'Leo_chen', //女朋友昵称
    MEMORIAL_DAY: '2015/04/18', //你和女朋友的纪念日
    CITY: 'shanghai', //女朋友所在城市
    LOCATION: "pudong-new-district", //女朋友所在区（可以访问墨迹天气网站后，查询区的英文拼写）
    SENDDATE: '0 20 11 * * *', //定时发送时间 每天8点06分0秒发送，规则见 /schedule/index.js
    ONE: 'http://wufazhuce.com/', ////ONE的web版网站
    MOJI_HOST: 'https://tianqi.moji.com/weather/china/', //中国墨迹天气url

    //高级功能配置项（非必填项）
    AUTOREPLY: true, //自动聊天功能 默认关闭
    AUTOREPLYPERSON: '-阿萍', //指定好友开启机器人聊天功能   指定好友的昵称
    AIBOTAPI: 'http://api.tianapi.com/txapi/robot/', //天行机器人API 注册地址https://www.tianapi.com/signup.html?source=474284281
    APIKEY: 'aaa7971e54fcfb251c01ba67ea0c5d00', //天行机器人apikey，这里奉献上我自己的key，还是建议大家自己申请一下
}