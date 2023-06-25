import {lis, menuList, contClass, nextClick, animationDivs, element, backgroundClass, Up, largura, containerAnimation} from './variables/tagsMani.js'

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }
  })
})
const myObserverUp = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('showUp')
    }
  })
})
animationDivs.forEach((element) => myObserver.observe(element))
Up.forEach((element) => myObserverUp.observe(element))

lis.forEach(element => {
  var largura = window.innerWidth

  element.style.backgroundImage = "url(images/predio.jpg)"

  if(largura < 391){
    element.style.backgroundAttachment = ''
    element.style.backgroundSize = '250%'
  } else {
    element.style.backgroundAttachment = 'fixed'
    element.style.backgroundSize = 'cover'
  }
})

window.addEventListener('scroll', ()=> {
  var scrollPosition = window.pageYOffset /100
  //console.log(scrollPosition)
  element.style.transform = `scale(1.2) translateX(${scrollPosition}%)`
})
window.addEventListener('scroll', ()=> {
  var scrollPosition = window.pageYOffset /100 - 25
  var largura = window.innerWidth


  if(largura < 391){
    backgroundClass.style.transform = `scale(1.5) translateX(${scrollPosition -10}%)`
  } else {
    backgroundClass.style.transform = `scale(1.2) translateX(${scrollPosition}%)`
  }
})

window.addEventListener("resize", () =>{
  var largura = window.innerWidth
  console.log(largura)
})


menuList.forEach(op => {
    styleOfTag(op, 'mousemove', '', '.2s', "#f2f2f26b")
})



function styleOfTag(vary, event, m1, m2, m3, m4){
    vary.addEventListener(event, () => {
        vary.style.backgroundColor = m1
        vary.style.transition = m2
        vary.style.color = m3
        vary.style.border = m4
    })
}

menuList.forEach(op => {
    styleOfTag(op, 'mouseout', '', '1s', '')
})

contClass.forEach(as=> {
    styleOfTag(as, 'mousemove', "#0000008b", '1s', '', '')
});
contClass.forEach(as=> {
    styleOfTag(as, 'mouseout','', '1s', '')
});

nextClick.addEventListener('touchstart', () =>{
  nextClick.style.backgroundImage = 'url()'
})
nextClick.addEventListener('touchend', () =>{
  nextClick.style.backgroundImage = 'url(images/butao.png)'
})
if(largura < 321){
  nextClick.style.marginLeft = '145px'
}
nextClick.addEventListener('mousedown', () => {
  containerAnimation.style.filter = 'blur(5px)'
})
nextClick.addEventListener('mouseup', () => {
  containerAnimation.style.filter = 'blur(0)'
})