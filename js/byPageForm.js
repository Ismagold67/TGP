const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';


//efeito de animação de entrada pela esqurda e direita
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add(animationClass)
      }
    })
  })

target.forEach((element) => myObserver.observe(element))
//

