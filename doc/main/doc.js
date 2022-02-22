const docCompLogo=document.querySelector(".doc-comp-logo-icn");
const compItem=document.querySelector(".doc-comp-item");
const compoClose=document.querySelector(".doc-comp-close");
const mainSpace=document.querySelector(".main-content-space");


docCompLogo.addEventListener("click",()=>{
    if(compItem.style.display==="flex"){
        compItem.style.display="none";
        docCompLogo.style.color="var(--cta1)";
        mainSpace.style.opacity="1";
        
    }else{
        docCompLogo.style.color="var(--cta2)";
        compItem.style.display="flex";
        mainSpace.style.opacity="0.5";
    }
})
compoClose.addEventListener("click",()=>{
    compItem.style.display="none";
    docCompLogo.style.color="var(--cta1)";
    mainSpace.style.opacity="1";
})

const docComp=document.querySelectorAll(".doc-components");

docComp.forEach(component=>{
    component.addEventListener("click",()=>{
        compItem.style.display="none";
        docCompLogo.style.color="var(--cta1)";
        mainSpace.style.opacity="1";
        
    })
})