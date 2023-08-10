const form = document.querySelector('.signup-form')
const inp = document.getElementById('email')
const field = document.getElementById('field')
const background = document.querySelector('.background')
const imgCont = document.querySelector('.imgCont')

const testName = name => /^[a-zA-Z]{1,}$/.test(name)
field.value = '';

window.addEventListener('scroll', ()=> {
    var scrollPosition = window.scrollY/100
    console.log(scrollPosition)
    imgCont.style.transform = `scale(1.2) translateX(${scrollPosition}%)`
})

inp.addEventListener('keyup', event => {

    const isAvalidUsername = event.target.value
    const test = isAvalidUsername.includes('@')
                 && isAvalidUsername.includes('.com')
                 && (isAvalidUsername.includes('gmail') || isAvalidUsername.includes('outlook') || isAvalidUsername.includes('hotmail'))
    if(!test){
        inp.style.border = '2px solid red'
    } else {
        inp.style.border = '2px solid #fff'
    }
} )

form.name.addEventListener('keyup', event => {

    const validName = event.target.value.trim()

    if(validName === ''){
        form.name.style.border = '2px solid red'
    } else {
      return  form.name.style.border = '2px solid #fff'
    }
})

form.lastName.addEventListener('keyup', event => {

    const validName = event.target.value.trim()

    if(validName === ''){
        form.lastName.style.border = '2px solid red'
    } else {
      return  form.lastName.style.border = '2px solid #fff'
    }
})

