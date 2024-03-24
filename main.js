const nav = document.querySelector('nav.desktop-nav')

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 60){
        nav.classList.add("scroll")
    }
    else{
        nav.classList.remove("scroll")
    }
    
})

const mobileNav = document.querySelector("nav.mobile-nav")
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 60){
        mobileNav.classList.add("scroll")
    }
    else{
        mobileNav.classList.remove('scroll')
    }
})



const menuIcon = document.querySelector('.menu-icon')
const closeIcon= document.querySelector('.mobile-menu-container .close-icon')
const mobileMenuContainer= document.querySelector('.mobile-menu-container')

menuIcon.addEventListener("click", ()=>{
    console.log('object');
    mobileMenuContainer.classList.add("active")
  

})
closeIcon.addEventListener("click", ()=>{
    mobileMenuContainer.classList.remove("active")
    

})