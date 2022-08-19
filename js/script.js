
var myBody = document.body;
var derk = document.querySelector(".derkMode");
derk.addEventListener("click" , ()=>{
    // console.log(derk);
    myBody.classList.toggle('derk');
});

var myNum = document.querySelectorAll(".give");
var myClear = document.querySelector(".clear");
var myLastClear = document.querySelector(".lastClear");
var myEqual = document.querySelector(".equal");
// var myResult = document.querySelectorAll(".result");
var myResult = document.querySelector(".result");

myNum.forEach((btn)=>{
    btn.addEventListener("click",(attr)=>{
        myResult.value += attr.target.value;
        console.log(myResult.value);
    })
})

myEqual.addEventListener("click",()=>{
    myResult.value = eval(myResult.value);
})

myLastClear.addEventListener("click",()=>{
    myResult.value = myResult.value.slice(0,-1);
    
})

myClear.addEventListener("click",()=>{
    myResult.value = "";
})




// myNum.forEach((btn)=>{
//     btn.addEventListener("click",(attr)=>{
//         myResult.forEach((e)=>{
//             e.value += attr.target.value;
//         })
//         console.log(myResult.value);
//     })
// })

// myEqual.addEventListener("click",()=>{
//     myResult.forEach((e)=>{
//         e.value = eval(e.value);
//     })
// })

// myLastClear.addEventListener("click",()=>{
//     myResult.forEach((e)=>{
//         e.value =  e.slice(0,-1);
//         console.log( e.slice(0,-1))
//     })
    
//     // console.log(myResult.pop());
// })