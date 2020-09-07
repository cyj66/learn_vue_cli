export default {
     //类似计算属性,可以进行筛选全局数据的筛选,必须要有参数state
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
}