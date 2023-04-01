var c=document.getElementById("count").innerText;
let main=document.getElementById("read-all");
let mess=document.querySelectorAll(".noti");
let reddot=document.querySelectorAll(".red-dot");

mess.forEach((element,i) =>{
    element.addEventListener("click",function(){
        if(element.classList.contains("read")!=true)
        {
            element.classList.add("read");
        }
        if(reddot[i].style.display!=="none")
        {
            reddot[i].style.display="none";
            c--;
            count.innerText=c;
        }
    })
});


main.addEventListener("click",function(){
    mess.forEach((ele,i)=>{
        ele.classList.add("read");
    }
    )
    reddot.forEach((el,i) => {
        el.style.display="none";
    })
    c=0;
    count.innerText=c;
})

