import Vue from 'vue'
import App from './App'
import axios from 'axios';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

//1.axios基本使用
//全局配置，共用的，也可以写在某个axios里
axios.defaults.baseURL="http://152.136.185.210:8000/api/z8"  
axios.defaults.timeout=5000     //时间限制

axios({
  //url:'http://152.136.185.210:8000/api/z8/home/multidata', //有公共的URL就不用写这么长了
  //baseURL="http://152.136.185.210:8000/api/z8"
  url:'/home/multidata',
  method:'get'       //老师的服务器设置了只能用get
}).then(res=>console.log(res));                 //axios本身返回的就是promise，内部有操作，可以直接用then
//axios.get(...)也有此种格式

axios({
  url:'/home/data',
  params:{                //专门针对get请求的数据拼接，post不能用
    type:'sell',
    page:2
  },
}).then(res=>console.log(res));

//2.axios发送并发请求
axios.all([axios({       //类似promise.all
  url:'/home/multidata'
}),axios({
  url:'/home/data',
  params:{                //专门针对get请求的数据拼接
    type:'pop',
    page:1
  },
})])
// .then(res=>console.log(res));
.then(axios.spread((res1,res2)=>{       //可以直接展开
  console.log(res1);
  console.log(res2);
}))


//3.前面的都是使用全局的axios和对应的配置进行网络请求，接下来用的是创建axios实例
//根据不同的配置创建实例
const instance1=axios.create({
  baseURL:"http://152.136.185.210:8000/api/z8",
  timeout:5000
})
instance1({
  url:'/home/multidata'
}).then(res=>console.log(res));

instance1({
  url:'/home/data',
  params:{              
    type:'pop',
    page:1
  },
}).then(res=>console.log(res))

//4.封装request模块
import {request} from './network/request'
//方法一
// request({
//   url:'home/multidata'
// },res=>console.log(res)
// ,err=>console.log(err))

//方法二
// request({
//   baseConfig:{
//     url:'home/multidata'
//   },
//   success:res=>console.log(res),
//   failure:err=>console.log(err)
// })

//方法三
request({
  url:'home/multidata'
}).then(res=>console.log(res))
.catch(err=>console.log(err))