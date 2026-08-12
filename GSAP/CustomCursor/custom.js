<<<<<<< HEAD
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
=======
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
>>>>>>> ed13a2f29a80f1e3fc5979ca3f10c6c6cf4c5043
})