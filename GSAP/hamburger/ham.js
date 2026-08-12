let menu=document.querySelector('.nav i')
let cross=document.querySelector('#full i')
let t1=gsap.timeline();
t1.to('#full',{
  right:0,
  duration:1
})
t1.from('#full h4',{
  x:100,
  opacity:0,
  stagger:0.2
})
t1.from('#full i',{
  opacity:0,
})
t1.pause();
menu.addEventListener('click',function(){
  t1.play();
})
cross.addEventListener('click',function(){
  t1.reverse();
})