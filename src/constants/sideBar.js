export const BARLIST = [
  {
    label: '首页',
    value: 'home',
    meta: {
      icon: 'icon-shouye-zhihui',
    },
  },
  {
    label: '个人作品',
    value: 'myWorks',
    meta: {
      icon: 'icon-bianji',
    },
  },
  {
    label: '文章专题',
    value: 'article',
    chidlren: [
      {
        label: '文章内容',
        value: 'articleContent/:id',
      },
    ],
    meta: {
      icon: 'icon-shuba',
    },
  },
  {
    label: '关于我',
    value: 'aboutMe',
    meta: {
      icon: 'icon-gerenzhongxin-zhihui',
    },
  },
];
