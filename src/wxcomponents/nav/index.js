// components/nav/nav.js
Component({
  /**
   * 页面的初始数据
   */
  data: {},
  properties: {
    hideBack: {
      type: Boolean,
      value: false
    },
    bgColor: {
      type: String,
      value: "transparent"
    }
  },
  attached() {
    try {
      const res = wx.getSystemInfoSync();
      let statusBarHeight = res.statusBarHeight;
      const menubtn = wx.getMenuButtonBoundingClientRect();

      let diff = menubtn.top - statusBarHeight;

      let navHeight = menubtn.height;

      let topHeight = statusBarHeight + diff + navHeight;
      this.setData({
        statusBarHeight: statusBarHeight + "px",
        navHeight: navHeight + "px",
        topHeight: topHeight + "px",
        diff: diff + "px"
      });
    } catch (e) {
      // Do something when catch error
      console.log(e.message);
    }
  },
  ready() {},
  methods: {
    goBack() {
      wx.navigateBack();
    }
  }
});
