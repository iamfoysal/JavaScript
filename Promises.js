

// javascript Promises

const data = new Promise (function(resolve , reject){
    setTimeout(function(){
        resolve('data completedly show after 5 seconds');
    }, 5000);
});


console.log(data);
