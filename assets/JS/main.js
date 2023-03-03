/*====== SHOW MENU======*/ 
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>  {
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu ( 'nav-toggle', 'nav-menu' )

/*====== REMOVE MENU MOBILE ======*/ 
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*====== SCROLL SECTIONS ACTIVE LINK ======*/ 
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.OffsetTop - 50
//         sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)

    const li=document.querySelectorAll(".nav-item");
    const sec=document.querySelectorAll("section");

    function activeMenu(){
        let len=sec.length;
        while(--len && window.scrollY + 97 < sec[len].offsetTop){}
        li.forEach(ltx => ltx.classList.remove("active-link"));
        li[len].classList.add("active")
    }
    activeMenu();
    window.addEventListener("scroll", activeMenu);


/*====== SERVICES MODAL ======*/
const modalViews = document.querySelectorAll('.services-modal'),
      modalBtns = document.querySelectorAll('.services-button'),
      modalCloses = document.querySelectorAll('.services-modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
        })
      })

      modalCloses.forEach((modalClose) => {
        modalClose.addEventListener('click', () =>{
            modalViews.forEach((modalView) =>{
                modalView.classList.remove('active-modal')
            })
        })
      })

/*====== SHOW SCROLL UP ======*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)

/*====== SCROLL REVEAL ANIMATION ======*/ 
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
})

/*SCROLL HOME*/ 
sr.reveal('.home-data', {})
sr.reveal('.home-scroll', {delay:200})
sr.reveal('.home-img', {origin:'right', delay:400})

/*SCROLL ABOUT*/
sr.reveal('.about-img', {origin:'left',delay:500})
sr.reveal('.about-description-title', {delay:300})
sr.reveal('.about-text', {delay:500})
sr.reveal('.about-button', {delay:600})

/*SCROLL SKILLS*/ 
sr.reveal('.skills-subtitle', {})
sr.reveal('.skills-name', {distance: '20px', delay:50, interval: 100})
sr.reveal('.skills-img', {delay:400})



/*SCROLL SIDE PROJECTS*/ 
sr.reveal('.s-p-image', {delay:100, interval: 200})
sr.reveal('.side-project-button', {delay:200})

/*SCROLL SIDE PROJECTS*/ 
sr.reveal('.services-data', {delay:200})

/*SCROLL CONTACT ME */ 
sr.reveal('.contact-container', {delay:200})

/*SCROLL CONTACT*/ 
sr.reveal('.contact-info-title', {delay:100})
sr.reveal('.contact-info-subtitle', {delay:200})
sr.reveal('.contact-info-links', {delay:200, interval: 200})