import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import moduleA from './modules/moduleA'


Vue.use(Vuex)

//这一块不抽出去封装
const state={
    counter:100,
    students:[
        {name:"luffy",age:17},
        {name:"zoro",age:21},
        {name:"sanji",age:31},
        {name:"shenpin",age:50}
    ]
}
const store=new Vuex.Store({    //和路由的些许差别，一个store就好,单一数据源/单一状态树

    state,mutations,actions,getters,
    modules:{
        a:moduleA
    }
})

export default store;