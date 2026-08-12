// gsap.to('#box1',{
//   x:500,
//   y:300,
//   duration:8,
//   delay:2,
//   rotate:360,
//   // transform:`translate(100px,100px)`
//   borderRadius:`50%`,
//   backgroundColor:`aqua`
// })
// gsap.from('#box2',{
//   x:500,
//   y:200,
//   duration:8,
//   delay:2,
//   rotate:360,
//   // transform:`translate(100px,100px)`
//   borderRadius:`50%`,
//   backgroundColor:`green`
// })


// const t1=gsap.timeline();
// t1.to('#box1',{
//   x:500,
//   duration:8,
//   delay:2,
//   rotate:360,
//   // transform:`translate(100px,100px)`
//   borderRadius:`50%`,
//   backgroundColor:`aqua`
// })
// t1.from('#box2',{
//   x:500,
//   duration:8,
//   delay:2,
//   rotate:360,
//   // transform:`translate(100px,100px)`
//   borderRadius:`50%`,
//   backgroundColor:`green`
// })
// t1.to('#box3',{
//   x:500,
//   duration:8,
//   delay:2,
//   rotate:200,
//   // transform:`translate(100px,100px)`
//   borderRadius:`50%`,
//   backgroundColor:`pink`
// })



const tl2=gsap.timeline();
gsap.from('nav',{
  y:-200,
  opacity:0,
  duration:1.4
})
tl2.from('nav li',{
  y:-100,
  opacity:0,
  duration:1,
  stagger:0.5
})
tl2.from('nav .btn',{
  x: 100,
  opacity:0,
  duration:1
})