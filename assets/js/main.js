const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(nav =>{
    nav.addEventListener("click",()=>{
        document.querySelector(".nav-link.active").classList.remove("active");
        nav.classList.add("active");
    })
});