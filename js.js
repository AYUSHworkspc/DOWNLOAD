var content= document.querySelector("#content");
var p= document.querySelector("p");
var count=0;
var progress=setInterval(function(){
    if(count==100){
        clearInterval(progress);
        p.style.opacity=100;
       
    }
    count++;
    content.style.width=count+"%";

},50)