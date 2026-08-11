const cursor=document.querySelector('.cursor');
//curssor follow
window.addEventListener('mousemove',(e)=>{
  gsap.to(cursor,{
    x:e.clientX,
    y:e.clientY,
    duration:0.3,
    ease:'power1.out',
  })
})

gsap.to(cursor,{
  scale:1.5,
  dusration:0.6,
  repeat:-1,
  yoyo:true,
  ease:'power1.inOut'
})