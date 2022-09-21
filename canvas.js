let canvass = document.getElementById("Canvas")
let pocan = document.querySelector(".pocan")
let one1 = document.getElementById("one1")
document.getElementById("rantas").addEventListener("click",harekat);
let rantas = document.getElementById("rantas");
let ctx = canvass.getContext("2d");
let heightRatio = 1.5;
// canvass.height = pocan.offsetHeight
// canvass.width = pocan.offsetWidth
// let ctxxvasat = canvass.width/2
// let ctxyvasat = canvass.height/2
let ctxxvasat = 20;
let ctxyvasat = 670
let R = 10;
let X = 0;
let Y = 0;
let andaz = canvass.width/10
let xj = 1
let xjo = xj*40
let xjolo = 20
let xjol = xjo+xjolo
let dx = 15;
let dy = 15;
let barX = 20;
let barY = 20;
let barW = 20;
let barH = 20;
console.log(document.getElementById("testi").offsetWidth)
console.log(document.getElementById("testi").offsetHeight)

drawBall()





function harekat(){
    rantas.style.pointerEvents="none";
    let seti = setInterval(drawBall,8)
    setTimeout(() => {
        clearInterval(seti);
      }, "120")


      setTimeout(() => {
        harekat2()
      }, "400")
}



function harekat2(){
    let sett = setInterval(drawBall,8);
    setTimeout(() => {
        clearInterval(sett);
      }, "120")

      setTimeout(() => {
        harekat3()
      }, "400")
}



function harekat3(){
    let seti = setInterval(drawBall,8)
    setTimeout(() => {
        clearInterval(seti);
      }, "120")


      setTimeout(() => {
        harekat4()
      }, "400")
}



function harekat4(){
    let sett = setInterval(drawBall,8);
    setTimeout(() => {
        clearInterval(sett);
      }, "120")

      setTimeout(() => {
        harekat5()
      }, "400")
}



function harekat5(){
    let seti = setInterval(drawBall,8)
    setTimeout(() => {
        clearInterval(seti);
      }, "120")


      setTimeout(() => {
        harekat6()
      }, "400")
}



function harekat6(){
    let sett = setInterval(drawBall,8);
    setTimeout(() => {
        clearInterval(sett);
      }, "120")
      rantas.style.pointerEvents="painted";
}



function drawBall(){
    

    ctx.clearRect(0,0 , canvass.width , canvass.height);

    ctx.beginPath();
    ctx.arc(ctxxvasat ,ctxyvasat , R , 2* Math.PI,  false ); //320 , 400 , 20 (shoa) , 00  // x + w = rabete mesl y + h
    ctx.fillStyle = "#e68449";
    ctx.fill();

    
        let xj = 5;
        let xjo = xj*40
        let xjolo = 20
        let xjol = xjo+xjolo
    



    if(ctxxvasat<xjol){
        ctxxvasat+=3
    }


    if(ctxyvasat<350){
        ctxyvasat+=5
    }


//    if (  ctxxvasat + R>canvass.width  ctxxvasat - R<0){
//         dx = dx * - 1;
//    }

//     if (ctxyvasat + R>canvass.height   ctxyvasat - R < 0  ){
//         dy = dy * - 1;
//     }


//     ctxyvasat+=dy;
//     ctxxvasat+=dx;



}