import {INCREMENT} from './mutation-types'

export default {
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
    }

