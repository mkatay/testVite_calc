import './style.css'
//import javascriptLogo from './javascript.svg'
//import viteLogo from '/vite.svg'
import { calc} from './calc.js'
console.log('main')

/*const handleClick=(e)=>{
    let resultContent=document.querySelector('.result').textContent
    document.querySelector('.result').textContent =calc(resultContent,e.target.textContent)
  
  }*/
let resultBox=document.querySelector('.result')

//delegálás-egyetlen helyen íratkozunk fel az eseményre:
document.querySelector('.calc').addEventListener('click',(e)=>{
    console.log(e.target)
    if(e.target.classList.contains('box')){
        let result=resultBox.textContent
        resultBox.textContent =calc(result,e.target.textContent)
    }
    
})
//vagy:minden egyes box-nál felíratkozunk az eseményre:
/*Array.from(document.querySelectorAll('.box')).map(obj=>obj.addEventListener('click',(e)=>{
    let result=resultBox.textContent
    resultBox.textContent =calc(result,e.target.textContent)
})
)*/
