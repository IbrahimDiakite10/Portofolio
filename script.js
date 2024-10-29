
 const body = document.querySelector("body"),
 toggleSwitch=document.getElementById("toggle-swith");
 toggleSwitch.addEventListener("click",()=>{
    body.classList.toggle("dark");

 });

 var typingEffet = new Typed(".typedText",{
   strings:["Designeur", "Codeur", "Developpeur"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
 });  

 const sr= ScrollReveal({
    origin: 'top',
    distnce: "80px",
    duration:  2000,
     reset: true,
 });
 sr.reveal(".featured-name",{delay:100});
 sr.reveal(".text-info",{delay:200});
 sr.reveal(".text-btn",{delay:200});
 sr.reveal(".social_icons",{delay:200});
 sr.reveal(".feature-image",{delay:320});

 sr.reveal(".projet-box",{interval:200});
 sr.reveal(".top-header",{});
 const strLeft = ScrollReveal({
    origin:"left",
    distnce:"80px",
    reset:true,
    duration:2000,
 })
 strLeft.reveal(".about-info",{ delay: 100});
 strLeft.reveal(".contact-info",{ delay: 100});

 const strRight = ScrollReveal({
    origin:"left",
    distnce:"80px",
    reset:true,
    duration:2000,
 })
 strRight.reveal(".compt",{ delay: 100});
 strRight.reveal(".compt-box",{ delay: 100});


 const sections= document.querySelectorAll(".section[id]");
 function scollActive(){
    const scrollY = window.scrollY;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        } else{
            document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        
        }
 });
}
window.addEventListener("scroll", scollActive);