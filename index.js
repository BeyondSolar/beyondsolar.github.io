const toggleButton=document.getElementsByClassName('toggle_button')[0]
const navBar=document.getElementsByClassName('header-inner')[0]

toggleButton.addEventListener('click',()=>{
    navBar.classList.toggle('active')
})