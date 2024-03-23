const nav = document.querySelector('nav')

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 60){
        nav.classList.add("scroll")
    }
    else{
        nav.classList.remove("scroll")
    }
    
})

const mobileNav = document.querySelector("nav.mobil-nav")
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 60){
        mobileNav.classList.add("scroll")
    }
    else{
        mobileNav.classList.remove('scroll')
    }
})