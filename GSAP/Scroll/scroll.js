 gsap.registerPlugin(ScrollTrigger);

 gsap.to('.box1',{
  rotate:360,
  duration:2,
  backgroundColor:'red'
 })
 gsap.to('.box2',{
  rotate:360,
  duration:2,
  backgroundColor:'black',
  scrollTrigger:{
    trigger:'.section2',
    start:'top center',
    end:'bottom top',
    markers:true,
    scrub:true
  }
 })

 gsap.to('.box3',{
  rotate:360,
  duration:2,
  backgroundColor:'green',
  scrollTrigger:{
    trigger:'.section3',
    start:'top center',
    end:'bottom top',
    markers:true,
    scrub:true
  }
 })

