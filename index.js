let random=Math.floor(Math.random()*6)+1;
var randomdice=`dice${random}.png`;
var randomimages="images/"+randomdice;
let clic=document.querySelector(".img1").setAttribute("src",`${randomimages}`)

let rand=Math.floor(Math.random()*6)+1;
var randdice=`dice${rand}.png`;
var randimages="images/"+randdice;
let cl=document.querySelector(".img2").setAttribute("src",`${randimages}`)

if(random > rand)
{
    document.querySelector("h2").innerHTML="player 1 won"
}
else if(random<rand){
    document.querySelector("h2").innerHTML="player 2 won"
}
else{
    document.querySelector("h2").innerHTML="draw"
}