const modalClose=document.querySelectorAll(".modal-close");
const modalSampleBtn=document.querySelector(".sample-modal-btn");
const modalContainer=document.querySelector(".modal-container");
modalClose.forEach(modalClose=>{
    modalClose.addEventListener("click",()=>{
        modalContainer.style.display="none";
    })
})






const sampleToastBtn=document.querySelectorAll(".sample-toast-btn");
const toast=document.querySelector(".toast");
const toastClose=document.querySelectorAll(".toast-close");
const toastClr=document.querySelector(".toast-yellow");
sampleToastBtn.forEach(btn=>{
    btn.addEventListener("click",()=>{
        toast.style.display="block";
        toastClr.className=btn.dataset.clr;
        setTimeout(()=>toast.style.display="none",4000)
    })
})
toastClose.forEach(toastClose=>toastClose.addEventListener("click",()=>toast.style.display="none"));


const ratingStars=document.querySelectorAll(".rating-star-icn");
const ratingDisplay=document.querySelector(".rating-example-display");
const ratingArr=[...ratingStars];
ratingArr.forEach((star,id)=>{
        star.addEventListener("click",()=>{
        ratingDisplay.innerText=`You gave ${id+1} rating out of 5`;
        if(ratingStars[id].style.color==="gold"){
            for(let i=id+1;i<=ratingArr.length;i++){ 
                ratingStars[i].style.color="white"
            }
        }else{
            for(let i=0;i<=id;i++){
                ratingStars[i].style.color="gold"; 
            }
        }
    })
})