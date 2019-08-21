// const left = $(".display-left");
// const right = $(".display-right");
// const slides = $(".slideImg");
// const title = $("#ProgramName");

// let slide = 1;
// showDivs(slide);

// function plusDivs(n) {
//   showDivs(slide += n);
// }

// function showDivs(n) {
//     if(n>slides.length){
//         slide = 1;
//     }
//     if(n<1){
//         slide = slides.length
//     }
//     for(let i = 0; i<slides.length;i++){
//         console.log(slides[i])
//         $(slides[i]).addClass("hide")
//     }
//     $(slides[slide-1]).removeClass("hide")
//     title.text($(slides[slide-1]).attr("data-program"))
// }

// left.on("click", ()=>{
//     plusDivs(-1);
// });
// right.on("click", ()=>{
//     plusDivs(1);
// });