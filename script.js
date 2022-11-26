document.querySelector('nav button').addEventListener('click',()=>{
    document.querySelector('nav .second').classList.toggle('active')
})

window.addEventListener('scroll', count)

let productCount = document.querySelector('.product .count')
let customerCount = document.querySelector('.customer .count')
let membersCount = document.querySelector('.members .count')
let orderCount = document.querySelector('.order .count')

function count(){
    if(document.querySelector('#counter').offsetTop - pageYOffset <= 0.7 * window.innerHeight){
        setInterval(() => {
            productCount.innerHTML = productCount.innerHTML == 29000 ? 29000 : +productCount.innerHTML + 1450
            customerCount.innerHTML = customerCount.innerHTML == 3900 ? 3900 : +customerCount.innerHTML + 195
            membersCount.innerHTML = membersCount.innerHTML == 1800 ? 1800 : +membersCount.innerHTML + 90
            orderCount.innerHTML = orderCount.innerHTML == 7700 ? 7700 : +orderCount.innerHTML + 385
        }, 100);
        window.removeEventListener('scroll',count)
    }
}

