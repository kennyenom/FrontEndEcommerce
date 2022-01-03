// const productContainers =[...document.querySelectorAll(".deal-items")];
// const preBtn = [...document.querySelectorAll(".pre-btn")];
// const nxtBtn =[...document.querySelectorAll(".nxt-btn")];


// productContainers.forEach((item,i)=>{
//     let containerDimensions = item.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;

//     nxtBtn[i].addEventListener("click", () =>{
//         item.scrollLeft += containerWidth;
        
//     })
//     preBtn[i].addEventListener("click", () =>{
//         item.scrollLeft -= containerWidth;
        
//     })
    

// })

const scroll = document.querySelector(".scroll"); 
scroll.addEventListener("click",()=>{
    window.scroll({top:0});
    

});

window.addEventListener("scroll", () =>{
    window.pageYOffset>100
    ? (scroll.style.display = "block")
    : (scroll.style.display = "none");
});