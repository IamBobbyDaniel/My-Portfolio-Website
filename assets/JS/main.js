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
    sr.reveal('.about-img', {origin:'left', delay:400})
