const form = document.querySelector('.signup-form')
const inp = document.getElementById('email')
const field = document.getElementById('field')
const background = document.querySelector('.background')
const imgCont = document.querySelector('.imgCont')
const questionOne = document.querySelector('.questionOne')
const questionTwo = document.querySelector('.questionTwo')
const questionThree = document.querySelector('.questionThree')

const subQuestionOne = document.querySelector('.subQuestionOne')
const subQuestionTwo = document.querySelector('.subQuestionTwo')
const subQuestionThree = document.querySelector('.subQuestionThree')

const arrowOne = document.querySelector('#img1')
const arrowTwo = document.querySelector('#img2')
const arrowThree = document.querySelector('#img3')

function disableNoneDivOne(tag, changedTag, arr){
    let cont = 0
    tag.addEventListener('click', () => {
        cont++
        console.log(cont)
        if(cont % 2 == 0){
            changedTag.style.display = 'block'
            tag.style.border = 'none'
            arr.setAttribute('src', '../images/arrowUp.svg')
        }
        if(cont % 2 != 0) {
            changedTag.style.display = 'none'
            tag.style.borderBottom = '1px solid #00000089'
            arr.setAttribute('src', '../images/arrowDown.svg')
        }
    })
}

function disableNone(tag, changedTag, arr){
    let cont = 1
    tag.addEventListener('click', () => {
        cont++
        console.log(cont)
        if(cont % 2 == 0){
            changedTag.style.display = 'block'
            tag.style.border = 'none'
            arr.setAttribute('src', '../images/arrowUp.svg')
        }

        if(cont % 2 != 0) {
            changedTag.style.display = 'none'
            tag.style.borderBottom = '1px solid #00000089'
            arr.setAttribute('src', '../images/arrowDown.svg')
        }
    })
}
disableNoneDivOne(questionOne, subQuestionOne, arrowOne)
disableNone(questionTwo, subQuestionTwo, arrowTwo)
disableNone(questionThree, subQuestionThree, arrowThree)

const testName = name => /^[a-zA-Z]{1,}$/.test(name)
field.value = '';

window.addEventListener('scroll', ()=> {
    var scrollPosition = window.scrollY/110
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

