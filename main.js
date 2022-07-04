"use strict";

const buttons = document.querySelectorAll(".btn");
const showValue = document.querySelector(".value");
const result = document.querySelector(".btn-result");
const reset = document.querySelector(".btn-reset");
const plus = document.querySelector(".btn-plus");
const delet = document.querySelector(".btn-del");
const label = document.querySelector(".label");
const x = document.querySelector(".btn-x");
const minus = document.querySelector(".btn-minus");
const div = document.querySelector(".btn-div");
const arr = [];

buttons.forEach((doc)=>{
    doc.addEventListener("click",(e)=>{
        showValue.value = showValue.value + doc.id;
        if(showValue.id == arr[0] || showValue.id == "="){
            label.style.display = "none";
        }
    })
});

function length(){
    return arr.length;
};

function lastone(){
    return showValue.value.length;
}

reset.addEventListener("click",(e)=>{
    showValue.value = null;
    label.textContent = "";
    arr.splice(0,length());
    console.log(arr)
});


plus.addEventListener("click",(e)=>{
    if(arr.length == 0){
    arr.push(showValue.value);
    arr.push("+");
    showValue.value = null;
    console.log(arr);
    }
    if(arr.length >= 2 && arr[1] == "+"){
        let result = Number(arr[0]) + Number(showValue.value);
        label.textContent = result;
        showValue.value = null;
        showValue.id = result;
        label.style.display = "block";
        arr.splice(0,length());
        arr.push(result,"+");
        console.log(arr)
    }
    if(arr.length >= 2 && arr[1] == "x"){
        let result = Number(arr[0]) * Number(showValue.value);
        label.textContent = result;
        showValue.value = null;
        showValue.id = result;
        label.style.display = "block";
        arr.splice(0,length());
        arr.push(result,"+");
        console.log(arr)
    }

    if(arr.length >= 2 && arr[1] == "-"){
        let result = Number(arr[0]) - Number(showValue.value);
        label.textContent = result;
        showValue.value = null;
        showValue.id = result;
        label.style.display = "block";
        arr.splice(0,length());
        arr.push(result,"+");
        console.log(arr)
    }

    if(arr.length >= 2 && arr[1] == "/"){
        let result = Number(arr[0]) / Number(showValue.value);
        label.textContent = result;
        showValue.value = null;
        showValue.id = result;
        label.style.display = "block";
        arr.splice(0,length());
        arr.push(result,"+");
        console.log(arr)
    }
});


x.addEventListener("click",(e)=>{
        if(arr.length >= 2 && arr[1] == "x"){
            let result = Number(arr[0]) * Number(showValue.value);
            label.textContent = result;
            showValue.value = null;
            showValue.id = result;
            label.style.display = "block";
            arr.splice(0,length());
            arr.push(result,"x");
            console.log(arr);
            return
        } arr.push(showValue.value);
        arr.push("x");
        showValue.value = null;
        console.log(arr);

        if(arr.length >= 2 && arr[1] == "+"){
            let result = Number(arr[0]) + Number(arr[2]);
            label.textContent = result;
            showValue.value = null;
            showValue.id = result;
            label.style.display = "block";
            arr.splice(0,length());
            arr.push(result,"x");
            console.log(arr)
        }

        if(arr.length >= 2 && arr[1] == "-"){
            let result = Number(arr[0]) - Number(arr[2]);
            label.textContent = result;
            showValue.value = null;
            showValue.id = result;
            label.style.display = "block";
            arr.splice(0,length());
            arr.push(result,"x");
            console.log(arr)
        }

        if(arr.length >= 2 && arr[1] == "/"){
            let result = Number(arr[0]) / Number(arr[2]);
            label.textContent = result;
            showValue.value = null;
            showValue.id = result;
            label.style.display = "block";
            arr.splice(0,length());
            arr.push(result,"x");
            console.log(arr)
        }
});


