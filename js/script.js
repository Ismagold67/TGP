import {lis, menuList, contClass, nextClick, animationDivs, element, backgroundClass, Up, largura, containerAnimation,p1, bigLogo, menuMobile, space_logo, space_logoH2, close, like, l1, detachedPosts, recPositionPost, allPost, recPosition, recHeightPost, eff, tImg, team, knowYouTeam, netAbout, foot, carrossel, closeDiv, arrowLeft, arrowRight, control, non, contador} from './variables/tagsMani.js'


eff.forEach(ele => {
  arrowLeft.style.display = 'none'
  contador.style.display = 'none'

  ele.addEventListener('click', () =>{
    
    let cont = 0;
    function updateCont(){
      contador.textContent = cont
    }

    team.style.display = 'none'
    foot.style.display = 'none'
    netAbout.style.display = 'none'
    knowYouTeam.style.display = 'none'
    carrossel.style.display = 'block'
    arrowLeft.style.display = 'none '

    control.forEach(controls => {
      controls.addEventListener('click', () => {
        const isLeft = controls.classList.contains('arrow-left')
    
        if(isLeft === false){
          cont++
          updateCont()
        }
        if(isLeft){
          cont--
          updateCont()
        }
        if(cont == 0){
          arrowLeft.style.display = 'none'
        } else{
          arrowLeft.style.display = 'block'
        }

        if(cont == 5){
          arrowRight.style.display = 'none'
        } else{
          arrowRight.style.display = 'block'
        }
        

        tImg[cont].scrollIntoView({
          inline: "center",
          behavior: "smooth"
        })
      })
    })
  })
  closeDiv.addEventListener('click', () => {
    team.style.display = 'flex'
    foot.style.display = 'flex'
    netAbout.style.display = 'flex'
    knowYouTeam.style.display = 'flex'
    carrossel.style.display = 'none'
})
})


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
  console.log(scrollPosition)
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
nextClick.addEventListener('click', () => {
  menuMobile.style.display = 'block'
  nextClick.style.opacity = '0'
  nextClick.style.transition = '1s'
  space_logo.style.transition = '1s'
  space_logo.style.marginLeft = '80px'
  space_logo.style.opacity = '0'
  space_logoH2.style.opacity = '0'
  bigLogo.style.transition = '1s'
  p1.style.transition = '1s'
  bigLogo.style.opacity = '0'
  p1.style.opacity = '0'

})
close.addEventListener('click', () => {
  menuMobile.style.display = 'none'
  nextClick.style.opacity = '1'
  space_logo.style.opacity = '1'
  space_logoH2.style.opacity = '1'
  space_logoH2.style.marginLeft = '-150px'
  nextClick.style.marginLeft = '200px'

  bigLogo.style.opacity = '1'
  space_logo.style.marginLeft = '25px'
  p1.style.opacity = '1'
})

like.forEach(element => {
  element.addEventListener('click', () => {
    l1.forEach(l1 => {
      var cont = parseInt(l1.textContent) + 1
      if(cont % 2 ==! 0){
      cont = parseInt(l1.textContent) + 1
      l1.textContent = `${cont}`
      element.setAttribute('src', 'images/posCurtida.png') || element.setAttribute('src', '../images/posCurtida.png')
      element.style.transition = '0.1s'
      element.classList.add('likeAnim')
    } 
    if(cont % 2 == 0){
      cont = parseInt(l1.textContent) - 1
      l1.textContent = `${cont}` 
      element.classList.remove('likeAnim')
      element.setAttribute('src', 'images/curtida.png') || element.setAttribute('src', '../images/curtida.png')
      element.style.transition = '0.1s'
      element.style.transform = 'scale(1.1)'
    }
    
    })
  })
})

detachedPosts.addEventListener('click', () => {
  recPositionPost.forEach(ele => {
    ele.style.display = 'none'
  })
  recHeightPost.style.height = '1500px'
  recPosition.style.height = '1700px'

})
allPost.addEventListener('click', () => {
  recPositionPost.forEach(ele => {
    ele.style.display = 'flex'
  })
  recHeightPost.style.height = '2200px'
  recPosition.style.height = '2500px'

})





