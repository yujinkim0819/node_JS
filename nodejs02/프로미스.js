const condition = true; // true면 reslove, false면 reject
// const condition = false // true면 reject, false면 reslove

const promise = new Promise((resolve,reject)=>{
    if(condition){
        resolve('성공');
    } else {
        resolve('실패');
    }
});

promise
.then((message)=>{
    console.log(message);
})
.catch((err)=>{
    console.error(err);
})
.finally(()=> {
    console.log('무조건');
});
