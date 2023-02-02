document.addEventListener('DOMContentLoaded',()=>{
    const burgerbtn = document.querySelector('.burger-btn')
    const nav = document.querySelector('.nav')
    burgerbtn.addEventListener('click',()=>{
        burgerbtn.classList.toggle('openedBurger')
        nav.classList.toggle('openNav')
    })
})