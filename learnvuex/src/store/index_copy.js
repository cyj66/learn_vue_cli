import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutation-types'

Vue.use(Vuex)

const moduleA={
    state:{
        name:"zhangsan"
    },
    getters:{
        fullname(state){
            return state.name+'1111';
        },
        fullname2(state,getters){
            return getters.fullname+'2222';
        },
        fullname3(state,getters,rootState){    //可以有第三个参数，表示取得第一级的state
            return getters.fullname2+rootState.counter;
        }

    },
    mutations:{
        updateName(state,payload){
            state.name=payload;
        }
    },
    actions:{
        aUpdateName(context){
            setTimeout(()=>{
                context.commit('updateName','wangwu')
            },1000)
        }
    },
    modules:{

    }
}
const store=new Vuex.Store({    //和路由的些许差别，一个store就好,单一数据源/单一状态树
    state:{
        counter:100,
        students:[
            {name:"luffy",age:17},
            {name:"zoro",age:21},
            {name:"sanji",age:31},
            {name:"shenpin",age:50}
        ]
    },
    //写mutation可以用常量表示，有助于减少错误
    mutations:{
        [INCREMENT](state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        incrementn(state,payload){
            state.counter+=payload.n;
        },
        addstu(state,stu){    //名字可以一样
            state.students.push(stu);
        },
        updateInfo(state){
            state.students[3].name='coderwhy'
        }
    },
    //异步操作
    actions:{
        // aUpdateInfo(context,payload){    //context上下文
        //     setTimeout(()=>{
        //         context.commit('updateInfo');
        //         console.log(payload.message);
        //         payload.success();
        //     },1000)
        // } 
        aUpdateInfo(context,payload){    //context上下文,相当于$store
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    context.commit('updateInfo');   //提交到mutation
                    console.log(payload);
                    console.log(context);
                    resolve('11111');
                },1000)
            }) 
        }         
    },
    getters:{    //类似计算属性,可以进行筛选全局数据的筛选,必须要有参数state
        powerCounter(state){
            return state.counter*state.counter;    //不用加this
        },
        more20stu(state){
            return state.students.filter(s=>s.age>=20);
        },
        more20stuLength(state,getters){
            return getters.more20stu.length;
        },
        moreAgestu(state){    //除了state和getters，不接收其他参数
            return function(age){    //传参，可以return一个函数
                return state.students.filter(s=>s.age>age);
            }
        }
        //可写为连续箭头函数 
        //moreAgestu:state=>age=>state.students.filter(s=>s.age>age)
    },
    modules:{
        a:moduleA
    }
})

export default store;