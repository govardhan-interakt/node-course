const add =(a,b)=>{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            resolve(a+b)

        },2000)
    })
}
/*add(1,4).then((sum)=>{
    console.log(sum)
    add(sum,8).then((sum2)=>{
        console.log(sum2)
    }).catch((e)=>{
        console.log(e)
    })
}).catch((e)=>{
console.log(e)
})*/


add(1,6).then((sum)=>{
    console.log(sum)
    return add (sum,3)

}).then((sum2)=>{
    console.log(sum2)
    return add (sum2,5)
}).then((sum3)=>{
    console.log(sum3)
    return add (sum3,-5)
}).then((sum4)=>{
    console.log(sum4)
    
})