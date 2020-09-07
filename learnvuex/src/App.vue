<template>
  <div id="app">
    <h2>-------modules---------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updataName">修改名字</button>
    <!-- 子模块的getters不用加a -->
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>
    
    <h2>-----APP------</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{message}}</h2>
    <!-- 不建议这么改,要修改数据的话不可以直接绕过mutation-->
    <!-- <button @click="$store.state.counter++">+</button>   
    <button @click="$store.state.counter--">-</button> -->
    <button @click="add">+</button>   
    <button @click="sub">-</button>
    <button @click="addn(5)">+5</button>
    <button @click="addn(10)">+10</button>
    <button @click="addstu">添加学生</button>
    <button @click="updateInfo">修改名字</button>


    <h2>------getters-----</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgestu(30)}}</h2>

    <h2>-----HELLOVUEX------</h2>
    <hellovuex></hellovuex>



  </div>
</template>

<script>
import Hellovuex from './components/Hellovuex'
import {INCREMENT} from './store/mutation-types'
export default {
  name: 'App',
  components:{
    Hellovuex
  },
  data(){
    return {
      message:"我是APP组件"
    }
  },
  methods:{
    add(){
      this.$store.commit(ICREMENT);    //必须通过commit到mutation进行修改
    },
    sub(){
      this.$store.commit('decrement');
    },
    addn(n){
      //1.普通提交风格，n是对应值
      //this.$store.commit('incrementn',n)  //可以携带参数/载荷
      //2.对象提交风格,n是对象
      this.$store.commit({
        type:'incrementn',
        n
      })
    },
    addstu(){
      const stu={name:"franky",age:68};
      this.$store.commit('addstu',stu);  //可以携带参数/载荷,和mutation中的名字可以一样
    },
    updateInfo(){
      // this.$store.dispatch('aUpdateInfo',{
      //   message:'我是信息',
      //   success:()=>{
      //     console.log('里面已完成');
      //   }
      this.$store.dispatch('aUpdateInfo','我是信息').then(     //接住返回的Promise
        res=>{
          console.log('里面已完成');
          console.log(res);
        }
      )    
    },
    updataName(){
      this.$store.commit('updateName','lisi')
    },
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  },
  // computed:{    放在getters里一起改
  //   more20stu(){
  //     return this.$store.state.students.filter(s=>s.age>=20);
  //   }
  // }
}
</script>

<style>

</style>
