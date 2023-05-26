import { wPage } from '@morjs/core'
import { formatTime } from '../../utils/util'

wPage({
  data: {
    placement: 'left',
    sidebar: [],
    baseSidebar: [
      {
        title: '菜单1',
      },
      {
        title: '菜单二',
      },
      {
        title: '菜单三',
      },
      {
        title: '菜单四',
      },
      {
        title: '菜单五',
      },
      {
        title: '菜单六',
      },
      {
        title: '菜单七',
      },
      {
        title: '菜单八',
      },
    ],
    StatusNavHeight:0
  },
  openDrawerBase() {
    this.setData({
      visible: true,
      sidebar: this.data.baseSidebar,
    });
  },

  itemClick(e) {
    console.log(e.detail);
  },

  overlayClick(e) {
    console.log(e.detail);
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log) => {
        return {
          date: formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
    try {
      // let statusNavHeight=wx.getStorageSync("statusNavHeight");
      this.setData({
        StatusNavHeight:wx.getStorageSync("StatusNavHeight")+"px"
      })
    } catch (error) {
      
    }
  },
  onShow() {
    
  }
})
