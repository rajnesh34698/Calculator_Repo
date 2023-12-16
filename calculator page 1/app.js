function ques(value){
    document.getElementById("user").value+=value;
}
function inc(){
inp.value++;
}
function dec(){
    inp.value--;
    }
let equal=document.querySelector("#equal");
let clr=document.querySelector("#clear");
let inp=document.querySelector("#user");
equal.addEventListener('click',function(){
    inp.value=eval(inp.value);
})

clr.addEventListener('click',function(){
    inp.value="";
})
let del=document.querySelector("#del");
del.addEventListener('click',function(){
    inp.value=inp.value.pop();
})
