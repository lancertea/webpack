// 引入 css（同步加载）
import './style/style1.css'
import './style/style2.less'

import { sum } from './math'

const sumRes = sum(10, 20)
console.log('sumRes', sumRes)

// //引入第三方模块
// import _ from 'lodash'
// console.log(_.each);

//IgnorePligin(避免引入无用模块)
import moment from 'moment' //235.4k    58k
import 'moment/locale/zh-cn'  //手动引入中文包
moment.locale('zh-cn') //设置语言为中文
console.log('locale',moment.locale()) 
console.log('date',moment().format('ll'))  //获取日期


// 开启热更新之后的代码逻辑
if (module.hot) {
    //'./math'  监听范围
    module.hot.accept(['./math'], () => {
        const sumRes = sum(10, 30)
        console.log('sumRes in hot', sumRes)
    })
}


//引入图片
function insertImgElem(imgFile){
    const img =new Image()
    img.src=imgFile
    document.body.appendChild(img)
}
import imgFile1 from './img/1.png'
insertImgElem(imgFile1)
import imgFile2 from './img/2.png'
insertImgElem(imgFile2)


//引入动态数据 懒加载
setTimeout(()=>{
    //回顾vue  React 异步组件
    //定义chunk
    import('./dynamic-data.js').then(res=>{
        console.log(res.default.message)  //注意这里的default
        
    })
},1500)



