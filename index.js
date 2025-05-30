var tl = gsap.timeline();
gsap.set(".a", { opacity: 1, y: 10 })

tl.from("#left",{
  width:0,
  ease:Expo.easeInOut,
  duration:1.5
})
from("#right",{
  width:0,
  ease:Expo.easeInOut,
  duration:1.5
})



