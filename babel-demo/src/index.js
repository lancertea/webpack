//import '@babel/polyfill'
//babel 自身解析出来是  require('@babel/polyfill'),但是不真的引入该模块，需要webpack

const sum = (a, b) => a + b


//babel-polyfill
// 新的 API
Promise.resolve(100).then(data => data);

// 新的 API
[10, 20, 30].includes(20)

//babel只解析语法，不关心API，不处理模块化（webpack）
// 语法，符合 ES5 语法规范


//babel-polyfill的问题
// 污染全局环境
// window.Promise1 = function() {}
// Array.prototype.includes1 = function () {}

// 使用方
// window.Promise = 'abc'
// Array.prototype.includes = 100
