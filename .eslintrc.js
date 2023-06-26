const path = require('path');
const babelConfigPath = path.resolve(__dirname, './babel.config.js');

module.exports = {
  "env": {
    // 当前的环境
    "browser": true,
    "es2020": true,
    "node": true,
    "es6": true
  },
  "extends": ["plugin:vue/vue3-recommended", "prettier", "plugin:prettier/recommended"], // 使用 pretter推荐配置
  "plugins": ["vue"],
  "parserOptions": {
    // 配置js代码语言选项
    "sourceType": "module",
    "ecmaVersion": 6,
    "ecmaFeatures": {},
    "requireConfigFile": false,
    "babelOptions": {
      "configFile": babelConfigPath // 根据实际情况设置 Babel 配置文件的路径
    },
    "parser": "@babel/eslint-parser"
  },
  // "parser": "@babel/eslint-parser", // 指定eslint解析器
  "rules": {
    // 0 关闭 1 警告 2 错误
    "no-unused-vars": 2,
    "arrow-spacing": [
      // 箭头函数前后都要有空格()=>{}
      2,
      {
        "before": true,
        "after": true
      }
    ],
    "block-spacing": [0, "always"], // 强制在代码块中开括号前和闭括号后有空格
    "brace-style": [
      // 大括号风格要求
      0,
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "arrow-parens": ["error", "as-needed"],
    "comma-dangle": [0, "never"], // 逗号周围使用空格
    "comma-spacing": [
      0,
      {
        "before": false,
        "after": true
      }
    ],
    "eqeqeq": [2, "always"], // 使用===
    "indent": [
      // 强制使用一致的缩进
      2,
      2,
      {
        "SwitchCase": 2
      }
    ]
  },
  "overrides": [
    // 禁用files 文件被eslint检测
  ]
}
