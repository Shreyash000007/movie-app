console.log(`This is a PROMISE`);

let prom1=new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            console.log(`This Is console print`)
            resolve=("Harry")
        },3000);
    });
    prom1.then((value)=>
        {
            console.log(`Promise resolved with value: ${value}`)
        });
    prom1.catch((error)=>
        {
            console.log(`Promise rejected with error: ${error}`)
        })
