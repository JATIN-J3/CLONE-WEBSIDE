let crsr =document.querySelector(".cursor")
let crsr1 =document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
crsr.style.left=dets.x+"px"

crsr.style.top=dets.y+"px"  
crsr1.style.left=dets.x -150+"px"

crsr1.style.top=dets.y-150+"px" 

})


gsap.to("#nav",
{
backgroundColor:"black",
duration:.5,
height:"120px",
scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    start:"top -10%",
    end:"top -11%",
    scrub:2,
}

})

gsap.to("#main",{
backgroundColor:"#000",

scrollTrigger:{
trigger:"#main",
scroller:"body",
start:"top -25%",
end:"top -70%",
scrub:2
}

})
let h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
elem.addEventListener("mouseenter",function(){
    crsr.style.scale=4,
    crsr.style.border="0.1px solid white "
    crsr.style.backgroundColor="transparent"



})
elem.addEventListener("mouseleave",function(){
    crsr.style.scale=1,
    crsr.style.border="0px solid  #95C11E"
    crsr.style.backgroundColor="#95C11E"
})


})

gsap.from("#about-us img,#about-us-con",{
y:50,
opacity:0,

duration:3,
scrollTrigger:{
trigger:"#about-us",
scroller:"body",
start:"top 60%",
end:"top 60%",
scrub:2

}

})

gsap.to("#pimg1",{
    y:40,
    x:40,
    duration:1,
    scrollTrigger:{
        trigger:".page3>p",
        scroller:"body",
        start:"top 60%",
        end:"top 60%",
        scrub:5
        
        }

})
gsap.to("#pimg2",{
    y:-40,
    x:-40,
    duration:1,
    scrollTrigger:{
        trigger:".page3>p",
        scroller:"body",
        start:"top 60%",
        end:"top 60%",
        scrub:5
        
        }

})
gsap.from(".page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})



let h4all2=document.querySelectorAll("#f2 h4")
h4all2.forEach(function(elem){
elem.addEventListener("mouseenter",function(){
    crsr.style.scale=4,
    crsr.style.border="0.1px solid white "
    crsr.style.backgroundColor="transparent"



})
elem.addEventListener("mouseleave",function(){
    crsr.style.scale=1,
    crsr.style.border="0px solid  #95C11E"
    crsr.style.backgroundColor="#95C11E"
})


})