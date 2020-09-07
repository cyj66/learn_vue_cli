
export default {
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
    }