//index.js
//获取应用实例
import * as mock from './mock';
const app = getApp();

Page({
    data: {
        activityList: [],
        selectedNavItem: 'registered', // 已报名的-registered, 我发布的-posted, 俱乐部活动-club
        activityRes: {},
    },
    //事件处理函数
    onNavTap: function (e) {
        const index = e.currentTarget.dataset.index;
        this.setData({
            selectedNavItem: index,
            activityList: this.data.activityRes[index],
        });
    },
    onLoad: function () {
        const activityRes = mock;
        this.setData({
            activityRes,
            activityList: activityRes.registered,
        });
    },
});
