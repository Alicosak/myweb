//Header toogle


let MenuBtn = document.getElementById("MenuBtn");

MenuBtn.addEventListener("click", function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

//Typing Effect

let typed = new Typed('.auto-input',{
    strings:[' Systems Analyst',' Support Technician',' IT Systems Operator',' Front-End Developer'],
    typeSpeed:80,
    backSpeed:80,
    backDelay:2000,
    loop:true,
})