minus.addEventListener("click",(e)=>{
    if(arr.length == 0){
        arr.push(showValue.value);
        arr.push("-");
        showValue.value = null;
        console.log(arr);
        }
        if(arr.length >= 2 && arr[1] == "-"){
            let result = Number(arr[0]) - Number(showValue.value);
            label.textContent = result;
            showValue.value = null;
            showValue.id = result;
            label.style.display = "block";
            arr.splice(0,length());
            arr.push(result,"-");
            console.log(arr)
        }

        if(arr.length >= 2 && arr[1] == "x"){
            let result = Number(arr[0]) * Number(showValue.value);
            label.textContent = result;
            showValue.value = null;
            showValue.id = result;
            label.style.display = "block";
            arr.splice(0,length());
            arr.push(result,"-");
            console.log(arr)
        }

        if(arr.length >= 2 && arr[1] == "+"){
            let result = Number(arr[0]) + Number(showValue.value);
            label.textContent = result;
            showValue.value = null;
            showValue.id = result;
            label.style.display = "block";
            arr.splice(0,length());
            arr.push(result,"-");
            console.log(arr)
        }

        if(arr.length >= 2 && arr[1] == "/"){
            let result = Number(arr[0]) / Number(showValue.value);
            label.textContent = result;
            showValue.value = null;
            showValue.id = result;
            label.style.display = "block";
            arr.splice(0,length());
            arr.push(result,"-");
            console.log(arr)
        }
});

div.addEventListener("click",(e)=>{
        if(arr.length >= 2 && arr[1] == "/"){
            let result = Number(arr[0]) / Number(showValue.value);
            label.textContent = result;
            showValue.value = null;
            showValue.id = result;
            label.style.display = "block";
            arr.splice(0,length());
            arr.push(result,"/");
            console.log(arr);
            return
        }arr.push(showValue.value);
        arr.push("/");
        showValue.value = null;
        console.log(arr);

        if(arr.length >= 2 && arr[1] == "+"){
            let result = Number(arr[0]) + Number(showValue.value);
            label.textContent = result;
            showValue.value = null;
            showValue.id = result;
            label.style.display = "block";
            arr.splice(0,length());
            arr.push(result,"/");
            console.log(arr)
        }

        if(arr.length >= 2 && arr[1] == "x"){
            let result = Number(arr[0]) * Number(arr[2]);
            label.textContent = result;
            showValue.value = null;
            showValue.id = result;
            label.style.display = "block";
            arr.splice(0,length());
            arr.push(result,"/");
            console.log(arr)
        }

        if(arr.length >= 2 && arr[1] == "-"){
            let result = Number(arr[0]) - Number(showValue.value);
            label.textContent = result;
            showValue.value = null;
            showValue.id = result;
            label.style.display = "block";
            arr.splice(0,length());
            arr.push(result,"/");
            console.log(arr)
        }
});

result.addEventListener("click",(e)=>{
    if(arr.length >= 2 && arr[1] == "+"){
        let result = Number(arr[0]) + Number(showValue.value);
        label.textContent = result;
        showValue.value = null;
        showValue.id = "=";
        label.style.display = "block";
        arr.splice(0,length());
        console.log(arr)
    }
    if(arr.length >= 2 && arr[1] == "x"){
        let result = Number(arr[0]) * Number(showValue.value);
        label.textContent = result;
        showValue.value = null;
        showValue.id = "=";
        label.style.display = "block";
        arr.splice(0,length());
        console.log(arr)
    }
    if(arr.length >= 2 && arr[1] == "/"){
        let result = Number(arr[0]) / Number(showValue.value);
        label.textContent = result;
        showValue.value = null;
        showValue.id = "=";
        label.style.display = "block";
        arr.splice(0,length());
        console.log(arr)
    }
    if(arr.length >= 2 && arr[1] == "-"){
        let result = Number(arr[0]) - Number(showValue.value);
        label.textContent = result;
        showValue.value = null;
        showValue.id = "=";
        label.style.display = "block";
        arr.splice(0,length());
        console.log(arr)
    }
})

delet.addEventListener("click",(e)=>{
    let xd = showValue.value.toString();
    showValue.value = xd.slice(0,lastone() - 1)
    
})