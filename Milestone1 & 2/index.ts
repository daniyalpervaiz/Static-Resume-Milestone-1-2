let Show_Hide_Skills=document.getElementById("btn") as HTMLButtonElement
let Skills =document.getElementById("Skills") as HTMLElement
console.dir(Show_Hide_Skills);

Show_Hide_Skills.addEventListener("click",()=>{
    if(Skills.style.display==="none"){
        Skills.style.display="block"
        Show_Hide_Skills.innerHTML="Hide Skills"
       
    }else{
        Skills.style.display="none"
        Show_Hide_Skills.innerHTML="Show Skills"
        
    }
})