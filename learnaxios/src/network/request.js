import axios from 'axios'

//方式一
// export function request(config,success,failure){


//     //1.创建axios实例
//     const instance=axios.create({
//         baseURL:"http://152.136.185.210:8000/api/z8",
//         timeout:5000
//     })
//     //2.发送真正的网络请求
//     instance(config)
//     .then(
//         res=>{
//             //console.log(res);
//             success(res);
//         }
//     )
//     .catch(
//         err=>{
//             //console.log(err);
//             failure(err);
//         }
//     )
// }

 //方式二
//  export function request(config){

//     //1.创建axios实例
//     const instance=axios.create({
//         baseURL:"http://152.136.185.210:8000/api/z8",
//         timeout:5000
//     })

//     //2.发送真正的网络请求
//     instance(config.baseConfig)
//     .then(
//         res=>{
//             //console.log(res);
//             config.success(res);
//         }
//     )
//     .catch(
//         err=>{
//             //console.log(err);
//             config.failure(err);
//         }
//     )
// }

//方式三
// export function request(config){

//     return new Promise((resolve,reject)=>{
//             //1.创建axios实例
//         const instance=axios.create({
//             baseURL:"http://152.136.185.210:8000/api/z8",
//             timeout:5000
//         })

//         //2.发送真正的网络请求
//         instance(config)
//         .then(
//             res=>{resolve(res)}
//         )
//         .catch(
//             err=>{reject(err)}
//         )
//     })
    
// }

//方式四
export function request(config){
        //1.创建axios实例
        const instance=axios.create({       //axios本身返回的就是promise
            baseURL:"http://152.136.185.210:8000/api/z8",
            timeout:5000
        })

        //2.axios拦截器

        //2.1 请求拦截
        instance.interceptors.request.use(config=>{
            console.log(config);

            //请求拦截的作用：
            //可以拦截一些不符合服务器要求的信息，还可以在每次发送网络请求时显示一个请求图标
            //也可以在某些网络请求中要求必须携带某些特殊信息（登录的token）
            return config     //拦截完得还回去，否则会丢失数据
           
        },err=>console.log(err))

        //2.2 响应拦截
        instance.interceptors.response.use(res=>{
            console.log(res);
            return res.data   //拿到里面的data就够了
        },err=>{
            console.log(err);
        })

        //3.发送真正的网络请求
        return instance(config)    
    
}