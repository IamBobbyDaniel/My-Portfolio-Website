function setUpEvents(){function e(){document.getElementById("nav-menu").classList.remove("show-menu")}((e,n)=>{const t=document.getElementById(e),s=document.getElementById(n);t&&s&&t.addEventListener("click",()=>{s.classList.toggle("show-menu")})})("nav-toggle","nav-menu"),document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",e)),window.addEventListener("scroll",function(){const e=document.getElementById("scroll-up");this.scrollY>=560?e.classList.add("show-scroll"):e.classList.remove("show-scroll")})}window.onload=function(){setUpEvents()};