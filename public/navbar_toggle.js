function setUpEvents(){
    const menuToggle = document.querySelector('#hamburger-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
    const hamburgerNeeded = window.matchMedia('(max-width: 685px');
    const hamburgerNotNeeded = window.matchMedia('(min-width: 686px');

    if(hamburgerNeeded.matches){
        navbarLinks.classList.add('display--off');
    }
    
    menuToggle.addEventListener('click', ()=>{
        navbarLinks.classList.toggle('display--off');
    });
    
    hamburgerNotNeeded.addEventListener('change', (hamburgerNotNeeded)=>{
        if(hamburgerNotNeeded.matches) {
            navbarLinks.classList.remove('display--off');
        }
    });
    
    
    hamburgerNeeded.addEventListener('change', ()=>{
        navbarLinks.classList.add('display--off');
    });
}


window.onload = function(){
    setUpEvents();
}