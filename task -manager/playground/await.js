const add =(a,b)=>{
    return new Promise((resolve,reject)=>
    {

        setTimeout(()=>{
            if(a<0 || b<0){
                return reject('number should be positive')
            }
            resolve(a+b)

        },1000)
    })
}
const work =async()=>{
const sum =await add(1,-99)
const sum1 = await add(sum,50)
return sum1
}
work().then((result)=>{
console.log('result',result)
}).catch ((e)=>{
console.log('e',e)
})