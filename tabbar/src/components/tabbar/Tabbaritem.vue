<template>
  <div class="tab-bar-item" @click="itemClick">
      <!-- 外面再套一个div防止连同相关行内表达式被整个替换不见 -->
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            //isActive:false
        }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!==-1   //查找当前活跃路由路径中是否存在path属性值
      },
      activeStyle(){
        if(this.isActive){
          return {color:this.activeColor};
        }
        else{
          return {};
        }
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path);
      }
    },
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'rgb(216, 30, 6)'
      }
    }
}
</script>

<style>
  .tab-bar-item{
    flex:1;
    text-align: center;
    /* 49最常用 */
    height:49px; 
    
    font-size:14px;
  }
  svg{
    width: 25px;
    height:25px;
  }
  .active{
      color:red
  }
</style>